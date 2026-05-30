/**
 * WELHO PORTFOLIO CASE STUDY PAGE
 * This page is fully hardcoded as per user request to avoid reusable components.
 * It contains all UI and content logic for the Welho project.
 */

import Link from "next/link";
import { 
  ArrowUpRight, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Layout, 
  Database, 
  Workflow, 
  ShieldCheck 
} from "lucide-react";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/app/_Components/JsonLd";

// SEO Metadata
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const metadata = {
  title: "Welho Website Case Study | Dynamic Dairy & Wellness Website Development | Techmapperz",
  description: "See how Techmapperz developed a dynamic, information-rich website for Welho to improve brand visibility, trust, user experience, and digital growth.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/welho`,
  },
  openGraph: {
    title: "Welho Website Case Study | Techmapperz Portfolio",
    description: "See how Techmapperz developed a dynamic, information-rich website for Welho to improve brand visibility, trust, and growth.",
    images: ["/Photos/Welho_banner.webp"],
    type: 'website',
  },
};

// Local Helper Component for Section Headings
function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <span className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-medium ${
          light 
            ? "border-slate-200 bg-slate-50 text-slate-700" 
            : "border-white/10 bg-white/5 text-slate-300"
        }`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mt-4 text-2xl font-bold tracking-tight sm:text-3xl ${light ? "text-slate-900" : "text-white"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? "text-slate-600" : "text-slate-400"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function WelhoPortfolioPage() {
  // Case Study Data Mapping
  const caseStudy = {
    title: "Information-Rich & Dynamic Website for a Modern Dairy & Wellness Brand",
    category: "Case Study",
    industry: "Health & Wellness / Dairy Brand Website",
    coverImage: "/Photos/Welho_banner.webp",
    summary: [
      "Techmapperz designed and developed a dynamic, information-driven website for a brand positioned around natural wellness-focused products. The objective was to create a strong digital presence that would help the company present its brand story, showcase product value clearly, and offer visitors a smooth, trustworthy browsing experience across devices.",
      "The project was planned not just as a website, but as a brand communication platform. A website that could support visibility, trust-building, and future growth for a consumer-facing dairy and wellness business."
    ],
    stats: [
      { label: "Project Type", value: "Dynamic Business Website" },
      { label: "Industry", value: "Dairy, Wellness & Consumer Brand" },
      { label: "Focus Area", value: "Brand Visibility + Information Delivery" },
      { label: "Delivery Goal", value: "Trust, Engagement & Lead Readiness" },
    ],
    challenges: [
      "Welho needed a website that could do more than simply exist online. As a growing brand in the dairy and wellness space, the business required a digital platform that could present its identity with clarity, make product-related information easy to understand, and create a positive first impression for new visitors. The brand also needed a website that felt modern and informative.",
      "A key challenge was balancing information depth with user-friendly presentation. Many product-focused websites either become too cluttered with content or too minimal to build trust. For Welho, the goal was to present the company, its offerings, and its value proposition in a way that felt clean, transparent, and credible.",
      "Another important requirement was responsiveness. The client needed a website that performed well across desktop and mobile devices so potential customers could access information comfortably from anywhere."
    ],
    solutions: {
      description: "Techmapperz developed a custom dynamic website for Welho with a clear focus on usability, visual consistency, and brand trust. We approached the project as a combination of business presentation, content organization, and user experience design.",
      points: [
          "a better online brand presence",
          "easy content presentation",
          "improved user engagement",
          "future scalability for business growth"
      ]
    },
    features: [
      "Dynamic and information-rich company website",
      "Clean and modern UI aligned with brand identity",
      "Mobile responsive layout for better accessibility",
      "Structured content presentation for product and company information",
      "Consumer-friendly browsing experience",
      "SEO-conscious page structure",
      "Scalable architecture for future expansion",
      "Trust-oriented visual design and content flow",
      "Smooth navigation across major sections",
      "Business-focused website intended to improve digital presence"
    ],
    process: [
      {
        title: "Discovery & Business Understanding",
        description: "We started by understanding Welho’s industry positioning, audience expectations, and communication needs. Since the brand operates in a space where trust matters, the website strategy supported both information sharing and brand credibility.",
      },
      {
        title: "Information Architecture Planning",
        description: "Before design and development, we mapped how the site content should be organized so it remained informative without feeling crowded. We planned the flow around what a first-time visitor would want to know.",
      },
      {
        title: "UI/UX Design Approach",
        description: "The design direction was kept clean, modern, and approachable. Special attention was given to spacing, readability, visual hierarchy, and responsive presentation.",
      },
      {
        title: "Development & Responsive Implementation",
        description: "Our development team converted the design into a fully functional dynamic website. The implementation focused on responsive behaviour and smooth browsing across screen sizes.",
      },
      {
        title: "Review, Refinement & Launch Readiness",
        description: "Before final delivery, the website was reviewed for visual and usability perfection. Refinements were made to improve content flow and the overall user journey.",
      },
    ],
    results: {
      description: "The final website gave a more polished and credible digital presence, helping the company communicate its brand more effectively online. Instead of relying on a basic static presence, the business now has a website that can support stronger engagement and present information in a more structured, user-friendly way.",
      impact: [
          "Improved digital brand presentation for a wellness-focused dairy company",
          "Better organization of business and product-related information",
          "More professional and trustworthy online identity",
          "User-friendly browsing experience across desktop and mobile devices",
          "Stronger foundation for future digital marketing and brand growth",
          "A scalable website structure that can support future updates and expansion"
      ]
    },
    techStack: [
      "Website Design",
      "Dynamic Website Development",
      "Responsive UI",
      "SEO-Friendly Structure",
      "Content-Driven Layout",
      "Performance-Oriented Frontend"
    ],
    highlights: [
      {
        title: "Brand-Centric Experience",
        description: "Built to reflect a clean, trustworthy, and modern dairy/wellness brand identity."
      },
      {
        title: "Information-Driven Structure",
        description: "Organized to present the company and its offering in a clear and easy-to-consume format."
      },
      {
        title: "Responsive User Journey",
        description: "Optimized for users browsing across mobile, tablet, and desktop devices."
      }
    ],
    relatedServices: [
      "Corporate Website Development",
      "E-commerce Website Development",
      "SEO-Friendly Web Design",
      "Custom Admin Panel Development",
      "Brand-Focused UI/UX Design"
    ]
  };

  return (
    <main className="bg-[#050505] text-slate-300 selection:bg-cyan-500/30">
      {/* JSON-LD for SEO */}
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Portfolios', url: `${BASE_URL}/portfolios` },
        { name: 'Welho Case Study', url: `${BASE_URL}/portfolios/welho` }
      ]} />
      <ProjectJsonLd project={{
        name: caseStudy.title,
        description: caseStudy.summary[0],
        image: caseStudy.coverImage,
        category: caseStudy.category
      }} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0">
          <img
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/80" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-widest">
                <Sparkles size={14} className="text-cyan-400" /> {caseStudy.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 uppercase tracking-widest">
                <Building2 size={14} /> {caseStudy.industry}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              {caseStudy.title}
            </h1>
            
            <div className="mt-8 max-w-3xl space-y-6">
              {caseStudy.summary.map((para, i) => (
                <p key={i} className="text-lg leading-8 text-slate-400 font-light">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-50 hover:scale-[1.02]"
              >
                Start a Similar Project <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/portfolios"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                View More Projects
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {caseStudy.stats.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="text-xs font-bold uppercase tracking-[2px] text-slate-500 mb-4">{item.label}</div>
                <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full pointer-events-none ml-20" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div className="space-y-12">
            {/* Challenges */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Client Challenge"
                title="What the Client Needed"
                description="Identity clarity, information balance, and responsiveness for a growing wellness brand."
              />
              <div className="mt-8 space-y-6">
                {caseStudy.challenges.map((point, i) => (
                  <div key={i} className="flex gap-4">
                     <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan-500 mt-3" />
                     <p className="text-lg leading-8 text-slate-400 font-light">
                       {point}
                     </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Our Solution"
                title="How Techmapperz Solved It"
                description={caseStudy.solutions.description}
              />
              <div className="mt-8 space-y-6">
                {caseStudy.solutions.points.map((point, i) => (
                  <div key={i} className="flex gap-4">
                     <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 mt-3" />
                     <p className="text-lg leading-8 text-slate-400 font-light capitalize">
                       {point}
                     </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Key Features"
                title="Core Capabilities Delivered"
                description="A robust feature set built for scalability, trust, and real-time branding visibility."
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {caseStudy.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 size-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <CheckCircle2 size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-base font-semibold text-white/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Project Process"
                title="How We Executed the Project"
                description="Welho's project followed a structured workflow ensuring brand consistency and usability."
              />
              <div className="mt-12 grid gap-6">
                {caseStudy.process.map((step, index) => (
                  <div key={step.title} className="group/item relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.05]">
                    <div className="flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 text-xl font-black text-white shadow-xl shadow-black/20 group-hover/item:border-cyan-500/50 group-hover/item:text-cyan-400 transition-all">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-lg leading-relaxed text-slate-400 font-light">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Showcase (Project Preview) */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Project Preview"
                title="Visual Showcase"
                description="The Welho website was designed to present the brand in a clear, modern, and trustworthy way. Key screens include homepage, product sections, and mobile responsive views."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                        alt="Homepage Banner & Brand Introduction"
                        className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                        Homepage Banner & Brand Introduction
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                        alt="Product / Information Section"
                        className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                        Product / Information Section
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
                        alt="Mobile Responsive View"
                        className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                        Mobile Responsive View
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
                        alt="Consumer Engagement Section"
                        className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                        About / Consumer Engagement Section
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Business Impact"
                title="Results and Value Delivered"
                description={caseStudy.results.description}
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {caseStudy.results.impact.map((result, i) => (
                  <div key={i} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-base font-semibold text-emerald-400 flex items-center gap-3">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    {result}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="group relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-black p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
              <SectionHeading
                eyebrow="Final Words"
                title="Need a Similar Website for Your Business?"
                description="If you are planning to build a modern, information-rich website for your company, Techmapperz can help you create a platform that strengthens your brand, builds trust, and supports long-term business growth."
              />
              <p className="mt-6 text-lg leading-relaxed text-slate-400 font-light">
                Whether you run a dairy brand, wellness business, consumer company, startup, or enterprise, we design and develop websites that are not only visually impressive but also structured for real business impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-50 hover:scale-105"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="space-y-8 lg:mt-0 mt-12">
            <div className="sticky top-24 space-y-8">
              {/* Technology Stack */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Project Highlights</h3>
                <div className="space-y-6">
                  {caseStudy.highlights.map((highlight, i) => (
                    <div key={i} className="group/h relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06]">
                      <div className="font-bold text-white mb-1 flex items-center gap-2 text-sm">
                         {i === 0 && <Workflow size={14} className="text-cyan-400" />}
                         {i === 1 && <Layout size={14} className="text-cyan-400" />}
                         {i === 2 && <ShieldCheck size={14} className="text-cyan-400" />}
                         {highlight.title}
                      </div>
                      <p className="text-xs leading-relaxed text-slate-500 font-light">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Related Services</h3>
                <div className="space-y-4">
                  {caseStudy.relatedServices.map((service, i) => (
                    <Link
                      key={i}
                      href="/services"
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm font-bold text-slate-300 transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:text-white"
                    >
                      <span>{service}</span>
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5 opacity-50 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
