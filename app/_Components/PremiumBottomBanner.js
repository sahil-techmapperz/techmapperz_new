"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa6";

const PremiumBottomBanner = () => {
    return (
        <section className="relative bg-[#020617] py-24 px-6 md:px-12 text-center overflow-hidden border-t border-slate-800">
            {/* Ambient Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/Photos/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full transform -skew-y-12 pointer-events-none"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                >
                    <FaRocket className="text-white text-3xl transform -rotate-45 group-hover:rotate-0 transition-transform" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-6 leading-tight"
                >
                    Ready to Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Presence?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mb-12"
                >
                    Let's build a modern, high-performing website that helps your business stand out, attract more customers, and thrive online.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative group"
                >
                    {/* Glowing border effect for button */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

                    <Link href="/contact" className="relative inline-flex items-center justify-center px-12 py-5 bg-slate-900 border border-slate-700 text-white rounded-full font-bold text-xl hover:bg-slate-800 transition-all transform hover:scale-105 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 group-hover:text-white transition-colors duration-300">
                                Book a Free Consultation
                            </span>
                        </span>
                        {/* Hover reveal gradient */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PremiumBottomBanner;
