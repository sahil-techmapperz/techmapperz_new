"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export const defaultFeatures = [
    {
        img: '/flexibility.svg',
        title: 'Flexibility & Agility',
        description: 'We understand your needs are dynamic. We provide flexible, time-critical solutions that remain highly affordable without compromising quality.',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        img: '/Quality.svg',
        title: 'Uncompromising Quality',
        description: 'Quality makes us excel. Our meticulous approach ensures excellence at all levels of functioning, down to the absolute micro-level details.',
        color: 'from-purple-500 to-indigo-400'
    },
    {
        img: '/Friendly.svg',
        title: 'Robust Security',
        description: 'We prioritize the safety of your digital assets, integrating enterprise-grade security protocols into every layer of our development process.',
        color: 'from-pink-500 to-rose-400'
    },
    {
        img: '/reduce_cost.svg',
        title: 'Cost Efficiency',
        description: 'Our efficient team planning prevents timeline overruns, keeping your overall project costs strictly in check while maximizing ROI.',
        color: 'from-emerald-500 to-teal-400'
    }
];

const PremiumWhyChoose = ({ features = defaultFeatures, heading = "Why Choose Techmapperz" }) => {
    const featuresList = Array.isArray(features) ? features : defaultFeatures;

    return (
        <section className="relative py-24 bg-[#030712] overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[url('/Photos/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

            {/* Hexagon grid background pattern */}
            <div className="absolute top-0 inset-x-0 h-[500px] opacity-[0.03] overflow-hidden pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' viewBox='0 0 60 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 100L0 75V25L30 0l30 25v50L30 100z m0-95L3 28v45l27 22 27-22V28L30 5z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-gray-300 font-medium text-sm tracking-widest uppercase mb-4 border border-slate-700/50"
                    >
                        Our Differentiators
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Techmapperz</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        Partnering with us means choosing innovation, reliability, and guaranteed results tailored to your specific business ecosystem.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Background Gradient Glows */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-[2rem] blur-md transition-opacity duration-500`}></div>

                            {/* Card Content */}
                            <div className="relative h-full p-8 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 flex flex-col items-center text-center overflow-hidden hover:bg-slate-800/90 transition-all duration-500">

                                {/* Radial accent background inside card */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${feature.color} rounded-full blur-[50px] opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                                    {/* Icon orbit ring animation */}
                                    <div className="absolute inset-0 rounded-full border-2 border-slate-700/50 group-hover:border-transparent transition-colors"></div>
                                    <div className={`absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent group-hover:border-white/40 group-hover:animate-spin transition-all rotate-45`}></div>

                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 shadow-lg`}>
                                        <Image
                                            src={feature.img}
                                            alt={feature.title}
                                            width={32}
                                            height={32}
                                            className="brightness-0 invert drop-shadow-md"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumWhyChoose;
