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
    title: "Data Digitization For Land | Cadastral Mapping | Techmapperz | Kolkata",
    description: "Enhance GIS operations with expert Data Digitization: Georeferencing, Attribute Data Integration, Cadastral Digitization, and Remote Sensing.",
    alternates: {
        canonical: `${BASE_URL}/service/gis-services/data-digitization`,
    },
};

const Gismapping = () => {
    const bannerData = {
        title: "Data Digitization",
        subtitle: "Enhance GIS operations with expert Data Digitization",
        description: "",
        buttonText: "Request A Free Quote",
        imageSrc: "/gis_images/Data_Digitization_page_banner.webp",
        imageAlt: "Data Digitization Services"
    };

    const introData = {
        imageSrc: "/gis_images/Data_Digitization_page_banner.webp",
        imageAlt: "Data Digitization",
        paragraphs: [
            "As we know, Data Digitization refers to the conversion or transformation of any physical data into digital form. It includes documents of surveys, maps, etc. This process enhances GIS services by improving accessibility, usability, and accuracy, particularly in attribution and spatial referencing.",
            "Data Digitization supports efficient geospatial services, enabling advanced spatial analysis, structured data management, and seamless integration with modern GIS platforms. It provides innovative solutions in data driven areas which helps and supports in informed decision-making."
        ],
        services: [
            { text: "Conversion of physical data into", highlight: "Digital Form" },
            { text: "Enhanced GIS operations with", highlight: "Greater Accessibility" },
            { text: "Smooth integration with", highlight: "Modern GIS Platforms" },
        ],
        backgroundText: "Digitization"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Georeferencing",
            icon: "/gis_images/gis_services/data_digitization/georeferencing.webp",
            description: "Georeferencing is the process of assigning real-world spatial coordinates to maps and imagery. Our georeferencing services support GIS mapping services by integrating satellite imagery, scanned paper maps, aerial photographs, and survey sheets into structured GIS environments using established coordinate systems. This enables accurate mapping & imaging outputs that can be integrated with other geospatial solutions. Georeferencing is commonly used for updating cadastral maps, validating land boundaries, and supporting cadastral mapping services and urban planning initiatives."
        },
        {
            id: 2,
            title: "Integration of Attribute Data",
            icon: "/gis_images/gis_services/data_digitization/Data_integration_Hoogly_attribute_1.webp",
            description: "The value of geographic and analytical data increases significantly when descriptive attributes are linked with spatial layers. By integrating land-use classifications, ownership records, and utility specifications into structured GIS databases, we enhance the effectiveness of geospatial analytics. This integration strengthens utility mapping services, land-use mapping, infrastructure management, and resource tracking. By combining attribute and spatial data, we provide improved location intelligence to support informed planning and operational efficiency."
        },
        {
            id: 3,
            title: "Topo Sheet and Cadastral Digitization",
            icon: "/gis_images/gis_services/data_digitization/Topo_Sheet_and_Cadastral_Digitization.webp",
            description: "Topographic and cadastral digitisation services convert paper-based topographic maps and land records into accurate digital spatial models. Through structured GIS data conversion, contours are digitised, boundaries are defined precisely, and parcel information is standardised. These services support terrain analysis, land parcel management, and planning activities. Digital topographic data enables organisations to develop detailed elevation models and structured spatial databases, making them highly valuable for environmental studies, infrastructure planning, and urban GIS mapping."
        },
        {
            id: 4,
            title: "Remote Sensing Image Processing",
            icon: "/gis_images/gis_services/data_digitization/remote_sensing_image_processing.webp",
            description: "We specialise in Remote Sensing Image Processing to derive actionable insights from satellite imagery and aerial data, including UAV-based drone surveys. We offer image classification, vegetation analysis, and change detection supported by advanced geospatial analytics. These solutions assist organisations in monitoring environmental changes, analysing urban growth, and assessing disaster impacts. Our services environmental monitoring, flood mapping, disaster management, deforestation tracking, and socio-environmental impact assessments. By delivering accurate and timely spatial insights, our geospatial services support data-driven decisions in critical operational and planning functions."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` },
                { name: 'Data Digitization', url: `${BASE_URL}/service/gis-services/data-digitization` }
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
                    title="Our Data Digitization Services"
                    description="Enhance GIS operations with greater accessibility, usability, and accuracy."
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
                            Our Data Digitization <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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