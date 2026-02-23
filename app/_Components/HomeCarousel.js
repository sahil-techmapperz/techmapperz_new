import styles from './HomeCarousel.module.css';
import Link from 'next/link';
import { FiMessageSquare, FiCalendar } from "react-icons/fi";
import Hero_img from '@/public/Photos/3Drendered_digital_Ear.webp';
import Image from 'next/image';

const CTAButtons = () => (
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
);

const CustomCarousel = () => {
  return (
    <div className="relative h-[90vh] max-sm:h-[100vh] bg-black overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(55,107,171,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(210,41,43,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.4))]"></div>

      {/* Animated gradient orbs */}
      <div className={`absolute top-20 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-[#376bab]/30 from-60% to-[#d2292b]/10 rounded-full blur-3xl ${styles.animatePulse}`}></div>
      <div className={`absolute bottom-20 right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-[#d2292b]/10 to-[#376bab]/30 rounded-full blur-3xl ${styles.animatePulseDelay}`}></div>

      {/* Gradient lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(55,107,171,0.1)_50%,transparent_75%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(210,41,43,0.03)_50%,transparent_75%)]"></div>

      {/* Content wrapper */}
      <div className="relative w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:pl-[8rem] py-20 lg:py-0 z-10">
          {/* Tag line with enhanced gradient */}
          <div className="inline-block max-md:text-center bg-gradient-to-r from-[#376bab] from-65% to-[#d2292b] rounded-full px-6 py-2  text-white font-semibold mb-8 shadow-lg hover:shadow-[#376bab]/20 transition-shadow duration-300">
            INNOVATIVE IT & GIS SOLUTIONS
          </div>

          <h3 className="text-4xl lg:text-4xl font-bold mb-6 text-white">
            Driving Growth Through Smart {' '} <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b] animate-gradient `}>
              IT ,
            </span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b] animate-gradient `}>
              GIS
            </span>
            {' '}&{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#376bab] from-40% via-[#376bab] to-[#d2292b] animate-gradient `}>
              Drone Solutions
            </span>
          </h3>

          <div className="flex flex-row items-center justify-start gap-4 mb-8">
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
              Innovate
            </span>
            <div className="w-[3px] h-14 bg-gradient-to-b from-[#376bab] to-[#d2292b] opacity-50 rounded-full"></div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
              Plan
            </span>
            <div className="w-[3px] h-14 bg-gradient-to-b from-[#376bab] to-[#d2292b] opacity-50 rounded-full"></div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#376bab] via-[#376bab] to-[#d2292b] inline-block text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
              Achieve
            </span>
          </div>


          <CTAButtons />
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
          {/* Enhanced decorative gradient circle */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 pointer-events-none">
            <div className="relative w-[900px] h-[900px]">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#376bab]/30 from-60% to-[#d2292b]/10 blur-3xl ${styles.animatePulse}`}></div>
              <div className={`absolute inset-8 rounded-full bg-gradient-to-r from-[#376bab]/25 from-60% to-[#d2292b]/10 blur-2xl ${styles.animatePulseDelay}`}></div>
              <div className={`absolute inset-16 rounded-full bg-gradient-to-r from-[#376bab]/20 from-60% to-[#d2292b]/10 blur-xl ${styles.animatePulseDouble}`}></div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-sm:hidden w-full h-full flex items-center justify-center p-8 perspective-1000">
            <Image
              src={Hero_img}
              alt="IT & GIS Solutions"
              width={800}
              height={800}
              className="object-contain relative z-10 drop-shadow-2xl transform transition-transform duration-500 hover:rotate-x hover:rotate-y-6"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              quality={90}
            />
          </div>

          {/* <ThreeDImage /> */}


        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;

