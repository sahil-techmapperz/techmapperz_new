import Link from 'next/link';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ISR_CONFIGS, createOptimizedLoader } from '../lib/utils/performanceOptimizer';

// Critical above-the-fold component - load with SSR for better performance
const Features = dynamic(() => import('../_Components/Features'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "Software, GIS & Drone Survey Company in India | Techmapperz",
  description: "Techmapperz delivers innovative IT Services, GIS and Drone solutions, Website & App Development and CRM solutions to streamline operations and drive success.",
  alternates: {
    canonical: `${BASE_URL}/service`,
  },
};

const service = () => {

  return (
    <div className="service bg-black text-white">
      <ScrollToTop />

      <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Main_Service_Page_Banner.webp")' }}>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
          <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Our Services</h1>
          <p className='text-center text-lg max-sm:text-sm text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Empowering Your Business with Smart Tech Solutions
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <button
                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
              >
                Talk To Our Experts
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black py-8 md:py-16 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full ">
        <div className="grid grid-cols-1 m-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-semibold mb-4">Our Services</h1>
          </div>
        </div>
        <Features />
      </section>
    </div>
  );
}

export default service;
