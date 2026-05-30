import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const ItConsultingCta = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] mt-8 border-t border-white/5 overflow-hidden">
            {/* Ambient Animated Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/20 via-blue-600/20 to-indigo-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-3000"></div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
                <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 lg:p-20 text-center shadow-2xl overflow-hidden relative group">
                    {/* Decorative Pattern inside card */}
                    <div className="absolute inset-0 bg-[url('/Patterns/circuit.svg')] bg-center opacity-5 pointer-events-none mix-blend-screen"></div>

                    {/* Accent border top */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"></div>

                    <div className="max-w-3xl mx-auto space-y-8 relative z-20">
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-tight">
                            Ready to transform your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                IT operations?
                            </span>
                        </h2>

                        <p className="text-gray-400 text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
                            Start accelerating your business with Techmapperz’s expert IT consulting. Discuss your needs, recommend a plan, and get a transparent quote.
                        </p>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link href="/contact">
                                <button className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0B0F1A] rounded-full font-bold text-base shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden w-full sm:w-auto hover:-translate-y-1">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get a Free Consultation <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    {/* Hover shimmer effect inside button */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </Link>

                            <Link href="/contact">
                                <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Corner decorative glowing orbs inside card */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/30 rounded-full blur-[60px] group-hover:bg-teal-500/50 transition-colors duration-700"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 rounded-full blur-[60px] group-hover:bg-blue-600/50 transition-colors duration-700"></div>
                </div>
            </div>
        </section>
    );
};

export default ItConsultingCta;
