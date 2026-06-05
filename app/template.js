"use client"
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Check if device is low-end
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    setShouldAnimate(!prefersReducedMotion && !isLowEndDevice);
  }, []);

  // Return children without animation for better performance on initial load or low-end devices
  if (!shouldAnimate) {
    return <div>{children}</div>;
  }

  return (
    <div className="page-transition-enter">
      {children}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .page-transition-enter {
          animation: fadeSlideUp 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
}
