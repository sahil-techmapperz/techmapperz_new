import React from 'react';

const CrmIndustries = () => {
    const industries = [
        "E-Commerce",
        "Education & E-Learning",
        "Government & Public Sector",
        "Healthcare",
        "Logistics & Supply Chain",
        "Manufacturing",
        "Retail",
        "Travel & Hospitality"
    ];

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#020617] border-t border-white/5 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">Support</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
                    We deliver CRM solutions tailored to the unique operational challenges of organizations across diverse sectors.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {industries.map((ind, index) => (
                        <div key={index} className="px-6 py-4 md:px-8 md:py-5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/[0.08] hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                            <span className="text-gray-300 font-medium tracking-wide">{ind}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CrmIndustries;
