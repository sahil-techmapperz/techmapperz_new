"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const designElements = [
    {
        id: 1,
        primaryImage: '/Photos/Combind1.webp',
        title: 'Graphic',
        description: 'It Is A Collective Term Used To Describe Everything Visual, Like The Photos, Logos, And Icons On A Website. High-Quality Graphics Build Immediate Trust.',
    },
    {
        id: 2,
        primaryImage: '/Photos/Combind5.webp',
        title: 'Navigation',
        description: 'Ease Of Navigation Is The Glue That Keeps The Website Visitor On The Website; It Should Be Simple, Intuitive, And Highly Effective.',
    },
    {
        id: 3,
        primaryImage: '/Photos/Combind3.webp',
        title: 'Colour',
        description: 'Colours Are An Essential Part Of A Website, Having A Psychological Impact On Visitors While Giving The Site Personality And Brand Identity.',
    },
    {
        id: 4,
        primaryImage: '/Photos/Combind4.webp',
        title: 'Speed',
        description: 'This May Be The Last Point But It Is The First Thing Customers And Visitors Notice In A Website. A Slow Site Kills Conversions Instantly.',
    },
];

const PremiumDesignElements = () => {
    return (
        <section
            className="relative  py-20 pb-[200px] overflow-hidden text-white"
            style={{ backgroundImage: "url('/website_Development_service_img/element_of_webdegine_bg.png')" , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >


            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-5"
                    >
                        Elements Of Website Design
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[14px] md:text-[15px] text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        The Fundamental Building Blocks We Use To Craft Premium Digital Experiences That Captivate Users And Drive Results.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {designElements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative max-h-[300px] flex flex-col items-center text-center rounded-2xl p-7 overflow-hidden transition-all duration-300 cursor-pointer bg-[linear-gradient(110.26deg,rgba(255,255,255,0.156)_-9.08%,rgba(255,255,255,0.0039)_82.28%)] "
                        >
                            {/* Hover glow intensify */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-100 transition-opacity duration-400 pointer-events-none"
                                style={{ boxShadow: '0 0 0 1.5px rgba(0,200,255,0.6) inset, 0 0 30px rgba(0,150,255,0.12) inset' }}
                            ></div>

                            {/* Icon container with cyan glow border */}
                            <div
                                className="relative  rounded-2xl flex items-center justify-center mb-6 flex-shrink-0]">
                                <div className="relative w-16 h-16">
                                    <Image
                                        unoptimized
                                        src={item.primaryImage}
                                        alt={item.title}
                                        fill
                                        className="object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[19px] font-semibold text-white mb-4 leading-snug">
                                {item.title}
                            </h3>

                            {/* Description — always visible */}
                            <p className="text-[12px] text-white leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumDesignElements;
