"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaShieldAlt, FaRocket, FaPiggyBank } from 'react-icons/fa';

const ItConsultingWhyChoose = () => {
    const reasons = [
        {
            title: "Experienced Team",
            description: "Our certified consultants have 15+ years in IT strategy and execution.",
            icon: <FaUserTie className="text-3xl" />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Full Accountability",
            description: "We take 100% ownership of your project, with a dedicated team and regular CEO oversight.",
            icon: <FaShieldAlt className="text-3xl" />,
            color: "from-purple-500 to-indigo-400"
        },
        {
            title: "Rapid Delivery",
            description: "Our agile process accelerates time-to-market; we deploy the right people and tools to deliver results quickly.",
            icon: <FaRocket className="text-3xl" />,
            color: "from-orange-500 to-red-400"
        },
        {
            title: "Cost-Effective Solutions",
            description: "We optimize your technology spend, leveraging proven frameworks to deliver maximum value (e.g. clients report up to 30% cost reductions).",
            icon: <FaPiggyBank className="text-3xl" />,
            color: "from-green-500 to-emerald-400"
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#030712] overflow-hidden">
            {/* Ambient Background Splashes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Our Advantage</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Why Choose Techmapperz for <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                IT Consulting
                            </span>
                        </h2>  
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        We combine deep technical expertise with a client-first approach to ensure your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="group relative bg-[#0a0f1c] border border-white/5 p-8 rounded-3xl hover:bg-slate-900/80 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Top Border Highlight */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} p-[1px] shadow-lg shadow-black/50 group-hover:-translate-y-2 transition-transform duration-500`}>
                                    <div className="w-full h-full bg-[#0a0f1c] rounded-2xl flex items-center justify-center text-white">
                                        <div className={`bg-gradient-to-br ${reason.color} bg-clip-text text-transparent text-white duration-300`}>
                                            {reason.icon}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px] group-hover:text-gray-300 transition-colors duration-300">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItConsultingWhyChoose;
