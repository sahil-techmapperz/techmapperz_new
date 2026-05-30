"use client";
import { useRef } from 'react';
import Link from 'next/link';
import PremiumButton from './PremiumButton';
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const OptimizedHomeCarousel = () => {
  const container = useRef(null);
  const leftContent = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Left content staggering
    tl.fromTo(
      ".animate-left-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    // Removed rightImage animation as it's now a background


  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100vh] lg:min-h-[95vh] overflow-hidden flex items-center justify-center py-20 lg:py-0 font-sans mt-16">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Full-width background image - Optimized using Next.js Image */}
        <Image
          src="/home_bg_banner.png"
          alt="Home Background Banner"
          fill
          priority
          quality={85}
          className="object-cover object-center z-0"
          sizes="100vw"
        />
        
        {/* Subtle shadow on the very left edge to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-[#000000] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#000000] to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

        {/* Left Typography Section */}
        <div ref={leftContent} className="w-full lg:w-[55%] flex flex-col items-start justify-center pt-10 lg:pt-0">



          {/* Bold typography */}
          <div className="overflow-hidden mb-4">
            <h1 className="animate-left-item text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight opacity-0">
              Transform
            </h1>
          </div>

          <div className="overflow-hidden mb-6">
            <h1 className="animate-left-item text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight flex flex-wrap opacity-0">
              <span className="text-white mr-3 lg:mr-5">Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] via-[#63a4ff] to-[#ff4747] animate-gradient-x bg-[length:200%_auto]">
                Vision
              </span>
            </h1>
          </div>

          <p className="animate-left-item text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl font-light leading-relaxed mb-4 opacity-0">
            We blend bespoke <strong className="font-semibold text-white">Software Development</strong>, advanced <strong className="font-semibold text-white">GIS Mapping</strong>, and precision <strong className="font-semibold text-white">UAV Drone</strong> capabilities to solve your most complex challenges.
          </p>

          <div className="animate-left-item flex flex-col sm:flex-row gap-5 mt-8 w-full sm:w-auto opacity-0">
            <PremiumButton 
              href="/contact" 
              text="Let's Collaborate" 
              variant="primary" 
              gradient={true}
              icon={FiArrowRight} 
            />
            
            <PremiumButton 
              href="https://calendly.com/techmapperz-projects" 
              text="Book a Demo" 
              variant="secondary" 
              icon={FiCalendar}
              external={true}
            />
          </div>



        </div>



      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default OptimizedHomeCarousel;