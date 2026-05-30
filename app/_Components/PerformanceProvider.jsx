'use client';

import { useEffect } from 'react';
import { 
  preloadCriticalResources, 
  respectMotionPreferences, 
  optimizeForMobile,
  measurePerformance 
} from '../lib/utils/performanceOptimizer';

const PerformanceProvider = ({ children }) => {
  useEffect(() => {
    // Initialize performance optimizations
    const initPerformance = () => {
      // Respect user motion preferences
      respectMotionPreferences();
      
      // Optimize for mobile devices
      optimizeForMobile();
      
      // Preload critical resources after initial load
      preloadCriticalResources();
      
      // Add performance monitoring
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Log Core Web Vitals
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              if (!entry.hadRecentInput) {
                console.log('CLS:', entry.value);
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      }
    };

    // Run performance optimizations after page load
    if (document.readyState === 'complete') {
      initPerformance();
    } else {
      window.addEventListener('load', initPerformance);
      return () => window.removeEventListener('load', initPerformance);
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceProvider;