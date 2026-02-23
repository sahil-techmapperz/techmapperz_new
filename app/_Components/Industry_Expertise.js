"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Ecommerce from "@/public/Industry/E-commerce.webp";
import Education from "@/public/Industry/Education-E-learning.webp";
import Government from "@/public/Industry/Goverment-Public-Sector.webp";
import Healthcare from "@/public/Industry/Healthcare.webp";
import Logistics from "@/public/Industry/Logistic-Supply-Chain.webp";
import Manufacturing from "@/public/Industry/Manufacturing.webp";
import Retail from "@/public/Industry/Retail.webp";
import Travel from "@/public/Industry/Travel-Hospitality.webp";






export const categoryData = [
    {
        name: 'E-COMMERCE',
        image: Ecommerce,
        desc: "Comprehensive e-commerce solutions to help businesses thrive in the digital marketplace",
        icon: "🛍️",
        categoryTypes: ["B2B Solutions", "Online Marketplaces", "Payment Integration", "Inventory Management"]
    },
    {
        name: 'EDUCATION & E-LEARNING',
        image: Education,
        desc: "Digital learning platforms and solutions that transform educational experiences",
        icon: "📚",
        categoryTypes: ["LMS Development", "Virtual Classrooms", "Educational Apps", "Interactive Content"]
    },
    {
        name: 'GOVERNMENT & PUBLIC SECTOR',
        image: Government,
        desc: "Digital solutions for efficient governance and public service delivery",
        icon: "🏛️",
        categoryTypes: ["E-Governance", "Public Services", "Digital Documentation", "Citizen Portals"]
    },
    {
        name: 'HEALTHCARE',
        image: Healthcare,
        desc: "Innovative healthcare solutions for improved patient care and management",
        icon: "⚕️",
        categoryTypes: ["EMR Systems", "Telemedicine", "Healthcare Apps", "Medical Analytics"]
    },
    {
        name: 'LOGISTICS & SUPPLY CHAIN',
        image: Logistics,
        desc: "End-to-end solutions for streamlined logistics and supply chain operations",
        icon: "🚛",
        categoryTypes: ["Fleet Management", "Inventory Tracking", "Supply Chain Analytics", "Route Optimization"]
    },
    {
        name: 'MANUFACTURING',
        image: Manufacturing,
        desc: "Digital solutions to optimize manufacturing processes and efficiency",
        icon: "🏭",
        categoryTypes: ["Process Automation", "Quality Control", "Production Planning", "Industrial IoT"]
    },
    {
        name: 'RETAIL',
        image: Retail,
        desc: "Innovative retail solutions for enhanced customer experience and operations",
        icon: "🏪",
        categoryTypes: ["POS Systems", "Inventory Management", "Customer Analytics", "Omnichannel Retail"]
    },
    {
        name: 'TRAVEL & HOSPITALITY',
        image: Travel,
        desc: "Digital solutions for seamless travel and hospitality experiences",
        icon: "✈️",
        categoryTypes: ["Booking Systems", "Hotel Management", "Travel Apps", "Customer Experience"]
    }
];



// const IndustryExpertise = () => {
//     const [hoveredImage, setHoveredImage] = useState(null);

//     return (
//         <div className="w-full bg-gradient-to-b from-blue-950 to-black relative">
//             <div className="max-w-7xl mx-auto py-8 max-sm:py-2 max-sm:px-4">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
//                     Industry Expertise
//                 </h1>
//                 <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 relative">
//                     <div className="absolute inset-0 overflow-hidden">
//                         <div className="absolute inset-0 bg-blue-900/5" />
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={hoveredImage || categoryData[0].image}
//                                 alt="Background"
//                                 fill
//                                 className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage ? 'opacity-100 scale-110 brightness-75' : 'opacity-0 scale-100'
//                                     }`}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-black/60" />
//                         </div>
//                     </div>

