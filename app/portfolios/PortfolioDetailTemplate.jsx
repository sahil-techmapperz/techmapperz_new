"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import HeroButtons from "@/app/_Components/HeroButtons";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, 
  SiMysql, SiPostgresql, SiSqlite, SiGit, 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiPython, SiDocker, SiAmazon, SiFirebase
} from "react-icons/si";
import { FaDatabase, FaCode, FaServer, FaCloud } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="#05D7DE" />
    <path d="M8 12.5L11 15.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const getTechIcon = (techName) => {
  const name = techName.toLowerCase();
  if (name.includes('react')) return <SiReact size={28} />;
  if (name.includes('next')) return <SiNextdotjs size={28} />;
  if (name.includes('node')) return <SiNodedotjs size={28} />;
  if (name.includes('mongo')) return <SiMongodb size={28} />;
  if (name.includes('sql') || name.includes('database')) return <FaDatabase size={28} />;
  if (name.includes('git')) return <SiGit size={28} />;
  if (name.includes('html')) return <SiHtml5 size={28} />;
  if (name.includes('css')) return <SiCss3 size={28} />;
  if (name.includes('type')) return <SiTypescript size={28} />;
  if (name.includes('java') || name.includes('js')) return <SiJavascript size={28} />;
  if (name.includes('python')) return <SiPython size={28} />;
  if (name.includes('docker')) return <SiDocker size={28} />;
  if (name.includes('aws') || name.includes('amazon')) return <SiAmazon size={28} />;
  if (name.includes('firebase')) return <SiFirebase size={28} />;
  if (name.includes('api') || name.includes('backend')) return <FaServer size={28} />;
  if (name.includes('cloud')) return <FaCloud size={28} />;
  return <FaCode size={28} />; // Default generic icon
};

