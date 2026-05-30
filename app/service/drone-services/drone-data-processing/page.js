import React from 'react';
import dynamicImport from 'next/dynamic';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import Link from 'next/link';

// Critical above-the-fold components
const WebsiteBanner = dynamicImport(() => import('@/app/_Components/PremiumWebsiteBanner'), {
    ssr: true,
    ...createOptimizedLoader("500px", "bg-[#020617]")
});

const WebsiteIntroduction = dynamicImport(() => import('@/app/_Components/PremiumWebsiteIntroduction'), {
    ssr: true,
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

// Below-the-fold components - lazy load
const PremiumServiceDetails = dynamicImport(() => import('@/app/_Components/PremiumServiceDetails'), {
    ...createOptimizedLoader("600px", "bg-[#050B14]")
});

const ServiceCaseStudy = dynamicImport(() => import('@/app/_Components/ServiceCaseStudy'), {
    ...createOptimizedLoader("400px", "bg-[#0a0f1c]")
});

const PremiumBottomBanner = dynamicImport(() => import('@/app/_Components/PremiumBottomBanner'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const metadata = {
    title: "Transforming Aerial Imagery into Actionable Geospatial Products | Techmapperz",
    description: "We capture large scale data using drone, harnessing LiDAR technology to deliver various outputs including high-precision maps and 3D models, as well as analytical outputs.",
    alternates: {
        canonical: `${BASE_URL}/service/drone-services/drone-data-processing`,
    },
};

const Dronedataprocessing = () => {
    const bannerData = {
        title: "Drone Data Processing Services",
        subtitle: "Professional Drone Data Processing Services in India",
        description: "",
        buttonText: "Request Data Processing Quote",
        imageSrc: "/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp",
        imageAlt: "Drone Data Processing"
    };

    const introData = {
        imageSrc: "/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp",
        imageAlt: "Drone Data Processing",
        paragraphs: [
            "Drone data processing is a critical component of transforming raw aerial imagery into accurate and actionable geospatial products. Techmapperz provides professional drone data processing services in India, converting UAV-captured data into high-precision outputs that support informed decision-making across multiple industries.",
            "Using advanced photogrammetry and LiDAR data processing techniques, we process large-scale drone datasets to generate orthomosaics, Digital Elevation Models (DEM), Digital Surface Models (DSM), point clouds, contours, and 3D models. These GIS-ready deliverables are widely used in construction, agriculture, urban planning, infrastructure development, asset management, and environmental monitoring."
        ],
        services: [
            { text: "Accurate and actionable", highlight: "Geospatial Products" },
            { text: "Advanced photogrammetry and", highlight: "LiDAR Processing" },
            { text: "Deliver high-precision GIS-ready", highlight: "Deliverables" },
        ],
        backgroundText: "Drone Data"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Image Stitching Orthomosaic Generation",
            icon: "/gis_images/drone_services/drone_data_processing/orthomosaic.webp",
            description: "We stitch images together to create high resolution, georeferenced orthomosaic maps. Such maps render the surveyed area accurately without distortion and can be used for land surveying, infrastructure planning, environmental monitoring, and many other applications."
        },
        {
            id: 2,
            title: "Point Cloud Processing",
            icon: "/gis_images/drone_services/drone_data_processing/point_cloud.webp",
            description: "LiDAR point cloud data processing ranges from raw to dense point cloud. Such datasets provide a comprehensive understanding of terrain and structuresand may be used for volume computations, burial studies, and digital twin modeling."
        },
        {
            id: 3,
            title: "Digital Surface Model (DSM)",
            icon: "/gis_images/drone_services/drone_data_processing/DSM.webp",
            description: "DSM shows the Earth's surface, including buildings, vegetation and other structures. This data is valuable for line-of-sight calculations, urban planning and flood risk, providing a detailed topographical view."
        },
        {
            id: 4,
            title: "Digital Elevation Model (DEM)",
            icon: "/gis_images/drone_services/drone_data_processing/DEM.webp",
            description: "We produce high-accuracy digital elevation models (DEMs) of terrain on the earth’s surface. Digital Elevation Models are utilized for various applications, including hydrological modeling, cost-sharing, development projects, and infrastructure design."
        },
        {
            id: 5,
            title: "Contour Mapping",
            icon: "/gis_images/drone_services/drone_data_processing/contour.webp",
            description: "We create contour maps to pinpoint different elevation levels and the morphology of terrain in detail. These maps are critical for engineering, mining and agriculture, allowing professionals to plan excavation, drainage and land use projects."
        },
        {
            id: 6,
            title: "3D Mesh Modeling",
            icon: "/gis_images/drone_services/drone_data_processing/3d_mesh_modelling.webp",
            description: "We are Drone Data Providers who provides and generates highly detailed 3D mesh models extracted from drone data, a feature-rich output gaining popularity in several applications and industries. These models are popular in virtual reality applications, for monitoring construction progress, and for asset inspections."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'Drone Services', url: `${BASE_URL}/service/drone-services` },
                { name: 'Drone Data Processing', url: `${BASE_URL}/service/drone-services/drone-data-processing` }
            ]} />
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full overflow-hidden">
                <WebsiteIntroduction
                    backgroundText={introData.backgroundText}
                    services={introData.services}
                    paragraphs={introData.paragraphs}
                    imageAlt={introData.imageAlt}
                    imageSrc={introData.imageSrc}
                />

                <PremiumServiceDetails
                    title="Our Drone Data Processing Services"
                    description="We deliver various outputs including high-precision maps and 3D models."
                    services={ourServicesData}
                />

                <div className="py-20 relative bg-[#0a0f1c] overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>
                    <div className="max-w-[1600px] m-auto relative z-10 text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold tracking-wide text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            PROVEN SUCCESS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
                            Our Drone Data Processing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-2 md:pt-4 mb-8">
                            See how we transformed operations, improved decision-making, and accelerated growth with geospatial insights.
                        </p>
                    </div>

                    <ServiceCaseStudy type="GIS" />
                </div>

                <PremiumBottomBanner />
            </section>
        </div>
    );
}

export default Dronedataprocessing;