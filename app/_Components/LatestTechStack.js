"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaJava, FaAngular, FaPhp, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiKubernetes, SiPostgresql, SiFirebase, SiTailwindcss, SiRedux, SiJquery, SiMysql, SiExpress, SiVuedotjs, SiDjango, SiLaravel, SiRubyonrails, SiCsharp, SiDotnet, SiFlutter, SiSass, SiWebpack, SiBabel, SiRust, SiKotlin, SiElasticsearch } from "react-icons/si";
import Link from "next/link";
import styles from './LatestTechStack.module.css';

const categorizedTechStack = {
  Frontend: [
    { name: "React", icon: <FaReact />, bg: "#282c34", textColor: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, bg: "#fff", textColor: "#000" },
    { name: "Angular", icon: <FaAngular />, bg: "#FFECEC", textColor: "#DD0031" },
    { name: "Vue.js", icon: <SiVuedotjs />, bg: "#f0fdf4", textColor: "#4FC08D" },
    { name: "TypeScript", icon: <SiTypescript />, bg: "#fff", textColor: "#3178C6" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, bg: "#f5fcff", textColor: "#38BDF8" },
    { name: "Redux", icon: <SiRedux />, bg: "#f5ebff", textColor: "#764ABC" },
    { name: "jQuery", icon: <SiJquery />, bg: "#eaf6ff", textColor: "#0769AD" },
    { name: "HTML5", icon: <FaHtml5 />, bg: "#ffe9e0", textColor: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, bg: "#e6f0ff", textColor: "#1572B6" },
    { name: "SASS", icon: <SiSass />, bg: "#ffe9f5", textColor: "#CC6699" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, bg: "#eafae3", textColor: "#3C873A" },
    { name: "Express", icon: <SiExpress />, bg: "#f7f7f7", textColor: "#444" },
    { name: "Python", icon: <FaPython />, bg: "#f5f5f5", textColor: "#3776AB" },
    { name: "Django", icon: <SiDjango />, bg: "#d8f8dd", textColor: "#092E20" },
    { name: "Java", icon: <FaJava />, bg: "#f0f0f0", textColor: "#5382a1" },
    { name: "PHP", icon: <FaPhp />, bg: "#f2faff", textColor: "#787CB5" },
    { name: "Laravel", icon: <SiLaravel />, bg: "#ffeeee", textColor: "#FF2D20" },
    { name: "RubyonRails", icon: <SiRubyonrails />, bg: "#ffecec", textColor: "#CC0000" },
    { name: ".NET", icon: <SiDotnet />, bg: "#eee8f6", textColor: "#5C2D91" },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, bg: "#F7F7F7", textColor: "#4DB33D" },
    { name: "PostgreSQL", icon: <SiPostgresql />, bg: "#eef4ff", textColor: "#336791" },
    { name: "MySQL", icon: <SiMysql />, bg: "#f5faff", textColor: "#00758F" },
    { name: "Firebase", icon: <SiFirebase />, bg: "#fff8e1", textColor: "#FFCA28" },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker />, bg: "#f2f2f2", textColor: "#0db7ed" },
    { name: "Kubernetes", icon: <SiKubernetes />, bg: "#f0f8ff", textColor: "#326CE5" },
    { name: "AWS", icon: <FaAws />, bg: "#232f3e", textColor: "#FF9900" },
    { name: "Git", icon: <FaGit />, bg: "#fcecec", textColor: "#F05033" },
  ],
};




const LatestTechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 }
  };

  const categoryVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#f0f0f0",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <motion.div
          className={styles.categories}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Object.keys(categorizedTechStack).map((category) => (
            <motion.div
              key={category}
              className={styles.categoryItem}
              variants={categoryVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                backgroundColor: selectedCategory === category ? "#e0e0e0" : "transparent",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.div>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
          >
            {categorizedTechStack[selectedCategory].map((tech, index) => (
              <Link key={index} href={`./technology/${tech.name.toLowerCase()}`}>
                <motion.div
                  className={styles.card}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    backgroundColor: tech.bg,
                    color: tech.textColor,
                  }}
                >
                  <motion.div
                    className={styles.icon}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.p
                    className={styles.name}
                    style={{ color: tech.textColor }}
                  >
                    {tech.name}
                  </motion.p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LatestTechStack;
