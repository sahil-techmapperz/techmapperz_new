"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PremiumTechStack = ({ techItems = [], headingText = "Technology We Use" }) => {

    // Animation Controls
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden" ref={ref}>
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 bg-[url('/Photos/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-gray-300 font-medium text-sm tracking-widest uppercase mb-4 border border-slate-700/50"
                    >
                        Tools & Technologies
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    >
                        Our Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        We leverage the latest frameworks and modern web technologies to build scalable, high-performance digital solutions.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
                >
                    {techItems && techItems.length > 0 && techItems.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className="group relative flex flex-col items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-colors duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Hover background glow specific to tech color */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                style={{ backgroundColor: tech.textColor || '#ffffff' }}
                            ></div>

                            {/* Tech Icon */}
                            <div
                                className="text-5xl mb-4 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 drop-shadow-md"
                                style={{ color: tech.textColor || '#ffffff' }}
                            >
                                {tech.icon}
                            </div>

                            {/* Tech Name */}
                            <p className="text-gray-300 font-medium text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                                {tech.name}
                            </p>

                            {/* Animated bottom border strip */}
                            <div
                                className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ backgroundColor: tech.textColor || '#3b82f6' }}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PremiumTechStack;
