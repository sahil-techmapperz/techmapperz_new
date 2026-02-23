// Page-level optimization utilities
import dynamic from 'next/dynamic';
import { createOptimizedLoader, createBannerLoader, ISR_CONFIGS } from './performanceOptimizer';

// Common page components with optimized loading
export const OptimizedComponents = {
  // Navigation and layout
  ScrollToTop: dynamic(() => import('../../_Components/ScrollToTop')),
  
  // Common page sections
  OurServices: dynamic(() => import('../../_Components/OurServices'), {
    ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
  }),
  
  // Contact and CTA sections
  Homecontact: dynamic(() => import('../../_Components/Homecontact'), {
    ...createOptimizedLoader("400px", "bg-gray-900")
  }),
  
  // Technology and features
  Technology: dynamic(() => import('../../_Components/Technology'), {
    ...createOptimizedLoader("300px", "bg-gray-800")
  }),
  
  // Testimonials
  Testimonial: dynamic(() => import('../../_Components/Testimonial'), {
    ...createOptimizedLoader("300px", "bg-black")
  }),
  
  // Carousel components
  CarouselWrapper: dynamic(() => import('../../_Components/CarouselWrapper'), {
    ...createOptimizedLoader("400px", "bg-gray-900")
  }),
};

// Service page template with common structure
export const createServicePageMeta = (title, description, canonical) => ({
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Techmapperz',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  }
});

// Banner component factory
export const createServiceBanner = (backgroundImage, title, subtitle, ctaText = "Get Started") => {
  return function ServiceBanner() {
    return (
      <section 
        className="relative h-[70vh] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#376bab] to-[#d2292b] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              {ctaText}
            </a>
            <a
              href="https://calendly.com/techmapperz-projects/description-about-your-queries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    );
  };
};

// Common service page layout
export const ServicePageLayout = ({ 
  children, 
  showTechnology = true, 
  showTestimonials = true, 
  showContact = true,
  revalidate = ISR_CONFIGS.service 
}) => {
  return (
    <>
      <OptimizedComponents.ScrollToTop />
      {children}
      {showTechnology && <OptimizedComponents.Technology />}
      {showTestimonials && <OptimizedComponents.Testimonial />}
      {showContact && <OptimizedComponents.Homecontact />}
    </>
  );
};

// ISR config for service pages
export { ISR_CONFIGS };