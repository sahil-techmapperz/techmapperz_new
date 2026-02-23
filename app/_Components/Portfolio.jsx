'use client'
import Image from 'next/image'
import Link from 'next/link'
import HoverButton from './ExpandButton'
import { useState, useEffect } from 'react'
import enhancedPortfolioData from '../portfolios/PortfolioData'

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

const legacyProjects = [
    // {
    //     id: 1,
    //     title: "CoCreateLabs",
    //     techStack: "Next.js, TypeScript, MongoDB, Express.js",
    //     description: "First of all, a state-of-the-art web tool, the CoCreate Labs AMC Mentor and Mentee Dashboard, was created to assist with mentorship and teamwork within the CoCreate Labs program. The platform offers an easy and interactive experience for participants to engage with mentors, access resources, and track their progress, with dedicated dashboards for mentors and mentees. The dashboard, which is hosted on Amazon Web Services (AWS), utilizes modern web technologies to provide a dynamic and intuitive user interface.",
    //     mobileDescription: "A state-of-the-art web tool for mentorship and teamwork within the CoCreate Labs program, featuring interactive dashboards for mentors and mentees.",
    //     image: "/Photos/CCL_home_portfolio.webp",
    //     link: "/portfolios/cocreatelabs",
    //     bgColor: "#1e293b"
    // },
    {
        id: 1,
        title: "Manusher Ghorbari",
        techStack: "HTML5, CSS3, JavaScript, Bootstrap, CodeIgniter 4, PHP, MySQL, Apache/Nginx",
        description: "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari guesthouse. Developed with the goal of promoting tourism and offering a seamless experience for site visitors, the website offers specified room listings, an intuitive booking system, and real-time availability updates. Built using PHP, CSS3, and a MySQL database, the website caters to the needs of travelers seeking a tranquil escape and aims to enhance engagement with the Manusher Ghorbari guesthouse.",
        mobileDescription: "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari gu...",
        image: "/Photos/manuser-ghorbaari1.webp",
        link: "/portfolios/manusherghorbari",
        bgColor: "#1e293b"
    },
    {
        id: 2,
        title: "Special Human Rights Commission",
        techStack: "HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, Apache/Nginx",
        description: "First of all, a specialized platform called the Special Human Rights Commission (SHRC) aims to encourage innovation and cooperation among welfare societies. The Web Design was built using the CodeIgniter 4 framework and PHP, SHRC provides a secure environment for members to communicate and engage. By offering features like personalized notifications and two-step OTP verification, the website enhances community engagement while ensuring security.",
        mobileDescription: "A specialized platform for welfare societies with secure communication features and two-step verification for enhanced security.",
        image: "/Photos/SHRC_home_portfolio.webp",
        link: "/portfolios/shrc",
        bgColor: "#1e1e2d"
    },
    {
        id: 3,
        title: "Land-Use  Land -Cover Mapping",
        techStack: "ArcGIS, QGIS, PostGIS, Python, Geographic Information Systems, Drone Mapping",
        description: "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions. By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation.",
        mobileDescription: "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails ident...",
        image: "/Photos/Land_Use_Land_Cover_Mapping.webp",
        link: "/portfolios/landcover_mapping",
        bgColor: "#1e293b",
        // bgColor: "#1a472a",

    }
]

const Portfolio = ({ projects = null, showAll = false }) => {
    // Use enhanced data by default, fallback to legacy if needed
    const displayProjects = projects || (showAll ? enhancedPortfolioData : getFeaturedProjects());
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="py-8">
            <div className="container mx-auto px-4 max-w-[1600px] flex flex-col items-center">
                {/* Modern Header */}
                <div className="text-center mb-12">
                    <h1 className="text-[36px] font-bold text-white mb-4">
                        Some of Our Work
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Discover our latest projects showcasing cutting-edge technology solutions 
                        and innovative approaches across IT and GIS domains.
                    </p>
                </div>

                {/* Modern Portfolio Grid */}
                <div className="grid gap-8 md:gap-12 w-full max-w-7xl">
                    {displayProjects.map((project, index) => (
                        <Link href={project.link} key={project.id || index} className="group">
                            <div className="rounded-2xl border border-gray-600 bg-gray-800 overflow-hidden hover:border-[#00B0FE]/50 hover:shadow-lg hover:shadow-[#00B0FE]/10 transition-all duration-500 group-hover:scale-[1.02]">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                    {/* Content Section */}
                                    <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${
                                                project.category === 'IT' 
                                                    ? 'bg-[#00B0FE]/20 border-[#00B0FE]/30 text-[#00B0FE]' 
                                                    : 'bg-green-500/20 border-green-500/30 text-green-400'
                                            }`}>
                                                {project.category === 'IT' ? '💻' : '🗺️'} {project.category}
                                            </span>
                                            {/* {project.year && (
                                                <span className="inline-flex items-center gap-1 rounded-full border border-gray-600 bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
                                                    📅 {project.year}
                                                </span>
                                            )} */}
                                        </div>

                                        {/* Project Title */}
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#00B0FE] transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
                                            {isMobile ? project.mobileDescription : project.description?.substring(0, 200) + '...'}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-4">
                                            <p className="text-gray-400 text-xs md:text-sm mb-2">
                                                <span className="font-medium text-[#00B0FE]">Technologies:</span>
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack?.split(',').slice(0, 4).map((tech, techIndex) => (
                                                    <span key={techIndex} className="rounded-lg border border-gray-600 bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-600 transition-colors">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                                {project.techStack?.split(',').length > 4 && (
                                                    <span className="rounded-lg border border-[#00B0FE]/30 bg-[#00B0FE]/10 px-3 py-1 text-xs font-medium text-[#00B0FE]">
                                                        +{project.techStack.split(',').length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* View Project Button */}
                                        <div className="flex items-center gap-2 text-[#00B0FE] font-medium group-hover:gap-3 transition-all duration-300">
                                            <span>View Project</span>
                                            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full md:w-2/5 relative aspect-[16/10] md:aspect-[4/3] order-1 md:order-2">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority={index < 2}
                                        />
                                        {/* Overlay Effect */}
                                        <div className="absolute inset-0 bg-[#00B0FE]/0 group-hover:bg-[#00B0FE]/10 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-6">
                        Explore our complete portfolio of {enhancedPortfolioData.length}+ successful projects
                    </p>
                    <Link href="/portfolios">
                        <button className="inline-flex items-center gap-2 rounded-xl bg-[#00B0FE] px-8 py-4 text-base font-medium text-white hover:bg-[#0090d4] hover:shadow-lg hover:shadow-[#00B0FE]/25 transition-all duration-300 transform hover:scale-105">
                            View All Projects
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio



