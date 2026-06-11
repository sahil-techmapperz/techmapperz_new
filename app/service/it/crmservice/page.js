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
import { FaArrowRightLong, FaCheckDouble } from 'react-icons/fa6';

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const OurProcess = dynamic(() => import('@/app/_Components/OurProcess'), {
  ...createOptimizedLoader("300px", "bg-gray-900")
});

const FeaturedCaseStudy = dynamic(() => import('@/app/_Components/FeaturedCaseStudy'), {
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
  title: "CRM Development & Implementation Services | Techmapperz",
  description: "Custom CRM development, implementation, migration & integrations. Streamline sales, finance, and projects with dashboards and automation. Get a quote.",
  alternates: {
    canonical: `${BASE_URL}/service/it/crmservice`,
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const introData = {
  imageSrc: "/Photos/CRM_Introduction.webp",
  imageAlt: "Custom CRM Development Services by Techmapperz",
  paragraphs: [
    "Techmapperz offers custom CRM development and implementation services to help businesses manage leads, customers, sales, support, and internal workflows more efficiently. In today's fast-moving business environment, customer data is often scattered across spreadsheets, emails, accounting tools, marketing platforms, and project trackers. A well-designed CRM system brings all this information together into one centralized platform, helping your team improve productivity, customer engagement, and decision-making.",
    "Our CRM development services include CRM design, custom development, implementation, customization, data migration, third-party integration, workflow automation, and ongoing support. Whether you need a simple CRM for your growing sales team or an advanced enterprise CRM with automation, analytics, and role-based access control, we build scalable solutions tailored to your business needs."
  ],
  services: [
    { text: "Centralized customer data for ", highlight: "smarter decisions." },
    { text: "Automated workflows to ", highlight: "boost team productivity." },
    { text: "Scalable CRM built for ", highlight: "your business needs." },
  ],
  backgroundText: "CRM Solutions"
};

const outcomes = [
  { icon: <FiDatabase className="text-2xl" />, text: "A single source of truth for leads, customers, deals, projects, and key communications." },
  { icon: <FiZap className="text-2xl" />, text: "Automated follow-ups and reminders so nothing slips through the cracks." },
  { icon: <MdOutlineDashboard className="text-2xl" />, text: "Clear dashboards for pipeline, forecasting, and team performance." },
  { icon: <FiUsers className="text-2xl" />, text: "Cleaner handoffs between sales, operations, finance, and support." },
  { icon: <MdOutlineSupportAgent className="text-2xl" />, text: "Better customer experience through faster response and consistent context." },
];

const crmFeatures = [
  {
    icon: <FiTarget className="text-3xl" />,
    title: "Sales & Lead Management",
    desc: "Lead capture, qualification rules, pipeline stages, proposal creation, proposal templates, and lead-to-client conversion workflows — with visibility into every activity.",
    tags: ["Lead Capture", "Pipeline Stages", "Proposals", "Conversion Workflows"]
  },
  {
    icon: <MdOutlineAutoMode className="text-3xl" />,
    title: "Automation & Workflows",
    desc: "Task routing, SLA reminders, approvals, escalation paths, and notifications that align to your internal process — so your team does less manual chasing and more revenue work.",
    tags: ["Task Routing", "SLA Reminders", "Approvals", "Notifications"]
  },
  {
    icon: <MdOutlineIntegrationInstructions className="text-3xl" />,
    title: "Integrations",
    desc: "Connect CRM with your website forms, email, calendars, ERP/accounting tools, support desk, marketing automation, and analytics — so teams don't re-enter data.",
    tags: ["ERP / Accounting", "Email & Calendar", "Marketing Tools", "Support Desk"]
  },
  {
    icon: <FiBarChart2 className="text-3xl" />,
    title: "Reporting & CRM Dashboards",
    desc: "Role-based dashboards for leadership, sales managers, finance, and delivery teams — including funnel analytics, conversion rates, revenue forecasting, and customer health indicators.",
    tags: ["Funnel Analytics", "Revenue Forecasting", "Role-Based Views", "KPIs"]
  },
  {
    icon: <FiSmartphone className="text-3xl" />,
    title: "Mobile & Cloud-Ready Access",
    desc: "Secure access for field teams and remote staff, with scalable environments and permission controls designed around how your teams operate from any device.",
    tags: ["Mobile Friendly", "Cloud Hosted", "Secure Access", "Permission Controls"]
  },
];

const processSteps = [
  {
    title: "Discovery & Requirements",
    descriptions: [
      "We map your lead-to-cash workflow, data sources, pain points, and success metrics.",
      "We define a scope that's measurable and realistic."
    ]
  },
  {
    title: "CRM Selection or Architecture",
    descriptions: [
      "For platform CRMs, we help you select the best fit and define the target architecture.",
      "For custom CRMs, we design modules and data model based on your priorities."
    ]
  },
  {
    title: "Configuration & Customization",
    descriptions: [
      "We configure fields, pipelines, automation, roles, and dashboards.",
      "We build custom extensions and modules when needed."
    ]
  },
  {
    title: "Data Migration & Cleanup",
    descriptions: [
      "We deduplicate, normalize, and migrate data from spreadsheets or legacy tools.",
      "We validate records and permissions before go-live."
    ]
  },
  {
    title: "Testing, Training & Go-Live",
    descriptions: [
      "We test workflows and integrations, and train users by role.",
      "We support your launch with a clear cutover plan."
    ]
  },
  {
    title: "Post-Launch Optimization",
    descriptions: [
      "After launch, we review adoption and performance, refine dashboards and automation.",
      "We provide ongoing support so your CRM keeps improving."
    ]
  },
];

const industries = [
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🎓", label: "Education & E-Learning" },
  { icon: "🏛️", label: "Government & Public Sector" },
  { icon: "🏥", label: "Healthcare" },
  { icon: "🚚", label: "Logistics & Supply Chain" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🛍️", label: "Retail" },
  { icon: "✈️", label: "Travel & Hospitality" },
];

const whyChooseFeatures = [
  {
    img: '/flexibility.svg',
    title: 'Tailored Solutions',
    description: 'We do not use cookie-cutter templates. Every CRM we build is designed around your actual workflows and team structure.'
  },
  {
    img: '/Quality.svg',
    title: 'Quality & Security',
    description: 'We implement least-privilege roles, secure authentication, audit logging, and thorough testing before any go-live.'
  },
  {
    img: '/Friendly.svg',
    title: 'User Adoption Focus',
    description: 'We design role-based views, automate repetitive work, and train users on real workflows — not just feature walkthroughs.'
  },
  {
    img: '/reduce_cost.svg',
    title: 'Built to Scale',
    description: 'We design for scale from day one — data models, integrations, automation, and reporting to support more users and regions.'
  }
];

const faqData = [
  {
    question: "How long does a CRM implementation take?",
    answer: "Timelines vary by complexity. A basic CRM setup can take weeks, while enterprise rollouts with integrations and custom modules can take months."
  },
  {
    question: "Can you migrate data from spreadsheets or an old CRM?",
    answer: "Yes. We plan migration carefully, clean and validate data, and run staged imports so you maintain business continuity throughout the process."
  },
  {
    question: "Do you build custom CRMs or implement platforms?",
    answer: "Both. We can implement a platform CRM and customize it, or build a fully custom CRM when your workflows need a more tailored approach."
  },
  {
    question: "What systems can you integrate with a CRM?",
    answer: "Common integrations include websites/forms, email, calendars, accounting/ERP, support desks, marketing automation, and analytics tools."
  },
  {
    question: "Will the CRM work on mobile?",
    answer: "Yes. We prioritize responsive or mobile-friendly experiences so field and remote teams can work from anywhere, on any device."
  },
  {
    question: "How do you improve user adoption?",
    answer: "We design role-based views, automate repetitive work, and train users on real workflows — not just feature walkthroughs. Adoption is a core delivery metric for us."
  },
  {
    question: "How do you handle security and permissions?",
    answer: "We implement least-privilege roles, secure authentication, and logging/audit options depending on your platform and requirements."
  },
  {
    question: "Can the CRM scale as we grow?",
    answer: "Yes. We design for scale — data model, integrations, automation, and reporting — so the CRM can support more users, pipelines, and regions over time."
  },
  {
    question: "Do you provide ongoing support after go-live?",
    answer: "Yes. We offer managed support, enhancements, and periodic optimization so your CRM keeps improving as your business evolves."
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

const CRM_pages = () => {
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
        style={{ backgroundImage: `url('/CRM_Development/crm_hero_new.png')` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}
        <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
          <div className="w-fit border border-[#05d7de]/30 bg-[#05d7de]/10 backdrop-blur-sm text-[#05d7de] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Custom CRM Development Company in India
          </div>

          <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-extrabold text-white max-w-[820px] leading-[1.15]">
            Custom CRM Development &<br />
            <span className="case-gradient-text-inline">
              Implementation Services
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Replace scattered tools with a CRM your team will actually use — designed for your workflows, your data, and your growth.
          </p>

          <HeroButtons
            button1Text="Get a CRM Consultation"
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

      {/* ── WHAT YOU GET ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-5" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Outcomes First</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">
              What You Get with a CRM Built for Your Workflows
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
              A CRM should not feel like "another system to update." It should remove friction from your day-to-day work. We focus on outcomes that matter:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {outcomes.map((item, i) => (
              <div key={i} className="group flex items-start gap-5 p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-[#05d7de]/30 hover:bg-gray-900 transition-all duration-300">
                <div className="min-w-[52px] h-13 bg-gradient-to-br from-[#2d5689]/20 to-[#a82123]/20 border border-white/10 rounded-xl flex items-center justify-center text-[#05d7de] group-hover:scale-110 transition-transform duration-300 p-3">
                  {item.icon}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM FEATURES ── */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">CRM Features We Typically Implement</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
              Every business is different, but most high-performing CRMs share a strong foundation. Based on your requirements, we can implement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((feature, i) => (
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
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">How We Deliver</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our CRM Delivery Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
              We follow a structured approach that reduces risk and improves user adoption.
            </p>
          </div>
        </div>
        <OurProcess steps={processSteps} title="" />
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(5,215,222,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Sectors We Serve</span>
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Industries We Support</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
            <p className="text-gray-400 mt-5 text-lg">
              We deliver CRM solutions for organizations across multiple sectors:
            </p>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="group flex flex-col items-center justify-center gap-3 p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-[#05d7de]/30 hover:bg-gray-900 transition-all duration-300 text-center">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                <span className="text-gray-300 text-sm font-semibold group-hover:text-white transition-colors duration-300">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ── */}
      <FeaturedCaseStudy />

      {/* ── WHY CHOOSE ── */}
      <WhyChooseTechmapperz
        features={whyChooseFeatures}
        heading="Why Choose Techmapperz for CRM"
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
        title="Ready to Replace Scattered Tools with a CRM Your Team Will Actually Use?"
        subtitle="Get a structured consultation in 48 hours. We will map your workflows, identify quick wins, and outline a realistic delivery plan."
        primaryButtonText="Request a CRM Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Get a Rough Estimate in 48 Hours"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default CRM_pages;