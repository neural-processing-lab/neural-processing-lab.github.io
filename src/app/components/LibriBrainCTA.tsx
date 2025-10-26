'use client';

export default function LibriBrainCTA() {
  return (
    <section data-dark-section style={{
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg,rgb(58, 58, 58) 0%,rgb(39, 5, 70) 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dotted texture pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }} />

      {/* Additional subtle overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 500,
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            Update
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 200,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          LibriBrain Competition &rarr; NeurIPS Workshop
        </h2>

        <p style={{
          fontSize: '20px',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '700px',
          margin: '0 auto 3rem auto',
          fontWeight: 300
        }}>
          Thank you to everyone who competed this year. We&apos;re keeping the momentum
          going with a dedicated NeurIPS workshop&mdash;submit analyses, models, or
          insights built on LibriBrain. The <code>pnpl</code> package that powered our
          baselines is now fully open source, so you can extend it without restriction.
        </p>

        <div style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <a
            href="https://libribrain.com/workshop-paper"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#000',
              textDecoration: 'none',
              background: '#fff',
              border: '2px solid #fff',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-block',
              borderRadius: '4px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
            }}
          >
            Submit Workshop Paper →
          </a>

          <a
            href="https://github.com/neural-processing-lab/pnpl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#fff',
              textDecoration: 'none',
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-block',
              borderRadius: '4px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Explore pnpl on GitHub →
          </a>

          <div style={{
            display: 'grid',
            gap: '0.6rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#FFC107',
                borderRadius: '50%'
              }} />
              <span>Competition concluded — workshop paper submissions are now open</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#4FC3F7',
                borderRadius: '50%'
              }} />
              <span><code>pnpl</code> package is fully open source</span>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 'clamp(2rem, 5vw, 3rem)',
          paddingTop: 'clamp(2rem, 5vw, 3rem)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              50+
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Hours of MEG Data
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              NeurIPS 2025
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Workshop on Speech BCIs
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(20px, 5vw, 28px)',
              fontWeight: 200,
              marginBottom: '0.5rem',
              color: '#fff'
            }}>
              <code>pnpl</code>
            </div>
            <div style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Open Source Toolbox
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
