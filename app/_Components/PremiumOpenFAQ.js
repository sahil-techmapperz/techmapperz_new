"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FAQJsonLd } from './JsonLd';

const PremiumOpenFAQ = ({ faqData, title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our GIS mapping and geospatial services." }) => {
    return (
        <section className="relative py-24 bg-[#050B14] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
                {faqData && faqData.length > 0 && <FAQJsonLd faqs={faqData} />}

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-wide text-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        KNOWLEDGE BASE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-wide">
                        {title.split(' ').map((word, i) => (
                            word.toLowerCase() === 'questions' || word.toLowerCase() === '(faqs)' ?
                                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> {word}</span> :
                                ` ${word}`
                        ))}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {faqData?.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                            className="bg-[#0a0f1c]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
                        >
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                        Q
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 leading-tight group-hover:text-blue-300 transition-colors">
                                        {faq.question.replace(/^\d+\.\s*/, '')}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                        {faq.answer}
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

export default PremiumOpenFAQ;
