import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import Link from 'next/link';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import {
  FiCheckCircle, FiTarget, FiZap, FiBarChart2, FiSmartphone, FiShield,
  FiDatabase, FiUsers, FiSettings, FiArrowRight, FiClock, FiTrendingUp
} from 'react-icons/fi';
import {
  MdOutlineIntegrationInstructions, MdOutlineDashboard,
  MdOutlineAutoMode, MdOutlineRocketLaunch, MdOutlineVerified,
  MdOutlineSupportAgent, MdOutlineGroups
} from 'react-icons/md';
import { FaArrowRightLong, FaAws, FaJira, FaConfluence, FaGithub, FaDatabase as FaDatabaseSolid, FaCloud, FaChartBar } from 'react-icons/fa';
import { SiTableau, SiSalesforce, SiServicenow } from 'react-icons/si';

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const OurProcess = dynamic(() => import('@/app/_Components/OurProcess'), {
  ...createOptimizedLoader("300px", "bg-gray-900")
});

const TechStack = dynamic(() => import('@/app/_Components/TechStack'), {
  ...createOptimizedLoader("300px", "bg-black")
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
  title: "IT Consulting Services in India | Techmapperz",
  description: "Techmapperz offers expert IT consulting in India – strategic planning, infrastructure optimization, cybersecurity, and digital transformation to accelerate your business growth.",
  alternates: {
    canonical: `${BASE_URL}/service/it/itconsultingservice`,
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const introData = {
  imageSrc: "/Photos/it_consulting_intro_new.png",
  imageAlt: "Expert IT Consulting Services in India by Techmapperz",
  paragraphs: [
    "Techmapperz provides professional IT consulting services in India to help businesses improve operations, strengthen technology infrastructure, and accelerate digital growth. Our expert consultants work closely with organizations to deliver practical solutions in IT strategy consulting, digital transformation, infrastructure optimization, cybersecurity, and technology implementation.",
    "We help businesses align technology with their goals, reduce operational inefficiencies, improve system performance, and build scalable digital solutions. Whether you are planning an IT upgrade, modernizing legacy systems, improving cybersecurity, or adopting new digital tools, Techmapperz delivers reliable consulting services tailored to your business needs."
  ],
  services: [
    { text: "Strategic IT planning for ", highlight: "smarter business decisions." },
    { text: "Digital transformation consulting to ", highlight: "modernize operations." },
    { text: "Infrastructure optimization for ", highlight: "better performance." },
    { text: "Cybersecurity solutions to ", highlight: "protect systems & data." },
  ],
  backgroundText: "IT Consulting"
};

const consultingFeatures = [
  {
    icon: <FiTarget className="text-3xl" />,
    title: "IT Strategy Development",
    desc: "We offer IT strategy consulting and roadmap development to align technology investments with your business goals, improve decision-making, and support digital transformation.",
    tags: ["Strategy", "Roadmap", "Business Alignment"]
  },
  {
    icon: <FiDatabase className="text-3xl" />,
    title: "Infrastructure Consulting",
    desc: "Our infrastructure consulting services help businesses optimize IT environments, improve system performance, adopt cloud solutions, and build scalable architecture for future growth.",
    tags: ["Optimization", "Cloud", "Scalability"]
  },
  {
    icon: <MdOutlineRocketLaunch className="text-3xl" />,
    title: "Digital Transformation",
    desc: "We provide digital transformation consulting services to modernize business processes, improve workflow efficiency, and help organizations adopt the right digital technologies.",
    tags: ["Modernization", "Efficiency", "Adoption"]
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Security & Compliance",
    desc: "Our cybersecurity and compliance consulting services help protect business systems, sensitive data, and IT environments while supporting regulatory and security best practices.",
    tags: ["Cybersecurity", "Data Protection", "Compliance"]
  },
  {
    icon: <MdOutlineIntegrationInstructions className="text-3xl" />,
    title: "Technology Implementation",
    desc: "We deliver technology implementation services including software deployment, system integration, automation, and solution setup to help businesses improve operational efficiency.",
    tags: ["Deployment", "Integration", "Automation"]
  }
];

const processSteps = [
  {
    title: "Consultation & Assessment",
    descriptions: [
      "We begin with a detailed analysis of your current IT landscape and business objectives."
    ]
  },
  {
    title: "Strategy & Planning",
    descriptions: [
      "Next, we design a customized IT strategy and roadmap (including budgets and timelines)."
    ]
  },
  {
    title: "Implementation",
    descriptions: [
      "Our team implements solutions – building or upgrading systems, migrating to cloud, and integrating software."
    ]
  },
  {
    title: "Review & Optimize",
    descriptions: [
      "After deployment, we monitor performance, provide training, and refine the solution to ensure lasting benefits."
    ]
  },
  {
    title: "Ongoing Support",
    descriptions: [
      "We stay engaged as your technology partner, offering maintenance and future enhancements."
    ]
  }
];

const whyChooseFeatures = [
  {
    img: '/flexibility.svg',
    title: 'Experienced Team',
    description: 'Our certified consultants have 15+ years in IT strategy and execution, combining deep technical expertise with a client-first approach.'
  },
  {
    img: '/Quality.svg',
    title: 'Full Accountability',
    description: 'We take 100% ownership of your project, with a dedicated team and regular CEO oversight to ensure your success.'
  },
  {
    img: '/Friendly.svg',
    title: 'Rapid Delivery',
    description: 'Our agile process accelerates time-to-market; we deploy the right people and tools to deliver results quickly.'
  },
  {
    img: '/reduce_cost.svg',
    title: 'Cost-Effective Solutions',
    description: 'We optimize your technology spend, leveraging proven frameworks to deliver maximum value (clients report up to 30% cost reductions).'
  }
];

const itconsultingTechItems = [
  { name: "AWS", icon: <FaAws />, bg: "#1f2937", textColor: "#FF9900" },
  { name: "Azure", icon: <FaCloud />, bg: "#1f2937", textColor: "#3b82f6" },
  { name: "Jira", icon: <FaJira />, bg: "#1f2937", textColor: "#2684FF" },
  { name: "Confluence", icon: <FaConfluence />, bg: "#1f2937", textColor: "#2684FF" },
  { name: "Tableau", icon: <SiTableau />, bg: "#1f2937", textColor: "#E97627" },
  { name: "PowerBI", icon: <FaChartBar />, bg: "#1f2937", textColor: "#F2C811" },
  { name: "Salesforce", icon: <SiSalesforce />, bg: "#1f2937", textColor: "#00A1E0" },
  { name: "Github", icon: <FaGithub />, bg: "#1f2937", textColor: "#ffffff" },
  { name: "Cloud", icon: <FaCloud />, bg: "#1f2937", textColor: "#4285F4" },
  { name: "Database", icon: <FaDatabaseSolid />, bg: "#1f2937", textColor: "#47A248" }
];

const faqData = [
  {
    question: "How do I know if my business needs IT consulting?",
    answer: "If you face recurring IT issues, high operational costs, or are planning growth, consulting can align technology with your goals. We help you assess and decide."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse sectors including healthcare, education, retail, logistics, and more. Our consultants tailor solutions to each industry’s needs."
  },
  {
    question: "What is the process to engage your services?",
    answer: "Simply contact us for a free initial call. We’ll discuss your needs, recommend a plan, and provide a transparent quote. We start with a trial phase to ensure the right fit."
  },
  {
    question: "How are consulting projects priced?",
    answer: "We offer flexible engagement models (fixed-price, T&M, dedicated team). After initial scoping, you’ll get a clear proposal. We emphasize upfront cost estimates and 1-week trial periods."
  }
];

// ─── Page ──────────────────────────────────────────────────────────────────────

const ITConsulting = () => {
  return (
    <div className="bg-black text-white">
      <ScrollToTop />

      <style dangerouslySetInnerHTML={{
        __html: `
          .case-gradient-text-inline {
            background: linear-gradient(90deg, #ef7376 0%, #a27fb0 50%, #70a1ed 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `
      }} />

      {/* ── HERO ── */}
      <section
        className="w-full min-h-[100vh] flex items-center relative bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url('/IT_Consulting/it_consulting_hero_new.png')` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}
        <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
          <div className="w-fit border border-[#05d7de]/30 bg-[#05d7de]/10 backdrop-blur-sm text-[#05d7de] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Leading IT Strategy & Consulting Company in India
          </div>

          <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-extrabold text-white max-w-[820px] leading-[1.15]">
            Expert IT Consulting <br />
            <span className="case-gradient-text-inline">
              Services in India
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Technology implementation support for sustainable business growth and modernization of operations.
          </p>

          <HeroButtons
            button1Text="Get a Free Consultation"
            button1Link="/contact"
            button2Text="Request a Quote"
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
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Expertise</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our IT Consulting Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
              We provide expert IT consulting services tailored to streamline operations, improve security, and support long-term business growth through practical and scalable technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingFeatures.map((feature, i) => (
              <div key={i} className="group relative bg-gray-900/60 border border-white/5 rounded-3xl p-8 hover:border-[#05d7de]/30 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#05d7de] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2d5689]/30 to-[#a82123]/20 border border-white/10 rounded-2xl flex items-center justify-center text-[#05d7de] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#05d7de] transition-colors duration-300">{feature.title}</h3>
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

      {/* ── OUR PROCESS ── */}
      <section className="py-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Roadmap</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our IT Consulting Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>
        </div>
        <OurProcess steps={processSteps} title="" />
      </section>

      {/* ── TECH STACK ── */}
      <section className="bg-black pt-10">
        <TechStack techItems={itconsultingTechItems} Headingtext="Our Technology Expertise" />
      </section>

      {/* ── WHY CHOOSE ── */}
      <WhyChooseTechmapperz
        features={whyChooseFeatures}
        heading="Why Choose Techmapperz for IT Consulting"
      />

      {/* ── FAQ ── */}
      <section className="bg-black pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Common Questions</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
          </div>
        </div>
        <FAQ faqData={faqData} />
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        title="Ready to transform your IT operations?"
        subtitle="Start accelerating your business with Techmapperz’s expert IT consulting today."
        primaryButtonText="Get a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default ITConsulting;
