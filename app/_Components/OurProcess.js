'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurProcess = ({ steps = [], title = "Our Process" }) => {
    // Dynamically pick the best grid columns based on step count
    const count = steps.length;
    let gridCols = 'md:grid-cols-5';
    let colsCount = 5;

    if (count === 3) { gridCols = 'md:grid-cols-3'; colsCount = 3; }
    else if (count === 4) { gridCols = 'md:grid-cols-4'; colsCount = 4; }
    else if (count === 6) { gridCols = 'md:grid-cols-3 lg:grid-cols-3'; colsCount = 3; }
    else if (count === 8) { gridCols = 'md:grid-cols-4'; colsCount = 4; }

    return (
        <section className="w-full text-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] mx-auto rounded-full"></div>
                    </div>
                )}

                <div className={`grid grid-cols-1 ${gridCols} gap-y-12 gap-x-6 relative`}>
                    {steps.map((step, index) => {
                        const isLastInRow = (index + 1) % colsCount === 0 || index === count - 1;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % colsCount) * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Connecting Line to the right */}
                                {!isLastInRow && (
                                    <div className="hidden md:block absolute top-10 left-[50%] w-full h-[2px] bg-gradient-to-r from-[#2d5689] to-gray-800 -z-10"></div>
                                )}

                                {/* Connecting Line to the bottom (for mobile) */}
                                {index !== count - 1 && (
                                    <div className="md:hidden absolute top-[80px] left-[50%] w-[2px] h-[calc(100%+48px)] bg-gradient-to-b from-[#2d5689] to-gray-900 -z-10 -translate-x-1/2"></div>
                                )}

                                {/* Step Number Circle */}
                                <div className="w-20 h-20 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center z-10 mb-6 shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2d5689]/40 to-[#a82123]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-[2px] bg-gray-950 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#799ccc] to-[#e66c6e]">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#799ccc] transition-colors duration-300">
                                    {step.title}
                                </h3>
                                
                                <div className="text-sm text-gray-400 space-y-2 max-w-[90%]">
                                    {step.descriptions.map((desc, i) => (
                                        <p key={i} className="leading-relaxed">{desc}</p>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
