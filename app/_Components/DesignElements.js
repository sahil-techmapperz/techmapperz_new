'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const designElements = [
    {
        id: 1,
        primaryImage: '/Photos/Combind1.webp',
        title: 'Graphics',
        description: 'It is a collective term used to describe everything visual, like the photos, logos, and icons on a website.',
        glow: 'from-blue-500 to-cyan-400'
    },
    {
        id: 2,
        primaryImage: '/Photos/Combind5.webp',
        title: 'Navigation',
        description: 'Ease of navigation is the glue that keeps the website visitor on the website; it should be simple, intuitive and effective.',
        glow: 'from-indigo-500 to-purple-500'
    },
    {
        id: 3,
        primaryImage: '/Photos/Combind3.webp',
        title: 'Colour',
        description: 'Colours are an essential part of a website, having a psychological impact on visitors while giving the site personality.',
        glow: 'from-red-500 to-orange-500'
    },
    {
        id: 4,
        primaryImage: '/Photos/Combind4.webp',
        title: 'Speed',
        description: 'This may be the last point but it is the first thing customers and visitors notice in a website.',
        glow: 'from-green-500 to-emerald-400'
    },
];

const WebsiteDesignElements = () => {
    return (
        <section className="relative py-20 bg-black overflow-hidden">
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Key Principles</span>
                    <h2 className="text-4xl max-sm:text-3xl font-bold text-white mt-3">Elements of Website Design</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] mx-auto rounded-full mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {designElements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative h-full"
                        >
                            {/* Hover Glow Background */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-20 transition duration-500 rounded-3xl blur-xl`} />
                            
                            <div className="relative h-full bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-gray-800/80 group-hover:border-white/10">
                                
                                {/* Icon Container */}
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                                    <div className="relative z-10 p-4">
                                        <Image
                                            src={item.primaryImage}
                                            alt={`${item.title} Icon`}
                                            width={50}
                                            height={50}
                                            unoptimized
                                            className="group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {item.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebsiteDesignElements;
