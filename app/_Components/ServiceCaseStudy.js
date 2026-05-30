"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PremiumButton from "./PremiumButton";

import { itPortfolioData, gisPortfolioData } from "@/app/portfolios/PortfolioData";

const ServiceCaseStudy = ({ slug, type = "IT" }) => {
    const [caseStudy, setCaseStudy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the specific case study by slug, or just grab the first one if no slug is provided
        const timer = setTimeout(() => {
            const dataList = type === "GIS" ? gisPortfolioData : itPortfolioData;

            let found = null;
            if (slug) {
                found = dataList.find(item => item.slug === slug);
            }

            // Fallback to first item if slug not found or not provided
            if (!found && dataList.length > 0) {
                found = dataList[0];
            }

            setCaseStudy(found);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [slug, type]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 min-h-[400px]">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-t-blue-500 border-gray-700/50 border-solid rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (!caseStudy) return null;

    return (
        <section className="relative w-full py-16 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] rounded-3xl overflow-hidden group shadow-2xl shadow-blue-900/20"
                    >
                        {/* Decorative borders/glows */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                        <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none"></div>

                        <Image
                            src={caseStudy.image}
                            alt={caseStudy.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transform transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Floating elements overlay */}
                        <div className="absolute bottom-6 left-6 right-6 z-30 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="grid grid-cols-2 gap-4">
                                {caseStudy.results?.slice(0, 2).map((result, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-3xl font-bold text-white mb-1">{result.value}</span>
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{result.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Details Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Featured Case Study</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {caseStudy.name}
                            </h2>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-6">
                            {caseStudy.details[0]}
                        </p>

                        <div className="space-y-6">
                            {/* Tech Stack */}
                            {caseStudy.techStack && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.techStack.split(',').slice(0, 5).map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-md text-gray-300">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                        {caseStudy.techStack.split(',').length > 5 && (
                                            <span className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-md text-gray-300">
                                                +{caseStudy.techStack.split(',').length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Bullet points for challenges or solutions */}
                            {caseStudy.solutions && (
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Key Implementations</h4>
                                    <ul className="space-y-2">
                                        {caseStudy.solutions.slice(0, 3).map((solution, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="mt-1.5 text-blue-500 text-xs">◆</span>
                                                <span><strong className="text-white">{solution.title}:</strong> {solution.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="pt-4">
                            <PremiumButton 
                                href={`${caseStudy.link}`}
                                text="Read Full Case Study" 
                                variant="primary" 
                                icon={FaArrowRightLong} 
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServiceCaseStudy;
