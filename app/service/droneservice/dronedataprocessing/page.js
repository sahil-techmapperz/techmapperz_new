import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import { FiImage, FiMap, FiCloud, FiBox, FiLayers, FiRadio } from 'react-icons/fi';

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
    title: "Drone Data Processing Services | UAV Image & LiDAR Processing India",
    description: "Professional drone data processing services converting raw UAV aerial imagery into accurate orthomosaics, 3D models, point clouds, and DEMs.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice/dronedataprocessing`,
    },
};

const introData = {
    imageSrc: Drone_ServiceintroImg,
    imageAlt: "Drone Data Processing Services",
    paragraphs: [
        `Drone data processing is a critical component of transforming raw aerial imagery into accurate and actionable geospatial products. Techmapperz provides professional drone data processing services in India, converting UAV-captured data into high-precision outputs that support informed decision-making across multiple industries.`,
        `Using advanced photogrammetry and LiDAR data processing techniques, we process large-scale drone datasets to generate orthomosaics, Digital Elevation Models (DEM), Digital Surface Models (DSM), point clouds, contours, and 3D models. These GIS-ready deliverables are widely used in construction, agriculture, urban planning, infrastructure development, asset management, and environmental monitoring.`
    ],
    services: [
        { text: "Advanced", highlight: "Photogrammetry" },
        { text: "High-Precision", highlight: "LiDAR Processing" },
        { text: "Accurate &", highlight: "Actionable Products" },
        { text: "Fast &", highlight: "Scalable" }
    ],
    backgroundText: "Processing"
};

const servicesList = [
    {
        icon: <FiImage className="text-3xl" />,
        title: "Orthomosaic Generation",
        desc: "We provide high-resolution orthomosaic generation services by processing raw drone imagery using advanced photogrammetry workflows. The geometrically corrected orthophotos deliver true-scale accuracy for GIS applications.",
        tags: ["Photogrammetry", "True-Scale Accuracy"]
    },
    {
        icon: <FiMap className="text-3xl" />,
        title: "Digital Elevation Model (DEM) & (DSM)",
        desc: "Techmapperz generates accurate Digital Elevation Models (DEM) and Digital Surface Models (DSM) from drone survey data. These outputs support terrain analysis, drainage studies, flood modeling, road design, and urban planning.",
        tags: ["Terrain Analysis", "Flood Modeling"]
    },
    {
        icon: <FiCloud className="text-3xl" />,
        title: "Point Cloud Processing",
        desc: "Our drone point cloud processing services transform raw LiDAR or photogrammetric data into dense, classified point clouds. These datasets are essential for topographic mapping, 3D visualization, and volumetric analysis.",
        tags: ["Classified Points", "3D Visualization"]
    },
    {
        icon: <FiBox className="text-3xl" />,
        title: "3D Modeling & Mesh Generation",
        desc: "We create detailed 3D models and mesh surfaces from processed drone data to support construction planning, mining operations, asset documentation, and project visualization. These models provide realistic representations.",
        tags: ["Realistic Models", "Mesh Surfaces"]
    },
    {
        icon: <FiLayers className="text-3xl" />,
        title: "Contour Mapping",
        desc: "Techmapperz delivers precise contour maps derived from processed drone data, suitable for land development, watershed management, mining planning, and civil engineering projects. Our outputs are GIS-ready.",
        tags: ["GIS-Ready", "Civil Engineering"]
    },
    {
        icon: <FiRadio className="text-3xl" />,
        title: "LiDAR Data Processing",
        desc: "Our LiDAR data processing services convert raw laser scan data into accurate point clouds, DEMs, and terrain models. LiDAR processing is ideal for dense vegetation, corridor mapping, and high-precision topographic surveys.",
        tags: ["Laser Scan Data", "High-Precision"]
    }
];

const DroneDataProcessing = () => {
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
                        Professional UAV Processing Solutions
                    </div>
                    
                    <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-bold text-white max-w-[900px] leading-[1.15]">
                        Drone Data <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d5689] to-[#a82123]">
                            Processing Services
                        </span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                        Transforming raw aerial imagery and LiDAR data into actionable geospatial intelligence.
                    </p>
                    
                    <HeroButtons 
                        button1Text="Request Data Processing Quote" 
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
                        <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our Drone Data Processing Services</h2>
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
                title="Ready to Process Your Drone Data?"
                subtitle="Upload your raw UAV data and let our experts deliver high-precision, GIS-ready outputs."
                primaryButtonText="Request Data Processing Quote"
                primaryButtonLink="/contact"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
        </div>
    );
};

export default DroneDataProcessing;