'use client';

import { useEffect } from 'react';

interface MathRendererProps {
  children: React.ReactNode;
}

interface WindowWithBlogViz extends Window {
  loadSensorPositions?: () => void;
  updateVisualization?: () => void;
}

export default function MathRenderer({ children }: MathRendererProps) {
  useEffect(() => {
    // Ensure fetch requests inside embedded blog scripts respect the GitHub Pages base path
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const originalFetch = typeof window !== 'undefined' ? window.fetch.bind(window) : undefined;
    let fetchPatched = false;
    if (typeof window !== 'undefined' && originalFetch && basePath) {
      try {
        // Patch fetch to prefix absolute-root paths ("/...") with basePath on blog pages
        window.fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
          try {
            if (typeof input === 'string') {
              if (input.startsWith('/')) {
                return originalFetch(`${basePath}${input}`, init);
              }
              return originalFetch(input, init);
            }
            if (input instanceof Request) {
              const url = new URL(input.url, window.location.origin);
              if (url.origin === window.location.origin && url.pathname.startsWith('/')) {
                const adjusted = new Request(`${basePath}${url.pathname}${url.search}${url.hash}`, input);
                return originalFetch(adjusted, init);
              }
              return originalFetch(input, init);
            }
            if (input instanceof URL) {
              if (input.origin === window.location.origin && input.pathname.startsWith('/')) {
                const adjusted = new URL(`${basePath}${input.pathname}${input.search}${input.hash}`, input.origin);
                return originalFetch(adjusted as unknown as RequestInfo, init);
              }
              return originalFetch(input as unknown as RequestInfo, init);
            }
          } catch (_) {
            // Fall through to original fetch on any error
          }
          return originalFetch(input as unknown as RequestInfo, init);
        };
        fetchPatched = true;
      } catch {
        // no-op
      }
    }

    const renderMath = async () => {
      try {
        // Import KaTeX dynamically
        const katex = await import('katex');
        
        // Render display math
        const displayMath = document.querySelectorAll('.math-display');
        displayMath.forEach((element) => {
          const mathText = element.textContent;
          if (mathText) {
            try {
              // Remove the \[ and \] delimiters
              const cleanMath = mathText.replace(/^\\\[/, '').replace(/\\\]$/, '');
              element.innerHTML = katex.renderToString(cleanMath, {
                displayMode: true,
                throwOnError: false
              });
            } catch (err) {
              console.warn('Failed to render display math:', err);
            }
          }
        });

        // Render inline math
        const inlineMath = document.querySelectorAll('.math-inline');
        inlineMath.forEach((element) => {
          const mathText = element.textContent;
          if (mathText) {
            try {
              // Remove the \( and \) delimiters
              const cleanMath = mathText.replace(/^\\\(/, '').replace(/\\\)$/, '');
              element.innerHTML = katex.renderToString(cleanMath, {
                displayMode: false,
                throwOnError: false
              });
            } catch (err) {
              console.warn('Failed to render inline math:', err);
            }
          }
        });
      } catch (error) {
        console.warn('KaTeX not available:', error);
      }
    };

    const executeScripts = async () => {
      try {
        const container = document.querySelector('.blog-content') as HTMLElement | null;
        if (!container) return;

        // Prevent double execution
        if (container.getAttribute('data-scripts-executed') === 'true') return;

        const scripts = Array.from(container.querySelectorAll('script')) as HTMLScriptElement[];

        const loadExternalScript = (src: string) =>
          new Promise<void>((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.async = false;
            s.onload = () => resolve();
            s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.body.appendChild(s);
          });

        for (const original of scripts) {
          if (original.src) {
            // Ensure external scripts (like Plotly) load before inline scripts that depend on them
            await loadExternalScript(original.src);
          } else {
            // Recreate inline scripts so they execute
            const s = document.createElement('script');
            if (original.type) s.type = original.type;
            s.textContent = original.textContent || '';
            document.body.appendChild(s);
            // Clean up the temporary node
            s.parentElement?.removeChild(s);
          }
        }

        container.setAttribute('data-scripts-executed', 'true');

        // If the inline script registered a DOMContentLoaded handler after DOM was ready,
        // call common initializers explicitly as a fallback (best-effort, safe no-ops if missing).
        const w = window as unknown as WindowWithBlogViz;
        try {
          w.loadSensorPositions?.();
          w.updateVisualization?.();
        } catch {
          // Ignore
        }
      } catch (e) {
        console.warn('Failed executing embedded scripts:', e);
      }
    };

    renderMath();
    // Execute any <script> tags embedded in blog content (e.g., Plotly visualizations)
    executeScripts();

    return () => {
      // Restore original fetch to avoid side effects outside blog content
      if (fetchPatched && originalFetch) {
        try {
          window.fetch = originalFetch;
        } catch {
          // ignore
        }
      }
    };
  }, [children]);

  return <>{children}</>;
}
