"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdSearch, MdDocumentScanner, MdDesignServices, MdCode, MdBugReport, MdSettings } from 'react-icons/md';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ModernRoadmap = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useGSAP(() => {
        // Header animations
        gsap.fromTo(".animate-header-badge", 
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ".animate-header-badge", start: "top 85%" } }
        );
        gsap.fromTo(".animate-header-title", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".animate-header-badge", start: "top 85%" } }
        );
        gsap.fromTo(".animate-header-desc", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: ".animate-header-badge", start: "top 85%" } }
        );

        // Vertical Line Scroll Animation
        if (lineRef.current) {
            gsap.fromTo(lineRef.current, 
                { scaleY: 0 },
                { scaleY: 1, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top center", end: "bottom center", scrub: true } }
            );
        }

        // Left Cards
        gsap.utils.toArray(".animate-card-left").forEach((card) => {
            gsap.fromTo(card, 
                { opacity: 0, x: -50, y: 20 },
                { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "back.out(1.7)", scrollTrigger: { trigger: card, start: "top 85%" } }
            );
        });

        // Right Cards
        gsap.utils.toArray(".animate-card-right").forEach((card) => {
            gsap.fromTo(card, 
                { opacity: 0, x: 50, y: 20 },
                { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "back.out(1.7)", scrollTrigger: { trigger: card, start: "top 85%" } }
            );
        });

        // Center Nodes
        gsap.utils.toArray(".animate-node").forEach((node) => {
            gsap.fromTo(node, 
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.4, delay: 0.2, ease: "back.out(1.7)", scrollTrigger: { trigger: node, start: "top 85%" } }
            );
        });
    }, { scope: containerRef });

    const steps = [
        {
            id: '01',
            title: 'Discovery Workshop',
            icon: <MdSearch className="text-3xl" />,
            description: 'The workshop is designed to be transparent, informative and innovation-led. We conduct in-depth research, gather data, and analyse it to evaluate feasibility, practicality, and usability. These insights help craft user personas, define project scope, and set clear goals.',
            color: 'from-blue-500 to-cyan-400',
            shadow: 'shadow-blue-500/30'
        },
        {
            id: '02',
            title: 'Planning & Documentation',
            icon: <MdDocumentScanner className="text-3xl" />,
            description: 'We prioritize user experience, security, and performance in our carefully planned development process. Our ability to adapt and provide compliant, tailored software solutions satisfying international requirements is made possible by this pivotal stage.',
            color: 'from-purple-500 to-indigo-400',
            shadow: 'shadow-purple-500/30'
        },
        {
            id: '03',
            title: 'UX/UI Design',
            icon: <MdDesignServices className="text-3xl" />,
            description: 'Producing smooth, intuitive digital experiences. Content is arranged naturally to improve user engagement. We create designs that focus user demands, increase happiness, and fit with your company goals by fusing practical design with pleasing visuals.',
            color: 'from-pink-500 to-rose-400',
            shadow: 'shadow-pink-500/30'
        },
        {
            id: '04',
            title: 'Development Process',
            icon: <MdCode className="text-3xl" />,
            description: 'Our development process goes beyond code—we craft unique, tailor-made solutions designed to solve real challenges. By combining innovation with industry best practices, we deliver secure, scalable, and high-performing applications.',
            color: 'from-orange-500 to-amber-400',
            shadow: 'shadow-orange-500/30'
        },
        {
            id: '05',
            title: 'Testing & Deployment',
            icon: <MdBugReport className="text-3xl" />,
            description: 'Ensuring your software is robust, secure, and ready for launch. We conduct thorough testing to identify and resolve issues, guaranteeing optimal performance, followed by careful deployment and post-release monitoring.',
            color: 'from-emerald-500 to-teal-400',
            shadow: 'shadow-emerald-500/30'
        },
        {
            id: '06',
            title: 'Support & Maintenance',
            icon: <MdSettings className="text-3xl" />,
            description: 'Post-launch assistance to improve functionality and durability. We guarantee dependability and smooth operation with bug fixes, updates, security patches, and technical assistance—reducing downtime and ensuring long-term success.',
            color: 'from-blue-600 to-indigo-600',
            shadow: 'shadow-blue-600/30'
        }
    ];

    return (
        <section className="bg-[#030712] py-24 relative overflow-hidden" ref={containerRef}>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/Photos/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div
                        className="animate-header-badge opacity-0 inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-gray-300 font-medium text-sm tracking-widest uppercase mb-4 border border-slate-700/50"
                    >
                        Our Process
                    </div>
                    <h2
                        className="animate-header-title opacity-0 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    >
                        Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Roadmap</span>
                    </h2>
                    <p
                        className="animate-header-desc opacity-0 mt-4 text-xl text-gray-400 max-w-3xl mx-auto font-light"
                    >
                        A systematic, transparent approach from concept to deployment.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Vertical Line (visible on md and up) */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-slate-800/50 -translate-x-1/2 rounded-full overflow-hidden">
                        <div
                            ref={lineRef}
                            className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
                            style={{
                                height: '100%',
                                transformOrigin: 'top'
                            }}
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between cursor-default group w-full">

                                    {/* Left Content Area */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] flex md:justify-end ${!isEven ? 'hidden md:flex' : ''}`}>
                                        {isEven && (
                                            <div
                                                className="animate-card-left opacity-0 relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors duration-500 w-full"
                                            >
                                                <div className="absolute -top-6 -right-6 text-7xl font-black text-slate-800/30 pointer-events-none select-none">
                                                    {step.id}
                                                </div>

                                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] ${step.shadow} shadow-lg shrink-0`}>
                                                        <div className="w-full h-full bg-slate-900/90 rounded-[15px] flex items-center justify-center text-white/90">
                                                            {step.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center Node */}
                                    <div
                                        className={`animate-node opacity-0 hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-[#030712] items-center justify-center z-20 ${step.shadow} shadow-xl group-hover:scale-110 transition-transform duration-500`}
                                    >
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color}`}></div>
                                    </div>

                                    {/* Right Content Area */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] flex md:justify-start ${isEven ? 'hidden md:flex' : ''}`}>
                                        {!isEven && (
                                            <div
                                                className="animate-card-right opacity-0 relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors duration-500 w-full"
                                            >
                                                <div className="absolute -top-6 -right-6 text-7xl font-black text-slate-800/30 pointer-events-none select-none">
                                                    {step.id}
                                                </div>

                                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] ${step.shadow} shadow-lg shrink-0`}>
                                                        <div className="w-full h-full bg-slate-900/90 rounded-[15px] flex items-center justify-center text-white/90">
                                                            {step.icon}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
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

export default ModernRoadmap;
