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
                <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Technologies</span>
                <h2 className="text-4xl max-sm:text-3xl font-bold text-white mt-3">{Headingtext}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
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
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative flex flex-col items-center justify-center p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:bg-gray-800 transition-all duration-300 cursor-default"
                        style={{
                            boxShadow: `0 0 0 0 ${tech.textColor}00`,
                        }}
                    >
                        {/* Hover Glow effect based on brand color */}
                        <div 
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-xl"
                            style={{ backgroundColor: tech.textColor }}
                        />
                        
                        <div 
                            className="text-4xl mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            style={{ color: tech.textColor }}
                        >
                            {tech.icon}
                        </div>
                        <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                            {tech.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;