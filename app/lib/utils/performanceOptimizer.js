// Enhanced Performance Optimization Utilities
import { deferNonCritical } from './performance';

// Critical resources that should be preloaded
export const CRITICAL_RESOURCES = {
  fonts: [
    '/fonts/inter.woff2',
  ],
  images: {
    hero: [
      '/Photos/3Drendered_digital_Ear.webp',
      '/logo.webp'
    ],
    banners: [
      '/Photos/about_us_banner.webp',
      '/Photos/blogs_banner.webp',
      '/gis_images/Main_Service_Page_Banner.webp',
      '/Photos/career_banner.webp',
      '/Photos/contact_2.png'
    ],
    icons: [
      '/Icons/web_dev.svg',
      '/Icons/app_dev.svg',
      '/Icons/crm.svg',
      '/Icons/consultant.svg',
      '/Icons/drone.svg',
      '/Icons/GIS.svg'
    ]
  }
};

// Performance-optimized component loader with skeleton fallback
export const createOptimizedLoader = (minHeight = "200px", bgColor = "bg-gray-900") => ({
  loading: () => (
    <div className={`min-h-[${minHeight}] ${bgColor} animate-pulse`}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-8"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-800 rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  )
});

// Banner skeleton loader
export const createBannerLoader = (height = "500px") => ({
  loading: () => (
    <div className={`h-[${height}] bg-gradient-to-br from-gray-900 to-black animate-pulse`}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-800 rounded w-96 mx-auto"></div>
          <div className="h-6 bg-gray-700 rounded w-64 mx-auto"></div>
          <div className="h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  )
});

// Image optimization settings for different use cases
export const IMAGE_CONFIGS = {
  hero: {
    priority: true,
    quality: 90,
    sizes: "(min-width: 1024px) 50vw, 100vw"
  },
  banner: {
    priority: true,
    quality: 85,
    sizes: "100vw"
  },
  card: {
    priority: false,
    quality: 80,
    sizes: "(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
  },
  icon: {
    priority: false,
    quality: 85,
    sizes: "64px"
  },
  thumbnail: {
    priority: false,
    quality: 75,
    sizes: "(min-width: 768px) 25vw, 50vw"
  }
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, defaultOptions);
  }
  return null;
};

// Resource preloader for critical assets
export const preloadCriticalResources = (resourceType = 'all') => {
  if (typeof window === 'undefined') return;

  deferNonCritical(() => {
    const resourcesToLoad = [];

    if (resourceType === 'all' || resourceType === 'images') {
      resourcesToLoad.push(...CRITICAL_RESOURCES.images.hero);
    }

    if (resourceType === 'all' || resourceType === 'fonts') {
      resourcesToLoad.push(...CRITICAL_RESOURCES.fonts);
    }

    resourcesToLoad.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      link.as = src.endsWith('.woff2') ? 'font' : 'image';
      if (link.as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  });
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }
  return fn();
};

// Reduce motion for users with motion sensitivity
export const respectMotionPreferences = () => {
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }
  }
};

// Bundle size optimization for mobile
export const optimizeForMobile = () => {
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Disable expensive animations on mobile
      document.documentElement.style.setProperty('--blur-amount', '0px');
      document.documentElement.style.setProperty('--animation-complexity', 'simple');
    }
  }
};

// Page-specific ISR configuration
export const ISR_CONFIGS = {
  home: 3600, // 1 hour
  blog: 1800, // 30 minutes
  service: 7200, // 2 hours
  about: 86400, // 24 hours
  contact: 3600, // 1 hour
  portfolio: 7200, // 2 hours
  dynamic: 900 // 15 minutes for dynamic content
};