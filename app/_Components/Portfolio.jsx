'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import enhancedPortfolioData from '../portfolios/PortfolioData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import PremiumButton from './PremiumButton'

gsap.registerPlugin(ScrollTrigger, useGSAP)

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

const Portfolio = ({ projects = null, showAll = false }) => {
    // Use enhanced data by default, fallback to legacy if needed
    const displayProjects = projects || (showAll ? enhancedPortfolioData : getFeaturedProjects());
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef(null)
    const trackRef = useRef(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024) // Apply horizontal scroll only on larger screens
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useGSAP(() => {
        // Header animation
        gsap.fromTo('.portfolio-header', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
              scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top center',
              }
            }
        );

        if (isMobile) {
            // Simple fade up for mobile/tablets
            gsap.utils.toArray('.mobile-fade-up').forEach((elem) => {
                gsap.fromTo(elem, 
                    { opacity: 0, y: 50 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: elem,
                            start: "top bottom-=50",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
            return; // Don't apply horizontal scroll on mobile
        }

        // Horizontal Scroll Animation for Desktop
        const track = trackRef.current;
        const cards = gsap.utils.toArray('.project-card');
        
        // Calculate the total scrollable width
        const getTotalWidth = () => {
            let width = 0;
            cards.forEach(card => width += card.offsetWidth);
            // Add gaps (using 40px/2.5rem based on gap-10 below)
            width += (cards.length - 1) * 40; 
            return width;
        };

        const totalWidth = getTotalWidth();
        const viewportWidth = window.innerWidth;
        
        // Only do horizontal scroll if track is wider than viewport
        if (totalWidth > viewportWidth) {
            gsap.to(track, {
                x: () => -(totalWidth - viewportWidth + 100), // +100 for some right padding
                ease: "none",
                scrollTrigger: {
                    trigger: '.portfolio-wrapper',
                    pin: true,
                    start: "top top", // Pin exactly at the top of the viewport
                    end: () => `+=${totalWidth}`, // Scroll distance equals track width
                    scrub: 1,
                    invalidateOnRefresh: true, // Recalculate on resize
                }
            });

            // Add parallax to images inside the horizontal scroll
            cards.forEach(card => {
                const img = card.querySelector('.parallax-img');
                if(img) {
                    gsap.to(img, {
                        x: 50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: '.portfolio-wrapper',
                            start: "top top",
                            end: () => `+=${totalWidth}`,
                            scrub: 1,
                        }
                    });
                }
            });
        } else {
            // Fallback fade up if not enough cards
             cards.forEach((card) => {
                gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: card, start: "top bottom-=100" } });
            });
        }

    }, { scope: containerRef, dependencies: [isMobile, displayProjects.length] });

    return (
        <section ref={containerRef} className="relative py-10 bg-[#020617] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,107,171,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(210,41,43,0.05),transparent_50%)]"></div>

            {/* Wrapper to pin both header and track */}
            <div className={`portfolio-wrapper w-full relative z-10 ${!isMobile ? 'h-screen flex flex-col justify-center' : ''}`}>
                <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] flex flex-col items-center">
                    {/* Modern Header */}
                    <div className="portfolio-header text-center mb-6 space-y-3 opacity-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#376bab] to-[#d2292b]"></span>
                            <span className="text-sm font-medium tracking-wide text-gray-300">FEATURED PROJECTS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            Some of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Work</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            Discover how we leverage cutting-edge technology and GIS solutions to solve complex challenges.
                        </p>
                    </div>
                </div>

                {/* Horizontal Scroll Section */}
                <div className={`w-full relative ${!isMobile ? 'horizontal-scroll-section flex items-center overflow-hidden h-[75vh] max-h-[800px]' : ''}`}>
                <div 
                    ref={trackRef}
                    className={`${isMobile ? 'container mx-auto px-6 lg:px-12 max-w-[1400px] flex flex-col gap-10' : 'flex gap-10 pl-[5vw]'}`}
                >
                    {displayProjects.map((project, index) => (
                        <div
                            key={project.id || index}
                            className={`project-card mobile-fade-up ${!isMobile ? 'w-[85vw] max-w-[1200px] flex-shrink-0 opacity-100' : 'w-full max-w-[500px] mx-auto opacity-0'}`}
                        >
                            <Link href={project.link} className="group block relative w-full rounded-[2.5rem] p-1 overflow-hidden shadow-2xl h-full">
                                {/* Animated border gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 group-hover:from-[#376bab] group-hover:via-[#ff4747] group-hover:to-[#376bab] opacity-50 transition-colors duration-700"></div>

                                <div className="relative h-full flex flex-col md:flex-row items-center bg-[#0a0f1a] backdrop-blur-xl rounded-[2.4rem] overflow-hidden">

                                    {/* Content Section */}
                                    <div className={`w-full md:w-[45%] p-6 lg:p-10 flex flex-col justify-center ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>

                                        {/* Category Badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide ${project.category === 'IT'
                                                    ? 'bg-[#376bab]/10 border-[#376bab]/30 text-[#4a8cd4]'
                                                    : 'bg-[#d2292b]/10 border-[#d2292b]/30 text-[#ff4747]'
                                                }`}>
                                                <FiFolder className={project.category === 'IT' ? 'text-[#4a8cd4]' : 'text-[#ff4747]'} />
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Project Title */}
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4a8cd4] group-hover:to-[#ff4747] transition-all duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed font-light">
                                            {isMobile ? project.mobileDescription : project.description?.substring(0, 180) + '...'}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <p className="text-gray-500 text-sm font-medium mb-3 tracking-wide uppercase">Technologies Used</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack?.split(',').slice(0, 4).map((tech, techIndex) => (
                                                    <span key={techIndex} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 group-hover:border-white/10 transition-colors">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                                {project.techStack?.split(',').length > 4 && (
                                                    <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                                                        +{project.techStack.split(',').length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* View Project Link Configured like a button */}
                                        <div className="inline-flex items-center gap-3 text-white font-medium group-hover:text-[#4a8cd4] transition-colors duration-300 mt-2">
                                            <span>View Case Study</span>
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#4a8cd4]/10 group-hover:border-[#4a8cd4]/50 group-hover:translate-x-1 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                                <FiExternalLink />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section - With beautiful glass morphism overlay effect on hover */}
                                    <div className={`w-full md:w-[55%] relative aspect-[16/10] lg:aspect-auto md:h-full overflow-hidden ${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                                        <div className="absolute inset-0 bg-[#020617]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>

                                        <div className="absolute inset-0 flex items-center justify-center w-[120%] -left-[10%] parallax-img">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain transition-transform duration-1000 group-hover:scale-105"
                                                priority={index < 2}
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                            />
                                        </div>

                                        {/* Premium color overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#376bab]/40 to-[#d2292b]/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            </div>

            {/* Enhanced Call-To-Action to view all portfolios */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 flex flex-col items-center">
                <div className="portfolio-header mt-24 text-center opacity-0">
                    <p className="text-gray-400 mb-8 text-lg font-light">
                        Explore our complete portfolio of {enhancedPortfolioData.length}+ successful projects
                    </p>
                    <PremiumButton 
                        href="/portfolios" 
                        text="View Entire Portfolio" 
                        variant="primary" 
                        gradient={true}
                        icon={FiExternalLink} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Portfolio
