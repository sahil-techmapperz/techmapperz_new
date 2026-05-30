"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLaptopCode, FaChartLine, FaUsers } from 'react-icons/fa';

const WhyWebDevImportant = () => {
    const features = [
        {
            icon: <FaLaptopCode className="text-3xl text-blue-400" />,
            title: "First Impression",
            description: "Your website is your digital storefront. A premium design builds instant trust."
        },
        {
            icon: <FaUsers className="text-3xl text-purple-400" />,
            title: "Global Reach",
            description: "Connect with audiences worldwide, breaking geographical barriers 24/7."
        },
        {
            icon: <FaChartLine className="text-3xl text-green-400" />,
            title: "Business Growth",
            description: "Conversion-optimized development turns passive visitors into active sales."
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-[#050B14]">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] top-[-10%] left-[-10%] animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] bottom-[-20%] right-[-10%]"></div>
                <div className="absolute inset-0 bg-[url('/Photos/grid-pattern.svg')] opacity-20"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 font-semibold text-sm tracking-widest uppercase mb-2">
                            Digital Transformation
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Why Web Design & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Development Matters
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed font-light">
                            Today the world is connected online. People turn to the internet for every need. In this era, a powerful web presence isn't just an option—it's crucial for survival and growth.
                            <br /><br />
                            Make sure your first impression is not just good, but exceptional. A seamlessly functioning, visually stunning website is the ultimate key to skyrocketing sales and unmatched business growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group"
                                >
                                    <div className="mb-4 bg-gray-900/50 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 perspective-1000"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                            <Image
                                src="/Photos/Why_web Design_Important.webp"
                                alt="Why Web Design and Web Development is Important?"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                unoptimized
                            />
                            {/* Floating decorative elements */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-60 z-0"></div>
                            <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-40 z-0"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyWebDevImportant;
