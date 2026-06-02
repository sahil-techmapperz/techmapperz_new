import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import Image from 'next/image';
import Link from 'next/link';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import { 
  FiMonitor, FiShoppingCart, FiGlobe, FiTool
} from 'react-icons/fi';
import { FaJs, FaPhp, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const OurProcess = dynamic(() => import('@/app/_Components/OurProcess'), {
  ...createOptimizedLoader("400px", "bg-black")
});

const TechStack = dynamic(() => import('@/app/_Components/TechStack'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const WebsiteDesignElements = dynamic(() => import('@/app/_Components/DesignElements'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamic(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-black")
});

const CTABanner = dynamic(() => import('@/app/_Components/CTABanner'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 7200;

export const metadata = {
  title: "Custom Website Development Company in India | Techmapperz",
  description: "Techmapperz offers custom website development, eCommerce solutions & web applications in India. SEO-friendly, responsive & conversion-focused websites.",
  alternates: {
    canonical: `${BASE_URL}/service/it/webdevelopment`,
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const introData = {
  imageSrc: "/Photos/webdevelopment_introduction.webp",
  imageAlt: "Custom Website Development Company in India",
  paragraphs: [
    "Techmapperz is a leading website development company in India offering custom web design, eCommerce development, and web application solutions. We build responsive, fast-loading, and SEO-friendly websites tailored for startups, SMEs, enterprises, and government organizations.",
    "We combine UI/UX design, modern development technologies, and performance optimization to ensure your website attracts traffic and converts visitors into clients."
  ],
  services: [
    { text: "Custom web design and", highlight: "eCommerce development." },
    { text: "Responsive, fast-loading, and", highlight: "SEO-friendly websites." },
    { text: "Tailored solutions for startups,", highlight: "SMEs & enterprises." },
    { text: "Optimized to attract traffic and", highlight: "convert visitors." }
  ],
  backgroundText: "Web Development"
};

const webDevFeatures = [
  {
    icon: <FiMonitor className="text-3xl" />,
    title: "Custom Website Development",
    desc: "We build fully customized websites tailored to your business goals, brand identity, and target audience. Designed for speed, performance, and user experience, ensuring seamless functionality across all devices.",
    tags: ["Custom Design", "Responsive", "High Performance"]
  },
  {
    icon: <FiShoppingCart className="text-3xl" />,
    title: "E-Commerce Development",
    desc: "Launch a powerful online store with secure payment gateways, smooth checkout flow, inventory management, and scalable architecture optimized for sales and customer retention.",
    tags: ["Online Store", "Payment Gateways", "Scalable"]
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Web Portal Development",
    desc: "We develop robust and scalable web portals for enterprises, organizations, and communities supporting advanced features such as user roles, dashboards, data management, and reporting.",
    tags: ["User Roles", "Dashboards", "API Integration"]
  },
  {
    icon: <FiTool className="text-3xl" />,
    title: "Website Maintenance & Support",
    desc: "Keep your website secure, updated, and performing at its best. We handle security patches, optimization, content updates, backups, and technical monitoring.",
    tags: ["Security", "Updates", "Monitoring"]
  }
];

const processSteps = [
  {
    title: "Discovery Workshop",
    descriptions: [
      "We conduct in-depth research, gather data, and analyse it to evaluate the feasibility, practicality, and usability of our clients' ideas.",
      "These insights help us craft user personas, define project scope, identify risks, and set clear goals."
    ]
  },
  {
    title: "Planning & Documentation",
    descriptions: [
      "We prioritize user experience, security, and performance in our carefully planned development process.",
      "This ensures we provide compliant, tailored software solutions that satisfy the particular requirements of our clientele."
    ]
  },
  {
    title: "UX/UI Design",
    descriptions: [
      "Our material is arranged naturally to improve user engagement and make sure consumers can access what they need with ease.",
      "We create designs that focus user demands, increase happiness, and fit with your company goals for a competitive advantage."
    ]
  },
  {
    title: "Development",
    descriptions: [
      "Our development process goes beyond code—we craft unique, tailor-made solutions designed to solve real business challenges.",
      "By combining innovation with industry best practices, we deliver secure, scalable, and high-performing applications."
    ]
  },
  {
    title: "Testing & Deployment",
    descriptions: [
      "We conduct thorough testing to identify and resolve issues, guaranteeing optimal performance.",
      "Our testing and implementation services ensure your software is robust, secure, and ready for launch."
    ]
  },
  {
    title: "Support & Maintenance",
    descriptions: [
      "We guarantee dependability, security, and smooth operation with our maintenance services, which include bug fixes, updates, and security patches.",
      "A robust support system reduces downtime, improves user experience, and guarantees long-term success."
    ]
  }
];

const webTechItems = [
    { name: "React", icon: <FaReact />, bg: "#f0f5ff", textColor: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, bg: "#f5f5f5", textColor: "#339933" },
    { name: "JavaScript", icon: <FaJs />, bg: "#fff0f0", textColor: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, bg: "#fff0f0", textColor: "#E34F26" },
    { name: "CSS3", icon: <FaCss3 />, bg: "#f0f5ff", textColor: "#1572B6" },
    { name: "PHP", icon: <FaPhp />, bg: "#f0f5ff", textColor: "#777BB4" },
    { name: "MongoDB", icon: <FaDatabase />, bg: "#f5f5f5", textColor: "#47A248" },
    { name: "Git", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#ffffff" },
    { name: "Docker", icon: <FaDocker />, bg: "#f0f5ff", textColor: "#2496ED" },
    { name: "NPM", icon: <FaNpm />, bg: "#f5f5f5", textColor: "#CB3837" },
    { name: "SQL", icon: <SiMysql />, bg: "#f0f5ff", textColor: "#4479A1" }
];

const faqData = [
  {
    question: "How long does it take to develop a website?",
    answer: "A standard business website typically takes 2–4 weeks. E-commerce websites and custom web portals may take 4–8 weeks depending on features, integrations, and design requirements."
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer: "Yes. All websites we develop are fully mobile responsive, fast-loading, and structured with SEO best practices including optimized URLs, meta tags, schema mark-up, and performance optimization to improve Google rankings."
  },
  {
    question: "Do you provide e-commerce website development services?",
    answer: "Yes, we build secure and scalable e-commerce websites with payment gateway integration, inventory management, GST billing, shipping integration, and admin dashboards."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We offer website redesign services to improve UI/UX, performance, security, and SEO ranking. We can also migrate your website to modern frameworks if required."
  },
  {
    question: "Do you offer website maintenance and support?",
    answer: "Yes, we provide ongoing website maintenance including security updates, speed optimization, content updates, backups, and technical support to ensure smooth operation."
  },
  {
    question: "What technologies do you use for website development?",
    answer: "We work with modern technologies including React, Next.js, PHP, Laravel, CodeIgniter, WordPress, and custom CMS solutions depending on your business needs."
  },
  {
    question: "Do you integrate CRM or third-party tools?",
    answer: "Yes. We integrate CRM systems, WhatsApp Business API, payment gateways, analytics tools, ERP systems, and other third-party applications to automate your business operations."
  },
  {
    question: "How can I get started with Techmapperz?",
    answer: "You can contact us through our website or request a free consultation. We analyze your requirements and provide a customized proposal based on your goals and budget."
  }
];

// ─── Page ──────────────────────────────────────────────────────────────────────

const WebDevelopment = () => {
  return (
    <div className="bg-black text-white">
      <ScrollToTop />

      {/* ── HERO ── */}
      <section
        className="w-full min-h-[100vh] flex items-center relative bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url('/Website_Development_service/Website_Development_service.png')` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}
        <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
          <div className="w-fit border border-[#4a5f82] bg-[#2a3c5a]/40 backdrop-blur-sm text-[#799ccc] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Custom Website Development Company in India
          </div>

          <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-bold text-white max-w-[900px] leading-[1.15]">
            Responsive, SEO-Optimized Business & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d5689] to-[#a82123]">
              eCommerce Websites
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Built with modern technologies to attract traffic, engage your audience, and convert visitors into loyal clients.
          </p>

          <HeroButtons
            button1Text="Request a Free Proposal"
            button1Link="/contact"
            button2Text="Book a Free Consultation"
            button2Link="/contact"
          />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="w-full bg-black px-20 max-sm:px-4 py-10">
        <WebsiteIntroduction
          imageSrc={introData.imageSrc}
          imageAlt={introData.imageAlt}
          paragraphs={introData.paragraphs}
          services={introData.services}
          backgroundText={introData.backgroundText}
        />
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Capabilities</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our Website Development Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
              We design and develop mobile-responsive, fast, secure, and scalable websites that help businesses establish a strong online presence and generate real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webDevFeatures.map((feature, i) => (
              <div key={i} className="group relative bg-gray-900/60 border border-white/5 rounded-3xl p-8 hover:border-[#a82123]/30 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a82123] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2d5689]/30 to-[#a82123]/20 border border-white/10 rounded-2xl flex items-center justify-center text-[#a82123] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a82123] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, j) => (
                      <span key={j} className="text-xs text-[#799ccc] bg-[#2d5689]/15 border border-[#2d5689]/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WEB DESIGN IS IMPORTANT ── */}
      <section className="relative bg-cover bg-center py-20 border-t border-white/5" style={{ backgroundImage: "url('/Photos/banner_3.webp')" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 px-6 flex max-md:flex-col-reverse gap-10 items-center justify-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 w-1/2 max-md:w-full">
            <h2 className="text-4xl max-sm:text-3xl font-bold text-white leading-tight">
              Why Web Design and Web Development is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5689] to-[#a82123]">Important?</span>
            </h2>
            <div className="w-16 h-1 bg-[#a82123] rounded-full" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Today the world is connected online, and people turn to the Internet for any kind of need they may have. In this era, web design and development are crucial for any business that wants to create a strong online presence. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              It is the first impression of your company—make sure it is a good one, and a functioning one as well. Good web design and seamless functionality are key elements to driving sales and long-term business growth.
            </p>
          </div>
          <div className="w-[40%] max-md:w-[80%] max-sm:w-full relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2d5689] to-[#a82123] opacity-20 blur-xl rounded-2xl" />
            <Image 
              src="/Photos/Why_web Design_Important.webp" 
              unoptimized={true} 
              alt="Why Web Design and Web Development is Important?" 
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-auto" 
              width={800} 
              height={600} 
            />
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <div className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="text-center mb-14 px-6 max-w-7xl mx-auto">
          <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Methodology</span>
          <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our Web Development Process</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
        </div>
        <OurProcess steps={processSteps} title="" />
      </div>

      {/* ── DESIGN ELEMENTS ── */}
      <div className="pt-10">
        <WebsiteDesignElements />
      </div>

      {/* ── TECH STACK ── */}
      <section className="bg-black pt-10">
        <TechStack techItems={webTechItems} Headingtext="Technology We Use" />
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <div className="text-center mb-4">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">The Techmapperz Advantage</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Why Choose Us for Website Development</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
          </div>
        </div>
        <WhyChooseTechmapperz heading="" />
      </section>

      {/* ── FAQ ── */}
      <section className="bg-black pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Common Questions</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
          </div>
        </div>
        <FAQ faqData={faqData} />
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Ready to build a high-performing website?"
        subtitle="Get a stunning, SEO-friendly website designed to convert your visitors into clients."
        primaryButtonText="Request a Free Proposal"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Consultation"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default WebDevelopment;