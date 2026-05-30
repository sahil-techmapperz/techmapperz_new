"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollToTop from "../_Components/ScrollToTop";

export default function Casestudies({ portfolioData }) {
  const [filter, setFilter] = useState("All");

  const getMobileDescription = (description) => {
    if (typeof description !== "string") return "";
    return description.length > 150 ? description.substring(0, 150) + "..." : description;
  };

  const transformedProjects = portfolioData.map((item, index) => {
    const slug = item.slug || item.link?.replace('/portfolios/', '') ||
      item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    return {
      id: index,
      title: item.name,
      category: item.category, 
      industry: item.projectDetails?.industry || "Technology",
      services: item.techStack ? item.techStack.split(',').map(s => s.trim()).slice(0, 3) : [],
      outcome: getMobileDescription(Array.isArray(item.details) ? item.details[0] : item.description),
      image: item.image,
      href: `/portfolios/${slug}`,
      badge: item.category,
    };
  });

  const dynamicCategories = ["All", ...new Set(transformedProjects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    if (filter === "All") return transformedProjects;
    return transformedProjects.filter(project => project.category === filter);
  }, [filter, transformedProjects]);

  return (
    <section className="bg-[#020617] py-20 md:py-24 text-white min-h-screen font-sans selection:bg-blue-500/30">
      <ScrollToTop />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-[#0a0f1c] px-4 py-1.5 text-sm font-medium text-gray-300">
              Portfolio & Case Studies
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real Projects That Build Trust, Show Capability, and Generate Leads
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Explore how Techmapperz delivers business-focused solutions across software development,
              GIS services, drone mapping, and custom digital platforms for startups, enterprises,
              and government organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "3", label: "Core Domains" },
              { value: "India + Global", label: "Service Reach" },
              { value: "End-to-End", label: "Delivery Support" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#0a0f1c]/50 p-4 text-center shadow-sm backdrop-blur-md"
              >
                <div className="text-lg font-bold text-white sm:text-xl">{item.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {dynamicCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "border border-white/10 bg-[#0a0f1c] text-gray-300 hover:border-blue-500/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1c]/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <Link href={item.href} className="flex-1 flex flex-col">
                <div className="relative h-60 w-full overflow-hidden bg-gray-900 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    {item.badge}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm font-medium text-blue-400">{item.industry}</p>
                    <h3 className="mt-1 text-xl font-bold text-white line-clamp-2">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-gray-400 sm:text-base line-clamp-3 mb-6 flex-1">
                    {item.outcome}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">View Case Study</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all group-hover:bg-blue-500 group-hover:translate-x-1">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Business-Focused Delivery",
              description:
                "We build solutions aligned with operations, visibility, efficiency, and long-term growth.",
            },
            {
              title: "Software + GIS + Drone Expertise",
              description:
                "A rare combination of technical development and geospatial field capability under one brand.",
            },
            {
              title: "Lead-Generation Ready Approach",
              description:
                "Every project presentation is structured to build trust, explain outcomes, and encourage inquiries.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0a0f1c]/50 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-[#0a0f1c] to-[#040810] px-6 py-10 sm:px-10 lg:px-12 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center relative z-10">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
                Need a Similar Solution?
              </span>
              <h3 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let’s Build Your Next Software, GIS, or Drone Project with Confidence
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Whether you need a business website, custom web platform, CRM, GIS solution, or drone
                mapping service, Techmapperz can help you plan, design, and deliver the right solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Get a Free Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 