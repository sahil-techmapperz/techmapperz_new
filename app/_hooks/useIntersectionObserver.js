'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        // Once in view, keep it loaded for better UX
        if (inView && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '50px 0px', // Load 50px before entering viewport (mobile optimization)
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasBeenInView, options]);

  return { elementRef, isInView, hasBeenInView };
}

// Mobile-optimized lazy section component
export function LazySection({ 
  children, 
  fallback, 
  className = "lazy-section",
  mobileRootMargin = "100px 0px" // More aggressive preloading on mobile
}) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { elementRef, hasBeenInView } = useIntersectionObserver({
    rootMargin: isMobile ? mobileRootMargin : "50px 0px"
  });

  return (
    <div ref={elementRef} className={className}>
      {hasBeenInView ? children : fallback}
    </div>
  );
}