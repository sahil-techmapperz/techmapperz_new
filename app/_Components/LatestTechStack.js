"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaJava, FaAngular, FaPhp, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiKubernetes, SiPostgresql, SiFirebase, SiTailwindcss, SiRedux, SiJquery, SiMysql, SiExpress, SiVuedotjs, SiDjango, SiLaravel, SiRubyonrails, SiCsharp, SiDotnet, SiFlutter, SiSass, SiWebpack, SiBabel, SiRust, SiKotlin, SiElasticsearch } from "react-icons/si";

const categorizedTechStack = {
  Frontend: [
    { name: "React", icon: <FaReact />, bg: "rgba(97, 219, 251, 0.1)", textColor: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, bg: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff" },
    { name: "Angular", icon: <FaAngular />, bg: "rgba(221, 0, 49, 0.1)", textColor: "#DD0031" },
    { name: "Vue.js", icon: <SiVuedotjs />, bg: "rgba(79, 192, 141, 0.1)", textColor: "#4FC08D" },
    { name: "TypeScript", icon: <SiTypescript />, bg: "rgba(49, 120, 198, 0.1)", textColor: "#3178C6" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, bg: "rgba(56, 189, 248, 0.1)", textColor: "#38BDF8" },
    { name: "Redux", icon: <SiRedux />, bg: "rgba(118, 74, 188, 0.1)", textColor: "#764ABC" },
    { name: "HTML5", icon: <FaHtml5 />, bg: "rgba(227, 79, 38, 0.1)", textColor: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, bg: "rgba(21, 114, 182, 0.1)", textColor: "#1572B6" },
    { name: "SASS", icon: <SiSass />, bg: "rgba(204, 102, 153, 0.1)", textColor: "#CC6699" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, bg: "rgba(60, 135, 58, 0.1)", textColor: "#3C873A" },
    { name: "Express", icon: <SiExpress />, bg: "rgba(255, 255, 255, 0.1)", textColor: "#ffffff" },
    { name: "Python", icon: <FaPython />, bg: "rgba(55, 118, 171, 0.1)", textColor: "#3776AB" },
    { name: "Django", icon: <SiDjango />, bg: "rgba(9, 46, 32, 0.3)", textColor: "#092E20" },
    { name: "Java", icon: <FaJava />, bg: "rgba(83, 130, 161, 0.1)", textColor: "#5382a1" },
    { name: "PHP", icon: <FaPhp />, bg: "rgba(120, 124, 181, 0.1)", textColor: "#787CB5" },
    { name: "Laravel", icon: <SiLaravel />, bg: "rgba(255, 45, 32, 0.1)", textColor: "#FF2D20" },
    { name: ".NET", icon: <SiDotnet />, bg: "rgba(92, 45, 145, 0.1)", textColor: "#5C2D91" },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, bg: "rgba(77, 179, 61, 0.1)", textColor: "#4DB33D" },
    { name: "PostgreSQL", icon: <SiPostgresql />, bg: "rgba(51, 103, 145, 0.1)", textColor: "#336791" },
    { name: "MySQL", icon: <SiMysql />, bg: "rgba(0, 117, 143, 0.1)", textColor: "#00758F" },
    { name: "Firebase", icon: <SiFirebase />, bg: "rgba(255, 202, 40, 0.1)", textColor: "#FFCA28" },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker />, bg: "rgba(13, 183, 237, 0.1)", textColor: "#0db7ed" },
    { name: "Kubernetes", icon: <SiKubernetes />, bg: "rgba(50, 108, 229, 0.1)", textColor: "#326CE5" },
    { name: "AWS", icon: <FaAws />, bg: "rgba(255, 153, 0, 0.1)", textColor: "#FF9900" },
    { name: "Git", icon: <FaGit />, bg: "rgba(240, 80, 51, 0.1)", textColor: "#F05033" },
  ],
};

const LatestTechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
  };

  return (
    <div className="w-full bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10">

        {/* Sidebar / Category Selector */}
        <div className="w-full md:w-64 flex-shrink-0 flex md:flex-col overflow-x-auto md:overflow-visible gap-3 pb-4 md:pb-0 scrollbar-hide">
          {Object.keys(categorizedTechStack).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-4 rounded-2xl text-left font-semibold transition-all duration-300 flex items-center justify-between group whitespace-nowrap overflow-hidden ${selectedCategory === category
                ? "text-white shadow-lg"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
            >
              <span className="relative z-10">{category}</span>

              {/* Active Indicator Arrow */}
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedCategory === category
                ? "opacity-100 bg-white shadow-[0_0_10px_white]"
                : "opacity-0 -translate-x-4"
                }`}></div>

              {/* Active State Background Gradient */}
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 border border-white/20 bg-gradient-to-r from-[#376bab]/80 to-[#d2292b]/80 rounded-2xl -z-0"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Display Grid */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {categorizedTechStack[selectedCategory].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl overflow-hidden cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                >
                  {/* Dynamic Glowing Background Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at center, ${tech.bg} 0%, transparent 70%)` }}
                  ></div>

                  {/* Border Effect */}
                  <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 rounded-2xl transition-colors duration-500 z-10"></div>

                  <div
                    className="relative z-20 text-4xl md:text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-md"
                    style={{ color: tech.textColor }}
                  >
                    {tech.icon}
                  </div>

                  <p className="relative z-20 text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LatestTechStack;
