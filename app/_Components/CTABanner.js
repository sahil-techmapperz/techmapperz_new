import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
    return (
        <section className="py-16 bg-black relative overflow-hidden w-full px-4 sm:px-10">
            {/* Embedded styles for reliable, premium rendering regardless of Tailwind compilation issues */}
            <style>{`
                .cta-banner-card {
                    background: radial-gradient(circle at 10% 20%, rgba(5, 215, 222, 0.12), transparent 45%), 
                                radial-gradient(circle at 90% 80%, rgba(123, 97, 255, 0.16), transparent 45%), 
                                #0c101a !important;
                    border: 1px solid rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8) !important;
                    border-radius: 24px !important;
                }
                .cta-btn-primary {
                    background: linear-gradient(135deg, #7b61ff, #e23e57) !important;
                    color: #ffffff !important;
                    font-weight: 700 !important;
                    border-radius: 9999px !important;
                    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.45), 0 10px 25px rgba(226, 62, 87, 0.35) !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    display: inline-block;
                    text-align: center;
                    border: none !important;
                    cursor: pointer;
                }
                .cta-btn-primary:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 15px 35px rgba(123, 97, 255, 0.6), 0 12px 30px rgba(226, 62, 87, 0.5) !important;
                    opacity: 0.95 !important;
                }
                .cta-btn-secondary {
                    background-color: #171c26 !important;
                    border: 1px solid #2c3549 !important;
                    color: #ffffff !important;
                    font-weight: 700 !important;
                    border-radius: 9999px !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    display: inline-block;
                    text-align: center;
                    cursor: pointer;
                }
                .cta-btn-secondary:hover {
                    background-color: #212836 !important;
                    border-color: #3e4d68 !important;
                    transform: translateY(-2px) !important;
                }
            `}</style>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#05d7de]/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2d5689]/5 rounded-full blur-3xl translate-y-1/2"></div>
            
            <div className="max-w-[1000px] mx-auto p-10 md:p-14 relative z-10 cta-banner-card">
                <div className="flex flex-col items-center justify-center text-center gap-8">
                    
                    <div className="w-full">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-white mb-6">
                            Looking for a Similar Solution?
                        </h2>
                        <p className="text-[#a3a3a3] text-lg max-w-4xl mx-auto leading-relaxed">
                            Share your project requirement with Techmapperz. Our team can help you plan the right approach for GIS mapping, drone survey, web development, mobile app development, CRM, or custom software projects.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-2 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-[14px] cta-btn-primary whitespace-nowrap">
                            Discuss Your Project
                        </Link>
                        
                        <Link href="/portfolios" className="w-full sm:w-auto px-8 py-[14px] cta-btn-secondary whitespace-nowrap">
                            View All Case Studies
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
