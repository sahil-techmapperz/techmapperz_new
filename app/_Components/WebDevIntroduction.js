"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaArrowRightLong } from "react-icons/fa6";
import PremiumButton from "./PremiumButton";
import { BsCheckCircleFill } from "react-icons/bs";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WebDevIntroduction = ({
    title = "Introduction",
    mainParagraph = "",
    rightParagraph = "",
    imageSrc = "",
    imageAlt = "",
    services = []
}) => {
    const container = useRef(null);

    useGSAP(() => {
        // Top Center Introduction
        gsap.fromTo(".animate-title", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: ".animate-title", start: "top 85%" } }
        );
        gsap.fromTo(".animate-text", 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".animate-title", start: "top 85%" } }
        );

        // Left Image Stack
        gsap.fromTo(".animate-img", 
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".animate-img", start: "top 80%" } }
        );

        // Right Content
        gsap.fromTo(".animate-right", 
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".animate-right", start: "top 80%" } }
        );

        // Services Stagger
        gsap.fromTo(".animate-service", 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".animate-right", start: "top 80%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="relative py-20 lg:py-28 bg-[#040810] overflow-hidden text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Top Center Introduction */}
                <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
                    <h2 className="animate-title opacity-0 text-4xl md:text-[38px] font-bold mb-6 tracking-wide">
                        {title}
                    </h2>
                    <p className="animate-text opacity-0 text-[14px] md:text-[16px] font-['IBM_Plex_Sans'] text-white font-[400] leading-relaxed max-w-[850px] mx-auto">
                        {mainParagraph}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Stacked cards with Image */}
                    <div className="animate-img opacity-0 relative w-full max-w-[520px] mx-auto lg:mx-0">
                        {/* Back Cards to simulate depth */}
                        {/* <div className="absolute top-4 left-[-15px] right-[15px] bottom-[-8px] bg-[#1a2d53] rounded-[40px] transform -rotate-3 opacity-50"></div> */}
                        <div className="absolute top-2 left-[-8px] right-[8px] bottom-[-4px] bg-[#173060] rounded-[40px] transform rotate-[6deg] opacity-70"></div>
                        
                        {/* Front Card */}
                        <div className="relative bg-[radial-gradient(41.11%_46.7%_at_50%_51.93%,rgba(59,130,246,0.86)_0%,#0B2B5F_100%)] rounded-[40px] flex items-center justify-center p-8 shadow-2xl overflow-hidden h-[520px] lg:h-[620px]">
                            {imageSrc && (
                                <Image
                                    unoptimized
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-contain p-6 drop-shadow-xl"
                                />
                            )}
                        </div>
                        </div>

                    {/* Right: Text and List */}
                    <div className="animate-right opacity-0 flex flex-col space-y-8 lg:pl-8">
                        <p className="text-[14px] md:text-[16px] font-['IBM_Plex_Sans'] text-white font-[400] leading-relaxed">
                            {rightParagraph}
                        </p>

                        <div className="flex flex-col space-y-4">
                            {services.map((svc, idx) => (
                                <div 
                                    key={idx}
                                    className="animate-service opacity-0 flex items-center gap-4 bg-[linear-gradient(111.49deg,rgba(255,255,255,0.4)_-8.95%,rgba(255,255,255,0.01)_114%)] py-4 px-6 rounded-[1rem] border border-transparent [border-image-slice:1] [border-image-source:radial-gradient(0%_50%_at_50%_50%,#0F0F0F_0%,rgba(21,21,21,0)_100%),radial-gradient(198.89%_50%_at_50%_50%,#FFFFFF_0%,rgba(255,255,255,0.58)_100%),radial-gradient(170.42%_50%_at_50%_50%,#000000_0%,rgba(0,0,0,0)_100%)]"
                                >
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <BsCheckCircleFill className="text-white text-[26px]" />
                                    </div>
                                    <span className="text-[16px] text-gray-200 font-medium">
                                        {svc.text} {svc.highlight}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <PremiumButton 
                                href="/contact" 
                                text="Get a Quote" 
                                variant="primary" 
                                icon={FaArrowRightLong} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevIntroduction;
