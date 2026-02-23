"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/app/_Components/ScrollToTop";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Rocket,
  ArrowUpRight,
  Building2,
  Gauge,
  BarChart3,
  Layers,
  Star,
  Zap
} from "lucide-react";

function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-800 border-gray-600 text-gray-300",
    primary: "bg-[#00B0FE]/20 border-[#00B0FE]/30 text-[#00B0FE]",
    success: "bg-green-500/20 border-green-500/30 text-green-400"
  };
  
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

function Metric({ icon, label, value, description }) {
  return (
    <div className="rounded-2xl border border-gray-600 bg-gray-800 p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-10 items-center justify-center rounded-xl border border-gray-600 bg-gray-700 text-[#00B0FE]">
          {icon}
        </div>
        <div>
          <div className="text-lg font-bold text-white">{value}</div>
          <div className="text-xs text-gray-400">{label}</div>
        </div>
      </div>
      {description && <p className="text-sm text-gray-300">{description}</p>}
    </div>
  );
}

function Section({ icon, title, children, background = false }) {
  return (
    <section className={`py-12 lg:py-16 ${background ? 'bg-gray-800/50' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-gray-600 bg-gray-800 text-[#00B0FE]">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function PortfolioDetailTemplate({ 
  portfolioItem,
  projectSlug = null
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || !portfolioItem) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Extract data from portfolioItem (dynamic data structure)
  const techStackArray = portfolioItem.techStack ? portfolioItem.techStack.split(',').map(tech => tech.trim()) : [];
  
  // Handle different data structures for GIS vs IT portfolios
  const challenges = portfolioItem.category === "GIS" 
    ? (portfolioItem.objectives || []) 
    : (portfolioItem.challenges || []);
  const solutions = portfolioItem.solutions || [];
  const results = portfolioItem.category === "GIS" 
    ? (portfolioItem.benefits || []) 
    : (portfolioItem.results || []);
  const conclusion = portfolioItem.conclusion || "";
  const projectDetails = portfolioItem.projectDetails || {};
  const testimonial = portfolioItem.testimonial || null;

  return (
    <div className="min-h-screen bg-gray-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('/Photos/Rectangle41.webp')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00B0FE]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Badge Section */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00B0FE]/30 bg-[#00B0FE]/10 px-4 py-2 text-sm text-[#00B0FE]">
                  <Rocket className="h-4 w-4" /> Portfolio Showcase
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary">
                    <Building2 className="h-4 w-4" />
                    {portfolioItem.category} Project
                  </Badge>
                  {/* <Badge>
                    <Calendar className="h-4 w-4" />
                    {projectDetails.year || "2024"}
                  </Badge>
                  <Badge>
                    <MapPin className="h-4 w-4" />
                    {projectDetails.location || "India"}
                  </Badge> */}
                  {/* {projectDetails.duration && (
                    <Badge>
                      <Gauge className="h-4 w-4" />
                      {projectDetails.duration}
                    </Badge>
                  )} */}
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-white lg:text-[3.5rem] xl:text-[3.5rem]">
                  {portfolioItem.name}
                  <span className="block text-2xl lg:text-2xl xl:text-2xl font-normal text-gray-400 mt-2">
                    {projectDetails.industry ? `${projectDetails.industry} Solution` : 'Digital Innovation'}
                  </span>
                </h1>
                <p className="text-lg text-gray-300 lg:text-xl leading-relaxed max-w-2xl">
                  {Array.isArray(portfolioItem.details) ? portfolioItem.details[0] : portfolioItem.details}
                </p>
              </div>



              {/* Technology Stack Preview */}
              <div className="space-y-4">
                {/* <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Technology Stack</h3> */}
                <div className="flex flex-wrap gap-2">
                  {techStackArray.slice(0, 4).map((tech, index) => (
                    <div key={index} className="rounded-xl border border-gray-600 bg-gray-800/70 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300">
                      {tech}
                    </div>
                  ))}
                  {techStackArray.length > 4 && (
                    <div className="rounded-xl border border-[#00B0FE]/30 bg-[#00B0FE]/10 px-3 py-2 text-sm font-medium text-[#00B0FE]">
                      +{techStackArray.length - 4} more
                    </div>
                  )}
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                {portfolioItem.link && portfolioItem.link !== "#" && (
                  <Link
                    href={'/portfolios'}
                    className="group inline-flex items-center gap-3 rounded-xl bg-[#00B0FE] px-8 py-4 text-base font-medium text-white hover:bg-[#0090d4] hover:shadow-lg hover:shadow-[#00B0FE]/25 transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects 
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl border border-gray-600 bg-gray-800/80 backdrop-blur-sm px-8 py-4 text-base font-medium text-white hover:bg-gray-700 hover:border-[#00B0FE]/50 transition-all duration-300"
                >
                  Start Similar Project 
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative  lg:order-last">
              {/* Main project image */}
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-gray-600 bg-gray-800 shadow-2xl">
                  <Image
                    src={portfolioItem.image}
                    alt={portfolioItem.name}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Floating info card */}
                <div className="absolute -bottom-6 -right-6 rounded-2xl border border-gray-600 bg-gray-800/95 backdrop-blur-sm p-6 shadow-xl">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-300">Live Project</span>
                    </div>
                    {/* <p className="text-xs text-gray-400">
                      {projectDetails.teamSize ? `Team: ${projectDetails.teamSize}` : 'Professional Team'}
                    </p> */}
                    <p className="text-xs text-gray-400">
                      {projectDetails.industry || 'Enterprise Solution'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 size-24 rounded-full border border-[#00B0FE]/20 bg-[#00B0FE]/5"></div>
              <div className="absolute -bottom-8 -left-8 size-32 rounded-full border border-purple-500/20 bg-purple-500/5"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="rounded-full border border-gray-600 bg-gray-800/80 p-2">
              <ArrowUpRight className="h-4 w-4 text-gray-400 rotate-90" />
            </div>
          </div>
        </div>
      </header>

      {/* Challenges/Objectives Section */}
      {challenges.length > 0 && (
        <Section 
          icon={<Target size={24} />} 
          title={portfolioItem.category === "GIS" ? "Objectives" : "Challenges"} 
          background
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <div key={index} className="rounded-2xl border border-gray-600 bg-gray-800 p-6">
                <h3 className="mb-3 text-lg font-semibold text-white">{challenge.title}</h3>
                <p className="text-gray-300">{challenge.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Solutions Section */}
      {solutions.length > 0 && (
        <Section icon={<Lightbulb size={24} />} title="Our Solutions">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  <p className="text-gray-300">{solution.description}</p>
                  {solution.features && (
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {solution.image && (
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Results/Benefits Section */}
      {results.length > 0 && (
        <Section 
          icon={<TrendingUp size={24} />} 
          title={portfolioItem.category === "GIS" ? "Benefits" : "Results & Impact"} 
          background
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => (
              <Metric
                key={index}
                icon={result.icon || <BarChart3 size={20} />}
                label={result.label}
                value={result.value}
                description={result.description}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Technology Deep Dive */}
      {portfolioItem.category !== "GIS" && (
        <Section icon={<Rocket size={24} />} title="Technology Stack">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStackArray.map((tech, index) => (
              <div key={index} className="rounded-2xl border border-gray-600 bg-gray-800 p-4 text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-[#00B0FE]/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#00B0FE]">{tech.charAt(0)}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Conclusion */}
      {conclusion && portfolioItem.category !== "GIS" && (
        <Section icon={<Award size={24} />} title="Project Conclusion" background>
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-600 bg-gray-800 p-8 text-center">
            <p className="text-lg text-gray-300">{conclusion}</p>
          </div>
        </Section>
      )}


     

      {/* Call to Action */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-2xl border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700 p-8 text-center lg:p-12">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-gray-300 lg:text-lg">
              Let's discuss how we can create a similar solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00B0FE] px-6 py-3 text-sm font-medium text-white hover:bg-[#0090d4] transition-colors lg:px-8 lg:py-4 lg:text-base"
              >
                Get Started <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolios"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 transition-colors lg:px-8 lg:py-4 lg:text-base"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}