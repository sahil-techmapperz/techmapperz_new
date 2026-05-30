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
    title: "Drone Survey & Mapping Services | High-Accuracy UAV Mapping India",
    description: "High-precision drone survey and mapping services using advanced UAV & GIS technology. Reliable solutions for government & enterprise projects across India.",
    alternates: {
        canonical: `${BASE_URL}/service/drone-services/drone-survey-and-mapping`,
    },
};

const DroneSurveyandMapping = () => {
    const bannerData = {
        title: "Drone Survey & Mapping Services",
        subtitle: "Drone Survey & Mapping Services in India",
        description: "",
        buttonText: "Request a Drone Survey Quote",
        imageSrc: "/gis_images/Drone_Survey_and_Mapping_Banner.webp", // Updated to the original page's banner
        imageAlt: "Drone Survey and Mapping"
    };

    const introData = {
        imageSrc: "/gis_images/Drone_Survey_and_Mapping_Banner.webp",
        imageAlt: "Drone Survey and Mapping",
        paragraphs: [
            "Techmapperz is a leading drone survey and mapping company in India, utilizing advanced UAV technology and strong GIS expertise to deliver high-precision, detailed, and reliable mapping solutions.",
            "Our drone survey services support the generation of accurate geospatial data for environmental monitoring, land management, infrastructure planning, asset management, and energy & telecommunication projects. Techmapperz’s drone-based survey solutions act as an efficient alternative to conventional land surveying methods, which are often time-consuming, costly, and limited by accessibility. Our drone survey and mapping services are faster, cost-effective, and scalable, enabling timely project execution while maintaining the highest standards of accuracy and quality for a wide range of clients across India."
        ],
        services: [
            { text: "Advanced UAV technology for", highlight: "Detailed Mapping Solutions" },
            { text: "Faster, cost-effective, and", highlight: "Scalable Surveying" },
            { text: "Accurate geospatial data for", highlight: "Infrastructure Planning" },
        ],
        backgroundText: "Survey Mapping"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Topographic Mapping",
            icon: "/gis_images/drone_services/drone_surveying_mapping/Topographic_map.webp",
            description: "Techmapperz provides high-accuracy drone-based topographic mapping services that capture elevation changes, terrain features, and land contours with precision. Our drone survey and mapping services support urban planning, civil engineering, infrastructure development, and land management, enabling informed decision-making and reliable project execution."
        },
        {
            id: 2,
            title: "Orthophoto Generation",
            icon: "/gis_images/drone_services/drone_surveying_mapping/ortrhophoto_generation.webp",
            description: "We generate high-resolution orthophotos through advanced drone mapping and geometric correction techniques, ensuring true-scale imagery free from distortions caused by terrain variation or camera tilt. These orthophotos are widely used for land surveys, agricultural planning, asset inspection, environmental monitoring, and GIS analysis."
        },
        {
            id: 3,
            title: "3D Terrain & Surface Modelling",
            icon: "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp",
            description: "Using high-quality drone survey data, we create detailed 3D terrain models, DSMs, and surface representations for infrastructure, mining, and environmental studies. These models support drainage analysis, feasibility assessment, slope evaluation, vegetation analysis, and land-use optimization, reducing project risks and improving planning accuracy."
        },
        {
            id: 4,
            title: "Digital Elevation Models (DEM) & Contour Mapping",
            icon: "/gis_images/drone_services/drone_surveying_mapping/DEM.png",
            description: "Our drone survey and data processing services deliver accurate Digital Elevation Models (DEM) and contour maps essential for flood modeling, watershed analysis, road design, and land development projects. The outputs are GIS-ready and compliant with industry standards."
        },
        {
            id: 5,
            title: "Corridor Mapping for Linear Infrastructure",
            icon: "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp",
            description: "Techmapperz offers drone corridor mapping services for linear infrastructure projects such as roads, railways, pipelines, transmission lines, and canals. High-resolution aerial data supports route alignment, environmental impact assessment, construction planning, and regulatory compliance, ensuring smooth project execution."
        },
        {
            id: 6,
            title: "GIS-Ready Drone Data & Deliverables",
            icon: "/gis_images/drone_services/drone_surveying_mapping/GIS-Ready Drone Data & Deliverables.png",
            description: "All drone survey outputs are delivered in GIS-compatible formats, enabling seamless integration with existing systems for spatial analysis, asset management, and decision support across government and enterprise projects."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'Drone Services', url: `${BASE_URL}/service/drone-services` },
                { name: 'Survey and Mapping', url: `${BASE_URL}/service/drone-services/drone-survey-and-mapping` }
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
                    title="Our Drone Survey & Mapping Services"
                    description="We deliver essential data from construction sites to expansive environmental surveys with total safety."
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
                            Our Drone Survey & Mapping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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

export default DroneSurveyandMapping;