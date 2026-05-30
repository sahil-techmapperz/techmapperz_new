'use client';

import { useEffect, useState } from 'react';

// Global performance optimization hook
export function usePagePerformance() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState('fast');

  useEffect(() => {
    // Detect device capabilities for adaptive loading
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const memory = navigator.deviceMemory || 4; // Default to 4GB if not available

    // Determine if it's a low-end device
    setIsLowEndDevice(memory <= 2 || (connection && connection.effectiveType === '2g'));

    // Set connection speed
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === '4g') {
        setConnectionSpeed('fast');
      } else if (effectiveType === '3g') {
        setConnectionSpeed('medium');
      } else {
        setConnectionSpeed('slow');
      }
    }
  }, []);

  return { isLowEndDevice, connectionSpeed };
}

// Adaptive loading configuration based on device and connection
export function getOptimizedLoadingConfig(isLowEndDevice, connectionSpeed) {
  const baseConfig = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    quality: 75,
    priority: false
  };

  if (isLowEndDevice || connectionSpeed === 'slow') {
    return {
      rootMargin: '20px 0px', // Load closer to viewport
      threshold: 0.2,
      quality: 60, // Lower quality for faster loading
      priority: false,
      lazy: true
    };
  }

  if (connectionSpeed === 'medium') {
    return {
      rootMargin: '75px 0px',
      threshold: 0.1,
      quality: 70,
      priority: false,
      lazy: true
    };
  }

  // Fast connection
  return {
    rootMargin: '100px 0px', // More aggressive preloading
    threshold: 0.05,
    quality: 80,
    priority: false,
    lazy: false // Can afford to load more eagerly
  };
}

// Performance monitoring
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            setMetrics(prev => ({
              ...prev,
              loadTime: entry.loadEventEnd - entry.loadEventStart,
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              ttfb: entry.responseStart - entry.requestStart
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  return metrics;
}