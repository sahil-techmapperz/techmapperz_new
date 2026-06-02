'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import enhancedPortfolioData from '../portfolios/PortfolioData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Get featured projects from enhanced data (first 3 projects for home page)
const getFeaturedProjects = () => {
  return enhancedPortfolioData.slice(0, 3).map((item, index) => {
    const slug = item.slug || item.link?.replace('/portfolios/', '') || 
                item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    return {
      id: index + 1,
      title: item.name,
      category: item.category,
      techStack: item.techStack,
      description: Array.isArray(item.details) ? item.details[0] : item.details,
      mobileDescription: (Array.isArray(item.details) ? item.details[0] : item.details)?.substring(0, 120) + '...',
      image: item.image,
      link: `/portfolios/${slug}`,
      bgColor: item.category === 'IT' ? '#1e293b' : '#1a472a',
      year: item.projectDetails?.year || '2024',
      industry: item.projectDetails?.industry || 'Technology'
    };
  });
};

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = ({ projects = null, showAll = false }) => {
    // Use enhanced data by default, fallback to legacy if needed
    const displayProjects = projects || (showAll ? enhancedPortfolioData : getFeaturedProjects());
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined' || !containerRef.current) return;

        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.portfolio-card');
            
            cards.forEach((card, i) => {
                // Determine direction based on odd/even for a slight slide-in effect
                const xOffset = i % 2 === 0 ? -50 : 50;

                gsap.fromTo(card, 
                    { 
                        opacity: 0, 
                        y: 80,
                        x: xOffset,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%", // Starts animating when the top of the card hits 85% down the viewport
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [displayProjects]);

    return (
        <section className="py-20 relative overflow-hidden bg-black" ref={containerRef}>
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2d5689] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px] flex flex-col items-center relative z-10">
                {/* Modern Header */}
                <div className="text-center mb-20">
                    <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Some of Our Work
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover our latest projects showcasing cutting-edge technology solutions 
                        and innovative approaches across IT and Geospatial domains.
                    </p>
                </div>

                {/* Modern Portfolio Grid */}
                <div className="grid gap-12 w-full max-w-7xl">
                    {displayProjects.map((project, index) => (
                        <Link href={project.link || '#'} key={project.id || index} className="group portfolio-card block outline-none">
                            <div className="relative rounded-3xl border border-white/5 bg-gray-900/60 backdrop-blur-sm overflow-hidden hover:border-[#2d5689]/40 hover:shadow-2xl hover:shadow-[#2d5689]/20 transition-all duration-500">
                                
                                {/* Inner Glow on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-[#2d5689]/20 to-[#a82123]/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl pointer-events-none"></div>

                                <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch min-h-[400px]`}>
                                    
                                    {/* Content Section */}
                                    <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                        
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:border-[#2d5689]/50 group-hover:text-[#799ccc] transition-colors duration-300">
                                                {project.category === 'IT' ? '💻' : '🗺️'} {project.category}
                                            </span>
                                        </div>

                                        {/* Project Title */}
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {isMobile ? project.mobileDescription : project.description?.substring(0, 250) + '...'}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-8">
                                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                                                Technologies Used
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack?.split(',').slice(0, 4).map((tech, techIndex) => (
                                                    <span key={techIndex} className="rounded-md border border-white/5 bg-gray-800/50 px-3 py-1.5 text-xs font-medium text-gray-300 group-hover:bg-gray-800 group-hover:border-white/10 transition-colors">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                                {project.techStack?.split(',').length > 4 && (
                                                    <span className="rounded-md border border-[#2d5689]/30 bg-[#2d5689]/10 px-3 py-1.5 text-xs font-medium text-[#799ccc]">
                                                        +{project.techStack.split(',').length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* View Project Link */}
                                        <div className="mt-auto">
                                            <div className="inline-flex items-center gap-2 text-[#799ccc] font-bold text-sm uppercase tracking-wider group-hover:text-[#a82123] transition-colors duration-300">
                                                <span>View Case Study</span>
                                                <svg className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/80 via-gray-900/20 to-transparent z-10 pointer-events-none"></div>
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top md:object-center group-hover:scale-[1.03] group-hover:rotate-1 transition-transform duration-[1.5s] ease-out"
                                                priority={index === 0}
                                            />
                                        )}
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-[#2d5689]/0 group-hover:bg-[#2d5689]/10 transition-all duration-500 z-20 pointer-events-none"></div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="mt-20 text-center portfolio-card">
                    <p className="text-gray-400 mb-6 text-lg">
                        Explore our complete portfolio of successful projects
                    </p>
                    <Link href="/portfolios">
                        <button className="relative inline-flex items-center gap-3 rounded-full bg-gray-900 border border-white/10 px-8 py-4 text-base font-bold text-white hover:bg-gray-800 hover:border-[#2d5689]/50 transition-all duration-300 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2d5689] to-[#a82123] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <span className="relative z-10">View All Projects</span>
                            <svg className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
