"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building2, CheckCircle2, Layout, Database, Workflow, ShieldCheck } from "lucide-react";

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

export default function PortfolioDetailTemplate({ portfolioItem, projectSlug }) {
  if (!portfolioItem) {
    return notFound();
  }

  // Derive challenges based on category
  const rawChallenges = portfolioItem.category === "GIS" ? (portfolioItem.objectives || []) : (portfolioItem.challenges || []);
  const challengeList = rawChallenges.map(c => c.description || c);

  // Derive solutions and features
  const rawSolutions = portfolioItem.solutions || [];
  const solutionList = rawSolutions.map(s => s.description || s);
  const featureList = rawSolutions.flatMap(s => s.features || []);

  // Derive results based on category
  const rawResults = portfolioItem.category === "GIS" ? (portfolioItem.benefits || []) : (portfolioItem.results || []);
  const resultList = rawResults.map(r => r.description || r);

  const caseStudy = {
    title: portfolioItem.name || "Project Highlight",
    category: portfolioItem.category || "Case Study",
    industry: portfolioItem.projectDetails?.industry || "Technology",
    summary: portfolioItem.details,
    coverImage: portfolioItem.image || "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1600&q=80",
    stats: portfolioItem.stats || [
      { label: "Project Type", value: portfolioItem.projectDetails?.projectType || "N/A" },
      { label: "Industry", value: portfolioItem.projectDetails?.industry || "N/A" },
      { label: "Duration", value: portfolioItem.projectDetails?.duration || "N/A" },
      { label: "Core Logic", value: portfolioItem.projectDetails?.coreFunctionality || portfolioItem.projectDetails?.teamSize || "N/A" },
    ].filter(s => s.value !== "N/A"),
    challenge: challengeList.length > 0 ? challengeList : [
      "The client needed a scalable digital solution to improve operational processes.",
      "Their business required a centralized system to manage data effectively."
    ],
    solution: solutionList.length > 0 ? solutionList : [
      "We built a responsive web application tailored for their specific needs.",
      "We developed a custom admin panel that allows the team to manage their workflow."
    ],
    features: featureList.length > 0 ? featureList : [
      "Responsive user interface",
      "Custom admin dashboard",
      "Scalable architecture",
      "Performance optimization"
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "We studied the workflow, project structure, operational needs, and goals before defining the system scope.",
      },
      {
        title: "UI/UX & Information Structure",
        description: "We designed the flow to make discovery and backend management easier for both users and administrators.",
      },
      {
        title: "Development",
        description: "Our team developed the system using a structured modular approach alongside modern web technologies.",
      },
      {
        title: "Testing & Launch",
        description: "We tested the core workflows including system logic and edge cases before final deployment.",
      },
    ],
    results: resultList.length > 0 ? resultList : [
      "Improved digital visibility for the project's ecosystem",
      "Simplified day-to-day management tasks",
      "Enabled centralized operational control"
    ],
    technologies: portfolioItem.techStack ? portfolioItem.techStack.split(",").map(t => t.trim()) : ["React", "Node.js", "Web Technologies"],
    testimonial: portfolioItem.testimonial || null,
    relatedServices: portfolioItem.relatedServices || [
      { title: "B2B E-commerce Website Development", href: "/services/website-development" },
      { title: "Custom ERP Integration Solutions", href: "/services/erp-integration" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    sectionDescriptions: {
      challenges: portfolioItem.sectionDescriptions?.challenges || "Key business pain points and strategic requirements addressed during the engagement.",
      solutions: portfolioItem.sectionDescriptions?.solutions || "Leveraging custom automation and integrated dashboards to streamline sales workflows.",
      features: portfolioItem.sectionDescriptions?.features || "A robust feature set built for scalability, operational governance, and real-time visibility.",
      results: portfolioItem.sectionDescriptions?.results || "Measurable improvements in order governance, approval speed, and operational efficiency.",
      process: portfolioItem.sectionDescriptions?.process || "Our structured delivery workflow ensures business continuity and technical excellence.",
      preview: portfolioItem.sectionDescriptions?.preview || "Glimpses of the customized digital portal and backend management system."
    }
  };

  return (
    <main className="bg-[#050505] text-slate-300 selection:bg-cyan-500/30">
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
              {Array.isArray(caseStudy.summary) ? (
                caseStudy.summary.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8 text-slate-400 font-light">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg leading-8 text-slate-400 font-light">
                  {caseStudy.summary}
                </p>
              )}
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

      <section className="py-24 relative">
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full pointer-events-none ml-20" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div className="space-y-12">
            {caseStudy.challenge?.length > 0 && (
              <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Client Challenge"
                  title="What the Client Needed"
                  description={caseStudy.sectionDescriptions.challenges}
                />
                <div className="mt-8 space-y-6">
                  {caseStudy.challenge.map((point, i) => (
                    <div key={i} className="flex gap-4">
                       <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan-500 mt-3" />
                       <p className="text-lg leading-8 text-slate-400 font-light">
                         {point}
                       </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.solution?.length > 0 && (
              <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Our Solution"
                  title="How Techmapperz Solved It"
                  description={caseStudy.sectionDescriptions.solutions}
                />
                <div className="mt-8 space-y-6">
                  {caseStudy.solution.map((point, i) => (
                    <div key={i} className="flex gap-4">
                       <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 mt-3" />
                       <p className="text-lg leading-8 text-slate-400 font-light">
                         {point}
                       </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.features?.length > 0 && (
              <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Key Features"
                  title="Core Capabilities Delivered"
                  description={caseStudy.sectionDescriptions.features}
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
            )}

            <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Project Process"
                title="How We Executed the Project"
                description={caseStudy.sectionDescriptions.process}
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

            <div className="group relative rounded-[2.5rem] border border-white/10 bg-[#0f1115]/50 p-10 backdrop-blur-xl">
              <SectionHeading
                eyebrow="Project Preview"
                title="Visual Showcase"
                description={caseStudy.sectionDescriptions.preview}
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                    alt="Project dashboard preview"
                    className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 group/img">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Project website preview"
                    className="h-72 w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                </div>
              </div>
            </div>

            {caseStudy.results?.length > 0 && (
              <div className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
                <SectionHeading
                  eyebrow="Business Impact"
                  title="Results and Value Delivered"
                  description={caseStudy.sectionDescriptions.results}
                />
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-base font-semibold text-emerald-400 flex items-center gap-3">
                      <div className="size-2 rounded-full bg-emerald-500" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.testimonial && (
              <div className="group relative rounded-[2.5rem] border border-white/10 bg-slate-900 p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.570 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                   </svg>
                </div>
                <SectionHeading
                  eyebrow="Client Feedback"
                  title="Success Story"
                  description="The real-world impact as voiced by our partners."
                />
                <blockquote className="mt-10 text-2xl font-light italic leading-relaxed text-white">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="size-14 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400">
                    {caseStudy.testimonial.author?.charAt(0) || "T"}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{caseStudy.testimonial.author}</div>
                    <div className="text-base text-slate-500 uppercase tracking-widest font-semibold">{caseStudy.testimonial.position || caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-8 lg:mt-0 mt-12">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Project Highlights</h3>
                <div className="space-y-6">
                  <div className="group/h relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06]">
                    <div className="font-bold text-white mb-1 flex items-center gap-2">
                       <Workflow size={16} className="text-cyan-400" /> Custom-Built Workflow
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400 font-light">Tailored for complex distribution management needs.</p>
                  </div>
                  <div className="group/h relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06]">
                    <div className="font-bold text-white mb-1 flex items-center gap-2">
                       <ShieldCheck size={16} className="text-cyan-400" /> Hierarchy Approval
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400 font-light">Ensures governance over multi-role order operations.</p>
                  </div>
                  <div className="group/h relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.06]">
                    <div className="font-bold text-white mb-1 flex items-center gap-2">
                       <Database size={16} className="text-cyan-400" /> ERP / App Integrated
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400 font-light">Connected with broader digital operations environment.</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full" />
                <h3 className="text-2xl font-bold text-white mb-4">Need a Similar Solution?</h3>
                <p className="text-sm leading-relaxed text-slate-400 mb-8 font-light">
                  Let Techmapperz build a scalable B2B portal, admin system, or ERP-integrated solution for your business.
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/contact-us"
                    className="flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-50 hover:scale-105"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-6">Related Services</h3>
                <div className="space-y-4">
                  {caseStudy.relatedServices.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm font-bold text-slate-300 transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:text-white"
                    >
                      <span>{service.title}</span>
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