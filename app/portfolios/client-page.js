"use client";

import { useState, useMemo } from "react";
import ScrollToTop from "../_Components/ScrollToTop";
import Portfolio_banner from "@/public/Photos/portfolio_hero_bg.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Filter,
  Code,
  Briefcase,
  MessageSquare,
  Users,
  ShieldCheck
} from "lucide-react";

function Badge({ children }) {
  return (
    <span style={{ color: "#67e8f9", borderColor: "rgba(6, 182, 212, 0.5)", backgroundColor: "rgba(6, 182, 212, 0.1)" }} className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
      {children}
    </span>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(5,215,222,0.1)]">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">{label}</div>
        <div className="text-sm font-bold text-slate-100">{value}</div>
      </div>
    </div>
  );
}

function ProjectCard({ item, onOpen, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ border: "1px solid rgba(5, 215, 222, 0.4)", backgroundColor: "rgba(15, 23, 42, 0.8)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_#05d7de26] hover:bg-slate-800/60"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        
        {/* Category Pill Over Image */}
        <div className="absolute left-4 top-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md border border-slate-700/50">
            {item.category === "IT" ? <Cpu className="h-3.5 w-3.5 text-cyan-400" /> : item.category === "GIS" ? <Camera className="h-3.5 w-3.5 text-cyan-400" /> : <Building2 className="h-3.5 w-3.5 text-cyan-400" />}
            {item.category}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 style={{ color: "white" }} className="mb-2 line-clamp-2 text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
          {item.title}
        </h3>
        <p style={{ color: "#cbd5e1" }} className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
        
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {item.techStack && item.techStack.split(',').slice(0, 3).map((tech) => (
              <Badge key={tech.trim()}>
                {tech.trim()}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Techmapperz</div>
            <div className="flex gap-2">
              <button
                style={{ backgroundColor: "#1e293b", color: "white", border: "1px solid #334155" }}
                onClick={() => onOpen(item)}
                className="inline-flex items-center justify-center rounded-xl bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
              >
                Quick view
              </button>
              <Link
                href={item.link}
                style={{ backgroundColor: "#06b6d4", color: "#020617" }}
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_15px_#05d7de66]"
              >
                Case <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDrawer({ open, onClose, item }) {
  return (
    <AnimatePresence>
      {open && item && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 shadow-2xl border border-slate-700/50 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md p-5 sm:px-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(5,215,222,0.8)]"></span>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Details</div>
                </div>
                <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="group rounded-full border border-slate-700/50 bg-slate-800/50 p-2 text-slate-400 transition-all hover:bg-slate-700 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>
            
            <div className="p-5 sm:p-8">
              <div className="mb-8 grid gap-8 md:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-800 border border-slate-700/50">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge><Building2 className="mr-1 h-3.5 w-3.5" /> {item.category || "Technology"}</Badge>
                    <Badge><Calendar className="mr-1 h-3.5 w-3.5" /> {item.period || "2024"}</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">About the Project</h4>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {item.category === "GIS" ? (
                      <>
                        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50">
                          <Metric icon={<MapPin size={16} />} label="Type" value="GIS/Mapping" />
                        </div>
                        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50">
                          <Metric icon={<BarChart3 size={16} />} label="Impact" value="High Precision" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50">
                          <Metric icon={<Layers size={16} />} label="Status" value="Live & Active" />
                        </div>
                        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50">
                          <Metric icon={<Rocket size={16} />} label="Performance" value="Optimized" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-2xl border border-slate-700/50 bg-slate-800/20 p-6">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  <Code className="h-4 w-4" /> Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {item.techStack && item.techStack.split(',').map((tech, index) => (
                    <Badge key={index}>{tech.trim()}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-800/30 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>
                <div className="relative z-10 text-center sm:text-left">
                  <div className="mb-1 text-sm font-semibold text-cyan-400">Interested in this solution?</div>
                  <div className="text-base font-bold text-slate-100">Explore the full case study for deeper insights.</div>
                </div>
                <div className="flex w-full sm:w-auto gap-3 relative z-10">
                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-all"
                  >
                    Close
                  </button>
                  <Link
                    href={item.link || "#"}
                    className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(5,215,222,0.4)] transition-all"
                  >
                    View Case <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
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

  const transformedProjects = portfolioData.map((item, index) => {
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
      link: `/portfolios/${slug}`,
      period: item.projectDetails?.year || "2024",
      location: item.projectDetails?.location || "India",
      slug: slug,
    };
  });

  const filteredProjects = useMemo(() => {
    let filtered = transformedProjects;
    
    if (filter !== "All") {
      filtered = filtered.filter(project => project.category === filter);
    }
    
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

  const openProjectDrawer = (project) => {
    setCurrentProject(project);
    setDrawerOpen(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTop />
      
      {/* PREMIUM HERO BANNER */}
      <div className="relative w-full min-h-[90vh] md:min-h-[90vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src={Portfolio_banner}
          fill
          className="object-contain object-top"
          alt="Portfolio Banner"
          priority
          sizes="100vw"
        />
        
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            className="max-w-2xl flex flex-col items-start text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.2]">
              Transforming Businesses with<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda4af] to-[#60a5fa] drop-shadow-[0_0_20px_rgba(96,165,250,0.2)]">
                Smart IT, GIS & Drone Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-medium">
              We combine IT development, GIS mapping, and drone intelligence to help organisations improve planning, operations, and decision-making.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#db2777] px-8 py-4 text-sm md:text-base font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] transition-all hover:scale-[1.02]"
              >
                Request a Free Project Consultation &rarr;
              </Link>
              <a 
                href="#portfolio-grid" 
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/40 px-8 py-4 text-sm md:text-base font-bold text-slate-100 hover:bg-slate-900/50 transition-all hover:scale-[1.02]"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar at the bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-slate-900/60 backdrop-blur-md border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Rocket className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-white">100+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Projects Delivered</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Users className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-white">50+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-white">5+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Industries Served</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-slate-200">End-to-End</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Solutions & Support</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-slate-950">
        <header className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-6">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
            <div className="max-w-2xl">
              <h2 style={{ color: "white" }} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Transforming ideas into <span style={{ color: "#22d3ee" }} className="text-cyan-400">digital reality.</span>
              </h2>
              <p style={{ color: "#cbd5e1" }} className="mt-4 text-base leading-relaxed text-slate-400">
                Discover our curated collection of enterprise applications, scalable systems, and precise GIS mapping projects.
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 p-1.5 shadow-xl backdrop-blur-lg w-full md:w-auto overflow-x-auto scrollbar-hide">
              {["All", "IT", "GIS"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  style={filter === category ? { backgroundColor: "#06b6d4", color: "#020617", boxShadow: "0 0 15px rgba(5,215,222,0.4)" } : { color: "#94a3b8", backgroundColor: "rgba(15, 23, 42, 0.5)" }}
                  className={`whitespace-nowrap flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    filter === category
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  {category === "IT" ? <Cpu className="w-4 h-4" /> : category === "GIS" ? <Camera className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                  {category === "IT" ? "IT Solutions" : category === "GIS" ? "GIS & Drone" : "All Projects"}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-10 relative max-w-2xl group">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            <div className="relative flex items-center">
              <Search style={{ color: "#94a3b8" }} className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${filter === "All" ? "all" : filter} projects by tech stack, name, or description...`}
                style={{ backgroundColor: "rgba(15, 23, 42, 0.8)", color: "white", border: "1px solid rgba(51, 65, 85, 0.8)" }}
                className="w-full rounded-2xl border border-slate-700/50 bg-slate-900/80 py-3.5 pl-12 pr-4 text-sm text-slate-200 placeholder-slate-500 backdrop-blur-sm outline-none transition-all focus:border-cyan-500/50 focus:bg-slate-900"
              />
            </div>
          </div>
        </header>

        {/* PROJECT GRID */}
        <main className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} item={project} onOpen={openProjectDrawer} index={index} />
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full rounded-3xl border border-dashed border-slate-700 bg-slate-900/30 p-12 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-slate-400 mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-200 mb-2">No projects found</h3>
                <p className="text-sm text-slate-400">Try adjusting your search terms or filter to find what you're looking for.</p>
                <button 
                  onClick={() => { setFilter("All"); setQuery(""); }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>

          {/* PREMIUM TESTIMONIAL STRIP */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Clients Say</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "Techmapperz delivered exceptional GIS mapping solutions that completely transformed our land management and planning processes.",
                  client: "Government Client",
                  role: "Urban Planning Division"
                },
                {
                  quote: "Their custom CRM solution increased our operational efficiency by 40% within the first quarter. Truly impressive engineering.",
                  client: "Enterprise Client",
                  role: "Operations Director"
                },
                {
                  quote: "Professional drone surveys with highly accurate deliverables. We highly recommend them for large infrastructure projects.",
                  client: "Construction Company",
                  role: "Lead Engineer"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-lg backdrop-blur-sm group hover:bg-slate-800/80 transition-colors"
                >
                  <div className="absolute -top-4 -left-2 text-6xl text-cyan-500/20 font-serif group-hover:text-cyan-500/30 transition-colors">"</div>
                  <p className="relative z-10 text-sm leading-relaxed text-slate-300 mb-6 font-medium italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-slate-700/50 pt-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.client.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{testimonial.client}</div>
                      <div className="text-xs text-cyan-400">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ backgroundColor: "#0b111a", border: "1px solid #1e293b", borderRadius: "1.5rem" }}
            className="mt-20 relative overflow-hidden py-16 px-6"
          >
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <h3 style={{ color: "white" }} className="text-2xl md:text-3xl font-bold mb-4">Looking for a Similar Solution?</h3>
              <p style={{ color: "#94a3b8" }} className="text-base md:text-lg mb-10 leading-relaxed max-w-3xl">
                Share your project requirement with Techmapperz. Our team can help you plan the right approach for 
                GIS mapping, drone survey, web development, mobile app development, CRM, or custom software projects.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  style={{ 
                    background: "linear-gradient(to right, #6366f1, #ec4899)", 
                    color: "white", 
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" 
                  }}
                  className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Discuss Your Project
                </a>
                
                <a
                  href="/portfolios"
                  style={{ 
                    backgroundColor: "#1e293b", 
                    border: "1px solid #334155", 
                    color: "white" 
                  }}
                  className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold transition-all hover:bg-slate-800"
                >
                  View All Case Studies
                </a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      <ProjectDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} item={currentProject} />
    </div>
  );
};

export default Casestudies;