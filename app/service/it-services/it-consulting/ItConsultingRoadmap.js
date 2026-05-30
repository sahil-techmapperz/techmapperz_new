"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ItConsultingRoadmap = () => {
    const steps = [
        {
            title: "Consultation & Assessment",
            description: "We begin with a detailed analysis of your current IT landscape and business objectives."
        },
        {
            title: "Strategy & Planning",
            description: "Next, we design a customized IT strategy and roadmap (including budgets and timelines)."
        },
        {
            title: "Implementation",
            description: "Our team implements solutions – building or upgrading systems, migrating to cloud, and integrating software."
        },
        {
            title: "Review & Optimize",
            description: "After deployment, we monitor performance, provide training, and refine the solution to ensure lasting benefits."
        },
        {
            title: "Ongoing Support",
            description: "We stay engaged as your technology partner, offering maintenance and future enhancements."
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] border-t border-white/5 overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Our IT Consulting <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Process</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A structured roadmap to transform your business operations through specialized staging.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical connecting line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-teal-500/20 via-blue-500/20 to-purple-500/20 -translate-x-1/2"></div>

                    {/* Vertical connecting line for mobile */}
                    <div className="md:hidden absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-teal-500/20 via-blue-500/20 to-purple-500/20"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Number Badge */}
                                    <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-slate-900 border-2 border-blue-500/50 rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-500 font-bold text-xl">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Content Card container - desktop halves */}
                                    <div className="w-full md:w-1/2 pl-20 md:pl-0">
                                        <div className={`p-8 bg-[#0B0F1A] border border-white/5 rounded-3xl hover:border-blue-500/30 transition-colors duration-300 relative group overflow-hidden ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                                            {/* Hover Glow Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-[16px]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty half for desktop spacing */}
                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItConsultingRoadmap;
