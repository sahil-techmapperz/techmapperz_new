import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

const HomeHero = ({ bannerData }) => {
    const bgImage = bannerData?.banner_img_url || '/background_image/home_hero_v3.png';
    const heading = bannerData?.heading || "Driving Growth Through \n Smart IT ,GIS & \n Drone Solutions";
    const subTitle = bannerData?.subTitle || "Responsive, SEO-Optimized IT, GIS & Drone Solutions Built With Modern Technologies";

    return (
        <section
            className="w-full min-h-[90vh] lg:min-h-[100vh] flex items-center relative overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-0"
        >
            <Image
                src={bgImage}
                alt="Hero Background"
                fill
                priority
                className="object-cover object-top absolute inset-0 z-0"
            />
            {/* Subtle dark overlay on left to keep text legible */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none z-[5]" /> */}

            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col gap-6 ">

                {/* Pill Tag */}
                <div className="w-fit bg-gradient-to-r from-[#4b7bff] via-[#855896] to-[#d2292b] text-white text-[11px] sm:text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    INNOVATIVE IT & GIS SOLUTIONS
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-white tracking-tight whitespace-pre-wrap" style={{ lineHeight: '1.2' }}>
                    {heading}
                </h1>

                {/* Subtext */}
                <p className="text-gray-300 text-base lg:text-[17px] max-w-xl whitespace-pre-wrap">
                    {subTitle}
                </p>

                {/* Tagline */}
                <div className="flex items-center gap-4 text-lg font-bold">
                    <span className="text-[#4b7bff]">Innovate</span>
                    <span className="text-gray-500 font-light">|</span>
                    <span className="text-[#4b7bff]">Plan</span>
                    <span className="text-gray-500 font-light">|</span>
                    <span className="text-[#d2292b]">Achieve</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-2">
                    <Link href="/contact">
                        <button className="py-[12px] px-8 rounded-full bg-gradient-to-r from-[#4b7bff] via-[#855896] to-[#d2292b] text-white font-semibold text-[15px] hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                            <BiMessageSquareDetail className="text-xl" /> Request a Quote
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="py-[12px] px-8 rounded-full bg-[#111622]/80 border border-white/20 backdrop-blur-sm text-white font-semibold text-[15px] hover:bg-[#111622] transition-all flex items-center justify-center gap-2">
                            <BsCalendarEvent className="text-lg" /> Book a Demo
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HomeHero;
