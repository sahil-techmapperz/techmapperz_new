import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import { FiMap, FiCamera, FiBox, FiLayers, FiTrendingUp, FiDatabase } from 'react-icons/fi';

import Drone_ServiceintroImg from "@/public/gis_images/Drone_ServiceintroImg.webp";

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const CTABanner = dynamic(() => import('@/app/_Components/CTABanner'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 7200;

export const metadata = {
    title: "Drone Survey & Mapping Services | High-Accuracy UAV Mapping India",
    description: "High-precision drone survey and mapping services using advanced UAV & GIS technology. Reliable solutions for government & enterprise projects across India.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice/dronesurveyandmapping`,
    },
};

const introData = {
    imageSrc: Drone_ServiceintroImg,
    imageAlt: "Drone Survey & Mapping Services",
    paragraphs: [
        `Techmapperz is a leading drone survey and mapping company in India, utilizing advanced UAV technology and strong GIS expertise to deliver high-precision, detailed, and reliable mapping solutions. Our drone survey services support the generation of accurate geospatial data for environmental monitoring, land management, infrastructure planning, asset management, and energy & telecommunication projects.`,
        `Techmapperz’s drone-based survey solutions act as an efficient alternative to conventional land surveying methods, which are often time-consuming, costly, and limited by accessibility. Our drone survey and mapping services are faster, cost-effective, and scalable, enabling timely project execution while maintaining the highest standards of accuracy and quality for a wide range of clients across India.`
    ],
    services: [
        { text: "Advanced UAV", highlight: "Technology" },
        { text: "High-Precision", highlight: "Geospatial Data" },
        { text: "Efficient", highlight: "Alternative to Land Survey" },
        { text: "Fast &", highlight: "Cost-Effective" }
    ],
    backgroundText: "Mapping"
};

const servicesList = [
    {
        icon: <FiMap className="text-3xl" />,
        title: "Topographic Mapping",
        desc: "Techmapperz provides high-accuracy drone-based topographic mapping services that capture elevation changes, terrain features, and land contours with precision. Our drone survey and mapping services support urban planning, civil engineering, infrastructure development, and land management.",
        tags: ["Urban Planning", "Civil Engineering"]
    },
    {
        icon: <FiCamera className="text-3xl" />,
        title: "Orthophoto Generation",
        desc: "We generate high-resolution orthophotos through advanced drone mapping and geometric correction techniques, ensuring true-scale imagery free from distortions caused by terrain variation or camera tilt.",
        tags: ["High-Resolution", "Distortion-Free"]
    },
    {
        icon: <FiBox className="text-3xl" />,
        title: "3D Terrain & Surface Modelling",
        desc: "Using high-quality drone survey data, we create detailed 3D terrain models, DSMs, and surface representations for infrastructure, mining, and environmental studies. These models support drainage analysis and feasibility assessment.",
        tags: ["3D Models", "Mining & Environment"]
    },
    {
        icon: <FiLayers className="text-3xl" />,
        title: "Digital Elevation Models (DEM) & Contour Mapping",
        desc: "Our drone survey and data processing services deliver accurate Digital Elevation Models (DEM) and contour maps essential for flood modeling, watershed analysis, road design, and land development projects. The outputs are GIS-ready.",
        tags: ["Flood Modeling", "Road Design"]
    },
    {
        icon: <FiTrendingUp className="text-3xl" />,
        title: "Corridor Mapping for Linear Infrastructure",
        desc: "Techmapperz offers drone corridor mapping services for linear infrastructure projects such as roads, railways, pipelines, transmission lines, and canals. High-resolution aerial data supports route alignment and environmental impact assessment.",
        tags: ["Railways & Roads", "Pipelines"]
    },
    {
        icon: <FiDatabase className="text-3xl" />,
        title: "GIS-Ready Drone Data & Deliverables",
        desc: "All drone survey outputs are delivered in GIS-compatible formats, enabling seamless integration with existing systems for spatial analysis, asset management, and decision support across government and enterprise projects.",
        tags: ["GIS Integration", "Asset Management"]
    }
];

const DroneSurveyMapping = () => {
    return (
        <div className="bg-black text-white relative">
            <ScrollToTop />
            
            {/* ── HERO ── */}
            <section 
                className="w-full min-h-[100vh] flex items-center relative bg-cover bg-center bg-no-repeat pt-20" 
                style={{ backgroundImage: `url('/Drone_Service/Drone_Service.png')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
                    <div className="w-fit border border-[#4a5f82] bg-[#2a3c5a]/40 backdrop-blur-sm text-[#799ccc] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Drone Survey & Mapping Services in India
                    </div>
                    
                    <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-bold text-white max-w-[900px] leading-[1.15]">
                        Drone Survey & <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d5689] to-[#a82123]">
                            Mapping Services
                        </span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                        High-precision drone survey and mapping services using advanced UAV & GIS technology.
                    </p>
                    
                    <HeroButtons 
                        button1Text="Request a Drone Survey Quote" 
                        button1Link="/contact"
                    />
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="bg-black px-20 max-sm:px-4 py-10">
                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />
            </section>

            {/* ── SERVICES GRID ── */}
            <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-10" />
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-14">
                        <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Expertise</span>
                        <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our Drone Survey & Mapping Services</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesList.map((feature, i) => (
                            <div key={i} className="group relative bg-gray-900/60 border border-white/5 rounded-3xl p-8 hover:border-[#a82123]/30 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a82123] rounded-full filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#2d5689]/30 to-[#a82123]/20 border border-white/10 rounded-2xl flex items-center justify-center text-[#a82123] mb-5 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a82123] transition-colors duration-300">{feature.title}</h3>
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

            {/* ── CTA BANNER ── */}
            <CTABanner 
                title="Ready to Start Your Drone Survey Project?"
                subtitle="Contact us today for high-accuracy UAV surveys and mapping tailored to your business needs."
                primaryButtonText="Request a Drone Survey Quote"
                primaryButtonLink="/contact"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
        </div>
    );
};

export default DroneSurveyMapping;