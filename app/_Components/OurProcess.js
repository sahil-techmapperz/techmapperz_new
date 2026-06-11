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
        <section className="w-full text-white pt-6">
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 768px) {
                    .md-snake-item {
                        order: var(--md-order);
                    }
                }
                `
            }} />
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] mx-auto rounded-full"></div>
                    </div>
                )}

                <div className={`grid grid-cols-1 ${gridCols} gap-y-12 gap-x-6 relative`}>
                    {steps.map((step, index) => {
                        const rowIndex = Math.floor(index / colsCount);
                        const isEvenRow = rowIndex % 2 === 0;
                        const rowStartIndex = rowIndex * colsCount;
                        const offsetInRow = index - rowStartIndex;
                        const mdOrder = isEvenRow ? index + 1 : rowStartIndex + colsCount - offsetInRow;

                        const isLastInRow = (index + 1) % colsCount === 0 || index === count - 1;
                        const isLastOverall = index === count - 1;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % colsCount) * 0.15 }}
                                className="relative flex flex-col items-center text-center group md-snake-item"
                                style={{ '--md-order': mdOrder }}
                            >
                                {/* Desktop Horizontal Line */}
                                {!isLastInRow && !isLastOverall && (
                                    <div 
                                        className={`hidden md:block absolute top-10 h-[2px] z-0 ${isEvenRow ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#05d7de] to-[#2d5689]`}
                                        style={{ 
                                            width: 'calc(100% + 1.5rem)',
                                            left: '50%',
                                            transform: isEvenRow ? 'none' : 'translateX(-100%)'
                                        }}
                                    ></div>
                                )}

                                {/* Desktop Vertical/Side Row-to-Row Connectors */}
                                {isLastInRow && !isLastOverall && (
                                    <>
                                        {/* Horizontal segment leaving the last item of the row */}
                                        <div 
                                            className="hidden md:block absolute top-10 h-[2px] z-0 bg-[#2d5689]"
                                            style={{ 
                                                width: 'calc(50% + 0.75rem)',
                                                left: isEvenRow ? '50%' : 'auto',
                                                right: isEvenRow ? 'auto' : '50%',
                                            }}
                                        ></div>
                                        {/* Vertical segment connecting the rows */}
                                        <div 
                                            className={`hidden md:block absolute top-10 w-[2px] bg-gradient-to-b ${isEvenRow ? 'from-[#2d5689] to-[#05d7de]' : 'from-[#05d7de] to-[#2d5689]'} z-0`}
                                            style={{ 
                                                height: 'calc(100% + 3rem)',
                                                left: isEvenRow ? 'calc(100% + 0.75rem)' : 'calc(-0.75rem - 2px)'
                                            }}
                                        ></div>
                                    </>
                                )}

                                {/* Horizontal segment entering the first item of the next row */}
                                {index > 0 && index === rowStartIndex && (
                                    <div 
                                        className="hidden md:block absolute top-10 h-[2px] z-0 bg-[#05d7de]"
                                        style={{ 
                                            width: 'calc(50% + 0.75rem)',
                                            left: !isEvenRow ? '50%' : 'auto',
                                            right: !isEvenRow ? 'auto' : '50%',
                                        }}
                                    ></div>
                                )}

                                {/* Mobile Vertical Line */}
                                {!isLastOverall && (
                                    <div 
                                        className="md:hidden absolute top-10 left-1/2 w-[2px] bg-gradient-to-b from-[#05d7de] to-[#2d5689] z-0 -translate-x-1/2"
                                        style={{ height: 'calc(100% + 3rem)' }}
                                    ></div>
                                )}

                                {/* Step Number Circle */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#05d7de] to-[#2d5689] flex items-center justify-center z-10 mb-6 shadow-[0_0_30px_rgba(5,215,222,0.25)] group-hover:shadow-[0_0_50px_rgba(5,215,222,0.5)] group-hover:scale-110 transition-all duration-400 relative flex-shrink-0">
                                    <div className="absolute inset-1 bg-[#111111] rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-black text-white">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="relative w-full flex-1 flex flex-col transition-all duration-500 group-hover:-translate-y-2">
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[#05d7de] to-[#2d5689] opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl blur-xl pointer-events-none z-0" />
                                    
                                    <div className="relative z-10 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-6 group-hover:bg-[#05d7de]/5 group-hover:border-[#05d7de]/30 transition-all duration-300 w-full flex flex-col flex-1 shadow-lg text-left">
                                    <h3 className="text-xl font-bold mb-3 text-[#05d7de]">
                                        {step.title}
                                    </h3>
                                    
                                    <div className="text-sm text-gray-400 space-y-2 group-hover:text-gray-300 transition-colors duration-300">
                                        {step.descriptions.map((desc, i) => (
                                            <p key={i} className="leading-relaxed">{desc}</p>
                                        ))}
                                    </div>
                                    </div>
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
