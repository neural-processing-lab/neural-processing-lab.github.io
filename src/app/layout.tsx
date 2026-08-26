import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'katex/dist/katex.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PNPL | Parker Jones Neural Processing Lab",
  description: "Decoding inner speech from the brain, non-invasively. The Parker Jones Neural Processing Lab at Oxford Robotics Institute.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Umami analytics — self-hosted on Railway, cookieless. data-domains restricts
            tracking to the production hostname, so local dev and forks send nothing. */}
        <Script
          src="https://stats.neuralprocessinglab.com/script.js"
          data-website-id="3755ee1d-ade3-4a47-a70f-d799fff494bd"
          data-domains="neural-processing-lab.github.io,neuralprocessinglab.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