//                     {categoryData.map((category, index) => (
//                         <div key={index} className="relative group z-10 border-[1px]  border-white">
//                             <Link
//                                 href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
//                                 className="relative aspect-[3/4] sm:aspect-[4/5] block overflow-hidden"
//                                 onMouseEnter={() => setHoveredImage(category.image)}
//                                 onMouseLeave={() => setHoveredImage(null)}
//                             >
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={category.image}
//                                         alt={category.name}
//                                         fill
//                                         className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage && hoveredImage ? 'opacity-0' : 'opacity-80'
//                                             }`}
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/60 to-black/90 group-hover:from-blue-900/50 group-hover:via-blue-900/60 group-hover:to-black/80 transition-all duration-500" />
//                                 </div>
//                                 <div className="relative h-full flex flex-col justify-end items-center text-center p-3 sm:p-6 z-10 transition-all duration-500 ease-in-out transform group-hover:justify-center group-hover:-translate-y-2">
//                                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
//                                         {category.name}
//                                     </h3>
//                                     <p className="text-xs sm:text-sm text-white/90 mb-3 max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500 hidden group-hover:block transform group-hover:-translate-y-2">
//                                         {category.desc}
//                                     </p>
//                                     <div className="h-0.5 w-8 sm:w-12 bg-blue-400 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] transform group-hover:-translate-y-2" />
//                                     <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                                         <span className="text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
//                                             Learn More <span className="text-base sm:text-lg">→</span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </div>

//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

const IndustryExpertise = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="w-full bg-gradient-to-b from-blue-950 to-black relative">
            <div className="max-w-7xl mx-auto py-8 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-12 drop-shadow-lg">
                    Industry Expertise
                </h1>

                {/* Desktop Grid */}
                {/* <div className="hidden sm:grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 relative">
                    {categoryData.map((category, index) => (
                        <div key={index} className="relative group z-10 border border-white">
                            <Link href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`} className="relative aspect-[3/4] sm:aspect-[4/5] block overflow-hidden">
                                <div className="absolute inset-0">
                                    <Image src={category.image} alt={category.name} fill className="object-cover opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/60 to-black/90 transition-all duration-500" />
                                </div>
                                <div className="relative h-full flex flex-col justify-end items-center text-center p-3 sm:p-6 z-10">
                                    <h3 className="text-lg font-bold text-white drop-shadow-lg">{category.name}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div> */}

                <div className="hidden sm:grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 relative">                    <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/5" />
                    <div className="absolute inset-0">
                        <Image
                            src={hoveredImage || categoryData[0].image}
                            alt="Background"
                            fill
                            className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage ? 'opacity-100 scale-110 brightness-75' : 'opacity-0 scale-100'
                                }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-black/60" />
                    </div>
                </div>

                    {categoryData.map((category, index) => (
                        <div key={index} className="relative group z-10 border-[1px]  border-white">
                            <Link
                                href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                                className="relative aspect-[3/4] sm:aspect-[4/5] block overflow-hidden"
                                aria-label={`Learn more about ${category.name} industry solutions`}
                                onMouseEnter={() => setHoveredImage(category.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage && hoveredImage ? 'opacity-0' : 'opacity-80'
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/60 to-black/90 group-hover:from-blue-900/50 group-hover:via-blue-900/60 group-hover:to-black/80 transition-all duration-500" />
                                </div>
                                <div className="relative h-full flex flex-col justify-end items-center text-center p-3 sm:p-6 z-10 transition-all duration-500 ease-in-out transform group-hover:justify-center group-hover:-translate-y-2">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/90 mb-3 max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500 hidden group-hover:block transform group-hover:-translate-y-2">
                                        {category.desc}
                                    </p>
                                    <div className="h-0.5 w-8 sm:w-12 bg-blue-400 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] transform group-hover:-translate-y-2" />
                                    <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <span className="text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
                                            Learn More About {category.name} <span className="text-base sm:text-lg">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="sm:hidden">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full"
                    >
                        {categoryData.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link 
                                    href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`} 
                                    className="relative block overflow-hidden"
                                    aria-label={`Learn more about ${category.name} industry solutions`}
                                >
                                    <div className="w-[350px] h-[300px] mx-auto">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="w-full h-full rounded-lg"
                                        />
                                    </div>
                                    <div className=" absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-lg font-bold">{category.name}</h3>
                                        <span className="text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
                                            Learn More About {category.name} <span className="text-base sm:text-lg">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
};


export default IndustryExpertise;

