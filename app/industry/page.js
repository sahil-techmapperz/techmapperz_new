import Link from 'next/link';
import Image from 'next/image';

import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaArrowRightLong } from 'react-icons/fa6';
import IndustryExpertise from '../_Components/Industry_Expertise';
import HappyClients from '../_Components/HappyClients';
import AboutUs from '../_Components/AboutUs';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


export const metadata = {
    title: "IT & Geospatial Solutions for Industries | Techmapperz",
    description: "Explore Techmapperz’s IT, GIS, and Drone solutions across E-commerce, Education, Healthcare, and Government sectors—innovative, scalable, and cost-effective.",
    alternates: {
        canonical: `${BASE_URL}/industry`,
    },
};

const industry = () => {

    return (
        <div className="service bg-black text-white">
            <ScrollToTop />

            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/background_image/industry_first _banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Industry</h1>
                    <p className='text-center text-lg max-sm:text-sm text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
                        Powering Your Business with Smart Tech Solutions
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

            <IndustryExpertise />
            <AboutUs />
            <HappyClients />
        </div>
    );
}

export default industry;

