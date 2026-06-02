import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTABanner = ({ 
    title = "Ready to Transform Your Business?",
    subtitle = "Let's build something amazing together. Get in touch with our experts to discuss your project requirements.",
    primaryButtonText = "Get a Free Quote",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Talk to an Expert",
    secondaryButtonLink = "/contact"
}) => {
    return (
        <section className="py-16 bg-black relative overflow-hidden w-full px-4 sm:px-10">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl translate-y-1/2"></div>
            
            <div className="max-w-[1200px] mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 relative z-10 border border-gray-700 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    
                    <div className="w-full lg:flex-1 min-w-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            {subtitle}
                        </p>
                    </div>
                    
                    <div className="w-full lg:w-auto shrink-0 flex flex-col gap-4 justify-center lg:justify-end items-center">
                        <Link href={primaryButtonLink} className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-[#2d5689] to-[#a82123] hover:opacity-90 text-white font-bold rounded-full shadow-lg shadow-[#a82123]/20 transition-all transform hover:scale-105 whitespace-nowrap">
                            {primaryButtonText}
                        </Link>
                        
                        <Link href={secondaryButtonLink} className="w-full sm:w-auto text-center px-8 py-4 bg-transparent border-2 border-gray-500 hover:border-white text-white font-bold rounded-full transition-all transform hover:scale-105 whitespace-nowrap">
                            {secondaryButtonText}
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
