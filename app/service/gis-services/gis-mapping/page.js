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
    title: "GIS Mapping Services | Utility & LULC Mapping | GIS Company India | Techmapperz",
    description: "Improve your decision-making with Techmapperz’s cutting-edge GIS mapping solutions. From navigation mapping and utilities to cadastral and urban planning, uses advanced geospatial data for efficiency and growth.",
    alternates: {
        canonical: `${BASE_URL}/service/gis-services/gis-mapping`,
    },
};

const Gismapping = () => {
    const bannerData = {
        title: "GIS Mapping",
        subtitle: "Accurate & Reliable Geospatial Imaging",
        description: "",
        buttonText: "Request A Free Quote",
        imageSrc: "/gis_images/GIS_Mapping_Page_Banner.webp", // keeping original image for aesthetic
        imageAlt: "GIS Mapping Services"
    };

    const introData = {
        imageSrc: "/gis_images/GIS_Mapping_Page_Banner.webp",
        imageAlt: "GIS Mapping and Tracking",
        paragraphs: [
            "GIS mapping is a fusion of technology and geography data that translates, analyses, and interprets geographical data. At Techmapperz, we deliver advanced GIS mapping services and reliable GIS services India, supporting businesses and government sectors with innovative and effective geospatial solutions.",
            "We, through our GIS consulting services, meet every requirement of every kind of industry, starting from accurate navigation to green urban planning."
        ],
        services: [
            { text: "Advanced", highlight: "GIS Mapping Services" },
            { text: "Innovative", highlight: "Geospatial Solutions" },
            { text: "Smart Planning &", highlight: "Decision Making" },
        ],
        backgroundText: "Mapping Solutions"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Navigation Mapping",
            icon: "/gis_images/gis_services/gis_mapping/Navigation_mapping.webp",
            description: "An accurate navigation map is very essential for today’s transportation and logistics sectors. Our mapping solutions for navigation provide accurate geospatial information to optimise routes and minimise travel time. We develop high-definition maps with the latest road networks, traffic patterns, and geographic attributes on the go for fleet management, delivery networks, or mobility applications. Our geospatial solutions improve operational efficiency, reduce costs, and enhance customer satisfaction."
        },
        {
            id: 2,
            title: "Utility Mapping",
            icon: "/gis_images/gis_services/gis_mapping/utility_map.webp",
            description: "Utility mapping services are critical for reducing accidents, unnecessary expenditure, costly rerouting, damaged assets, injuries, and project downtime. Through advanced utility mapping and UAV-based drone surveys, we provide clear visualisation of utility networks. This supports infrastructure planning, installation, and maintenance while reducing risks during excavation and construction. By combining GIS technology with accurate field data, we deliver reliable geospatial services that enhance risk management and decision-making."
        },
        {
            id: 3,
            title: "Cadastral Mapping",
            icon: "/gis_images/gis_services/gis_mapping/Cadastral_map.webp",
            description: "Our cadastral mapping services produce detailed maps showing property boundaries, land parcels, and ownership information. Using structured GIS data conversion and spatial analysis, we help government bodies, urban planners, and property developers manage land records efficiently, resolve boundary disputes, and facilitate property transactions."
        },
        {
            id: 4,
            title: "Urban Planning and Mapping",
            icon: "/gis_images/gis_services/gis_mapping/urban.webp",
            description: "Rapid urban growth requires smart and sustainable planning. Our urban GIS mapping solutions provide structured geospatial analytics and location intelligence to support zoning, infrastructure planning, and development strategies. Through our GIS services, we assist city planners and local authorities in analysing infrastructure distribution, population density, environmental constraints, and urban expansion patterns. This enables balanced development, optimised resource allocation, and smarter city planning."
        },
        {
            id: 5,
            title: "Agricultural Mapping",
            icon: "/gis_images/gis_services/gis_mapping/Agriculture.webp",
            description: "The application of GIS for agriculture plays a significant role in improving productivity and sustainability. Our agricultural mapping services provide insights into soil types, crop patterns, irrigation systems, and climatic conditions using advanced geospatial analytics. By integrating precision agriculture techniques and data-driven monitoring, we help farmers and agricultural organisations enhance productivity, reduce wastage, and support informed decision-making."
        },
        {
            id: 6,
            title: "LULC Mapping (Land Use and Land Cover)",
            icon: "/gis_images/gis_services/gis_mapping/LULC_Hoogly.webp",
            description: "LULC mapping provides accurate and reliable data on changes in land use and land cover, supporting environmental monitoring and sustainable development. Through high-resolution GIS mapping services and structured geospatial solutions, we help identify and manage urban areas, agricultural lands, forests, water bodies, and other land resources. Our LULC mapping supports planning authorities and environmental agencies with dependable spatial insights for long-term sustainability."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` },
                { name: 'GIS Mapping', url: `${BASE_URL}/service/gis-services/gis-mapping` }
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
                    title="Our GIS Mapping Services"
                    description="Discover our extensive lineup of GIS mapping services, created with precision, speed, and readability."
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
                            Our GIS Mapping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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