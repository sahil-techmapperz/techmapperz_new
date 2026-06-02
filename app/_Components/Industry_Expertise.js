"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, GraduationCap, Landmark, HeartPulse, Truck, Factory, Store, Plane } from 'lucide-react';

import Ecommerce from "@/public/Industry/E-commerce.webp";
import Education from "@/public/Industry/Education-E-learning.webp";
import Government from "@/public/Industry/Goverment-Public-Sector.webp";
import Healthcare from "@/public/Industry/Healthcare.webp";
import Logistics from "@/public/Industry/Logistic-Supply-Chain.webp";
import Manufacturing from "@/public/Industry/Manufacturing.webp";
import Retail from "@/public/Industry/Retail.webp";
import Travel from "@/public/Industry/Travel-Hospitality.webp";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const categoryData = [
    {
        name: 'E-Commerce',
        shortName: 'Retail Tech',
        image: Ecommerce,
        desc: "Comprehensive e-commerce solutions to help businesses thrive in the digital marketplace.",
        icon: <ShoppingCart size={28} strokeWidth={1.5} />,
        accent: "from-blue-600 to-cyan-400",
        categoryTypes: ["B2B Solutions", "Online Marketplaces", "Payment Integration", "Inventory Management"]
    },
    {
        name: 'Education & E-Learning',
        shortName: 'Education',
        image: Education,
        desc: "Digital learning platforms and solutions that transform educational experiences.",
        icon: <GraduationCap size={28} strokeWidth={1.5} />,
        accent: "from-purple-600 to-pink-500",
        categoryTypes: ["LMS Development", "Virtual Classrooms", "Educational Apps", "Interactive Content"]
    },
    {
        name: 'Government Sector',
        shortName: 'Government',
        image: Government,
        desc: "Digital solutions for efficient governance and public service delivery.",
        icon: <Landmark size={28} strokeWidth={1.5} />,
        accent: "from-amber-500 to-orange-500",
        categoryTypes: ["E-Governance", "Public Services", "Digital Documentation", "Citizen Portals"]
    },
    {
        name: 'Healthcare',
        shortName: 'Healthcare',
        image: Healthcare,
        desc: "Innovative healthcare solutions for improved patient care and management.",
        icon: <HeartPulse size={28} strokeWidth={1.5} />,
        accent: "from-rose-600 to-red-500",
        categoryTypes: ["EMR Systems", "Telemedicine", "Healthcare Apps", "Medical Analytics"]
    },
    {
        name: 'Supply Chain',
        shortName: 'Logistics',
        image: Logistics,
        desc: "End-to-end solutions for streamlined logistics and supply chain operations.",
        icon: <Truck size={28} strokeWidth={1.5} />,
        accent: "from-emerald-500 to-teal-400",
        categoryTypes: ["Fleet Management", "Inventory Tracking", "Supply Chain Analytics", "Route Optimization"]
    },
    {
        name: 'Manufacturing',
        shortName: 'Industry 4.0',
        image: Manufacturing,
        desc: "Digital solutions to optimize manufacturing processes and efficiency.",
        icon: <Factory size={28} strokeWidth={1.5} />,
        accent: "from-slate-500 to-gray-400",
        categoryTypes: ["Process Automation", "Quality Control", "Production Planning", "Industrial IoT"]
    },
    {
        name: 'Retail Solutions',
        shortName: 'Retail',
        image: Retail,
        desc: "Innovative retail solutions for enhanced customer experience and operations.",
        icon: <Store size={28} strokeWidth={1.5} />,
        accent: "from-indigo-600 to-blue-500",
        categoryTypes: ["POS Systems", "Inventory Management", "Customer Analytics", "Omnichannel Retail"]
    },
    {
        name: 'Travel & Hospitality',
        shortName: 'Travel',
        image: Travel,
        desc: "Digital solutions for seamless travel and hospitality experiences.",
        icon: <Plane size={28} strokeWidth={1.5} />,
        accent: "from-sky-500 to-blue-400",
        categoryTypes: ["Booking Systems", "Hotel Management", "Travel Apps", "Customer Experience"]
    }
];

const IndustryExpertise = () => {
    const containerRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0); // Set first panel as active by default for desktop

    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current) return;
        
        let ctx = gsap.context(() => {
            gsap.fromTo('.industry-section', 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-black relative py-24 overflow-hidden industry-section" ref={containerRef}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2d5689] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

            <div className="max-w-[1500px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#a82123] text-sm font-bold tracking-[0.2em] uppercase">Our Domains</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
                        Industry Expertise
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#a82123] mx-auto rounded-full" />
                </div>

                {/* Desktop Interactive Expanding Accordion Grid */}
                <div className="hidden lg:flex w-full h-[600px] gap-4">                    
                    {categoryData.map((category, index) => {
                        const isActive = activeIdx === index;
                        return (
                            <Link
                                key={index}
                                href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                                onMouseEnter={() => setActiveIdx(index)}
                                className={`relative h-full rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
                                    ${isActive ? 'flex-[6] shadow-2xl shadow-[#2d5689]/30' : 'flex-1 border border-white/5 bg-gray-900/50 hover:border-white/20'}
                                `}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-cover transition-all duration-1000 ease-out 
                                            ${isActive ? 'opacity-100 scale-105 filter-none' : 'opacity-30 scale-100 grayscale-[50%] blur-[2px]'}
                                        `}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 transition-all duration-700
                                        ${isActive 
                                            ? 'bg-gradient-to-t from-black via-black/60 to-transparent' 
                                            : 'bg-black/60'}
                                    `} />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10 h-full w-full flex flex-col justify-end p-8">
                                    
                                    {/* Inactive State Content (Vertical/Small) */}
                                    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-all duration-500 w-full
                                        ${isActive ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}
                                    `}>
                                        <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 backdrop-blur-md">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-white/70 font-semibold text-sm tracking-widest uppercase whitespace-nowrap -rotate-90 origin-center mb-20 transform translate-y-12">
                                            {category.shortName}
                                        </h3>
                                    </div>

                                    {/* Active State Content (Expanded) */}
                                    <div className={`flex flex-col h-full justify-between transition-all duration-700 delay-100
                                        ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none absolute'}
                                    `}>
                                        {/* Top Icon & Accent */}
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br p-[1px] shadow-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                                            <div className={`w-full h-full rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${category.accent}`}>
                                                {category.icon}
                                            </div>
                                        </div>

                                        {/* Bottom Text Area */}
                                        <div className="max-w-md bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl transform translate-y-0 opacity-100">
                                            <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-300 text-base leading-relaxed mb-6 drop-shadow-md">
                                                {category.desc}
                                            </p>
                                            
                                            <div className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
                                                Explore Solutions
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile & Tablet Slider (Unchanged logic, just styled to match) */}
                <div className="lg:hidden -mx-6 px-6">
                    <Swiper
                        slidesPerView={1.15}
                        spaceBetween={16}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full pb-14"
                        breakpoints={{
                            640: { slidesPerView: 2.15 }
                        }}
                    >
                        {categoryData.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link 
                                    href={`/industry/${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`} 
                                    className="industry-card relative block h-[400px] rounded-[2rem] overflow-hidden border border-white/10 group"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                                    </div>
                                    
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.accent} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                            {category.icon}
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">{category.desc}</p>
                                        
                                        <span className="text-[#799ccc] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2">
                                            Explore Solutions <span className="text-white">→</span>
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
