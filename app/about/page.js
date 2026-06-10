
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
    color: "from-[#2d5689] to-[#05d7de]"
  },
  {
    step: "02",
    title: "Create",
    desc: "We design and develop the right solution using suitable tools and technologies.",
    color: "from-[#2d5689] to-[#05d7de]"
  },
  {
    step: "03",
    title: "Optimize",
    desc: "We refine workflows, improve usability, and ensure the solution performs effectively.",
    color: "from-[#2d5689] to-[#05d7de]"
  },
  {
    step: "04",
    title: "Achieve",
    desc: "We help clients generate measurable results, business value, and long-term impact.",
    color: "from-[#2d5689] to-[#05d7de]"
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
    desc: "Team of experienced geospatial analysts, drone data specialists, and developers with 50+ major projects completed across IT, GIS, drone mapping, infrastructure, and business automation.",
    gradient: "from-[#2d5689]/20 to-[#05d7de]/10"
  },
  {
    icon: <MdOutlineVerified className="text-3xl" />,
    title: "Quality-Focused Delivery",
    desc: "We follow a structured workflow from requirement analysis to final delivery, with internal quality checks to ensure accuracy, consistency, and reliable project execution.",
    gradient: "from-[#2d5689]/20 to-[#05d7de]/10"
  },
  {
    icon: <MdOutlineGroups className="text-3xl" />,
    title: "Client Satisfaction",
    desc: "Over 90% of our clients are repeat or referred customers. We focus on clear communication, attention to detail, and long-term business relationships.",
    gradient: "from-[#2d5689]/20 to-[#05d7de]/10"
  },
  {
    icon: <MdOutlineStars className="text-3xl" />,
    title: "Innovation First",
    desc: "We use modern technologies such as cloud-based GIS platforms, AI-assisted imagery analysis, LiDAR processing, automation tools, and scalable web technologies to deliver smarter solutions.",
    gradient: "from-[#2d5689]/20 to-[#05d7de]/10"
  },
];

