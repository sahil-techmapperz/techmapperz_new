'use client';

import { useEffect } from 'react';

// Optimized Critical CSS for minimal blocking time
export default function CriticalCSS() {
  useEffect(() => {
    // Defer non-critical font loading to reduce blocking time
    const loadFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
      fontLink.media = 'print';
      fontLink.onload = function() { this.media = 'all'; };
      document.head.appendChild(fontLink);
    };

    // Load fonts after initial render
    setTimeout(loadFonts, 50);
  }, []);

  return (
    <style jsx>{`
      /* Minimal critical CSS for fastest FCP and LCP */
      .hero-section {
        min-height: 90vh;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        contain: layout style paint;
      }
      
      .hero-content {
        text-align: center;
        color: #fff;
        max-width: 90%;
        font-family: system-ui, -apple-system, sans-serif;
      }
      
      .hero-title {
        font-size: clamp(1.5rem, 4vw, 3rem);
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.2;
        font-display: swap;
      }
      
      .gradient-text {
        background: linear-gradient(90deg, #376bab 40%, #d2292b 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(90deg, #376bab 60%, #d2292b 100%);
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.15s ease-out;
        will-change: transform;
      }
      
      .cta-button:hover {
        transform: translateY(-1px);
      }
      
      /* Prevent layout shifts */
      .skeleton {
        background: #374151;
        border-radius: 0.25rem;
        contain: strict;
      }
      
      /* Optimize for Core Web Vitals */
      .optimized {
        contain: layout style paint;
        will-change: auto;
      }
      
      /* Mobile performance */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 100vh;
          padding: 1rem;
        }
        .hero-title {
          font-size: 1.5rem;
        }
      }
      
      /* Reduce motion for accessibility and performance */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}