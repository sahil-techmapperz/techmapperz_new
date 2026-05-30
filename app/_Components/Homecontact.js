"use client"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Homecontact = () => {
    return (
        <section className="bg-[#020617] relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
            {/* Massive Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#d2292b]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#376bab]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                    className="relative w-full rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl p-10 md:p-16 lg:p-24 overflow-hidden shadow-2xl"
                >
                    {/* Inner Card Glow Map */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,41,43,0.15),transparent_60%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(55,107,171,0.15),transparent_60%)]"></div>

                    {/* Subtle grid pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/Patterns/grid.svg')] bg-center bg-repeat opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                        {/* Left Side: Typography */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mx-auto md:mx-0">
                                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                                <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Ready To Scale?</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                                Empowering Your Business<br className="hidden lg:block" /> with{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] via-[#8b5cf6] to-[#d2292b]">
                                    <TypeAnimation
                                        sequence={[
                                            'Innovation',
                                            2000,
                                            'IT Development',
                                            2000,
                                            'GIS Solutions',
                                            2000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto md:mx-0">
                                Partner with Techmapperz to unlock state-of-the-art enterprise solutions. Let's reshape your industry together.
                            </p>
                        </div>

                        {/* Right Side: CTA Button */}
                        <div className="flex-shrink-0 flex items-center justify-center md:justify-end w-full md:w-auto">
                            <Link href="/contact" className="group relative">
                                {/* Animated Glow Behind Button */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#4a8cd4] to-[#d2292b] rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

                                <div className="relative inline-flex items-center gap-3 bg-[#0a0f1a] px-8 py-5 md:px-10 md:py-6 rounded-full border border-white/10 group-hover:bg-[#0f172a] transition-all duration-300">
                                    <FiMessageSquare className="w-6 h-6 text-[#4a8cd4] group-hover:text-white transition-colors duration-300" />
                                    <span className="text-lg md:text-xl font-bold tracking-wide text-white">Start Building</span>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#d2292b] transition-colors duration-300 ml-2">
                                        <FiArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Homecontact;
