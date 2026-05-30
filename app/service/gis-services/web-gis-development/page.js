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
    title: "GIS Application Design | Mobile GIS Application | Techmapperz",
    description: "Techmapperz is an organization which helps in providing customized GIS application designs specifically designed and developed to meet the unique requirements of the clients business.",
    alternates: {
        canonical: `${BASE_URL}/service/gis-services/web-gis-development`,
    },
};

const Gismapping = () => {
    const bannerData = {
        title: "Web GIS Development",
        subtitle: "Customized GIS Application Designs",
        description: "",
        buttonText: "Request A Free Quote",
        imageSrc: "/gis_images/Web_GIS_Development_Banner.webp",
        imageAlt: "Web GIS Development Services"
    };

    const introData = {
        imageSrc: "/gis_images/Web_GIS_Development_Banner.webp",
        imageAlt: "Web GIS Development",
        paragraphs: [
            "Techmapperz is an organisation which helps in providing customised GIS application designs specifically designed and developed to meet the unique requirements of the clients business.",
            "Our GIS mapping services and advanced geospatial solutions are developed to deliver scalable, user-friendly, and efficient systems that support structured spatial information management. As a trusted GIS services provider, we design applications that enable organisations to effectively manage and analyse spatial data using advanced geospatial analytics and intelligent mapping & imaging frameworks. From intuitive user interfaces to robust back-end architecture, our GIS applications are built to meet the dynamic demands of modern business environments and support reliable location intelligence."
        ],
        services: [
            { text: "Scalable, user-friendly", highlight: "Efficient Systems" },
            { text: "Advanced geospatial analytics and", highlight: "Intelligent Mapping" },
            { text: "Intuitive UI to robust", highlight: "Back-end Architecture" },
        ],
        backgroundText: "Web GIS"
    };

    const ourServicesData = [
        {
            id: 1,
            title: "Custom GIS Application Development",
            icon: "/gis_images/gis_services/web_gis_development/Custom_GIS_App_development.webp",
            description: "We specialise in customised GIS consulting services and application development aligned with your organisation’s precise operational needs. From concept to deployment, we ensure that each solution supports your strategic objectives and integrates seamlessly with your existing geospatial services environment. Our applications are built to deliver strong performance, reliability, and scalability, ensuring long-term efficiency across your GIS services operations."
        },
        {
            id: 2,
            title: "Mobile GIS Application Development",
            icon: "/gis_images/gis_services/web_gis_development/mobile_gis.webp",
            description: "In today’s mobile-driven environment, access to spatial data must be flexible and accessible. Our mobile GIS solutions enable users to collect, analyse, and share geospatial data in real time through structured drone surveys integration and field-based workflows. We develop responsive applications optimised for both iOS and Android platforms. Whether it is asset management, field data collection, or real-time location monitoring, our mobile solutions strengthen operational efficiency through practical geospatial solutions."
        },
        {
            id: 3,
            title: "Web GIS Application Development",
            icon: "/gis_images/gis_services/web_gis_development/web_gis.webp",
            description: "Our web GIS development services allow seamless access to spatial datasets through internet-enabled devices. Clients can view and manage real-time data from anywhere using structured GIS mapping services and advanced geospatial analytics tools. We create responsive web platforms with integrated mapping and spatial analysis capabilities, enabling organisations to scale and manage complex geospatial data efficiently."
        },
        {
            id: 4,
            title: "Geospatial Data Integration",
            icon: "/gis_images/gis_services/web_gis_development/mobile_gis.webp",
            description: "We customise applications to integrate seamlessly with multiple spatial datasets and platforms. Through structured GIS data conversion and system integration, we ensure compatibility across various formats and geospatial environments. Our integration services enhance analytical capabilities and support consistent location intelligence across business operations."
        },
        {
            id: 5,
            title: "User Interface (UI) and User Experience (UX) Design",
            icon: "/gis_images/gis_services/web_gis_development/UI_UX.webp",
            description: "An effective GIS application must be intuitive and efficient. At Techmapperz, we focus on developing visually clear and user-friendly applications supported by structured mapping & imaging workflows. Our team ensures that applications function seamlessly across mobile, web, and desktop environments, allowing teams to quickly adapt and maximise productivity within their GIS services framework."
        },
        {
            id: 6,
            title: "Application Maintenance and Support",
            icon: "/gis_images/gis_services/web_gis_development/Application_Maintenance_and_Support.webp",
            description: "We provide ongoing maintenance and support after deployment to ensure applications remain secure, functional, and optimised. Our services include performance enhancements, system updates, troubleshooting, and technology upgrades. Through continuous support, we ensure that your geospatial services infrastructure evolves with emerging technologies and continues to deliver reliable business outcomes."
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` },
                { name: 'Web GIS Development', url: `${BASE_URL}/service/gis-services/web-gis-development` }
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
                    title="Our Web GIS Development Services"
                    description="We design and develop scalable web applications to help deliver customized GIS solutions."
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
                            Our Web GIS Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
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