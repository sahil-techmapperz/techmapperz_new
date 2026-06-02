"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import HeroButtons from "@/app/_Components/HeroButtons";

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="#05D7DE"/>
    <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PortfolioDetailTemplate({ 
  portfolioItem,
  projectSlug = null
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || !portfolioItem) {
    return (
      <div className="min-h-screen bg-[#070A11] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const techStackArray = portfolioItem.techStack ? portfolioItem.techStack.split(',').map(tech => tech.trim()) : [];
  const challenges = portfolioItem.category === "GIS" ? (portfolioItem.objectives || []) : (portfolioItem.challenges || []);
  const solutions = portfolioItem.solutions || [];
  const results = portfolioItem.category === "GIS" ? (portfolioItem.benefits || []) : (portfolioItem.results || []);
  const projectDetails = portfolioItem.projectDetails || {};
  const description = Array.isArray(portfolioItem.details) ? portfolioItem.details[0] : portfolioItem.details;

  return (
    <div className="bg-[#070A11] text-white relative overflow-hidden font-sans min-h-screen">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center p-6 md:p-12 relative pt-24 lg:pt-32">
        {/* Background subtle glow effects */}
        <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#05D7DE]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 rounded-full bg-[#18212F] border border-[#233549]">
              <span className="text-[#05D7DE] text-sm font-semibold tracking-wide">
                {portfolioItem.category} Project {projectDetails.industry && `• ${projectDetails.industry}`}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
              {portfolioItem.name}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
              {description}
            </p>

            <HeroButtons />
          </div>

          {/* Right Column (Image & Stats) */}
          <div className="relative w-full mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#285D8B] via-[#0D243B] to-[#12A0AD] rounded-[2rem] transform scale-[1.03] -z-10 opacity-60 blur-[3px]"></div>
            
            <div className="bg-[#090E17]/90 backdrop-blur-xl rounded-[2rem] p-4 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="aspect-[4/3] relative rounded-[1.5rem] overflow-hidden mb-6">
                <img 
                  src={portfolioItem.image} 
                  alt={portfolioItem.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 px-2 pb-2">
                {projectDetails.location && (
                  <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-4">
                    <h3 className="text-[#05D7DE] text-[10px] font-bold tracking-widest uppercase mb-1">Location</h3>
                    <p className="text-white text-sm font-semibold truncate">{projectDetails.location}</p>
                  </div>
                )}
                {projectDetails.duration && (
                  <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-4">
                    <h3 className="text-[#05D7DE] text-[10px] font-bold tracking-widest uppercase mb-1">Duration</h3>
                    <p className="text-white text-sm font-semibold truncate">{projectDetails.duration}</p>
                  </div>
                )}
                {projectDetails.projectType && (
                  <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-4 col-span-2">
                    <h3 className="text-[#05D7DE] text-[10px] font-bold tracking-widest uppercase mb-1">Project Type</h3>
                    <p className="text-white text-sm font-semibold">{projectDetails.projectType}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-16 border-t border-white/5">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase">The Challenge</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What the Project Needed.</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Every ambitious project comes with its own set of hurdles. Here are the core challenges we addressed.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="flex flex-col gap-3 bg-[#161C26] border border-white/5 rounded-2xl p-6 hover:bg-[#1E2532] transition-colors">
                <h4 className="text-white text-lg font-bold flex items-center gap-3">
                  <span className="flex-shrink-0 size-8 rounded-full bg-[#05D7DE]/10 flex items-center justify-center text-[#05D7DE] text-sm">0{idx+1}</span>
                  {challenge.title}
                </h4>
                <p className="text-gray-400 text-[14px] leading-relaxed ml-11">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {solutions.length > 0 && (
        <section className="bg-[#090E17] py-24 border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">The Solution</h3>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">How Techmapperz Solved It</h2>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, idx) => (
                <div key={idx} className="bg-[#111721] border border-[#233549] rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row gap-10 hover:border-[#2A415A] transition-colors">
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#285D8B] to-[#12A0AD] flex items-center justify-center shadow-lg shadow-[#12A0AD]/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-400 text-[15px] leading-relaxed">{solution.description}</p>
                  </div>
                  
                  {solution.features && solution.features.length > 0 && (
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                      {solution.features.map((feature, fIdx) => (
                        <div key={fIdx} className="bg-[#1C2331] border border-white/5 rounded-xl p-4 flex items-start gap-4">
                          <CheckIcon />
                          <span className="text-gray-300 text-sm font-medium pt-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results & Tech Stack Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Business Impact</h3>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Results & Value Delivered</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((result, idx) => (
                <div key={idx} className="rounded-2xl p-[1px] bg-gradient-to-br from-[#1A334A] to-[#111721]">
                  <div className="bg-[#111721] rounded-[15px] p-6 h-full flex flex-col justify-center items-center text-center">
                    <span className="text-3xl font-bold text-[#05D7DE] mb-2">{result.value}</span>
                    <span className="text-white text-[15px] font-bold tracking-wide mb-1">{result.label}</span>
                    {result.description && <span className="text-gray-400 text-xs">{result.description}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {techStackArray.length > 0 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Core Capabilities</h3>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technology Stack</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStackArray.map((tech, idx) => (
                <div key={idx} className="bg-[#244252] border border-[#366173] rounded-xl py-4 px-3 flex items-center justify-center text-center shadow-inner hover:bg-[#2C4E61] transition-colors">
                  <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide uppercase">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32 relative z-10 border-t border-white/5 pt-16 mt-12">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#111721] border border-[#233549] p-8 md:p-16 shadow-2xl flex flex-col justify-center border-dashed text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-[#05D7DE] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute inset-0 border-[2px] border-dashed border-[#05D7DE]/20 rounded-[2rem] pointer-events-none z-20 m-1"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-[#05D7DE] text-[11px] md:text-xs font-bold tracking-widest uppercase">
              Ready to start your project?
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug">
              Let's build your next digital innovation together.
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed pb-6">
              Get a tailored proposal within 48 hours. We help teams execute fast, accurate, and scalable solutions for their business needs.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-xl bg-[#05D7DE] text-gray-900 font-bold px-8 py-4 hover:bg-[#04bcc2] transition-colors shadow-[0_0_20px_rgba(5,215,222,0.3)]">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}