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
    ...createOptimizedLoader("400px", "bg-black")
});

const PremiumBottomBanner = dynamicImport(() => import('@/app/_Components/PremiumBottomBanner'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const metadata = {
    title: "Advance Land Survey Mapping| LiDAR and Drone| Techmapperz | India",
    description: "Trust Techmapperz for precision GIS surveying services. We offer accurate spatial data collecting tailored to urban planning, infrastructure development, and environment-related initiatives.",
    alternates: {
        canonical: `${BASE_URL}/service/gis-services/gis-surveying`,
    },
};

const Gismapping = () => {
    const bannerData = {
        title: "GIS Surveying",
        subtitle: "Precision GIS Surveying Services",
        description: "",
        buttonText: "Request A Free Quote",
        imageSrc: "/gis_images/GIS_Survey_page_Banner.webp",
        imageAlt: "GIS Surveying Services"
    };

    const introData = {
        imageSrc: "/gis_images/GIS_Survey_page_Banner.webp",
        imageAlt: "GIS Surveying",
        paragraphs: [
            "Reliable and accurate mapping can be done with the help of GIS Surveying Services, as it integrates modern surveying techniques with geographic data collection.",
            "Through geospatial surveying, we provide structured spatial data across sectors such as environmental monitoring, urban planning, infrastructure development, and land management. By integrating aerial survey services, remote sensing, drone surveying services, DGPS survey techniques, and GPS-based spatial data collection, our GIS Surveying approach ensures high-accuracy outputs for large-scale and site-specific projects."
        ],
        services: [
            { text: "Reliable and accurate", highlight: "Mapping Solutions" },
            { text: "GPS-based spatial", highlight: "Data Collection" },
            { text: "Integration of Aerial Mapping,", highlight: "Remote Sensing and DGPS" },
        ],
        backgroundText: "Surveying"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Land Surveying",
            icon: "/gis_images/gis_services/GIS_surveying/land surveying.webp",
            description: "Our Land Survey Services are designed to capture accurate site characteristics, boundary determination, and elevation data. These surveys support construction planning, property boundary verification, land development, and topographic survey requirements. We provide reliable construction surveying and contour mapping solutions for site design and infrastructure planning, ensuring accurate spatial data for informed decision-making."
        },
        {
            id: 2,
            title: "Geodetic Surveying",
            icon: "/gis_images/gis_services/GIS_surveying/geodatic.webp",
            description: "For large-scale infrastructure projects, Geodetic Survey Services provide precise measurements over vast geographical areas. This service is particularly suitable for highways, pipelines, power grids, and corridor mapping projects. Through the establishment of a structured control survey network and DGPS control survey methods, we ensure accurate geodetic measurements that support large-scale mapping and infrastructure alignment surveys."
        },
        {
            id: 3,
            title: "LiDAR Surveying",
            icon: "/gis_images/gis_services/GIS_surveying/lidar.webp",
            description: "Our LiDAR Survey Services utilise advanced LiDAR mapping technology to capture detailed 3D terrain data, providing highly accurate representations of the Earth’s surface. These high-resolution terrain surveys support applications such as flood mapping, environmental studies, elevation modelling, and infrastructure development. UAV LiDAR survey solutions are especially effective in vast, remote, or inaccessible areas where traditional survey methods are time-consuming and less efficient."
        },
        {
            id: 4,
            title: "Aerial and Drone Surveying",
            icon: "/gis_images/gis_services/GIS_surveying/aerial_drone surveying.webp",
            description: "Through advanced Drone Surveying Services and UAV surveying, we conduct high-precision aerial surveys that generate detailed 3D models, orthomosaic maps, and real-time imagery. Our Drone Mapping Services support sectors such as agriculture, land monitoring, construction, and infrastructure development. These aerial survey services enable rapid data collection over large areas while reducing costs and improving efficiency."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` },
                { name: 'GIS Surveying', url: `${BASE_URL}/service/gis-services/gis-surveying` }
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
                    title="Our GIS Surveying Services"
                    description="We offer GIS Surveying services that meet your project requirements."
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
                            Our GIS Surveying <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-2 md:pt-4">
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

export default Gismapping;