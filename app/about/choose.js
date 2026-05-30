'use client'
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle } from "react-icons/fi";
import { FaRegMap, FaCode, FaChartLine, FaTrophy } from "react-icons/fa";

const Choose = () => {

    const accordionData = [
        {
            title: "Plan",
            content: "We understand the problem, define the goals, and create the right strategy.",
            icon: <FaRegMap />
        },
        {
            title: "Create",
            content: "We design and develop the right solution using suitable tools and technologies.",
            icon: <FaCode />
        },
        {
            title: "Optimize",
            content: "We refine workflows, improve usability, and ensure the solution performs effectively.",
            icon: <FaChartLine />
        },
        {
            title: "Achieve",
            content: "We help clients generate measurable results, business value, and long-term impact.",
            icon: <FaTrophy />
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden">
            {/* Atmospheric Glows */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#4a8cd4]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col space-y-24">

                {/* Top Section: Image & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Container */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4a8cd4]/20 to-[#d2292b]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full flex justify-center items-center"
                        >
                            <Image
                                src="/Photos/Aboutus3.webp"
                                alt="Why Choose Techmapperz"
                                width={600}
                                height={400}
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-2 transition-transform duration-700 z-10"
                            />
                        </motion.div>
                    </div>

                    {/* Description Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-8 bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2rem] backdrop-blur-md shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4a8cd4] to-[#d2292b]"></div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight">
                            Why Choose Techmapperz?
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><FiCheckCircle className="text-[#d2292b] mt-1 shrink-0" /> <span><strong className="text-white font-medium">Proven Expertise:</strong> Team of certified geospatial analysts and developers with 20+ major projects completed.</span></li>
                                <li className="flex items-start gap-3"><FiCheckCircle className="text-[#d2292b] mt-1 shrink-0" /> <span><strong className="text-white font-medium">Quality & Reliability:</strong> ISO-certified processes (ISO 9001) ensure on-time, on-budget delivery.</span></li>
                                <li className="flex items-start gap-3"><FiCheckCircle className="text-[#d2292b] mt-1 shrink-0" /> <span><strong className="text-white font-medium">Client Satisfaction:</strong> Over 90% of clients are repeat or referred customers; we treat every project with attention to detail.</span></li>
                                <li className="flex items-start gap-3"><FiCheckCircle className="text-[#d2292b] mt-1 shrink-0" /> <span><strong className="text-white font-medium">Innovation:</strong> We embrace the latest tech (AI-driven imagery processing, cloud GIS platforms) to give you an edge.</span></li>
                            </ul>
                        </div>
                    </motion.div>

                </div>


                {/* Bottom Section: The Accordion Process */}
                <div className="flex flex-col items-center space-y-12 max-w-4xl mx-auto w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mx-auto">
                            <FiCheckCircle className="text-[#a82123]" />
                            <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Our Process</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                            Turning Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">Impact</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10 pt-8">
                        {/* Interactive Connecting Line for Large Screens */}
                        <div className="hidden lg:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

                        {accordionData.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                key={index}
                                className="group relative bg-[#0B0F19] border border-white/5 rounded-2xl p-8 hover:border-[#4a8cd4]/50 transition-all duration-500 overflow-hidden shadow-lg h-full flex flex-col items-center text-center z-10"
                            >
                                {/* Glowing top border on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a8cd4] to-[#d2292b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                {/* Background massive number */}
                                <div className="absolute top-[-20px] right-[-10px] text-[120px] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none">
                                    0{index + 1}
                                </div>

                                {/* Icon container */}
                                <div className="relative w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#4a8cd4]/10 group-hover:border-[#4a8cd4]/30 group-hover:text-[#4a8cd4] transition-all duration-500 text-gray-400">
                                    {/* Icon glow */}
                                    <div className="absolute inset-0 bg-[#4a8cd4]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10">{item.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#4a8cd4] transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-300 transition-colors duration-300">
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Choose;
