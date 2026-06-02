"use client"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Homecontact = () => {
    return (
        <div className="relative bg-[#070A11] py-16 overflow-hidden border-t border-white/5">
            {/* Dark Tech Mesh Gradients */}
            <div className="absolute inset-0 bg-[#090E17] z-0"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#2d5689]/20 rounded-full blur-[100px] pointer-events-none z-10"></div>
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#05D7DE]/20 rounded-full blur-[100px] pointer-events-none z-10"></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/portfolio/grid-pattern.svg')] opacity-5 z-10"></div>
            
            <div className="w-full max-w-7xl mx-auto relative z-20 px-6 lg:px-12">
                <div className="relative bg-[#111622]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* Inner glowing stroke */}
                    <div className="absolute inset-0 border-[2px] border-dashed border-white/5 rounded-[2rem] pointer-events-none m-1"></div>

                    {/* Text Section */}
                    <div className="text-center md:text-left flex-1 space-y-4">
                        <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">Ready to Transform?</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Empowering Your Business <br className="hidden lg:block"/> with Innovation in{' '}
                            <TypeAnimation
                                sequence={[
                                    'IT Development.',
                                    1500,
                                    'GIS Solutions.',
                                    1500,
                                    'Drone Survey.',
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#05D7DE] to-[#2d5689]"
                            />
                        </h2>
                        <p className="text-gray-400 max-w-xl text-base md:text-lg mx-auto md:mx-0 pt-2 font-light">
                            Take the next step in your digital journey. Partner with our team of experts to bring your vision to life.
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="flex-shrink-0">
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2d5689] to-[#1a3861] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,86,137,0.5)]">
                            {/* Hover overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#05D7DE] to-[#2d5689] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <FiMessageSquare className="relative z-10 text-white text-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                            <span className="relative z-10 text-white font-bold tracking-wide uppercase text-sm">
                                Contact Us Today
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Homecontact;
