"use client";

import { useState, useEffect, useMemo } from "react";
import ScrollToTop from "../_Components/ScrollToTop";
import Portfolio_banner from "@/public/Photos/Portfolio_banner.webp";
import Image from "next/image";
import Link from "next/link";
import { 
  Camera, 
  Cpu, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  BarChart3, 
  Layers, 
  Gauge, 
  Search, 
  X, 
  Building2, 
  Rocket,
  Filter
} from "lucide-react";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gray-600 bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-300">
      {children}
    </span>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-6 items-center justify-center rounded-md border border-gray-600 bg-gray-800 text-[#00B0FE]">{icon}</div>
      <div className="leading-tight">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
}

function ProjectCard({ item, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-700">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={225}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 lg:p-5">
        {/* <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="h-3.5 w-3.5" /> {item.location || "India"}
          <span className="mx-2 h-1 w-1 rounded-full bg-gray-500" />
          <Calendar className="h-3.5 w-3.5" /> {item.period || "2024"}
        </div> */}
        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-white lg:text-lg">
          {item.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-gray-300">{item.description}</p>
        <div className="mb-3 flex flex-wrap gap-2">
          {item.techStack && item.techStack.split(',').slice(0, 3).map((tech) => (
            <Badge key={tech.trim()}>#{tech.trim()}</Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">Techmapperz</div>
          <div className="flex gap-2">
            <button
              onClick={() => onOpen(item)}
              className="inline-flex items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
            >
              Quick view
            </button>
            <Link
              href={item.link}
              className="inline-flex items-center gap-1 rounded-xl border border-[#00B0FE] bg-[#00B0FE] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#0090d4] transition-colors"
            >
              View case <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDrawer({ open, onClose, item }) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-800 shadow-2xl border border-gray-600">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-600 bg-gray-800 p-4">
          <div>
            <div className="text-xs text-gray-400">Techmapperz</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-white hover:bg-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6 lg:p-8">
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-xl bg-gray-700">
              <Image src={item.image} alt={item.title} width={500} height={280} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Badge><Building2 className="mr-1 h-3.5 w-3.5" /> {item.category || "Technology"}</Badge>
                {/* <Badge><MapPin className="mr-1 h-3.5 w-3.5" /> India</Badge> */}
                {/* <Badge><Calendar className="mr-1 h-3.5 w-3.5" /> 2024</Badge> */}
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {item.category === "GIS" ? (
                  <>
                    <div className="rounded-xl border border-gray-600 bg-gray-700 p-3">
                    </div>
                    <div className="rounded-xl border border-gray-600 bg-gray-700 p-3">
                      <Metric icon={<BarChart3 size={16} />} label="Avg. TAT Reduction" value="35%" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-xl border border-gray-600 bg-gray-700 p-3">
                      <Metric icon={<Layers size={16} />} label="Status" value="Live" />
                    </div>
                    <div className="rounded-xl border border-gray-600 bg-gray-700 p-3">
                      <Metric icon={<BarChart3 size={16} />} label="Performance" value="99.8%" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {item.techStack && item.techStack.split(',').map((tech, index) => (
                <Badge key={index}>{tech.trim()}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-gray-600 bg-gray-700 p-4">
            <div>
              <div className="text-xs text-gray-400">Need a similar solution?</div>
              <div className="text-sm font-medium text-white">Book a free consultation</div>
            </div>
            <div className="flex gap-3">
              <Link
                href={item.link || "#"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#00B0FE] px-4 py-2 text-sm font-medium text-white hover:bg-[#0090d4] transition-colors"
              >
                View full case <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Casestudies = ({ 
  portfolioData, 
  defaultCategory = "All", 
  hideFilters = false, 
  customTitle = null 
}) => {
  const [filter, setFilter] = useState(defaultCategory);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const getMobileDescription = (description, category) => {
    if (typeof description !== 'string') return '';
    return description.length > 150 ? description.substring(0, 150) + '...' : description;
  };

  // Transform the static data to match the expected format
  const transformedProjects = portfolioData.map((item, index) => {
    // Generate slug for dynamic routing
    const slug = item.slug || item.link?.replace('/portfolios/', '') || 
                item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    return {
      id: index,
      title: item.name,
      category: item.category,
      techStack: item.techStack,
      description: Array.isArray(item.details) ? item.details[0] : item.description,
      mobileDescription: getMobileDescription(Array.isArray(item.details) ? item.details[0] : item.description, item.category),
      image: item.image,
      technologies: item.techStack || "React, Node.js, MongoDB",
      link: `/portfolios/${slug}`, // Use dynamic slug routing
      period: item.projectDetails?.year || "2024",
      location: item.projectDetails?.location || "India",
      slug: slug, // Add slug for reference
      bgColor: "#1e293b"
    };
  });

  const filteredProjects = useMemo(() => {
    let filtered = transformedProjects;
    
    // Filter by category
    if (filter !== "All") {
      filtered = filtered.filter(project => project.category === filter);
    }
    
    // Filter by search query
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filtered = filtered.filter(project =>
        [project.title, project.description, project.techStack, project.category]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    
    return filtered;
  }, [transformedProjects, filter, query]);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const openProjectDrawer = (project) => {
    setCurrentProject(project);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ScrollToTop />
      
      {/* HERO BANNER */}
      <div className="relative w-full">
        <Image
          src={Portfolio_banner}
          className="w-full h-[300px] md:h-[500px] object-cover"
          alt="Portfolio Banner"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <p className="text-center text-4xl md:text-6xl text-white font-bold px-4">
            Our Portfolio
          </p>
          <h1 className="text-center text-lg md:text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]">
            Explore our comprehensive portfolio of IT and GIS solutions
          </h1>
        </div>
      </div>

      {/* MODERN PORTFOLIO SECTION */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <header className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:pt-16 lg:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-xs text-gray-300">
          <Filter className="h-3.5 w-3.5" /> Portfolio Showcase
        </div>
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our Portfolio
              <span className="block text-gray-400">Transforming ideas into digital reality.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
              Discover our comprehensive portfolio of IT and GIS solutions—from drone-based mapping to custom software development.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <Badge><Camera className="mr-1 h-3.5 w-3.5" /> Drone & GIS</Badge>
              <Badge><Cpu className="mr-1 h-3.5 w-3.5" /> IT Solutions</Badge>
              <Badge><Building2 className="mr-1 h-3.5 w-3.5" /> Enterprise Apps</Badge>
            </div>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <div className="flex items-center gap-2 rounded-2xl border border-gray-600 bg-gray-800 p-2 shadow-lg">
              {["All", "IT", "GIS"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    filter === category
                      ? "bg-[#00B0FE] text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {category === "IT" ? <Cpu className="w-4 h-4" /> : category === "GIS" ? <Camera className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                  {category === "IT" ? "IT Solutions" : category === "GIS" ? "GIS & Drone" : "All Projects"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 flex items-center gap-3">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${filter === "All" ? "all" : filter} projects...`}
              className="w-full rounded-xl border border-gray-600 bg-gray-800 py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00B0FE]/50 focus:border-[#00B0FE]"
            />
          </div>
        </div>
        </header>

      {/* PROJECT GRID */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} item={project} onOpen={openProjectDrawer} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full rounded-2xl border border-gray-600 bg-gray-800 p-10 text-center text-sm text-gray-400">
              No projects found. Try adjusting your search or filter.
            </div>
          )}
        </div>

        {/* Testimonial strip */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              quote: "Techmapperz delivered exceptional GIS mapping solutions that transformed our land management processes.",
              client: "Government Client"
            },
            {
              quote: "Their custom CRM solution increased our operational efficiency by 40% within the first quarter.",
              client: "Enterprise Client"
            },
            {
              quote: "Professional drone surveys with accurate deliverables. Highly recommend for infrastructure projects.",
              client: "Construction Company"
            }
          ].map((testimonial, i) => (
            <div key={i} className="rounded-2xl border border-gray-600 bg-gray-800 p-5">
              <div className="mb-2 text-sm font-semibold text-white">Client Testimonial</div>
              <p className="text-sm text-gray-300">
                "{testimonial.quote}"
              </p>
              <div className="mt-3 text-xs text-gray-400">— {testimonial.client}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700 p-6 sm:flex-row">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-400">Ready to start your project?</div>
            <div className="text-sm font-medium text-white">Get a tailored proposal within 48 hours.</div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00B0FE] px-4 py-2 text-sm font-medium text-white hover:bg-[#0090d4] transition-colors"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        </main>
      </div>

      <ProjectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} item={currentProject} />
    </div>
  );
};

export default Casestudies; 