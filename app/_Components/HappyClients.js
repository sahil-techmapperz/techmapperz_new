"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import Genesys_logo from "@/public/Photos/Genesys_logo.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.webp";
import shrc_logo from "@/public/Photos/Shrc_logo.webp";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.webp";
import NS_logo from "@/public/Photos/NS_logo.webp";
import khanconsultants_logo from "@/public/Photos/khanconsultants_logo.webp";
import new_company_logo from "@/public/Photos/new_company_logo.webp";
import Facalties_online_logo from "@/public/Photos/Facalties_online_logo.webp";
import English_faculties_logo from "@/public/Photos/English_faculties_logo.webp";
import Fabcon_Logo from "@/public/Photos/Fabcon Logo.webp";
import aereo_logo from "@/public/Photos/aereo_logo.webp";
import consortium_logo from "@/public/Photos/consortium_logo.webp";

const Clients = [
  Genesys_logo,
  Cocreatelab_logo,
  manusherghorbari_logo,
  premierautosource_logo,
  whitespreadfoods_logo,
  shrc_logo,
  NS_logo,
  Fabcon_Logo,
  khanconsultants_logo,
  English_faculties_logo,
  Facalties_online_logo,
  new_company_logo,
  aereo_logo,
  consortium_logo
];

// Split clients into two rows for dual-direction scrolling
const row1 = Clients.slice(0, Math.ceil(Clients.length / 2));
const row2 = Clients.slice(Math.ceil(Clients.length / 2));

const HappyClients = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Row 1: Scroll Left
      // xPercent: -50 means it translates by exactly half its width
      // Since it contains two identical sets of logos, this creates a seamless loop
      gsap.to(".marquee-row-1", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      // Row 2: Scroll Right
      // Start at -50 and translate to 0
      gsap.fromTo(".marquee-row-2", 
        { xPercent: -50 },
        { 
          xPercent: 0,
          ease: "none",
          duration: 35,
          repeat: -1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reusable Logo Card Component
  const LogoCard = ({ src, alt }) => (
    <div className="flex-shrink-0 w-[200px] sm:w-[250px] h-[100px] sm:h-[120px] flex justify-center items-center bg-[#0a0a0f]/80 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg px-6 group">
      <div className="relative w-full h-full max-w-[140px] max-h-[60px] flex justify-center items-center mx-auto my-auto">
        <Image
          className="object-contain transition-transform duration-500 transform group-hover:scale-110"
          src={src}
          alt={alt}
          fill
        />
      </div>
    </div>
  );

  return (
    <section className="relative py-24 bg-black overflow-hidden" ref={containerRef}>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#2d5689]/10 to-[#a82123]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16 text-center">
        
        {/* Trusted By Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-[#a82123] animate-pulse"></div>
          <span className="text-xs font-semibold text-white tracking-widest uppercase">Trusted By Leaders</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-white">Our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5689] to-[#799ccc]">Happy </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a82123] to-[#ff4d4f]">Clients</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Empowering disruptive startups and global enterprises across multiple industries to achieve digital excellence.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 (Scrolling Left) */}
        <div className="w-full overflow-visible flex">
          {/* We duplicate the array to allow for seamless infinite scrolling */}
          <div className="marquee-row-1 flex gap-6 w-max">
            {[...row1, ...row1, ...row1].map((client, index) => (
              <LogoCard key={`row1-${index}`} src={client} alt={`Client logo ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="w-full overflow-visible flex">
          <div className="marquee-row-2 flex gap-6 w-max">
            {[...row2, ...row2, ...row2].map((client, index) => (
              <LogoCard key={`row2-${index}`} src={client} alt={`Client logo ${index + 1}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HappyClients;
