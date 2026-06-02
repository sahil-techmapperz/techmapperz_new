"use client";
import React, { useEffect, useRef } from 'react';
import { Globe, Settings, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const defaultFeatures = [
    {
        title: 'Innovation-Driven Approach',
        description: 'Techmapperz develops innovative solutions through advanced AI technology and GIS and cloud-based abilities to address future business problems.'
    },
    {
        title: 'Precision & Accuracy',
        description: 'Each manufactured solution originates from data analysis and meets the exact requirements of your business operations.'
    },
    {
        title: 'Scalable & Custom Solutions',
        description: 'Individually customized delivery services exist for both startups and enterprises of all scales as per project requirements.'
    },
    {
        title: 'Client-Centric & Agile Execution',
        description: 'Techmapperz functions as an interactive partner with our clients to deliver transparent solutions that lead to significant business outcomes.'
    },
    {
        title: 'Multi-Industry Expertise',
        description: 'Our services target public sector institutions in addition to urban development, agricultural and energy and infrastructure sectors.'
    },
    {
        title: 'Cost-Effective',
        description: 'With our process optimization, we provide affordable prices while maintaining quality, delivering high-value services to businesses and organizations'
    }
];

const WhyChooseTechmapperz = ({ features, heading = "Why Choose Us" }) => {
    
    // Safety check: ensure features is an array, otherwise use default
    const featuresList = Array.isArray(features) && features.length > 0 
        ? features
        : defaultFeatures;

    const leftFeatures = featuresList.filter((_, index) => index % 2 === 0);
    const rightFeatures = featuresList.filter((_, index) => index % 2 !== 0);

    const containerRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current) return;
        
        let ctx = gsap.context(() => {
            // Animate Left items
            gsap.fromTo('.hub-left-item', 
                { opacity: 0, x: -50 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8, 
                    stagger: 0.15, 
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".hub-container", start: "top 75%" }
                }
            );

            // Animate Right items
            gsap.fromTo('.hub-right-item', 
                { opacity: 0, x: 50 },
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8, 
                    stagger: 0.15, 
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".hub-container", start: "top 75%" }
                }
            );

            // Animate Center Orb
            gsap.fromTo('.hub-center-orb', 
                { opacity: 0, scale: 0.5 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 1, 
                    ease: "back.out(1.7)",
                    scrollTrigger: { trigger: ".hub-container", start: "top 75%" }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative py-24 bg-[#070A11] overflow-hidden border-t border-white/5" ref={containerRef}>
            
            {/* Deep Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2d5689]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#05D7DE]/10 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/portfolio/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">The Techmapperz Advantage</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
                        {heading}
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#05D7DE] mx-auto rounded-full" />
                </div>

                {/* Hub and Spoke Layout Container */}
                <div className="hub-container relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 max-w-7xl mx-auto">
                    
                    {/* Background Connecting Lines (Visible only on Large Screens) */}
                    <div className="hidden lg:block absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#05D7DE]/30 to-transparent -translate-y-1/2 shadow-[0_0_10px_rgba(5,215,222,0.5)]"></div>
                        <div className="absolute top-1/4 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#2d5689]/30 to-transparent rotate-45 transform origin-center shadow-[0_0_10px_rgba(45,86,137,0.5)]"></div>
                        <div className="absolute bottom-1/4 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#2d5689]/30 to-transparent -rotate-45 transform origin-center shadow-[0_0_10px_rgba(45,86,137,0.5)]"></div>
                    </div>

                    {/* Left Column (Odds) */}
                    <div className="flex flex-col gap-8 w-full lg:w-[400px] xl:w-[450px] relative z-10">
                        {leftFeatures.map((feature, idx) => {
                            const originalIndex = idx * 2; // 0, 2, 4
                            const badgeNumber = originalIndex + 1; // 1, 3, 5
                            
                            return (
                                <div key={idx} className="hub-left-item group relative flex items-center justify-end text-right">
                                    <div className="bg-[#111622]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] w-full transition-all duration-300 hover:bg-[#161C28] hover:border-[#05D7DE]/30 hover:shadow-[0_0_30px_rgba(5,215,222,0.1)] relative">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#05D7DE] transition-colors">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                    
                                    {/* Number Badge (Overlapping Right) */}
                                    <div className="absolute -right-5 md:-right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2d5689] to-[#05D7DE] text-white flex items-center justify-center font-bold text-lg border-4 border-[#070A11] shadow-[0_0_15px_rgba(5,215,222,0.5)] group-hover:scale-110 transition-transform duration-300 z-20">
                                        {badgeNumber}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Graphic */}
                    <div className="hub-center-orb relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 z-20 my-10 lg:my-0 flex items-center justify-center">
                        {/* Outer rotating dashed ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#05D7DE]/30 animate-[spin_20s_linear_infinite]"></div>
                        
                        {/* Middle glowing solid ring */}
                        <div className="absolute inset-4 rounded-full border border-[#2d5689]/50 shadow-[0_0_50px_rgba(45,86,137,0.4)]"></div>
                        
                        {/* Inner animated core */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#111622] to-[#1A2235] border border-white/10 shadow-inner flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[#05D7DE]/5 animate-pulse"></div>
                            
                            {/* Complex Icon composition */}
                            <div className="relative flex items-center justify-center">
                                <Globe className="text-[#05D7DE] w-24 h-24 absolute opacity-80" strokeWidth={1} />
                                <Settings className="text-[#2d5689] w-32 h-32 absolute animate-[spin_10s_linear_infinite_reverse] opacity-40" strokeWidth={1} />
                                <Network className="text-white w-12 h-12 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Evens) */}
                    <div className="flex flex-col gap-8 w-full lg:w-[400px] xl:w-[450px] relative z-10">
                        {rightFeatures.map((feature, idx) => {
                            const originalIndex = (idx * 2) + 1; // 1, 3, 5
                            const badgeNumber = originalIndex + 1; // 2, 4, 6
                            
                            return (
                                <div key={idx} className="hub-right-item group relative flex items-center justify-start text-left">
                                    {/* Number Badge (Overlapping Left) */}
                                    <div className="absolute -left-5 md:-left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#2d5689] to-[#05D7DE] text-white flex items-center justify-center font-bold text-lg border-4 border-[#070A11] shadow-[0_0_15px_rgba(5,215,222,0.5)] group-hover:scale-110 transition-transform duration-300 z-20">
                                        {badgeNumber}
                                    </div>

                                    <div className="bg-[#111622]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] w-full transition-all duration-300 hover:bg-[#161C28] hover:border-[#05D7DE]/30 hover:shadow-[0_0_30px_rgba(5,215,222,0.1)] relative">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#05D7DE] transition-colors">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseTechmapperz;