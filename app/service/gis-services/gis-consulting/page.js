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
    title: "Geospatial Innovation | GIS Strategy Development | Techmapperz",
    description: "Work together closely with Techmapperz on intelligent GIS consulting. We help organizations by providing customized GIS strategies and implementations to ensure the best possible results.",
    alternates: {
        canonical: `${BASE_URL}/service/gis-services/gis-consulting`,
    },
};

const Gismapping = () => {
    const bannerData = {
        title: "GIS Consulting",
        subtitle: "Geospatial Innovation & Strategy Development",
        description: "",
        buttonText: "Request A Free Quote",
        imageSrc: "/gis_images/GIS_Consultancy_services.webp",
        imageAlt: "GIS Consulting Services"
    };

    const introData = {
        imageSrc: "/gis_images/GIS_Consultancy_services.webp",
        imageAlt: "GIS Consulting",
        paragraphs: [
            "GIS forms the foundation of modern decision-making ecosystems, and at Techmapperz it drives operational success. Many organisations face complex spatial data challenges due to the technical nature of GIS services and evolving geospatial technologies. As a reliable GIS services provider, we deliver customised GIS consulting services and scalable geospatial solutions that help businesses overcome data complexity and improve operational efficiency.",
            "By integrating advanced tools, structured geospatial analytics, and efficient mapping & imaging workflows, we create smarter and more sustainable business systems. From city planning and infrastructure development to resource optimisation and environmental monitoring, we support organisations with innovative geospatial services and actionable location intelligence."
        ],
        services: [
            { text: "Customised solutions for", highlight: "Geospatial Analysis" },
            { text: "Smarter, sustainable", highlight: "Business Systems" },
            { text: "Partners of choice in", highlight: "Geospatial Innovation" },
        ],
        backgroundText: "Consulting"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "GIS Strategy Development",
            icon: "/gis_images/gis_services/gis_consulting/gis_strategy.webp",
            description: "Successful implementation of GIS services requires a clear and practical strategy. System architecture, technology infrastructure, cost optimisation, and long-term scalability are critical components of an effective GIS roadmap. Through our GIS consulting services, we collaborate closely with clients to design tailored strategies aligned with their operational goals. Our structured geospatial solutions ensure seamless integration with existing systems while supporting sustainable growth."
        },
        {
            id: 2,
            title: "Spatial Data Analysis and Visualisation",
            icon: "/gis_images/gis_services/gis_consulting/spatial_data.webp",
            description: "We transform raw spatial datasets into meaningful insights through advanced geospatial analytics and structured GIS mapping services. Our spatial analysis capabilities help identify patterns, trends, and relationships within complex datasets. Through interactive dashboards, dynamic visualisations, and structured reporting, we convert data into actionable location intelligence that supports confident decision-making."
        },
        {
            id: 3,
            title: "Geospatial Data Management",
            icon: "/gis_images/gis_services/gis_consulting/geospatial_data_management.webp",
            description: "Managing large volumes of spatial information can be challenging without a structured framework. Our professional geospatial services focus on organising, validating, and optimising spatial datasets. We specialise in GIS data conversion, database structuring, and quality assurance to ensure data integrity, compliance, and accessibility. This strengthens the overall efficiency and reliability of your GIS services infrastructure."
        },
        {
            id: 4,
            title: "Remote Sensing and Image Processing",
            icon: "/gis_images/gis_services/gis_consulting/remote_sensing.webp",
            description: "High-resolution satellite imagery and UAV-based drone surveys support applications such as crop monitoring, infrastructure mapping, land use analysis, and environmental assessment. Our expertise in image processing, classification, change detection, and feature extraction is powered by advanced geospatial analytics. These capabilities enable informed planning and sustainable development through reliable geospatial solutions."
        },
        {
            id: 5,
            title: "GIS Workflow Automation",
            icon: "/gis_images/gis_services/gis_consulting/gis_workflow_automation.webp",
            description: "Automating repetitive GIS processes improves operational efficiency and accuracy. Our automation frameworks streamline tasks such as spatial data updates, map generation, and reporting within structured GIS services environments. By reducing manual effort and improving precision, we enhance productivity and enable organisations to focus on strategic initiatives supported by scalable geospatial services."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` },
                { name: 'GIS Consulting', url: `${BASE_URL}/service/gis-services/gis-consulting` }
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
                    title="Our GIS Consulting Services"
                    description="We present complex data in an easily adaptable format through interactive maps and dynamic dashboards."
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
                            Our GIS Consulting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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