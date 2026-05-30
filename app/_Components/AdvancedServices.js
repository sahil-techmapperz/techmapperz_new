"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AdvancedServices = ({
    title = "Our Website Development Services",
    description = "We Design And Develop Mobile-Responsive, Fast, Secure, And Scalable Websites That Help Businesses Establish A Strong Online Presence And Generate Real Results",
    services = []
}) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".animate-header", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: ".animate-header", start: "top 85%" } }
        );

        gsap.fromTo(".animate-card", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".animate-card", start: "top 85%" } }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-20 bg-[#040810] overflow-hidden text-white">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        className="animate-header opacity-0 text-3xl md:text-4xl lg:text-[38px] font-bold font-['Segoe_UI'] text-white mb-5"
                    >
                        {title}
                    </h2>
                    <p
                        className="animate-header opacity-0 text-[14px] md:text-[16px] text-[#E0E0E0] font-light leading-relaxed"
                    >
                        {description}
                    </p>
                </div>

                {/* Cards Grid — 4 columns on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id || index}
                            className="animate-card opacity-0 group relative flex flex-col rounded-2xl border bg-[linear-gradient(111.49deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] border-blue-500 overflow-hidden p-6 lg:p-8 h-full"
                            style={{ boxShadow: '0 0 30px rgba(14,38,74,0.6)' }}
                        >
                            {/* Hover glow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white border border-[#1e3a6e] flex-shrink-0">
                                <div className="relative w-9 h-9">
                                    <Image
                                        unoptimized
                                        src="/website_Development_service_img/webdevelopment_service_icon.png"
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[18px] font-bold text-white mb-4 leading-snug">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] text-[#CAD5E2] font-['Segoe_UI'] font-[500] leading-[20px] tracking-[2%] flex-grow mb-8">
                                {service.description}
                            </p>

                            {/* CTA Button */}
                            <div className="mt-auto">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white rounded-full bg-[rgba(59,130,246,0.27)] border border-[rgba(59,130,246,0.27)]"
                                >
                                    Discuss Your Project
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvancedServices;
