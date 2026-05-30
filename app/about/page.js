
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '../_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import How_do_we_work_imgWebp from '@/public/Photos/How_do_we_work_img.webp';
import about_us_banner_img from '@/public/Photos/about_us_banner.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { IMAGE_CONFIGS, createOptimizedLoader, ISR_CONFIGS } from '../lib/utils/performanceOptimizer';

// Critical above-the-fold components - load immediately
const Missionvision = dynamic(() => import('../_Components/Missionvision'), {
  ssr: true,
  ...createOptimizedLoader("300px", "bg-gray-900")
});

// Below-the-fold components - lazy load with intersection observer
const Choose = dynamic(() => import('./choose'), {
  ...createOptimizedLoader("400px", "bg-black")
});

const OfficeLive = dynamic(() => import('./OfficeLive'), {
  ...createOptimizedLoader("500px", "bg-gray-800")
});

const CompanyValues = dynamic(() => import('./CompanyValues'), {
  ...createOptimizedLoader("400px", "bg-gray-900")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (86400 seconds = 24 hours)
export const revalidate = 86400;

export const metadata = {
  title: "Techmapperz – Leading IT, GIS & Drone Solutions Company in India",
  description: "Techmapperz provides advanced GIS mapping, drone survey, software development and IT consulting services in India. Trusted by urban planners, utilities and enterprises, we turn spatial data into actionable insights.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

import { BreadcrumbJsonLd } from '../_Components/JsonLd';

const About = () => {
  const getBreadcrumbItems = () => [
    { name: 'Home', url: BASE_URL },
    { name: 'About Us', url: `${BASE_URL}/about` }
  ];

  return (
    <div className="bg-gradient-to-b from-[#181818] to-[#1a1a1a]">
      <BreadcrumbJsonLd items={getBreadcrumbItems()} />
      <ScrollToTop />

      <div className="max-w-full">
        <div className="mx-auto">
          {/* Banner Section */}
          <div className='relative w-full'>
            <Image
              src={about_us_banner_img}
              className='w-full h-[600px] object-cover transition-transform duration-1000 filter hover:brightness-110'
              alt="About Us Banner"
              {...IMAGE_CONFIGS.banner}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 to-black/50 flex flex-col justify-center items-center'>
              <h1 className='text-center text-7xl max-sm:text-4xl text-white font-bold tracking-tight'>
                About Techmapperz
              </h1>
              <p className='text-center text-2xl text-gray-200 mt-6 px-4 md:px-8 md:w-[50%] leading-relaxed'>
                Empowering Businesses with Smart IT & Geospatial Solutions!
              </p>
              <div className="flex gap-4 text-white mt-8">
                <Link href="/contact">
                  <button
                    className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
                  >
                    Get A  Quote
                    <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          </div>



          {/* About / Who We Are Section */}
          <section className="relative w-full py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#020617] z-10 border-b border-white/5">
            {/* Atmospheric Glows */}
            <div className="absolute top-[-5%] left-[-15%] w-[700px] h-[700px] bg-gradient-to-br from-[#376bab]/15 to-transparent rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/Patterns/grid.svg')] bg-center bg-repeat opacity-[0.025] pointer-events-none"></div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10">

              {/* ── Top Row: Heading + Intro ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">

                {/* Left — Heading */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#d2292b] animate-pulse"></span>
                    <span className="text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">Who We Are</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.08]">
                    Pioneering the
                    <br />
                    Future of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] via-[#7c6de8] to-[#8b5cf6]">
                      IT &amp; GIS
                    </span>
                    <br />
                    <span className="text-[#f74858]">Solutions</span>
                  </h2>

                  {/* Quick Highlight Chips */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {["GIS Mapping", "Drone Surveys", "Software Dev", "IT Consulting"].map((chip) => (
                      <span key={chip} className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-xs font-semibold tracking-wide hover:border-[#4a8cd4]/50 hover:text-white transition-all duration-300 cursor-default">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — Intro Paragraphs */}
                <div className="lg:col-span-6 space-y-5 text-gray-400 text-[15px] font-light leading-[1.85] pt-2 lg:pt-12">
                  <p>Techmapperz is an India-based IT, GIS, and drone solutions company helping businesses and organizations solve real-world challenges through technology, mapping, and digital innovation.</p>
                  <p>Our work spans urban planning, agriculture, real estate, logistics, environmental management, and enterprise digital transformation — combining geospatial intelligence with modern software development to help clients make informed decisions and build scalable digital systems.</p>
                  <p>We are a team of practical thinkers and problem solvers who believe great solutions do not have to be complicated. Since 2021, we have served government and enterprise clients, delivering tailored solutions that streamline operations and boost ROI.</p>
                </div>
              </div>

              {/* ── Bottom Row: Cards + Video/Quote ── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                {/* Left — Feature Cards */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  {[
                    {
                      title: "Vision & Value",
                      text: "We make innovation practical, accessible, and results-driven — supporting businesses and government projects with smart geospatial solutions.",
                      icon: "🎯",
                      color: "from-[#4a8cd4] to-[#8b5cf6]"
                    },
                    {
                      title: "Tailored Approach",
                      text: "Every business has unique goals. We design solutions specifically around your workflows, challenges and operational context.",
                      icon: "🧩",
                      color: "from-[#8b5cf6] to-[#d2292b]"
                    },
                    {
                      title: "Scalable Solutions",
                      text: "We build with growth in mind — starting simple, staying reliable, and scaling as your business and ambitions expand.",
                      icon: "🚀",
                      color: "from-[#d2292b] to-[#f97316]"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group relative bg-[#0B0F1A] border border-white/[0.07] rounded-2xl p-6 hover:border-white/20 hover:shadow-[0_0_30px_rgba(74,140,212,0.08)] transition-all duration-400 overflow-hidden flex-1">
                      {/* Gradient top accent line */}
                      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-[15px] font-bold text-white mb-2 group-hover:text-[#4a8cd4] transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-500 text-[13px] leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-300">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right — Video + Quote */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                  {/* Cinematic Video */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[#070B15] border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-[#4a8cd4]/30 transition-all duration-500 z-10 pointer-events-none"></div>
                    <div className="aspect-video w-full">
                      <video
                        autoPlay controls loop muted
                        className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <source src="/media/Introducation_video.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  {/* Quote Card */}
                  <div className="relative bg-[#0B0F1A] border border-white/[0.07] rounded-2xl p-6 lg:p-8 overflow-hidden">
                    {/* Left accent line */}
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#4a8cd4] to-[#f74858] rounded-l-2xl"></div>
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4a8cd4]/5 to-transparent pointer-events-none"></div>
                    <svg className="absolute top-4 right-6 text-white/5 w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <p className="relative pl-4 text-[16px] md:text-[17px] text-gray-300 font-light leading-[1.9] italic">
                      "We aim for a Digital transformation towards innovation with simplicity, striving to be a Company that delivers cutting-edge solutions, helping the world, mankind, enterprise and fortune 500 companies, all in one go."
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>


          {/* About Section end */}

          <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#020617] border-b border-white/5 overflow-hidden">
            {/* Background ambient lines/glows specific to this section */}
            <div className="absolute inset-0 bg-[#020617] z-0"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-0"></div>
            <Missionvision />
          </section>

          <section>
            <Choose />
          </section>

          {/* How Do We Work Section */}
          <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden border-b border-white/5">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#4a8cd4]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">

              {/* Image Container */}
              <div className="relative group flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#376bab]/20 to-[#d2292b]/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Image
                  src={How_do_we_work_imgWebp}
                  alt="How we work"
                  className="relative w-full max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.03] transition-transform duration-700 z-10"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#376bab] animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Process Framework</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    How Do We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#376bab]">Work</span>
                  </h2>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    Techmapperz follows an agile approach to project execution so we can deliver efficiently in fast-changing business and technology environments.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { title: "Individuals and Interactions", desc: "We value effective communication, collaboration, and teamwork to drive better outcomes." },
                    { title: "Working Solutions", desc: "We focus on delivering practical, working solutions that solve real business problems." },
                    { title: "Customer Collaboration", desc: "We work closely with clients throughout the project to ensure alignment and shared success." },
                    { title: "Adaptability", desc: "We stay flexible and responsive, making room for changes when business needs evolve." }
                  ].map((item, index) => (
                    <div key={index} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4a8cd4] to-[#376bab] group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-4 transform group-hover:translate-x-2 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4a8cd4] transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] border-b border-white/5 overflow-hidden flex flex-col items-center">
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#d2292b]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="text-center space-y-6 max-w-3xl mx-auto mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Benefits of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2292b] to-[#ff4747]">Agile Methodology</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">Experience streamlined operations and superior product delivery through our highly adaptable framework.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1400px] relative z-10">
              {[
                { text: "Better time and cost control", icon: "⏱️", color: "from-emerald-500 to-teal-400" },
                { text: "Continuous feedback throughout the project", icon: "💬", color: "from-blue-500 to-indigo-400" },
                { text: "Flexibility to improve during execution", icon: "🔄", color: "from-purple-500 to-fuchsia-400" },
                { text: "Reduced delivery risk", icon: "🛡️", color: "from-rose-500 to-orange-400" },
                { text: "Stronger end results", icon: "📈", color: "from-amber-500 to-yellow-400" }
              ].map((benefit, index) => (
                <div key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(20%-1.2rem)] group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                  {/* Top Glow on Hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <p className="text-white text-lg font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <OfficeLive />

          <CompanyValues />

          {/* CTA Banner Section */}
          <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Ambient Animated Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#4a8cd4]/20 via-[#8b5cf6]/20 to-[#f74858]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-3000"></div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto">
              <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 lg:p-20 text-center shadow-2xl overflow-hidden relative group">
                {/* Decorative Pattern inside card */}
                <div className="absolute inset-0 bg-[url('/Patterns/circuit.svg')] bg-center opacity-5 pointer-events-none"></div>
                {/* Accent border top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#4a8cd4] via-[#8b5cf6] to-[#d2292b]"></div>

                <div className="max-w-3xl mx-auto space-y-8 relative z-20">
                  <h2 className="text-4xl md:text-5xl lg:text-t[54px] font-extrabold text-white tracking-tight leading-tight">
                    Ready to Start Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#f74858]">Digital Transformation?</span>
                  </h2>
                  <p className="text-gray-400 text-[17px] font-light leading-relaxed max-w-2xl mx-auto">
                    Partner with Techmapperz to leverage cutting-edge IT and GIS solutions that drive growth, efficiency, and innovation for your enterprise.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link href="/contact">
                      <button className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0B0F1A] rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                          Get in Touch <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </Link>

                    <Link href="/services">
                      <button className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                        Explore Our Services
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Corner decorative glowing orbs */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4a8cd4]/30 rounded-full blur-[60px] group-hover:bg-[#4a8cd4]/50 transition-colors duration-700"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f74858]/30 rounded-full blur-[60px] group-hover:bg-[#f74858]/50 transition-colors duration-700"></div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
