'use client';
import React from "react";
import { motion } from "framer-motion";

const TechStack = ({ techItems = [], Headingtext = "Technology We Use" }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Technologies</span>
                <h2 className="text-4xl max-sm:text-3xl font-extrabold text-white mt-3">{Headingtext}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            </div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {techItems && techItems.length > 0 && techItems.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative flex flex-col items-center justify-center p-6 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl hover:bg-[#05d7de]/5 hover:border-[#05d7de]/30 transition-all duration-300 cursor-default shadow-lg"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#05d7de] to-[#2d5689] opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl blur-xl pointer-events-none z-0" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                        
                            <div 
                                className="text-4xl mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                style={{ color: tech.textColor }}
                            >
                                {tech.icon}
                            </div>
                            <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                {tech.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;