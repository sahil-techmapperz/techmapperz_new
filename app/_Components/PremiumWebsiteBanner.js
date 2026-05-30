"use client";

import Image from "next/image";
import Link from "next/link";
import PremiumButton from "./PremiumButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const PremiumWebsiteBanner = ({
    title = "Custom Website Development Company in India",
    subtitle = "Responsive, SEO-Optimized Business & eCommerce Websites Built with Modern Technologies",
    buttonText = "Request a Free Proposal",
    imageSrc,
    imageAlt = "Website Development Agency",
    bgImage,
    buttonGradient = false
}) => {
    const container = useRef(null);
    const floatingImg = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".animate-left", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.1 }
        );

        if (floatingImg.current) {
            gsap.fromTo(floatingImg.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.2 }
            );

            gsap.to(floatingImg.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-[85vh] mt-16 flex items-center bg-[#020617] overflow-hidden">
            {bgImage && (
                <div 
                    className="absolute inset-0 z-0"
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                </div>
            )}
            
            {!bgImage && (
                <>
                    {/* Immersive Background Gradients */}
                    <div className="absolute inset-0 bg-[url('/Photos/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

                    {/* Cinematic Lighting Orbs */}
                    <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                </>
            )}

            <div className="max-w-[1400px] w-full mx-auto px-6 max-sm:px-4 py-20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 relative z-10">

                {/* Left Content Area */}
                <div className="w-full lg:w-[50%] flex flex-col gap-6">
                    <div className="animate-left opacity-0 inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit backdrop-blur-md">
                        <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">
                            {subtitle.length > 50 ? "Premium Services" : subtitle}
                        </span>
                    </div>

                    <h1 className="animate-left opacity-0 text-3xl md:text-4xl lg:text-[54px] font-['IBM_Plex_Sans'] font-extrabold text-white tracking-tight md:leading-[3.5rem]">
                        {title}
                    </h1>

                    <p className="animate-left opacity-0 text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="animate-left opacity-0 flex flex-wrap gap-4 pt-4">
                        <PremiumButton 
                            href="/contact" 
                            text={buttonText} 
                            variant="primary" 
                            gradient={buttonGradient}
                            icon={FaArrowRightLong} 
                        />

                        <PremiumButton 
                            href="/portfolios" 
                            text="View Our Work" 
                            variant="secondary" 
                        />
                    </div>
                </div>

                {/* Right Image/Hero Area */}
                {imageSrc && (
                    <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] flex justify-center items-center perspective-1000">
                            {/* Background glowing frame */}
                            <div className="absolute inset-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl transform -rotate-6 animate-pulse"></div>

                            <div ref={floatingImg} className="relative z-10 w-full h-full max-h-[500px] opacity-0">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="drop-shadow-2xl scale-110 lg:scale-125 origin-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom transition gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none"></div>
        </section>
    );
}

export default PremiumWebsiteBanner;
