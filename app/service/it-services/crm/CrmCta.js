import React from 'react';
import Link from 'next/link';

const CrmCta = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] border-t border-white/5 overflow-hidden flex justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl bg-gradient-to-br from-[#0c162d] to-[#040814] rounded-3xl border border-blue-500/20 p-10 md:p-16 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
                {/* Decorative circuit pattern */}
                <div className="absolute inset-0 bg-[url('/Patterns/circuit.svg')] opacity-5 mix-blend-screen pointer-events-none"></div>

                <div className="space-y-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                        Ready to replace scattered tools with a CRM your team will{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                            actually use?
                        </span>
                    </h2>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-bold text-white hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 w-full sm:w-auto">
                                Request a CRM Consultation
                            </button>
                        </Link>

                        <Link href="/contact">
                            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto">
                                Get Timeline & Estimate (48 hrs)
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrmCta;
