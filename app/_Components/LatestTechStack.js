"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaJava, FaAngular, FaPhp, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiKubernetes, SiPostgresql, SiFirebase, SiTailwindcss, SiRedux, SiJquery, SiMysql, SiExpress, SiVuedotjs, SiDjango, SiLaravel, SiRubyonrails, SiDotnet } from "react-icons/si";
import Link from "next/link";

const categorizedTechStack = {
  Frontend: [
    { name: "React", icon: <FaReact />, brandColor: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, brandColor: "#ffffff" },
    { name: "Angular", icon: <FaAngular />, brandColor: "#DD0031" },
    { name: "Vue.js", icon: <SiVuedotjs />, brandColor: "#4FC08D" },
    { name: "TypeScript", icon: <SiTypescript />, brandColor: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, brandColor: "#38BDF8" },
    { name: "Redux", icon: <SiRedux />, brandColor: "#764ABC" },
    { name: "jQuery", icon: <SiJquery />, brandColor: "#0769AD" },
    { name: "HTML5", icon: <FaHtml5 />, brandColor: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, brandColor: "#1572B6" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, brandColor: "#3C873A" },
    { name: "Express", icon: <SiExpress />, brandColor: "#ffffff" },
    { name: "Python", icon: <FaPython />, brandColor: "#3776AB" },
    { name: "Django", icon: <SiDjango />, brandColor: "#092E20" },
    { name: "Java", icon: <FaJava />, brandColor: "#5382a1" },
    { name: "PHP", icon: <FaPhp />, brandColor: "#787CB5" },
    { name: "Laravel", icon: <SiLaravel />, brandColor: "#FF2D20" },
    { name: "Ruby on Rails", icon: <SiRubyonrails />, brandColor: "#CC0000" },
    { name: ".NET", icon: <SiDotnet />, brandColor: "#5C2D91" },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, brandColor: "#4DB33D" },
    { name: "PostgreSQL", icon: <SiPostgresql />, brandColor: "#336791" },
    { name: "MySQL", icon: <SiMysql />, brandColor: "#00758F" },
    { name: "Firebase", icon: <SiFirebase />, brandColor: "#FFCA28" },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker />, brandColor: "#0db7ed" },
    { name: "Kubernetes", icon: <SiKubernetes />, brandColor: "#326CE5" },
    { name: "AWS", icon: <FaAws />, brandColor: "#FF9900" },
    { name: "Git", icon: <FaGit />, brandColor: "#F05033" },
  ],
};

const LatestTechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative py-24 bg-[#070A11] border-t border-white/5 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d5689]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#05D7DE]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/portfolio/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">Powered By</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
            Our Technology Stack
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#05D7DE] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Categories Sidebar */}
          <motion.div 
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 w-full lg:w-64 flex-shrink-0 hide-scrollbar"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Object.keys(categorizedTechStack).map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-6 py-4 rounded-2xl font-bold text-lg text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal overflow-hidden group ${
                    isActive 
                      ? "text-white shadow-[0_0_20px_rgba(5,215,222,0.15)]" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {/* Active Background Glow */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#2d5689]/40 to-[#05D7DE]/20 border border-[#05D7DE]/30 rounded-2xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10 flex items-center justify-between">
                    {category}
                    {isActive && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-2 h-2 rounded-full bg-[#05D7DE] shadow-[0_0_10px_#05D7DE]"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Tech Grid Container */}
          <div className="flex-1 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              >
                {categorizedTechStack[selectedCategory].map((tech, index) => (
                  <Link key={tech.name} href={`/technology/${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                    <motion.div
                      className="group relative flex flex-col items-center justify-center p-6 h-full rounded-[1.5rem] bg-[#111622]/80 backdrop-blur-xl border border-white/5 cursor-pointer overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {/* Neon Brand Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${tech.brandColor} 0%, transparent 70%)` }}
                      />
                      
                      {/* Brand Border Hover */}
                      <div 
                        className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                        style={{ border: `1px solid ${tech.brandColor}` }}
                      />

                      <motion.div
                        className="text-5xl mb-4 text-gray-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg relative z-10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        style={{ 
                          filter: `drop-shadow(0 0 8px ${tech.brandColor}40)`
                        }}
                      >
                        {/* Apply dynamic color using inline style to ensure it overrides classes if needed */}
                        <div style={{ color: tech.brandColor }}>
                          {tech.icon}
                        </div>
                      </motion.div>
                      
                      <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors relative z-10 tracking-wide">
                        {tech.name}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* Hide scrollbar styles for the mobile category tabs */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default LatestTechStack;