const About = () => {
  return (
    <div className="bg-[#111111] overflow-hidden">
      <ScrollToTop />

      {/* ─── HERO BANNER ─── */}
      <section 
        className="relative w-full h-[92vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${about_us_banner_img.src})` }}
      >
        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#111111]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05d7de]/10 via-transparent to-[#2d5689]/10" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 bg-[#05d7de]/10 border border-[#05d7de]/30 text-[#05d7de] text-sm font-semibold px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#05d7de] animate-pulse" />
            Est. 2021 · India-Based · ISO 9001 Certified
          </div> */}
          {/* <h1 className="text-6xl max-md:text-4xl max-sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Turning <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#05d7de] to-[#2d5689]">Complex Problems</span>
            <br />into Simple Solutions
          </h1> */}

          <h2 className="case-h2-inline">
            Transforming Businesses with <br /><span className="case-gradient-text-inline">Smart IT, GIS & Drone Solutions</span>
          </h2>

          <p className="text-xl max-sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6 mb-10">
            We combine IT development, GIS mapping, and drone intelligence to help organisations improve planning, operations, and decision-making.
          </p>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
            <style dangerouslySetInnerHTML={{
              __html: `
              .hero-btn-primary {
                padding: 16px 32px;
                border-radius: 30px;
                background: linear-gradient(90deg, #5278ff, #e42e57);
                color: white !important;
                font-weight: bold;
                font-size: 16px;
                display: flex;
                align-items: center;
                gap: 8px;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
              }
              .hero-btn-primary:hover {
                box-shadow: 0 0 30px rgba(0, 176, 254, 0.5);
                transform: scale(1.05);
              }
              .hero-btn-primary .arrow-icon {
                transition: transform 0.3s ease;
              }
              .hero-btn-primary:hover .arrow-icon {
                transform: translateX(4px);
              }
              .hero-btn-secondary {
                padding: 16px 32px;
                border-radius: 30px;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                background: rgba(255, 255, 255, 0.035);
                color: white !important;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                text-decoration: none;
                display: inline-block;
              }
              .hero-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(168, 33, 35, 0.5) !important;
              }
            `}} />
            <Link href="/contact" className="hero-btn-primary">
              Request a Free Project Consultation
              <FaArrowRightLong className="arrow-icon" />
            </Link>
            <Link href="/service" className="hero-btn-secondary">
              Explore Our Services
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
      {/* <section className="relative z-10 -mt-1 bg-gradient-to-r from-[#0a0a0a] via-[#0f1923] to-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-4 max-sm:grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-[#05d7de] text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <div className="text-4xl max-sm:text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#05d7de] to-white">
                {s.number}
              </div>
              <div className="text-gray-400 text-sm font-medium mt-1 tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ─── ABOUT TECHMAPPERZ ─── */}
      <section className="pt-15 px-6 max-w-7xl xl:max-w-[1400px] mx-auto">

        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">

          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />


          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-5xl max-md:text-3xl font-extrabold text-white mt-3 leading-tight">
                About <span className="case-gradient-text-inline">Techmapperz</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mt-5" />
            </div>

            <div className="space-y-5 text-gray-400 text-lg leading-relaxed" >
              <p>
                Techmapperz is an India-based IT, GIS, and drone solutions company helping businesses and organizations solve real-world challenges through technology, mapping, and digital innovation. We provide a combination of GIS services, drone survey and mapping solutions, custom software development, web development, mobile app development, and IT consulting to support smarter planning, better operations, and business growth.
              </p>
              <p>
                Our work serves a wide range of sectors, including urban planning, agriculture, real estate, logistics, environmental management, infrastructure, and enterprise digital transformation. By combining geospatial intelligence with modern software development, we help our clients make informed decisions, improve efficiency, and build scalable digital systems.
              </p>

            </div>


          </div>

          {/* Right: Video + service pills */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
              <video
                autoPlay controls loop muted
                className="relative w-full rounded-2xl shadow-2xl"
                aria-label="Techmapperz introduction video"
              >
                <source src="/media/Introducation_video.mp4" type="video/mp4" />
              </video>
            </div>
           
            <p className="text-gray-400 text-lg leading-relaxed">
              At Techmapperz, we believe that great solutions do not have to be complicated. We are a team of practical thinkers, problem solvers, and technology professionals who focus on simplifying complex business and operational challenges. Our goal is to build solutions that are effective, reliable, and easy to use. Since 2021, Techmapperz has served clients across government and enterprise, delivering tailored solutions that streamline operations and boost ROI.
            </p>
          </div>


        </div>
      </section>
      {/* ─── WHO WE ARE ─── */}
      <section className="pt-15 px-6  relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#05d7de] rounded-full filter blur-[200px] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto text-center relative z-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#05d7de]/10 text-[#05d7de] mb-6 border border-[#05d7de]/20 shadow-[0_0_20px_rgba(5,215,222,0.2)]">
            <FiTarget className="text-3xl" />
          </div>
          <h2 className="text-4xl max-sm:text-3xl font-extrabold text-white mb-6">Who We Are</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mb-8" />

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
      <section className="pt-15 pb-6 px-6 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#05d7de] rounded-full filter blur-[200px] opacity-5" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-5" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Our Direction</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Mission & Vision</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {/* Mission */}
            <div className="group relative bg-white/[0.02] backdrop-blur-xl border border-[#05d7de]/20 rounded-3xl p-10 hover:border-[#05d7de]/50 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#05d7de] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div style={{ background: "linear-gradient(90deg, #5278ff, #e42e57)" }} className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,176,254,0.4)]">
                  <FiTarget className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <div className="w-10 h-0.5 bg-[#05d7de] rounded-full mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  We at Techmapperz understand that each organisation is different, and so are their challenges. When we tailor solutions, we ensure they are as simplified as possible. <strong className="text-white">Our mission: simplified solutions for complex problems.</strong>
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white/[0.02] backdrop-blur-xl border border-[#2d5689]/20 rounded-3xl p-10 hover:border-[#2d5689]/50 transition-all duration-500 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2d5689] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div style={{ background: "linear-gradient(90deg, #5278ff, #e42e57)" }} className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(57,107,169,0.4)]">
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
      <section className="pt-15 pb-6 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,176,254,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(57,107,169,0.4) 0%, transparent 50%)'
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Our Advantage</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Why Choose Techmapperz?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
              We focus on what matters most — delivering results that make a real difference for your business.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className={`group relative bg-gradient-to-br ${item.gradient} backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-[#05d7de]/30 hover:-translate-y-2 transition-all duration-400 overflow-hidden shadow-lg`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#05d7de] rounded-full filter blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#05d7de]/10 border border-[#05d7de]/20 flex items-center justify-center text-[#05d7de] text-2xl mb-5 group-hover:scale-110 group-hover:bg-[#05d7de]/20 transition-all duration-300">
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
      <section className="pt-15 pb-6 px-6 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,176,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,254,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Methodology</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Our Process: Turning Ideas into Impact</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 relative items-stretch">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#05d7de] via-[#2d5689] to-[#2d5689] z-0" />

            {processSteps.map((step, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center z-10 h-full">
                {/* Step circle */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,176,254,0.25)] group-hover:shadow-[0_0_50px_rgba(0,176,254,0.5)] group-hover:scale-110 transition-all duration-400 relative flex-shrink-0`}>
                  <div className="absolute inset-1 rounded-full bg-[#111111] flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-6 group-hover:border-[#05d7de]/30 transition-all duration-300 w-full flex flex-col flex-1 shadow-lg">
                  <h3 className={`text-2xl font-bold   text-[#05d7de] mb-3`}>{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW DO WE WORK (AGILE) ─── */}
      <section className="pt-15 pb-6 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#05d7de] rounded-full filter blur-[200px] opacity-5" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
            {/* Left image */}
            <div className="group relative order-2 max-lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#05d7de]/20 to-[#2d5689]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image
                src={agile_team_illustration}
                alt="How Techmapperz works – Agile methodology"
                className="relative w-full rounded-3xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Right content */}
            <div className="space-y-8 order-1 max-lg:order-2">
              <div>
                <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Our Approach</span>
                <h2 className=" .case-h2-inline">

                </h2>

                <h2 className="case-h2-inline">
                  How Do We Work <br className="hidden sm:block" />

                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mt-5" />
                {/* <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                  Techmapperz follows an agile approach to project execution so we can deliver efficiently in fast-changing business and technology environments.
                </p> */}
              </div>

              <div className="space-y-4">
                {agilePoints.map((item, i) => (
                  <div key={i} className="group/item flex gap-5 p-5 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl hover:border-[#05d7de]/30 hover:bg-[#05d7de]/5 transition-all duration-300 shadow-md">
                    <div className="min-w-[48px] h-12 bg-gradient-to-br from-[#05d7de]/20 to-[#2d5689]/20 rounded-xl flex items-center justify-center text-[#05d7de] text-xl group-hover/item:bg-[#05d7de]/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1 group-hover/item:text-[#05d7de] transition-colors duration-300">{item.title}</h3>
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
      <section className="pt-15 pb-6 px-6 bg-gradient-to-br from-[#0a0a0a] to-[#0f1923] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,176,254,1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Agile Advantage</span>
            <h2 className="text-3xl max-sm:text-xl font-extrabold text-white mt-3">Benefits of Our Agile Methodology</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="w-[calc(33.333%-11px)] max-md:w-[calc(50%-8px)] max-sm:w-full group flex items-center gap-4 bg-white/3 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-[#05d7de]/30 hover:bg-[#05d7de]/5 transition-all duration-300 shadow-md">
                <div className="min-w-[36px] h-9 flex items-center justify-center">
                  <FiCheckCircle className="text-[#05d7de] text-xl group-hover:scale-125 transition-transform duration-300" />
                </div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFE AT TECHMAPPERZ (Gallery) ─── */}
      <section className="pt-15 pb-6 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Culture & People</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Life @ Techmapperz</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
              At Techmapperz, we are building a work culture driven by learning, teamwork, creativity, and ownership. Our workspace reflects a team passionate about technology and meaningful outcomes.
            </p>
          </div>
          <OfficeLive />
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-15 pb-6 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#05d7de] rounded-full filter blur-[300px] opacity-[0.03]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
            <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Our Core Values</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {values.map((v, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-8 w-[calc(20%-1.5rem)] max-lg:w-[calc(33%-1rem)] max-sm:w-full hover:border-[#05d7de]/40 hover:-translate-y-2 transition-all duration-400 overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#05d7de]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
                <div className="relative z-10 flex flex-col items-center">
                  {/* Animated gear + icon */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-6 mx-auto">
                    <GiCog
                      style={{ color: '#05d7de' }}
                      className={`absolute inset-0 w-full h-full transition-colors duration-300 opacity-60 group-hover:opacity-100 ${i % 2 === 0 ? 'animate-[spin_15s_linear_infinite]' : 'animate-[spin_15s_linear_infinite_reverse]'}`}
                    />
                    <div className="relative z-10 text-3xl text-white bg-black/70 p-3 rounded-full flex items-center justify-center">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#05d7de] transition-colors duration-300">{v.text}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES / PROVEN PROJECT EXPERIENCE ─── */}
      <section className="case-section-inline">
        <style dangerouslySetInnerHTML={{
          __html: `
          .case-section-inline {
            position: relative;
            overflow: hidden;
            background: radial-gradient(circle at 50% 0%, rgba(5, 215, 222, 0.16), transparent 32%), radial-gradient(circle at 92% 88%, rgba(37, 99, 235, 0.15), transparent 34%), #050505;
            padding: 92px 20px;
            font-family: "Inter", Arial, sans-serif;
          }
          .case-section-inline::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 52px 52px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,0.65), transparent 82%);
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.65), transparent 82%);
            pointer-events: none;
          }
          .case-container-inline {
            position: relative;
            max-width: 1180px;
            margin: 0 auto;
            z-index: 2;
          }
          .case-header-inline {
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
          }
          .case-eyebrow-inline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(5, 215, 222, 0.32);
            background: rgba(5, 215, 222, 0.10);
            color: #05d7de;
            padding: 10px 16px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .case-eyebrow-inline span {
            display: inline-block;
            width: 7px;
            height: 7px;
            background: #05d7de;
            border-radius: 999px;
            box-shadow: 0 0 16px rgba(5, 215, 222, 0.9);
          }
          .case-h2-inline {
            font-size: clamp(34px, 5vw, 56px);
            line-height: 1.05;
            letter-spacing: -0.04em;
            font-weight: 800;
            color: #ffffff !important;
            margin-top: 0;
            margin-bottom: 0;
          }
          .case-gradient-text-inline {
            background: linear-gradient(90deg, #f87171, #60a5fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .case-subtitle-inline {
            margin-top: 22px;
            color: #a1a1aa !important;
            font-size: 18px;
            line-height: 1.75;
          }
          .case-cards-inline {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 58px;
          }
          .case-card-inline {
            position: relative;
            overflow: hidden;
            min-height: 390px;
            border: 1px solid rgba(255,255,255,0.10) !important;
            background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 28px;
            padding: 28px;
            transition: 0.28s ease;
            text-align: left;
          }
          .case-card-inline:hover {
            transform: translateY(-8px);
            border-color: rgba(5, 215, 222, 0.45) !important;
            background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035));
            box-shadow: 0 24px 80px rgba(0,0,0,0.45);
          }
          .case-card-inline::before {
            content: "";
            position: absolute;
            left: 26px;
            right: 26px;
            top: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(5, 215, 222, 0.75), transparent);
            opacity: 0;
            transition: 0.28s ease;
          }
          .case-card-inline:hover::before {
            opacity: 1;
          }
          .case-icon-inline {
            width: 58px;
            height: 58px;
            display: grid;
            place-items: center;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(0,0,0,0.35);
            margin-bottom: 24px;
            font-size: 27px;
            color: #05d7de;
          }
          .case-tag-inline {
            display: inline-flex;
            border: 1px solid rgba(59, 130, 246, 0.28);
            background: rgba(59, 130, 246, 0.10);
            color: #93c5fd !important;
            padding: 7px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
          }
          .case-card-inline h3 {
            margin-top: 22px;
            font-size: 22px;
            line-height: 1.25;
            letter-spacing: -0.02em;
            font-weight: 750;
            color: #ffffff !important;
          }
          .case-card-inline p {
            margin-top: 17px;
            color: #a1a1aa !important;
            font-size: 15px;
            line-height: 1.8;
            min-height: 110px;
          }
          .case-card-inline a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 24px;
            color: #05d7de !important;
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            transition: 0.25s ease;
          }
          .case-card-inline a:hover {
            color: #cffafe !important;
            gap: 12px;
          }
          .case-bottom-cta-inline {
            margin-top: 34px;
            border: 1px solid rgba(255,255,255,0.10) !important;
            background:
              linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025)),
              linear-gradient(90deg, rgba(5,215,222,0.08), rgba(37,99,235,0.08));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 30px;
            padding: 34px;
            text-align: center;
          }
          .case-bottom-cta-inline h3 {
            font-size: 28px;
            letter-spacing: -0.03em;
            color: #ffffff !important;
            margin-top: 0;
            margin-bottom: 0;
          }
          .case-bottom-cta-inline p {
            max-width: 720px;
            margin: 14px auto 0;
            color: #a1a1aa !important;
            font-size: 16px;
            line-height: 1.75;
          }
          .case-cta-buttons-inline {
            display: flex;
            justify-content: center;
            gap: 14px;
            margin-top: 26px;
            flex-wrap: wrap;
          }
          .case-btn-inline {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 0 24px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 750;
            transition: 0.25s ease;
          }
          .case-btn-primary-inline {
            background: linear-gradient(90deg, #5278ff, #e42e57);
            color: #fff !important;
            box-shadow: 0 14px 35px rgba(5, 215, 222, 0.26);
          }
          .case-btn-primary-inline:hover {
            transform: translateY(-2px);
          }
          .case-btn-secondary-inline {
            color: #fff !important;
            border: 1px solid rgba(255,255,255,0.16) !important;
            background: rgba(255,255,255,0.035);
          }
          .case-btn-secondary-inline:hover {
            border-color: rgba(96, 165, 250, 0.58) !important;
            background: rgba(37, 99, 235, 0.12);
            transform: translateY(-2px);
          }
          @media (max-width: 980px) {
            .case-cards-inline {
              grid-template-columns: 1fr;
            }
            .case-card-inline {
              min-height: auto;
            }
            .case-card-inline p {
              min-height: auto;
            }
          }
          @media (max-width: 560px) {
            .case-section-inline {
              padding: 70px 16px;
            }
            .case-bottom-cta-inline {
              padding: 28px 20px;
            }
            .case-btn-inline {
              width: 100%;
            }
          }
        `}} />
        <div className="case-container-inline">
          <div className="case-header-inline">
            <div className="case-eyebrow-inline">
              <span /> Proven Project Experience
            </div>
            <h2 className="case-h2-inline">
              Explore Our Work Across <br className="hidden sm:block" />
              <span className="case-gradient-text-inline">GIS, Drone & IT Projects</span>
            </h2>
            <p className="case-subtitle-inline">
              From high-precision drone mapping to custom software platforms, Techmapperz helps businesses and organisations solve real operational challenges with practical technology solutions.
            </p>
          </div>

          <div className="case-cards-inline">
            {/* Card 1 */}
            <article className="case-card-inline">
              <div className="case-icon-inline">
                🛰️
              </div>
              <div className="case-tag-inline">
                Drone Survey / LiDAR Mapping
              </div>
              <h3>
                Drone-Based LiDAR Railway Corridor Mapping
              </h3>
              <p>
                High-accuracy LiDAR and aerial survey for railway corridor planning, helping improve terrain analysis, alignment study, and infrastructure decision-making.
              </p>
              <Link href="#">
                View Drone Case Study →
              </Link>
            </article>

            {/* Card 2 */}
            <article className="case-card-inline">
              <div className="case-icon-inline">
                🛒
              </div>
              <div className="case-tag-inline">
                Web Development / Dashboard
              </div>
              <h3>
                E-commerce Website with Sales Dashboard
              </h3>
              <p>
                A custom e-commerce platform with sales dashboard, order management, and hierarchy-based approval system to improve business control and visibility.
              </p>
              <Link href="#">
                View E-commerce Case Study →
              </Link>
            </article>

            {/* Card 3 */}
            <article className="case-card-inline">
              <div className="case-icon-inline">
                🗺️
              </div>
              <div className="case-tag-inline">
                GIS Mapping / Feature Extraction
              </div>
              <h3>
                GIS Feature Extraction & Mapping Project
              </h3>
              <p>
                Detailed GIS data extraction, digitisation, and mapping support for large-scale spatial datasets, helping clients manage location intelligence more effectively.
              </p>
              <Link href="#">
                View GIS Case Study →
              </Link>
            </article>
          </div>

          <div className="case-bottom-cta-inline">
            <h3>Looking for a Similar Solution?</h3>
            <p>
              Share your project requirement with Techmapperz. Our team can help you plan the right approach for GIS mapping, drone survey, web development, mobile app development, CRM, or custom software projects.
            </p>
            <div className="case-cta-buttons-inline">
              <Link href="/contact" className="case-btn-inline case-btn-primary-inline">
                Discuss Your Project
              </Link>
              <Link href="/portfolios" className="case-btn-inline case-btn-secondary-inline">
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
