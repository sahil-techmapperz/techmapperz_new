
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '../_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import agile_team_illustration from '@/public/Photos/agile_team_illustration.png';
import about_us_banner_img from '@/public/Photos/about_us_banner.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaLightbulb, FaHandshake, FaBrain, FaBalanceScale, FaShieldAlt,
  FaMapMarkedAlt, FaSatelliteDish, FaCode, FaMobile, FaCloud, FaUsers
} from 'react-icons/fa';
import { FiCheckCircle, FiTarget, FiEye, FiZap } from 'react-icons/fi';
import { MdOutlineVerified, MdOutlineGroups, MdOutlineStars, MdOutlineRocketLaunch } from 'react-icons/md';
import { GiCog } from 'react-icons/gi';
import { IMAGE_CONFIGS, createOptimizedLoader } from '../lib/utils/performanceOptimizer';

const OfficeLive = dynamic(() => import('./OfficeLive'), {
  ...createOptimizedLoader("500px", "bg-gray-800")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 86400;

export const metadata = {
  title: "Techmapperz – Leading IT, GIS & Drone Solutions Company in India",
  description: "Techmapperz provides advanced GIS mapping, drone survey, software development and IT consulting services in India. Trusted by urban planners, utilities and enterprises, we turn spatial data into actionable insights.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const stats = [
  { number: "20+", label: "Major Projects", icon: <MdOutlineRocketLaunch /> },
  { number: "90%", label: "Repeat Clients", icon: <MdOutlineGroups /> },
  { number: "2021", label: "Est. Year", icon: <MdOutlineStars /> },
  { number: "ISO", label: "9001 Certified", icon: <MdOutlineVerified /> },
];

const services = [
  { icon: <FaMapMarkedAlt />, label: "GIS Mapping" },
  { icon: <FaSatelliteDish />, label: "Drone Surveys" },
  { icon: <FaCode />, label: "Software Dev" },
  { icon: <FaMobile />, label: "Mobile Apps" },
  { icon: <FaCloud />, label: "IT Consulting" },
  { icon: <FaUsers />, label: "Web Dev" },
];

const processSteps = [
  {
    step: "01",
    title: "Plan",
    desc: "We understand the problem, define the goals, and create the right strategy.",
    color: "from-[#2d5689] to-[#a82123]"
  },
  {
    step: "02",
    title: "Create",
    desc: "We design and develop the right solution using suitable tools and technologies.",
    color: "from-[#2d5689] to-[#a82123]"
  },
  {
    step: "03",
    title: "Optimize",
    desc: "We refine workflows, improve usability, and ensure the solution performs effectively.",
    color: "from-[#2d5689] to-[#a82123]"
  },
  {
    step: "04",
    title: "Achieve",
    desc: "We help clients generate measurable results, business value, and long-term impact.",
    color: "from-[#2d5689] to-[#a82123]"
  },
];

const agilePoints = [
  { title: "Individuals and Interactions", desc: "We value effective communication, collaboration, and teamwork to drive better outcomes.", icon: <FaUsers /> },
  { title: "Working Solutions", desc: "We focus on delivering practical, working solutions that solve real business problems.", icon: <FiCheckCircle /> },
  { title: "Customer Collaboration", desc: "We work closely with clients throughout the project to ensure alignment and shared success.", icon: <FaHandshake /> },
  { title: "Adaptability", desc: "We stay flexible and responsive, making room for changes when business needs evolve.", icon: <FiZap /> },
];

const benefits = [
  "Better time and cost control",
  "Continuous feedback throughout the project",
  "Flexibility to improve during execution",
  "Reduced delivery risk",
  "Stronger end results",
];

const values = [
  { icon: <FaLightbulb />, text: 'Simplicity', description: 'We keep solutions clear, practical, and easy to adopt.' },
  { icon: <FaHandshake />, text: 'Flexibility', description: 'We stay adaptable and open-minded in dynamic project environments.' },
  { icon: <FaBrain />, text: 'Ingenuity', description: 'We value thoughtful ideas and creative approaches to problem solving.' },
  { icon: <FaBalanceScale />, text: 'Accountability', description: 'We take ownership of our work and our commitments.' },
  { icon: <FaShieldAlt />, text: 'Integrity', description: 'We make responsible decisions based on professionalism and trust.' },
];

const whyChoose = [
  {
    icon: <MdOutlineRocketLaunch className="text-3xl" />,
    title: "Proven Expertise",
    desc: "Team of certified geospatial analysts and developers with 20+ major projects completed.",
    gradient: "from-[#2d5689]/20 to-[#a82123]/10"
  },
  {
    icon: <MdOutlineVerified className="text-3xl" />,
    title: "Quality & Reliability",
    desc: "ISO 9001 certified processes ensure on-time, on-budget delivery every time.",
    gradient: "from-[#2d5689]/20 to-[#a82123]/10"
  },
  {
    icon: <MdOutlineGroups className="text-3xl" />,
    title: "Client Satisfaction",
    desc: "Over 90% of clients are repeat or referred customers — we earn trust on every project.",
    gradient: "from-[#2d5689]/20 to-[#a82123]/10"
  },
  {
    icon: <MdOutlineStars className="text-3xl" />,
    title: "Innovation First",
    desc: "We embrace AI-driven imagery, cloud GIS platforms, and the latest tech to give you an edge.",
    gradient: "from-[#2d5689]/20 to-[#a82123]/10"
  },
];

const About = () => {
  return (
    <div className="bg-[#111111] overflow-hidden">
      <ScrollToTop />

      {/* ─── HERO BANNER ─── */}
      <section className="relative w-full h-[92vh] min-h-[600px] flex items-center justify-center">
        <Image
          src={about_us_banner_img}
          className="absolute inset-0 w-full h-full object-cover"
          alt="About Techmapperz – Leading IT, GIS & Drone Solutions"
          {...IMAGE_CONFIGS.banner}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          priority
        />
        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#a82123]/10 via-transparent to-[#2d5689]/10" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#a82123]/10 border border-[#a82123]/30 text-[#a82123] text-sm font-semibold px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#a82123] animate-pulse" />
            Est. 2021 · India-Based · ISO 9001 Certified
          </div>
          <h1 className="text-6xl max-md:text-4xl max-sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Turning <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a82123] to-[#2d5689]">Complex Problems</span>
            <br />into Simple Solutions
          </h1>
          <p className="text-xl max-sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Techmapperz is India's trusted partner for IT, GIS, and drone solutions — helping businesses across sectors plan smarter, operate better, and grow faster.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="group py-4 px-8 rounded-full bg-gradient-to-r from-[#a82123] to-[#2d5689] text-white font-bold text-base hover:shadow-[0_0_30px_rgba(0,176,254,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Get a Free Quote
                <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/service">
              <button className="py-4 px-8 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-[#a82123]/50 transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="relative z-10 -mt-1 bg-gradient-to-r from-[#0a0a0a] via-[#0f1923] to-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-4 max-sm:grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-[#a82123] text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <div className="text-4xl max-sm:text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#a82123] to-white">
                {s.number}
              </div>
              <div className="text-gray-400 text-sm font-medium mt-1 tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT TECHMAPPERZ ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
          {/* Left: Video + service pills */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
              <video
                autoPlay controls loop muted
                className="relative w-full rounded-2xl shadow-2xl"
                aria-label="Techmapperz introduction video"
              >
                <source src="/media/Introducation_video.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Service pills */}
            <div className="flex flex-wrap gap-3">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#a82123]/10 border border-[#a82123]/20 text-[#a82123] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#a82123]/20 transition-colors duration-200">
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-8">
            <div>
              <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-5xl max-md:text-3xl font-extrabold text-white mt-3 leading-tight">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a82123] to-[#2d5689]">Techmapperz</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mt-5" />
            </div>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Techmapperz is an India-based IT, GIS, and drone solutions company helping businesses and organizations solve real-world challenges through technology, mapping, and digital innovation. We provide a combination of GIS services, drone survey and mapping solutions, custom software development, web development, mobile app development, and IT consulting to support smarter planning, better operations, and business growth.
              </p>
              <p>
                Our work serves a wide range of sectors, including urban planning, agriculture, real estate, logistics, environmental management, infrastructure, and enterprise digital transformation. By combining geospatial intelligence with modern software development, we help our clients make informed decisions, improve efficiency, and build scalable digital systems.
              </p>
              <p>
                At Techmapperz, we believe that great solutions do not have to be complicated. We are a team of practical thinkers, problem solvers, and technology professionals who focus on simplifying complex business and operational challenges. Our goal is to build solutions that are effective, reliable, and easy to use. Since 2021, Techmapperz has served clients across government and enterprise, delivering tailored solutions that streamline operations and boost ROI.
              </p>
            </div>


          </div>
        </div>
      </section>
      {/* ─── WHO WE ARE ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#a82123] rounded-full filter blur-[200px] opacity-[0.03]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#a82123]/10 text-[#a82123] mb-6 border border-[#a82123]/20 shadow-[0_0_20px_rgba(168,33,35,0.2)]">
            <FiTarget className="text-3xl" />
          </div>
          <h2 className="text-4xl max-sm:text-3xl font-extrabold text-white mb-6">Who We Are</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mb-8" />
          
          <div className="space-y-6 text-xl max-sm:text-lg text-gray-300 leading-relaxed">
            <p>
              Techmapperz was built with a vision to make innovation more practical, accessible, and results-driven. We aim to support businesses, institutions, and government-related projects with smart digital and geospatial solutions that create measurable value.
            </p>
            <p>
              We do not believe in one-size-fits-all delivery. Every business has different goals, workflows, and challenges. That is why we take a tailored approach to every project—understanding the requirement first, then designing a solution that is simple, useful, and scalable.
            </p>
          </div>
        </div>
      </section>


      {/* ─── MISSION & VISION ─── */}
      <section className="py-24 px-6 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#a82123] rounded-full filter blur-[200px] opacity-5" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Direction</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Mission & Vision</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#a82123]/20 rounded-3xl p-10 hover:border-[#a82123]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#a82123] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#a82123] to-[#2d5689] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,176,254,0.4)]">
                  <FiTarget className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <div className="w-10 h-0.5 bg-[#a82123] rounded-full mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  We at Techmapperz understand that each organisation is different, and so are their challenges. When we tailor solutions, we ensure they are as simplified as possible. <strong className="text-white">Our mission: simplified solutions for complex problems.</strong>
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#2d5689]/20 rounded-3xl p-10 hover:border-[#2d5689]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2d5689] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5689] to-[#2d5689] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(57,107,169,0.4)]">
                  <FiEye className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <div className="w-10 h-0.5 bg-[#2d5689] rounded-full mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  With technology becoming the most important part of our daily lives, we are driven by the commitment to deliver the best IT solutions — <strong className="text-white">to be a trusted provider of end-to-end IT and geospatial services to businesses globally.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,176,254,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(57,107,169,0.4) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Advantage</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Why Choose Techmapperz?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
              We focus on what matters most — delivering results that make a real difference for your business.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className={`group relative bg-gradient-to-br ${item.gradient} border border-white/5 rounded-3xl p-8 hover:border-[#a82123]/30 hover:-translate-y-2 transition-all duration-400 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#a82123] rounded-full filter blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#a82123]/10 border border-[#a82123]/20 flex items-center justify-center text-[#a82123] text-2xl mb-5 group-hover:scale-110 group-hover:bg-[#a82123]/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR PROCESS ─── */}
      <section className="py-24 px-6 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Methodology</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Our Process: Turning Ideas into Impact</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 relative items-stretch">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#a82123] via-[#2d5689] to-[#2d5689] z-0" />

            {processSteps.map((step, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center z-10 h-full">
                {/* Step circle */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,176,254,0.25)] group-hover:shadow-[0_0_50px_rgba(0,176,254,0.5)] group-hover:scale-110 transition-all duration-400 relative flex-shrink-0`}>
                  <div className="absolute inset-1 rounded-full bg-[#111111] flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-white/5 rounded-2xl p-6 group-hover:border-[#a82123]/30 transition-all duration-300 w-full flex flex-col flex-1">
                  <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.color} mb-3`}>{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW DO WE WORK (AGILE) ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a82123] rounded-full filter blur-[200px] opacity-5" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            {/* Left image */}
            <div className="group relative order-2 max-lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#a82123]/20 to-[#2d5689]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image
                src={agile_team_illustration}
                alt="How Techmapperz works – Agile methodology"
                className="relative w-full rounded-3xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Right content */}
            <div className="space-y-8 order-1 max-lg:order-2">
              <div>
                <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Approach</span>
                <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3 leading-tight">
                  How Do We <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a82123] to-[#2d5689]">Work</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mt-5" />
                <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                  Techmapperz follows an agile approach to project execution so we can deliver efficiently in fast-changing business and technology environments.
                </p>
              </div>

              <div className="space-y-4">
                {agilePoints.map((item, i) => (
                  <div key={i} className="group/item flex gap-5 p-5 bg-[#0d0d0d] border border-white/5 rounded-2xl hover:border-[#a82123]/30 hover:bg-[#a82123]/5 transition-all duration-300">
                    <div className="min-w-[48px] h-12 bg-gradient-to-br from-[#a82123]/20 to-[#2d5689]/20 rounded-xl flex items-center justify-center text-[#a82123] text-xl group-hover/item:bg-[#a82123]/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1 group-hover/item:text-[#a82123] transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGILE BENEFITS ─── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a0a] to-[#0f1923] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,176,254,1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Agile Advantage</span>
            <h2 className="text-3xl max-sm:text-xl font-extrabold text-white mt-3">Benefits of Our Agile Methodology</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white/3 border border-white/5 rounded-2xl p-5 hover:border-[#a82123]/30 hover:bg-[#a82123]/5 transition-all duration-300">
                <div className="min-w-[36px] h-9 flex items-center justify-center">
                  <FiCheckCircle className="text-[#a82123] text-xl group-hover:scale-125 transition-transform duration-300" />
                </div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFE AT TECHMAPPERZ (Gallery) ─── */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Culture & People</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Life @ Techmapperz</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
              At Techmapperz, we are building a work culture driven by learning, teamwork, creativity, and ownership. Our workspace reflects a team passionate about technology and meaningful outcomes.
            </p>
          </div>
          <OfficeLive />
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a82123] rounded-full filter blur-[300px] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Our Core Values</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#a82123] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {values.map((v, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 w-[calc(20%-1.5rem)] max-lg:w-[calc(33%-1rem)] max-sm:w-[calc(50%-0.75rem)] hover:border-[#a82123]/40 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#a82123]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
                <div className="relative z-10 flex flex-col items-center">
                  {/* Animated gear + icon */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-6 mx-auto">
                    <GiCog
                      className={`absolute inset-0 w-full h-full text-[#a82123]/40 group-hover:text-[#a82123]/70 transition-colors duration-300 ${i % 2 === 0 ? 'animate-[spin_15s_linear_infinite]' : 'animate-[spin_15s_linear_infinite_reverse]'}`}
                    />
                    <div className="relative z-10 text-3xl text-white bg-black/70 p-3 rounded-full flex items-center justify-center">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a82123] transition-colors duration-300">{v.text}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a82123]/10 via-transparent to-[#2d5689]/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#a82123]/40 to-transparent" />

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="bg-gradient-to-br from-[#111]/80 to-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-16 max-sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a82123] rounded-full filter blur-[100px] opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d5689] rounded-full filter blur-[100px] opacity-10" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#a82123]/10 border border-[#a82123]/30 text-[#a82123] text-sm font-semibold px-5 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#a82123] animate-pulse" />
                Ready to Get Started?
              </div>
              <h2 className="text-5xl max-sm:text-3xl font-extrabold text-white leading-tight mb-6">
                Let's Build Something <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a82123] to-[#2d5689]">Great Together</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Partner with Techmapperz to leverage the power of technology, mapping, and digital innovation. Let us turn your challenges into opportunities.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact">
                  <button className="group py-4 px-10 rounded-full bg-gradient-to-r from-[#a82123] to-[#2d5689] text-white font-bold text-base hover:shadow-[0_0_40px_rgba(0,176,254,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Contact Us Today
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                <Link href="/portfolios">
                  <button className="py-4 px-10 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-[#a82123]/50 transition-all duration-300">
                    View Our Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
