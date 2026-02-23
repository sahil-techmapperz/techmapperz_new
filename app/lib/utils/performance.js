// Performance utilities to reduce main thread blocking

export const deferNonCritical = (callback) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: 2000 });
  } else {
    setTimeout(callback, 1);
  }
};

export const optimizeAnimations = () => {
  // Reduce animations if performance is poor
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
  }
};

export const prefetchCriticalResources = () => {
  // Prefetch critical resources after main content loads
  deferNonCritical(() => {
    const criticalImages = [
      '/Photos/3Drendered_digital_Ear.webp',
      '/logo.webp'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      document.head.appendChild(link);
    });
  });
};