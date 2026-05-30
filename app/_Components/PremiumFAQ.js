"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { FAQJsonLd } from "./JsonLd";

const PremiumFAQ = ({ faqData = [] }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqData || faqData.length === 0) return null;

    return (
        <section className="relative py-24 bg-[#0a0f1c] overflow-hidden">
            <FAQJsonLd faqs={faqData} />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-gray-300 font-medium text-sm tracking-widest uppercase mb-4 border border-slate-700/50"
                    >
                        Got Questions?
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Questions</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 gap-6 relative z-10">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`relative overflow-hidden cursor-pointer group rounded-2xl border bg-slate-900/40 ${isOpen ? 'border-blue-500/50 bg-slate-800/80 shadow-[0_8px_30px_rgba(59,130,246,0.1)]' : 'border-slate-700/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)]'} hover:bg-slate-800/80 hover:border-blue-500/30 backdrop-blur-md transition-all duration-300 p-6 md:p-8 flex flex-col`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {/* Subtle Top Glow on Hover/Active */}
                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform ${isOpen ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                                {/* Icon & Question */}
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className={`text-[19px] font-semibold leading-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white'} group-hover:text-blue-300`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-slate-600 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-300'}`}>
                                        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            {/* Divider line */}
                                            <div className="w-12 h-[2px] bg-slate-700 rounded-full mb-4"></div>

                                            {/* Answer */}
                                            <p className="text-[#a1a1aa] text-base leading-relaxed font-light">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PremiumFAQ;
