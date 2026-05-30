"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleCheck, FaArrowRightLong } from "react-icons/fa6";
import PremiumButton from "./PremiumButton";

const PremiumWebsiteIntroduction = ({
    imageSrc = "/Photos/Websitedev.webp",
    imageAlt = "Web Development",
    paragraphs = [],
    services = [],
}) => {
    return (
        <section className="relative py-20 lg:py-32 bg-[#020617] overflow-hidden">
            {/* Ambient Lighting FX */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                {/* Top Section: Text Content */}
                {paragraphs && paragraphs.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16 space-y-6"
                    >
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side: Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative group"
                    >
                        {/* Decorative background shape behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 blur-xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-[3rem] border border-white/5 transform rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900/50 backdrop-blur-sm p-8 border border-slate-700/50 flex justify-center items-center aspect-[4/3]">
                            <Image
                                unoptimized
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="flex flex-col space-y-8"
                    >
                        {services && services.length > 0 && (
                            <div className="grid grid-cols-1 gap-6">
                                {services.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="flex items-center gap-5 group p-4 rounded-2xl hover:bg-slate-800/40 border border-transparent hover:border-slate-700/50 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300">
                                            <FaCircleCheck className="text-blue-400 text-xl" />
                                        </div>
                                        <p className="text-lg text-gray-200 leading-snug">
                                            {item.text} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{item.highlight}</span>
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        <motion.div
                            className="pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <PremiumButton 
                                href="/contact" 
                                text="Get a quote" 
                                variant="primary" 
                                icon={FaArrowRightLong} 
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* Add global CSS for the horizontal bounce animation if it doesn't exist */}
            <style jsx global>{`
                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(25%); }
                }
                .animate-bounce-x {
                    animation: bounce-x 1s infinite;
                }
            `}</style>
        </section>
    );
};

export default PremiumWebsiteIntroduction;
