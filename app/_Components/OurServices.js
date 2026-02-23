'use client'
import React from 'react';
import Image from 'next/image';

const OurServices = ({ 
    title = "Services We Offer",
    headingText = "What makes us the best ?",
    description = "At Unified Infotech, we believe in pushing boundaries. Our proactive consulting abilities make us a sought-after custom software development company while following an analytics-driven process improves our development speed, quality, and productivity.",
    imageSrc,
    imageAlt = "Software Development",
    services = []
}) => {
    return (
        <div className='bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 rounded-xl'>
            <div className="max-w-[1600px] mx-auto py-4 sm:py-8 px-4 sm:px-8 md:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white leading-tight mb-6 sm:mb-8 md:mb-12">
                    {title}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
                    {/* Left Side */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                {headingText}
                            </h1>
                            <div className="space-y-4">
                                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={600}
                                height={400}
                                className="rounded-lg w-full object-contain max-h-[250px] sm:max-h-[300px] md:max-h-[800px]"
                               
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10 mt-6 lg:mt-0">
                        {services && services.length > 0 && services.map((service) => (
                            <div key={service.id} className="flex items-start space-x-3 sm:space-x-4 border-b border-white/20 pb-4 sm:pb-6 md:pb-8 last:border-b-0">
                                <div className="text-lg sm:text-xl flex-shrink-0 bg-blue-600/10 p-2.5 sm:p-3 rounded-lg">
                                    <Image
                                        width={50}
                                        height={50}
                                        src={service.icon} 
                                        alt={service.title} 
                                        className='w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] brightness-0 invert'
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {(!services || services.length === 0) && (
                            <div className="text-center text-gray-400 py-8">
                                No services available
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
