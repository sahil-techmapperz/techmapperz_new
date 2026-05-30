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
    title: "Inspection Analysis GIS | Utility Inspection | Techmapperz | Delhi",
    description: "Safely monitor critical assets with precision drone inspection by Techmapperz. We deliver detailed insights, high-resolution imagery, and comprehensive analysis",
    alternates: {
        canonical: `${BASE_URL}/service/drone-services/inspection-and-analysis`,
    },
};

const InspectionandAnalysis = () => {
    const bannerData = {
        title: "Inspection Analysis",
        subtitle: "Safely Monitor Critical Assets",
        description: "",
        buttonText: "Get A Free Quote",
        imageSrc: "/gis_images/Drone_Inspection_analysis_Banner.webp", // Updated to the original page's banner
        imageAlt: "Inspection and Analysis"
    };

    const introData = {
        imageSrc: "/gis_images/Drone_Inspection_analysis_Banner.webp",
        imageAlt: "Inspection and Analysis",
        paragraphs: [
            "Techmapperz deploys the latest drone technology to perform high accuracy inspection analysis which keeps your infrastructure running safely and smoothly.",
            "Our drone equipments offer data harvesting and analysis, nearly in real-time, which limits the need for outdated inspection for new analysis without comprising on the accuracy and thereby reducing the interruption. Through our industrial drone services, we help clients across a range of industries with regulatory compliance, operational efficiency and early identification of emerging issues before they become espensive to resolve."
        ],
        services: [
            { text: "High accuracy inspection for", highlight: "Operational Efficiency" },
            { text: "Nearly real-time data harvesting", highlight: "and Analysis" },
            { text: "Early identification of", highlight: "Emerging Issues" },
        ],
        backgroundText: "Inspection Analysis"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Infrastructure Inspection",
            icon: "/gis_images/drone_services/inspection_analysis/Infrastructure_inspection.webp",
            description: "We carry high-resolution cameras and sensors aboard our drones for inspecting the details of the images and the data collected during inspections of bridges, towers, buildings, or other infrastructure for speedy identification of wear and tear, structural damage, or other potential risks and safety and long-term durability assurance of critical infrastructure."
        },
        {
            id: 2,
            title: "Power Line & Utility Inspection",
            icon: "/gis_images/drone_services/inspection_analysis/power_and_utility_surveying.webp",
            description: "Power line & Utility Inspections are crucial for identifying hazards and preventing outages. Drones enhance the process with infrared imagery and high-definition video, to detect overheating, corrosion, and vegetation incursions that might lead to failures or accidents of service"
        },
        {
            id: 3,
            title: "Solar Panel Inspection",
            icon: "/gis_images/drone_services/inspection_analysis/solar_panel_inspection.webp",
            description: "Solar panel efficiency requires regular evaluation and maintenance to ensure that they work effectively. Our drone technology identifies faults such as crack, bad wiring,etc. in the solar array without using scaffolding or ladders. This way, we will be able to identify areas that malfunction and optimize solar panel performance by delivering thermal imaging scans of such areas."
        },
        {
            id: 4,
            title: "Oil & Gas Pipeline Monitoring",
            icon: "/gis_images/drone_services/inspection_analysis/oil_gas_pipeline_surveying.webp",
            description: "The monitoring of pipelines is a vital component in the maintenance of the integrity and safety of oil and gas infrastructure. Drones can also cover large zones over time efficiently to collect high resolution imagery and thermal data to look out for leaks, corrosion, and other harmful elements that might need further actions to be taken. "
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'Drone Services', url: `${BASE_URL}/service/drone-services` },
                { name: 'Inspection & Analysis', url: `${BASE_URL}/service/drone-services/inspection-and-analysis` }
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
                    title="Our Inspection Analysis Services"
                    description="We deliver detailed insights, high-resolution imagery, and comprehensive analysis."
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
                            Our Inspection Analysis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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

export default InspectionandAnalysis;