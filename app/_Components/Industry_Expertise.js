"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
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
        <section className="w-full bg-[#020617] relative py-20 overflow-hidden border-t border-white/5">
            {/* Optional ambient background glows */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(55,107,171,0.08),transparent_70%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(210,41,43,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#376bab] to-[#d2292b]"></span>
                        <span className="text-sm font-medium tracking-wide text-gray-300">INDUSTRIES WE SERVE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Expertise</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Delivering tailored digital solutions across diverse business sectors to drive transformation and growth.
                    </p>
                </motion.div>

                {/* Desktop Grid Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden sm:grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-px relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5"
                >
                    {/* Magical Full-Span Background Image */}
                    <div className="absolute inset-0 overflow-hidden bg-[#0a0f1a]">
                        <div className="absolute inset-0">
                            <Image
                                src={hoveredImage || categoryData[0].image}
                                alt="Background"
                                fill
                                className={`object-cover transition-all duration-1000 ease-in-out ${hoveredImage ? 'opacity-50 scale-105 brightness-110' : 'opacity-30 scale-100 grayscale-[30%]'}`}
                            />
                            {/* Premium overlay gradient to ensure text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617] mix-blend-multiply" />
                            <div className="absolute inset-0 bg-[#020617]/60" />
                        </div>
                    </div>

                    {categoryData.map((category, index) => (
                        <div key={index} className="relative group z-10 border-[0.5px] border-white/10 bg-[#0a0f1a]/40 backdrop-blur-sm hover:bg-transparent transition-colors duration-500">
                            <Link
                                href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                                className="relative aspect-[3/4] sm:aspect-[4/5] block overflow-hidden"
                                aria-label={`Learn more about ${category.name} industry solutions`}
                                onMouseEnter={() => setHoveredImage(category.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                {/* Individual Card Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage && hoveredImage ? 'opacity-0 scale-110' : 'opacity-60 scale-100'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent group-hover:from-[#020617]/80 group-hover:via-transparent transition-all duration-500" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end items-center text-center p-6 z-10 transition-all duration-500 ease-out transform group-hover:justify-center">

                                    {/* Icon Emoji */}
                                    <div className="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                        {category.icon}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4a8cd4] group-hover:to-[#ff4747]">
                                        {category.name}
                                    </h3>

                                    <p className="text-sm text-gray-300 mb-4 max-w-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-0 h-0 transition-all duration-500 group-hover:opacity-100 group-hover:h-auto transform group-hover:-translate-y-2 line-clamp-3">
                                        {category.desc}
                                    </p>

                                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#376bab] to-[#d2292b] group-hover:w-20 transition-all duration-500 transform group-hover:-translate-y-2" />

                                    <div className="mt-6 opacity-0 translate-y-4 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 absolute bottom-6">
                                        <span className="text-white flex items-center gap-2 text-sm font-semibold tracking-wide hover:text-[#4a8cd4] transition-colors">
                                            Explore Solutions <span className="text-lg">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>

                {/* Mobile Slider */}
                <div className="sm:hidden mt-8">
                    <Swiper
                        slidesPerView={1.1}
                        spaceBetween={16}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full !pb-12"
                    >
                        {categoryData.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                                    className="relative block overflow-hidden rounded-3xl border border-white/10 group"
                                    aria-label={`Learn more about ${category.name} industry solutions`}
                                >
                                    <div className="w-full aspect-[4/5] relative">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90" />
                                    </div>
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10">
                                        <div className="text-4xl mb-3">{category.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                                        <div className="h-[2px] w-12 bg-gradient-to-r from-[#376bab] to-[#d2292b] mx-auto mb-4" />
                                        <span className="text-[#4a8cd4] flex justify-center items-center gap-2 text-sm font-semibold">
                                            Explore Solutions <span>→</span>
                                        </span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};


export default IndustryExpertise;

