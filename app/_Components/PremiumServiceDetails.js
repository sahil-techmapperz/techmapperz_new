"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PremiumServiceDetails = ({ title, description, services }) => {
    return (
        <section className="relative py-24 bg-[#050B14] overflow-hidden text-white">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-[url('/Photos/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-wide text-sm mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        WHAT WE FOCUS ON
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {services?.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.id || index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                {/* Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="w-full lg:w-1/2 relative group"
                                >
                                    {/* Abstract decorative frame */}
                                    <div className={`absolute -z-10 w-full h-full rounded-3xl border border-blue-500/30 ${isEven ? '-top-5 -left-5' : '-top-5 -right-5'} transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                                    <div className={`absolute -z-10 w-full h-full rounded-3xl bg-blue-900/10 ${isEven ? 'top-5 left-5' : 'top-5 right-5'} transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}></div>

                                    {/* Main Image Container */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none"></div>
                                    </div>

                                    <div className={`absolute ${isEven ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none`}></div>
                                </motion.div>

                                {/* Content Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="w-full lg:w-1/2 flex flex-col justify-center"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 font-bold text-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light hidden md:block">
                                        {service.description}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed mb-8 font-light md:hidden">
                                        {service.description}
                                    </p>

                                    <div className="mt-2">
                                        <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-transparent border border-blue-500/50 rounded-full hover:bg-blue-600/10 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                            Discuss This Service
                                            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PremiumServiceDetails;
