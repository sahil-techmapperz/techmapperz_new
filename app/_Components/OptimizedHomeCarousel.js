import { memo, Suspense } from 'react';
import Link from 'next/link';
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import Image from 'next/image';
import Hero_img from '@/public/Photos/3Drendered_digital_Ear.webp';

// Memoized CTA buttons to prevent re-renders
const CTAButtons = memo(() => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <Link
      href="/contact"
      aria-label="Request a Quote"
      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#376bab] from-60% to-[#d2292b] text-white font-semibold py-4 px-8 rounded-full overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <FiMessageSquare className="text-xl" />
      <span>Request a Quote</span>
    </Link>

    <a
      target="_blank"
      href="https://calendly.com/techmapperz-projects/description-about-your-queries"
      aria-label="Book a Demo"
      className="group relative inline-flex items-center gap-2 bg-white/10 text-white font-semibold py-4 px-8 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      rel="noopener noreferrer"
    >
      <FiCalendar className="text-xl" />
      <span>Book a Demo</span>
    </a>
  </div>
));

CTAButtons.displayName = 'CTAButtons';

// Optimized background component
const BackgroundElements = memo(() => (
  <>
    {/* Static gradients instead of animated ones for better performance */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(55,107,171,0.3),transparent_70%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(210,41,43,0.1),transparent_40%)]"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.4))]"></div>
    
    {/* Simplified gradient orbs - removed heavy animations */}
    <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#376bab]/20 to-[#d2292b]/5 rounded-full blur-3xl opacity-60"></div>
    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-[#d2292b]/5 to-[#376bab]/20 rounded-full blur-3xl opacity-60"></div>
  </>
));

BackgroundElements.displayName = 'BackgroundElements';

// Skeleton loader for the hero image
const HeroImageSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center p-8">
    <div className="w-[600px] h-[600px] bg-gray-800/20 rounded-2xl animate-pulse"></div>
  </div>
);

// Optimized hero image component
const HeroImage = memo(() => (
  <div className="relative max-sm:hidden w-full h-full flex items-center justify-center p-8">
    <Image
      src={Hero_img}
      alt="IT & GIS Solutions"
      width={600}
      height={600}
      className="object-contain relative z-10 drop-shadow-2xl"
      sizes="(min-width: 1024px) 50vw, 100vw"
      priority
      quality={85}
      placeholder="blur"
    />
  </div>
));

HeroImage.displayName = 'HeroImage';

const OptimizedHomeCarousel = memo(() => {
  return (
    <div className="relative h-[90vh] max-sm:h-[100vh] bg-black overflow-hidden">
      {/* Background elements */}
      <BackgroundElements />

      {/* Content wrapper */}
      <div className="relative w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:pl-[8rem] py-20 lg:py-0 z-10">
          {/* Tag line with enhanced gradient */}
          <div className="inline-block max-md:text-center bg-gradient-to-r from-[#376bab] from-65% to-[#d2292b] rounded-full px-6 py-2 text-white font-semibold mb-8 shadow-lg">
            INNOVATIVE IT & GIS SOLUTIONS
          </div>

          <h1 className="text-4xl lg:text-4xl font-bold mb-6 text-white">
            Driving Growth Through Smart {' '} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b]">
              IT ,
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b]">
              GIS
            </span>
            {' '}&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b]">
              Drone Solutions
            </span>
          </h1>

          <div className="flex flex-row items-center justify-start gap-4 mb-8">
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text">
              Innovate
            </span>
            <div className="w-[3px] h-14 bg-gradient-to-b from-[#376bab] to-[#d2292b] opacity-50 rounded-full"></div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text">
              Plan
            </span>
            <div className="w-[3px] h-14 bg-gradient-to-b from-[#376bab] to-[#d2292b] opacity-50 rounded-full"></div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text">
              Achieve
            </span>
          </div>

          <CTAButtons />
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
          {/* Simplified decorative elements */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <div className="relative w-[600px] h-[600px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#376bab]/15 to-[#d2292b]/5 blur-3xl"></div>
            </div>
          </div>

          {/* Hero Image with Suspense for better loading */}
          <Suspense fallback={<HeroImageSkeleton />}>
            <HeroImage />
          </Suspense>
        </div>
      </div>
    </div>
  );
});

OptimizedHomeCarousel.displayName = 'OptimizedHomeCarousel';

export default OptimizedHomeCarousel;