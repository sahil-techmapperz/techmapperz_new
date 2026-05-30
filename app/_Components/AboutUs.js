"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiCpu, FiTarget, FiMaximize, FiUserCheck, FiLayers, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: "Innovation-Driven Approach",
    description: "We orchestrate cutting-edge AI, GIS, and cloud technologies to future-proof your business infrastructure and solve tomorrow's complex challenges today.",
    icon: <FiCpu className="w-7 h-7" />,
    style: "huge" // Tall card in left column
  },
  {
    id: 2,
    title: "Precision & Accuracy",
    description: "Every solution is rooted in rigorous data analysis to meet exact operational requirements.",
    icon: <FiTarget className="w-6 h-6" />,
    style: "normal" // Short card
  },
  {
    id: 3,
    title: "Agile Scalability",
    description: "Customized delivery frameworks designed to scale elastically from disruptive startups to global enterprises.",
    icon: <FiMaximize className="w-6 h-6" />,
    style: "tall" // Tall card, text at bottom
  },
  {
    id: 4,
    title: "Client-Centric Execution",
    description: "We operate as your strategic partner, ensuring transparent workflows that guarantee business outcomes.",
    icon: <FiUserCheck className="w-6 h-6" />,
    style: "normal" // Wide standard card
  },
  {
    id: 5,
    title: "Multi-Industry Expertise",
    description: "Proven track record across public sector, urban development, infrastructure, and energy markets.",
    icon: <FiLayers className="w-6 h-6" />,
    style: "normal" // Wide standard card
  },
  {
    id: 6,
    title: "Cost-Effective Optimization",
    description: "Streamlined processes that maximize ROI without compromising enterprise-grade quality.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    style: "normal" // Wide standard card
  },
  {
    id: 7,
    title: "Cost-Effective Optimization 2",
    description: "Streamlined processes that maximize ROI without compromising enterprise-grade quality.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    style: "normal" // Wide standard card
  }
];

const BentoCard = ({ feature }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Determine height rules
  const heightClass =
    feature.style === 'huge' ? 'min-h-[420px]' :
      feature.style === 'tall' ? 'min-h-[380px]' :
        'min-h-[380px]';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMouseMove}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0B0E14] p-8 lg:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:bg-[#0c111a] w-full ${heightClass}`}
    >
      {/* Dynamic Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      {/* Icon and Number Header */}
      <div className="flex items-start justify-between w-full mb-8">
        <div className="w-14 h-14 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white/5 transition-colors duration-300">
          {feature.icon}
        </div>
        <span className="text-5xl lg:text-6xl font-black text-white/[0.03] select-none transition-colors duration-300 group-hover:text-white/[0.08]">
          0{feature.id}
        </span>
      </div>

      {/* Content Area */}
      <div className={`mt-auto ${feature.style === 'huge' ? 'w-full md:w-[85%]' : 'w-full'}`}>
        <h3 className={`mb-3 font-bold text-white tracking-wide transition-colors duration-300 ${feature.style === 'huge' ? 'text-2xl md:text-3xl lg:text-4xl leading-tight' : 'text-xl'}`}>
          {feature.title}
        </h3>
        <p className={`text-gray-400 font-light leading-relaxed ${feature.style === 'huge' ? 'text-base md:text-lg' : 'text-sm'}`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <section className="bg-[#05080E] relative py-24 overflow-hidden border-t border-white/5">
      {/* Subtle ambient glows to match the dark theme */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#376bab]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#d2292b]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16 lg:mb-24"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-[#0B0E14] mb-8 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#d2292b]"></span>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">The Techmapperz Difference</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05]">
              Engineered for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] via-[#8b5cf6] to-[#d2292b]">Absolute Dominance.</span>
            </h2>
          </div>
          <div className="lg:w-[40%] flex justify-end">
            <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light leading-relaxed border-l-2 border-[#376bab] pl-6 max-w-md">
              We abandon the conventional to deliver uniquely adaptive, data-driven solutions that catapult your enterprise ahead of the curve.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Flex Layout to precisely match the target design & gaps */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">

          {/* Left Column Container (50%) */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2 w-full">
            {/* Card 1 */}
            <BentoCard feature={features[0]} />

            {/* Card 4 */}
            <BentoCard feature={features[3]} />

            {/* Card 6 */}
            <BentoCard feature={features[5]} />
          </div>

          {/* Right Column Container (50%) */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2 w-full">

            {/* Top Row inside Right Column */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 w-full">
              {/* Card 2 */}
              <div className="w-full sm:w-1/2">
                <BentoCard feature={features[1]} />
              </div>

              {/* Card 3 (Tall) */}
              <div className="w-full sm:w-1/2">
                <BentoCard feature={features[2]} />
              </div>
            </div>

            {/* Bottom Card inside Right Column */}
            {/* Card 5 */}
            <div className="w-full h-full">
              <BentoCard feature={features[4]} />
            </div>
            {/* Card 5 */}
            <div className="w-full h-full">
              <BentoCard feature={features[6]} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
