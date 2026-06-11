'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
    {
        title: "Smart website solution for business growth",
        description: "We developed a modern, responsive and conversion-focused platform that helped the client present services clearly, manage business information and generate better customer enquiries.",
        image: "/Photos/featured_case_study.png",
        badges: ["Website Development", "Dashboard", "Lead Generation", "Automation"],
        stats: [
            { value: "40%", label: "Faster workflow" },
            { value: "3x", label: "Better visibility" }
        ]
    },
    {
        title: "GIS Mapping and Asset Management Portal",
        description: "We created a high-precision GIS mapping platform that enables real-time asset tracking, data visualization, and field reporting for infrastructure management.",
        image: "/Photos/Agricultural_Mapping.webp",
        badges: ["GIS Mapping", "Asset Management", "Web Portal", "Real-Time Data"],
        stats: [
            { value: "95%", label: "Accuracy rate" },
            { value: "50%", label: "Time saved" }
        ]
    }
];

const FeaturedCaseStudy = () => {
    const currentStudy = caseStudies[0];

    return (
        <section className="w-full py-16 text-white bg-black">
            {/* Custom Responsive Styles to bypass JIT compilation issues */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .featured-image-container {
                    width: 100%;
                    height: 280px;
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                    flex-shrink: 0;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
                }
                @media (min-width: 768px) {
                    .featured-image-container {
                        width: 38% !important;
                        height: 340px !important;
                        border-radius: 1.5rem;
                    }
                }
                `
            }} />
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Card Container */}
                <div className="relative bg-[#0b0f19] border border-white/5 rounded-[2rem] p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Case Study Content */}
                        <div className="lg:col-span-8 relative w-full">
                            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch">
                                {/* Left Side: Image Card with Stats Overlays */}
                                <div className="featured-image-container group">
                                    <Image 
                                        src={currentStudy.image}
                                        alt={currentStudy.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                                    {/* Related Case Study tag */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white z-20">
                                        Related Case Study
                                    </div>

                                    {/* Stats Overlays */}
                                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 z-20">
                                        {currentStudy.stats.map((stat, i) => (
                                            <div 
                                                key={i} 
                                                className="bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-2.5 text-left shadow-sm"
                                            >
                                                <span className="block text-xl md:text-2xl font-black text-[#05d7de]">
                                                    {stat.value}
                                                </span>
                                                <span className="block text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Case Study Metadata */}
                                <div className="flex-1 flex flex-col justify-center text-left py-2">
                                    {/* Featured Work Tag */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse"></span>
                                        <span className="text-xs font-bold tracking-[0.15em] text-[#05d7de] uppercase">
                                            Featured Work
                                        </span>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 tracking-tight hover:text-[#05d7de] transition-colors duration-300">
                                        {currentStudy.title}
                                    </h3>

                                    {/* Project Description */}
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
                                        {currentStudy.description}
                                    </p>

                                    {/* Badges/Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {currentStudy.badges.map((badge, i) => (
                                            <span 
                                                key={i}
                                                className="px-3.5 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-xs font-semibold text-gray-300 hover:border-[#05d7de]/30 hover:bg-[#05d7de]/5 transition-all duration-300 cursor-default"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* View Case Study Link */}
                                    <div>
                                        <Link 
                                            href="/portfolios" 
                                            className="inline-flex items-center gap-2 text-[#05d7de] font-semibold text-sm hover:text-white transition-colors duration-300"
                                        >
                                            View Case Study
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Contact/CTA Box */}
                        <div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 text-left">
                            <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                Want a similar solution?
                            </h4>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                Let Techmapperz build a website, GIS dashboard, CRM, app or automation system based on your business requirement.
                            </p>

                            <div className="flex flex-col gap-4">
                                <Link 
                                    href="/contact"
                                    className="w-full py-[12px] px-8 rounded-full bg-gradient-to-r from-[#5278ff] to-[#e42e57] text-white font-bold text-[15px] tracking-wide hover:shadow-[0_14px_35px_rgba(5,215,222,0.26)] hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center"
                                >
                                    Request a Quote
                                </Link>
 
                                <Link 
                                    href="/portfolios"
                                    className="w-full py-[12px] px-8 rounded-full bg-white/[0.035] border border-white/10 text-white font-bold text-[15px] tracking-wide hover:bg-[#2563eb]/10 hover:border-[#60a5fa]/60 hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center"
                                >
                                    View All Case Studies
                                </Link>
                            </div>

                            {/* Small bullets footer */}
                            <div className="flex items-center justify-center gap-6 mt-6 text-xs md:text-sm font-semibold text-[#05d7de]/85">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-[#05d7de] rounded-full"></span>
                                    Free consultation
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-[#05d7de] rounded-full"></span>
                                    Custom development
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
