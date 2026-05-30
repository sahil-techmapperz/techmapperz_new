import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';
import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';

import Drone_data_processing from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp";
import Drone_Survey_and_Mapping from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_Survey_and_Mapping.webp";
import Inspection_and_Analysis from "@/public/gis_images/drone_services/Drone_Main_Page/Inspection_and_Analysis.webp";
import Drone_ServiceintroImg from "@/public/gis_images/Drone_ServiceintroImg.webp";

// Critical above-the-fold components
const WebsiteBanner = dynamic(() => import('@/app/_Components/PremiumWebsiteBanner'), {
    ssr: true,
    ...createOptimizedLoader("500px", "bg-[#020617]")
});

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
    ssr: true,
    ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const GisServices_Services_We_Offer = dynamic(() => import('@/app/_Components/GisServices_Services_We_Offer'), {
    ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
    ...createOptimizedLoader("400px", "bg-gray-800")
});

const PremiumOpenFAQ = dynamic(() => import('@/app/_Components/PremiumOpenFAQ'), {
    ...createOptimizedLoader("500px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;


export const metadata = {
    title: "Drone Survey & Mapping | Drone Data Processing | Drone Services | Techmapperz",
    description: "Experience high-quality drone mapping solutions. Techmapperz provides professional drone data processing, 3D modeling, and volumetric analysis tailored to your needs.",
    alternates: {
        canonical: `${BASE_URL}/service/drone-services`,
    },
};

export const categoryData = [
    {
        name: 'Drone Survey & Mapping',
        image: Drone_Survey_and_Mapping,
        link: '/service/droneservice/dronesurveyandmapping'
    },
    {
        name: 'Inspection & Analysis',
        image: Inspection_and_Analysis,
        link: '/service/droneservice/inspectionandanalysis'
    },
    {
        name: 'Drone Data Processing',
        image: Drone_data_processing,
        link: '/service/droneservice/dronedataprocessing'
    },

];

const count = categoryData.length;

const features = [
    {
        img: '/gis_images/why_choose_gis_icons/High_Accuracy_Data.svg',
        title: 'High-Accuracy Drone Data',
        description: 'Techmapperz is a professional drone survey and mapping company in India, delivering high-accuracy and reliable geospatial data using advanced UAV platforms, RTK-enabled systems, and industry-standard processing workflows. '
    },
    {
        img: '/gis_images/why_choose_gis_icons/End_To_End_Solutions.svg',
        title: 'End-to-End Drone Survey',
        description: 'We provide end-to-end drone survey and mapping services, covering mission planning, UAV data acquisition, drone data processing, GIS analysis, and final map deliverables.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/cost_effective.svg',
        title: 'Cost-Effective',
        description: 'Techmapperz offers cost-effective drone mapping services while maintaining strict quality and accuracy standards. Our efficient workflows reduce field time and operational costs, delivering high-value drone survey solutions for organizations of all sizes.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/fast_turnaround.svg',
        title: 'Timely Execution',
        description: 'With well-defined methodologies, experienced technical teams, and optimized processing pipelines, Techmapperz ensures timely project execution without compromising accuracy or data integrity.'
    }
];

const faqData = [
    {
        question: "1. How accurate are Techmapperz’s drone survey and mapping services in India?",
        answer: "Techmapperz delivers high-accuracy drone survey and mapping services in India using advanced UAV platforms, RTK-enabled systems, and industry-standard processing tools. Accuracy levels depend on project requirements and terrain, but our workflows ensure reliable and precise geospatial outputs.",
    },
    {
        question: "2. What is an orthophoto, and why is it important in drone mapping?",
        answer: "An orthophoto is a geometrically corrected aerial image generated through drone mapping that represents the Earth’s surface at a uniform scale. It is essential for accurate measurements, planning, asset mapping, and GIS integration across infrastructure and land survey projects.",
    },
    {
        question: "3. What is a 3D terrain model, and how is it used in drone surveys?",
        answer: "A 3D terrain model represents the ground surface derived from drone survey data. It is widely used for topographic analysis, slope assessment, volume estimation, and infrastructure planning in construction, mining, and environmental projects.",
    },
    {
        question: "4. What is a LiDAR sensor, and how is it used in drone LiDAR surveys?",
        answer: "A LiDAR sensor uses laser pulses to measure distances and generate highly detailed 3D point cloud data. In drone LiDAR survey services, it is especially effective for topographic mapping, corridor surveys, and projects requiring high accuracy even in vegetated areas.",
    },
    {
        question: "5. Why should organizations choose drone surveys over traditional land surveys?",
        answer: "Drone surveys offer faster data collection, reduced field risks, improved accuracy, and cost efficiency compared to traditional land surveys. They are particularly effective for large areas, inaccessible terrain, and time-critical infrastructure projects.",
    },
    {
        question: "6. What are the benefits of drone data processing services?",
        answer: "Drone data processing services transform raw aerial data into actionable outputs such as orthomosaics, DEMs, DSMs, contour maps, and point clouds. These processed datasets support informed decision-making, project monitoring, and GIS-based analysis.",
    },
    {
        question: "7. What are Digital Elevation Models (DEM), and how are they useful?",
        answer: "A Digital Elevation Model (DEM) represents the bare-earth surface derived from drone survey or LiDAR data. DEMs are used for drainage analysis, flood modeling, contour generation, and terrain evaluation in infrastructure and environmental projects.",
    },
    {
        question: "8. Are Techmapperz’s drone survey services cost-effective for government and enterprise projects?",
        answer: "Yes, Techmapperz provides cost-effective drone survey and mapping services by optimizing field operations, reducing survey time, and minimizing manual effort while maintaining high accuracy and quality standards.",
    }
];

const bannerData = {
    title: "Drone Survey & Mapping Services Using Advanced UAV & LiDAR Technology",
    subtitle: "Leading Drone Survey & Mapping Company in India.",
    buttonText: "Get a Free Consultation",
    buttonGradient: true,
    bgImage: "/Drone/Drone.png",
    imageAlt: "Drone Services Mockup"
};

const introData = {
    imageSrc: Drone_ServiceintroImg,
    imageAlt: "Drone Services",
    paragraphs: [
        <span key="1">
            Techmapperz is a professional drone survey and mapping company in India, <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">leveraging the latest UAV and GIS technologies</Link> to deliver accurate, efficient, and cost-effective drone mapping solutions. Our advanced drone survey services help organizations transform the way spatial data is collected, processed, analyzed, and presented across multiple sectors, including infrastructure, construction, agriculture, utilities, mining, and environmental management.
        </span>,
        "By integrating high-resolution aerial data acquisition with advanced drone mapping and data processing, we generate precise and reliable outputs such as orthomosaics, DEMs, DSMs, contour maps, and point cloud data. This powerful synergy of drone survey, mapping, and GIS-based analysis enables better decision-making, minimizes operational risks, reduces project timelines, and maximizes overall efficiency.",
        "Techmapperz delivers tailored drone survey and mapping solutions across India, ensuring compliance with industry standards and meeting project-specific requirements for both private and government initiatives."
    ],
    services: [
        { text: "DGCA Compliant", highlight: "Drone Operations in India" },
        { text: "Pan-India", highlight: "Drone survey capability" },
        { text: "Experienced & licensed", highlight: "UAV operators" },
        { text: "Engineering-grade", highlight: "mapping outputs" },
        { text: "Advanced aerial", highlight: "data processing" }
    ],
    backgroundText: "Drone Services"
};

const DroneService = () => {
    return (
        <>
            <div className="bg-black overflow-hidden text-white">
                <BreadcrumbJsonLd items={[
                    { name: 'Home', url: BASE_URL },
                    { name: 'Services', url: `${BASE_URL}/service` },
                    { name: 'Drone Services', url: `${BASE_URL}/service/drone-services` }
                ]} />
                <ScrollToTop />
                <WebsiteBanner {...bannerData} />
                <section>

                    <WebsiteIntroduction
                        imageSrc={introData.imageSrc}
                        imageAlt={introData.imageAlt}
                        paragraphs={introData.paragraphs}
                        services={introData.services}
                        backgroundText={introData.backgroundText}
                    />

                    <GisServices_Services_We_Offer
                        categoryData={categoryData}
                        count={count}
                    />
                    <WhyChooseTechmapperz
                        features={features}
                        heading={'Why Choose Techmapperz for Drone Survey & Mapping Services'}
                    />

                    <PremiumOpenFAQ
                        faqData={faqData}
                    />

                    <div className="py-20 relative bg-[#0a0f1c]">
                        <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>
                        <div className="max-w-[1600px] m-auto px-4 md:px-8 relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white tracking-wide">
                                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Spatial Data?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                                Talk to our GIS experts to learn how our drone survey and mapping services can help your enterprise scale efficiently.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all transform hover:scale-105">
                                Talk To Our GIS Experts
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default DroneService;