export default function PortfolioDetailTemplate({
  portfolioItem,
  projectSlug = null
}) {
  const [loading, setLoading] = useState(true);
  const executionContainerRef = useRef(null);
  const leftSideRef = useRef(null);
  const section4ContainerRef = useRef(null);
  const resultsRightSideRef = useRef(null);
  const section6ContainerRef = useRef(null);
  const highlightsLeftSideRef = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    let ctx = gsap.context(() => {
      // Only pin on desktop where it's a 2-column layout
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (executionContainerRef.current && leftSideRef.current) {
          ScrollTrigger.create({
            trigger: leftSideRef.current,
            start: "top 20%",
            endTrigger: executionContainerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        }

        if (section4ContainerRef.current && resultsRightSideRef.current) {
          ScrollTrigger.create({
            trigger: resultsRightSideRef.current,
            start: "top 20%",
            endTrigger: section4ContainerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        }

        if (section6ContainerRef.current && highlightsLeftSideRef.current) {
          ScrollTrigger.create({
            trigger: highlightsLeftSideRef.current,
            start: "top 20%",
            endTrigger: section6ContainerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        }
      });
    });

    return () => ctx.revert();
  }, [loading]);

  if (loading || !portfolioItem) {
    return (
      <div className="min-h-screen bg-[#070A11] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Safe data extraction
  const rawTech = portfolioItem.techStack;
  const techStackArray = Array.isArray(rawTech)
    ? rawTech
    : (typeof rawTech === 'string' && rawTech.trim() !== ''
      ? rawTech.split(',').map(tech => tech.trim()).filter(Boolean)
      : []);
  const challenges = portfolioItem.category === "GIS" ? (portfolioItem.objectives || portfolioItem.challenges || []) : (portfolioItem.challenges || []);
  const solutions = portfolioItem.solutions || [];
  const results = portfolioItem.category === "GIS" ? (portfolioItem.benefits || portfolioItem.results || []) : (portfolioItem.results || []);
  const projectDetails = portfolioItem.projectDetails || {};

  // Extract details correctly
  const description = Array.isArray(portfolioItem.details) ? portfolioItem.details[0] : portfolioItem.description || portfolioItem.details;
  const secondaryDescription = Array.isArray(portfolioItem.details) && portfolioItem.details[1] ? portfolioItem.details[1] : "Our approach focused on creating a scalable, efficient, and robust solution tailored specifically to the client's business objectives.";

  // Fallbacks for layout
  const businessGoal = portfolioItem.businessGoal || projectDetails.businessGoal || "Improve Planning Accuracy, Speed Up Corridor-Level Survey Execution, And Deliver Engineering-Ready Geospatial Outputs";

  // Create stats cards dynamically from available data
  const statCards = [];
  if (projectDetails.projectType) statCards.push({ label: "Project Type", value: projectDetails.projectType });
  if (projectDetails.industry) statCards.push({ label: "Industry", value: projectDetails.industry });
  if (projectDetails.coreFunctionality) statCards.push({ label: "Core Functionality", value: projectDetails.coreFunctionality });
  if (projectDetails.duration) statCards.push({ label: "Duration", value: projectDetails.duration });
  if (projectDetails.location) statCards.push({ label: "Location", value: projectDetails.location });
  if (projectDetails.accuracy) statCards.push({ label: "Data Accuracy", value: projectDetails.accuracy });
  if (projectDetails.surveyLength) statCards.push({ label: "Survey Length", value: projectDetails.surveyLength });



  // Execution steps fallback
  const executionSteps = portfolioItem.executionSteps || [
    {
      step: "01",
      title: "Planning & Requirement Analysis",
      desc: "Defined alignment coverage, corridor width, and precision benchmarks before field execution."
    },
    {
      step: "02",
      title: "Data Acquisition & Setup",
      desc: "Executed initial phases with consistent coverage and controlled data density to ensure quality."
    },
    {
      step: "03",
      title: "Data Processing & Engineering",
      desc: "Processed the raw data, classified components, and prepared the core foundation for modelling and analysis."
    },
    {
      step: "04",
      title: "Engineering Output Delivery",
      desc: "Delivered final models, sections, and analysis outputs ready for planning and design use."
    }
  ];

  // Deliverables fallback
  const deliverables = portfolioItem.deliverables || [
    "Comprehensive Project Dataset.",
    "Topographic Surface Model",
    "Detailed Architecture Drawings.",
    "Cross-Platform Analysis.",
    "Gradient & Performance Analysis.",
    "Feature Mapping Including Key Infrastructures."
  ];

  const galleryLayouts = [
    { span: "md:col-span-2", height: "h-80 md:h-[400px]" },
    { span: "md:col-span-1", height: "h-80 md:h-[400px]" },
    { span: "md:col-span-1", height: "h-80 md:h-[350px]" },
    { span: "md:col-span-1", height: "h-80 md:h-[350px]" },
    { span: "md:col-span-1", height: "h-80 md:h-[350px]" }
  ];

  let gallery = [];
  const combinedImages = [];

  if (portfolioItem.image) {
    combinedImages.push({ src: portfolioItem.image, alt: portfolioItem.name ? `${portfolioItem.name} Overview` : "Project Overview" });
  }

  if (portfolioItem.galleryImages && portfolioItem.galleryImages.length > 0) {
    combinedImages.push(...portfolioItem.galleryImages);
  }

  if (combinedImages.length > 0) {
    gallery = combinedImages.map((img, idx) => ({
      src: img.src,
      alt: img.alt || `Gallery Image ${idx + 1}`,
      span: galleryLayouts[idx % galleryLayouts.length].span,
      height: galleryLayouts[idx % galleryLayouts.length].height
    }));
  } else if (portfolioItem.gallery) {
    gallery = portfolioItem.gallery;
  } else {
    gallery = [
      { src: portfolioItem.image || "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000", alt: "Project Overview", span: "md:col-span-2", height: "h-80 md:h-[400px]" },
      { src: portfolioItem.image2 || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", alt: "Technical Details", span: "md:col-span-1", height: "h-80 md:h-[400px]" },
      { src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800", alt: "Topography", span: "md:col-span-1", height: "h-80 md:h-[350px]" },
      { src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800", alt: "Execution", span: "md:col-span-1", height: "h-80 md:h-[350px]" },
      { src: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800", alt: "Terrain Check", span: "md:col-span-1", height: "h-80 md:h-[350px]" },
    ];
  }

  return (
    <div className="bg-[#070A11] text-white relative overflow-hidden font-sans min-h-screen">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center p-6 md:p-12 relative pt-24 lg:pt-32">

        {/* Background subtle glow effects */}
        <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-block px-5 py-2 rounded-full bg-[#18212F] border border-[#233549]">
              <span className="text-[#05D7DE] text-[16px] font-semibold tracking-wide">
                Case Study, {portfolioItem.category} Project
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-[3rem] font-bold leading-[1.1] tracking-tight">
              {portfolioItem.name}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
              {description}
            </p>

            {/* Buttons */}
            <HeroButtons button1Text="Start a Similar Project" button2Text="View More Projects" />
          </div>

          {/* Right Column (Cards) */}
          <div className="relative w-full">
            {/* Gradient Border Container effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#285D8B] via-[#0D243B] to-[#12A0AD] rounded-[2rem] transform scale-[1.01] -z-10 opacity-80 blur-[2px]"></div>

            <div className="bg-[#090E17]/95 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 h-full border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {statCards.slice(0, 4).map((card, idx) => (
                  <div key={idx} className={`bg-[#1C232E] border border-white/5 rounded-2xl p-6 hover:bg-[#222A36] transition-colors ${statCards.length === 3 && idx === 2 ? 'sm:col-span-2' : ''}`}>
                    <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">{card.label}</h3>
                    <p className="text-white text-lg font-semibold tracking-wide" dangerouslySetInnerHTML={{ __html: card.value }} />
                  </div>
                ))}

                {/* Card 5 (Full Width Business Goal) */}
                <div className="bg-[#1C232E] border border-white/5 rounded-2xl p-6 sm:col-span-2 hover:bg-[#222A36] transition-colors mt-1">
                  <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-3">Business Goal</h3>
                  <p className="text-white text-[1.1rem] font-medium leading-relaxed tracking-wide">
                    {businessGoal}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: What the Project Needed & The Solution */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-8 md:pt-16">

        {/* Left Column - What the Project Needed */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Client Challenge</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What the Project Needed.</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed pb-2">
            Every ambitious project comes with its own set of hurdles. We needed to overcome these to deliver true business value.
          </p>

          <div className="space-y-4">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="flex flex-col gap-2 bg-[#161C26] border border-white/5 rounded-xl p-5 hover:bg-[#1E2532] transition-colors">
                <div className="flex items-center gap-4">
                  <CheckIcon />
                  <span className="text-white text-[16px] font-medium">{challenge.title || challenge}</span>
                </div>
                {challenge.description && (
                  <p className="text-gray-400 text-[16px] leading-relaxed pl-[2.75rem]">{challenge.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - The Solution */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Our Solution</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Techmapperz Solved It</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed pb-2">
            {secondaryDescription}
          </p>

          <div className="bg-[#161C26] border border-white/5 rounded-2xl p-6 sm:p-8 mt-6">
            <div className="grid grid-cols-1 gap-4">
              {solutions.map((solution, idx) => {
                const validFeatures = solution.features?.filter(f => typeof f === 'string' && f.trim() !== '') || [];
                return (
                  <div key={idx} className="bg-[#214354] border border-[#2B566A] rounded-xl p-5 flex flex-col justify-center shadow-inner hover:bg-[#285165] transition-colors">
                    <span className="text-[#1FD5DB] text-xs sm:text-[16px] font-bold tracking-wider uppercase mb-2">{(solution.title || solution)}</span>
                    {solution.description && (
                      <p className="text-gray-200 text-[16px] leading-relaxed">{solution.description}</p>
                    )}
                    {validFeatures.length > 0 && (
                      <ul className="mt-3.5 space-y-2">
                        {validFeatures.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1FD5DB] mt-[7px] flex-shrink-0 shadow-[0_0_8px_rgba(31,213,219,0.8)]" />
                            <span className="text-gray-300 text-[16px] leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              {solutions.length === 0 && (
                <div className="bg-[#214354] border border-[#2B566A] rounded-xl py-4 px-3 flex items-center justify-center text-center shadow-inner hover:bg-[#285165] transition-colors">
                  <span className="text-[#1FD5DB] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">Comprehensive Implementation</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </section>

      {/* Section 3: Project Gallery */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 relative z-10 pt-16 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">Project Gallery</h3>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Show the Real Project Visually</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed">
            This Section Is Designed For Your Actual Project Visuals. Add Survey Images, Screenshots, Terrain Models, Engineering Drawings, Or Site Photographs To Make The Case Study Feel More Authentic And Easier To Explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((img, idx) => (
            <div key={idx} className={`${img.span} group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col ${img.height} hover:border-[#05D7DE]/30 transition-all duration-300`}>
              <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
                <Image src={img.src} alt={img.alt} fill={true} sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
              </div>
              <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10">
                <span className="text-gray-300 text-[16px] font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Deliverables & Results */}
      <section ref={section4ContainerRef} className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-16 border-t border-white/5 items-start">

        {/* Left Column - Deliverables */}
        <div className="space-y-6">
          <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Key Features</h3>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Capabilities Delivered</h2>
          {/* <p className="text-gray-400 text-[16px] leading-relaxed pb-2">
            Railway Corridor Projects Require Continuous, High-Accuracy Terrain Informa-Tion Across Long Distances. Traditional Methods Can Be Slower And Less Scalable When Engineering Teams Need Reliable Elevation Data, Terrain Understanding, And Corridor-Wide Consistency.
          </p> */}

          <div className="space-y-3">
            {deliverables.map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#161C26] border border-white/5 rounded-xl p-4 hover:bg-[#1E2532] transition-colors shadow-sm">
                <CheckIcon />
                <span className="text-white text-[16px] font-medium leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Business Impact */}
        <div ref={resultsRightSideRef} className="w-full space-y-6">
          <div>
            <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Business Impact</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Results and Value Delivered</h2>
          </div>
          {/* <p className="text-gray-400 text-[16px] leading-relaxed pb-2">
            {portfolioItem.conclusion || "We Used A Drone-Based LiDAR Workflow Combined With Aerial Imaging To Capture Dense, Accurate, Corridor-Scale Terrain Data. The Process Was Structured For Direct Use In Planning And Engineering, Giving The Client Faster Execution, Reliable Outputs, And A Scalable Geospatial Base."}
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {results.map((result, idx) => {
              return (
                <div key={idx} className="bg-[#18222C] border border-[#05D7DE] rounded-[0.85rem] p-6 flex items-center justify-center text-center shadow-[0_4px_20px_rgba(5,215,222,0.1)] hover:shadow-[0_4px_25px_rgba(5,215,222,0.2)] hover:bg-[#1E2B38] hover:-translate-y-0.5 transition-all duration-300 min-h-[110px]">
                  <span className="text-[#05D7DE] font-bold leading-relaxed text-[16px] tracking-wide">
                    {result.description || result.label || result.title || result}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </section>



      {/* Section 6: Execution Process */}
      <section className="max-w-[85rem] mx-auto w-full px-6 md:px-12 pb-24 relative z-10 pt-16 border-t border-white/5">
        <div ref={executionContainerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start relative">
          {/* Left: Illustration and Text */}
          <div ref={leftSideRef} className="lg:col-span-4 space-y-8 flex flex-col">
            <div>
              <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-4">Project Process</h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                How We Executed <br className="hidden md:block" /> the Project
              </h2>
            </div>

            {/* Illustration */}
            <div className="relative w-full max-w-md flex items-center justify-center">
              <Image src="/portfolio/Executed.png" alt="Execution Process Illustration" width={800} height={800} className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-8 space-y-5">
            {executionSteps.map((item, idx) => (
              <div key={idx} className="bg-[#171C25] border border-white/5 rounded-[1.25rem] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-[#1E2532] transition-colors h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2983D1] to-[#12C8C6] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(18,200,198,0.25)]">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-gray-400 text-[16px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Tech Stack Full Width */}
      {techStackArray.length > 0 && (
        <section className=" bg-[#0A1020] mx-auto w-full px-6 md:px-12 pb-24 relative z-10 border-t border-white/5 pt-16">
          <div className="text-center mb-12 flex flex-col items-center">
            <h3 className="text-[#05D7DE] text-[11px] md:text-xs font-bold tracking-widest uppercase mb-2">Tools & Technologies</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Tech Arsenal</h2>
            <p className="text-gray-400 text-[16px] max-w-2xl leading-relaxed">
              We leverage the latest frameworks and modern technologies to build scalable, high-performance digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {techStackArray.map((text, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center justify-center bg-[#1E293B] border border-[#334155] rounded-[1.125rem] py-6 px-4 hover:bg-[#334155] hover:border-[#475569] transition-colors shadow-sm group">
                  <div className="mb-3 text-[#05D7DE] group-hover:scale-110 transition-transform duration-300">
                    {getTechIcon(text)}
                  </div>
                  <span className="text-white text-[16px] font-semibold tracking-wide text-center">{text}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Section 6: Project Highlights & Related Services */}
      {(portfolioItem.highlights?.length > 0 || portfolioItem.relatedServices?.length > 0) && (
        <section ref={section6ContainerRef} className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 pt-16 border-t border-white/5 items-start">

          {/* Left Column - Project Highlights */}
          <div ref={highlightsLeftSideRef} className="space-y-6">
            <h3 className="text-[#05D7DE] text-xs font-bold tracking-widest uppercase mb-2">Project Highlights</h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Takeaways.</h2>

            <div className="space-y-4 pt-4">
              {portfolioItem.highlights?.map((highlight, idx) => (
                <div key={idx} className="flex flex-col gap-2.5 bg-[#161C26] border border-[#232B38] rounded-[1.25rem] p-6 hover:bg-[#1E2532] transition-colors shadow-sm">
                  <div className="flex items-center gap-4">
                    <CheckIcon />
                    <span className="text-white text-[16px] font-bold tracking-wide">{highlight.title}</span>
                  </div>
                  {highlight.description && (
                    <p className="text-gray-400 text-[16px] leading-relaxed pl-[2.75rem] pr-2">{highlight.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Related Services */}
          <div className="bg-[#0D1A26] bg-gradient-to-b from-[#0F1F2D]/95 to-[#0A1621]/95 border border-[#18D7DF]/10 rounded-[34px] p-8 md:p-11 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_28px_90px_rgba(0,0,0,0.32),0_0_45px_rgba(24,215,223,0.06)] relative overflow-hidden h-fit">
            <div className="absolute inset-[-1px] bg-[radial-gradient(circle_at_82%_8%,rgba(24,215,223,0.18),transparent_28%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-[#18D7DF] text-[13px] font-extrabold tracking-[0.18em] uppercase mb-4">Related Services</h3>
                <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-[1.04] text-white mb-0">Explore More<br/> Services</h2>
              </div>
              
              <div className="flex flex-col gap-4 pt-4">
                {portfolioItem.relatedServices?.map((service, idx) => {
                  const title = typeof service === 'string' ? service : service.title;
                  const desc = typeof service === 'string' ? null : service.description;
                  const icons = ["↗", "⚙", "▣", "◎", "⌁"];
                  const icon = typeof service !== 'string' && service.icon ? service.icon : icons[idx % icons.length];
                  
                  return (
                    <Link 
                      href="/service" 
                      key={idx} 
                      className="group flex items-center justify-between gap-5 p-5 md:px-6 md:py-[22px] bg-[#151C26]/95 border border-white/10 rounded-[22px] transition-all duration-300 min-h-[104px] hover:translate-x-[7px] hover:bg-[#172636] hover:border-[#18D7DF]/40 hover:shadow-[0_16px_44px_rgba(24,215,223,0.08)]"
                    >
                      <div className="flex gap-[18px] items-start">
                        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#18D7DF]/10 border border-[#18D7DF]/30 text-[#18D7DF] font-sans font-black text-xl shrink-0 mt-0.5">
                          {icon}
                        </div>
                        <div>
                          <h3 className="text-white text-[19px] font-bold leading-[1.25] tracking-[0.01em] m-0">
                            {title}
                          </h3>
                          {desc && (
                            <p className="text-[#AEBBD0] text-[14.5px] leading-[1.55] mt-[9px] font-sans m-0">
                              {desc}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="font-sans text-[28px] text-[#18D7DF] opacity-75 transition-all duration-[250ms] shrink-0 group-hover:opacity-100 group-hover:translate-x-[5px]">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 7: CTA Section */}
      <div className="w-full bg-[#0A1020]">
        <section className="max-w-6xl mx-auto w-full px-6 md:px-12 pb-32 relative z-10 pt-16 mt-12">

          <div
            className="relative rounded-[2rem] overflow-hidden bg-[#161C24] border border-[#2A3441] p-10 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 w-full"
          >
            {/* Left Side: Content */}
            <div className="relative z-10 max-w-2xl flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-5 text-white">
                {portfolioItem.cta?.heading ? (
                  <span dangerouslySetInnerHTML={{ __html: portfolioItem.cta.heading.replace(/\n/g, '<br className="hidden md:block" />') }} />
                ) : (
                  "Ready to replace scattered tools with a CRM your team will actually use?"
                )}
              </h2>
              <p className="text-gray-400 text-[16px] md:text-[16px] leading-relaxed">
                {portfolioItem.cta?.description || "Build a CRM tailored to your sales, operations, and support workflows with Techmapperz. We help you plan, build, migrate, launch, and improve with clarity."}
              </p>
            </div>

            {/* Right Side: Buttons */}
            <div className="relative z-10 flex flex-col w-full lg:w-auto min-w-[300px] gap-4 shrink-0">
              <Link href={portfolioItem.cta?.button1Link || "/contact"} className="w-full block group">
                <button className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-[#4A72FF] to-[#D93A49] text-white font-extrabold text-[16px] tracking-wide hover:shadow-[0_0_20px_rgba(217,58,73,0.3)] hover:scale-[1.02] transition-all duration-300">
                  <span>{portfolioItem.cta?.button1Text || "Request a Proposal"}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
              <Link href={portfolioItem.cta?.button2Link || "/portfolios"} className="w-full block">
                <button className="w-full py-4 px-8 rounded-full bg-[#2D333B] border border-[#444C56] text-white font-bold text-[16px] hover:bg-[#373E47] transition-all text-center shadow-inner">
                  {portfolioItem.cta?.button2Text || "Get Timeline & Estimate (48 hrs)"}
                </button>
              </Link>
            </div>
          </div>

        </section>
      </div>

    </div>
  );
}