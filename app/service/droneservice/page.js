import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';

import Drone_data_processing from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp";
import Drone_Survey_and_Mapping from "@/public/gis_images/drone_services/Drone_Main_Page/Drone_Survey_and_Mapping.webp";
import Inspection_and_Analysis from "@/public/gis_images/drone_services/Drone_Main_Page/Inspection_and_Analysis.webp";
import Drone_ServiceintroImg from "@/public/gis_images/Drone_ServiceintroImg.webp";

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

const GisServices_Services_We_Offer = dynamic(() => import('@/app/_Components/GisServices_Services_We_Offer'), {
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamic(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-black")
});

const CTABanner = dynamic(() => import('@/app/_Components/CTABanner'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

export const revalidate = 7200;

export const metadata = {
    title: "Drone Survey & Mapping Services | High-Accuracy UAV Mapping India",
    description: "High-precision drone survey and mapping services using advanced UAV & GIS technology. Reliable solutions for government & enterprise projects across India.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice`,
    },
};

export const categoryData = [
    {
        name: 'Drone Survey & Mapping',
        image: Drone_Survey_and_Mapping,
        link: '/service/droneservice/dronesurveyandmapping'
    },
    {
        name: 'Drone Data Processing',
        image: Drone_data_processing,
        link: '/service/droneservice/dronedataprocessing'
    },
    {
        name: 'Inspection & Analysis',
        image: Inspection_and_Analysis,
        link: '/service/droneservice/inspectionandanalysis'
    }
];

const count = categoryData.length;

const features = [
    {
        img: '/gis_images/why_choose_gis_icons/High_Accuracy_Data.svg',
        title: 'High-Accuracy Drone Data',
        description: 'Techmapperz is a professional drone survey and mapping company in India, delivering high-accuracy and reliable geospatial data using advanced UAV platforms, RTK-enabled systems, and industry-standard processing workflows. Our drone survey outputs support precise analysis, planning, and informed decision-making for large-scale infrastructure, government, and enterprise projects.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/End_To_End_Solutions.svg',
        title: 'End-to-End Drone Survey Solutions',
        description: 'We provide end-to-end drone survey and mapping services, covering mission planning, UAV data acquisition, drone data processing, GIS analysis, and final map deliverables. Our solutions are designed to meet project-specific, regulatory, and operational requirements for sectors such as urban planning, infrastructure development, agriculture, utilities, mining, and environmental management.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/cost_effective.svg',
        title: 'Cost-Effective Drone Mapping Services',
        description: 'Techmapperz offers cost-effective drone mapping services while maintaining strict quality and accuracy standards. Our efficient workflows reduce field time and operational costs, delivering high-value drone survey solutions for organizations of all sizes.'
    },
    {
        img: '/gis_images/why_choose_gis_icons/fast_turnaround.svg',
        title: 'Timely Execution & Process-Driven Workflows',
        description: 'With well-defined methodologies, experienced technical teams, and optimized processing pipelines, Techmapperz ensures timely project execution without compromising accuracy or data integrity. Our process-driven approach helps projects remain on schedule while adhering to contractual timelines and deliverable standards.'
    }
];

const faqData = [
    {
        question: "How accurate are Techmapperz’s drone survey and mapping services in India?",
        answer: "Techmapperz delivers high-accuracy drone survey and mapping services in India using advanced UAV platforms, RTK-enabled systems, and industry-standard processing tools. Accuracy levels depend on project requirements and terrain, but our workflows ensure reliable and precise geospatial outputs.",
    },
    {
        question: "What is an orthophoto, and why is it important in drone mapping?",
        answer: "An orthophoto is a geometrically corrected aerial image generated through drone mapping that represents the Earth’s surface at a uniform scale. It is essential for accurate measurements, planning, asset mapping, and GIS integration across infrastructure and land survey projects.",
    },
    {
        question: "What is a 3D terrain model, and how is it used in drone surveys?",
        answer: "A 3D terrain model represents the ground surface derived from drone survey data. It is widely used for topographic analysis, slope assessment, volume estimation, and infrastructure planning in construction, mining, and environmental projects.",
    },
    {
        question: "What is a LiDAR sensor, and how is it used in drone LiDAR surveys?",
        answer: "A LiDAR sensor uses laser pulses to measure distances and generate highly detailed 3D point cloud data. In drone LiDAR survey services, it is especially effective for topographic mapping, corridor surveys, and projects requiring high accuracy even in vegetated areas.",
    },
    {
        question: "Why should organizations choose drone surveys over traditional land surveys?",
        answer: "Drone surveys offer faster data collection, reduced field risks, improved accuracy, and cost efficiency compared to traditional land surveys. They are particularly effective for large areas, inaccessible terrain, and time-critical infrastructure projects.",
    },
    {
        question: "What are the benefits of drone data processing services?",
        answer: "Drone data processing services transform raw aerial data into actionable outputs such as orthomosaics, DEMs, DSMs, contour maps, and point clouds. These processed datasets support informed decision-making, project monitoring, and GIS-based analysis.",
    },
    {
        question: "What are Digital Elevation Models (DEM), and how are they useful?",
        answer: "A Digital Elevation Model (DEM) represents the bare-earth surface derived from drone survey or LiDAR data. DEMs are used for drainage analysis, flood modeling, contour generation, and terrain evaluation in infrastructure and environmental projects.",
    },
    {
        question: "Are Techmapperz’s drone survey services cost-effective for government and enterprise projects?",
        answer: "Yes, Techmapperz provides cost-effective drone survey and mapping services by optimizing field operations, reducing survey time, and minimizing manual effort while maintaining high accuracy and quality standards.",
    }
];

const introData = {
    imageSrc: Drone_ServiceintroImg,
    imageAlt: "Drone Services",
    paragraphs: [
        `Techmapperz is a professional drone survey and mapping company in India, leveraging the latest UAV and GIS technologies to deliver accurate, efficient, and cost-effective drone mapping solutions. Our advanced drone survey services help organizations transform the way spatial data is collected, processed, analyzed, and presented across multiple sectors, including infrastructure, construction, agriculture, utilities, mining, and environmental management.`,
        `By integrating high-resolution aerial data acquisition with advanced drone mapping and data processing, we generate precise and reliable outputs such as orthomosaics, DEMs, DSMs, contour maps, and point cloud data. This powerful synergy of drone survey, mapping, and GIS-based analysis enables better decision-making, minimizes operational risks, reduces project timelines, and maximizes overall efficiency. Techmapperz delivers tailored drone survey and mapping solutions across India, ensuring compliance with industry standards and meeting project-specific requirements for both private and government initiatives.`
    ],
    services: [
        { text: "DGCA Compliant", highlight: "Drone Operations" },
        { text: "Pan-India", highlight: "Drone Survey Capability" },
        { text: "Experienced & Licensed", highlight: "UAV Operators" },
        { text: "Engineering-Grade", highlight: "Mapping Outputs" }
    ],
    backgroundText: "Drone Services"
};

const DroneService = () => {
    return (
        <div className="bg-black text-white relative">
            <ScrollToTop />
            
            {/* ── HERO ── */}
            <section 
                className="w-full min-h-[100vh] flex items-center relative bg-cover bg-center bg-no-repeat pt-20" 
                style={{ backgroundImage: `url('/Drone_Service/Drone_Service.png')` }}
            >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}
                <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
                    <div className="w-fit border border-[#4a5f82] bg-[#2a3c5a]/40 backdrop-blur-sm text-[#799ccc] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Drone Survey and Mapping Company in India
                    </div>
                    
                    <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-bold text-white max-w-[900px] leading-[1.15]">
                        Drone Survey & Mapping Services <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d5689] to-[#a82123]">
                            Using Advanced UAV & LiDAR Technology
                        </span>
                    </h1>
                    
                    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                        Elevate your projects with our cutting-edge Drone Survey and Mapping services. High-accuracy UAV surveys for construction, mining, agriculture & GIS projects.
                    </p>
                    
                    <HeroButtons 
                        button1Text="Request a Drone Survey Quote" 
                        button1Link="/contact"
                        button2Text="Request Sample Survey Data"
                        button2Link="/contact"
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

            {/* ── SERVICES ── */}
            <section className="bg-gradient-to-b from-gray-950 to-black pt-10">
                <div className="max-w-7xl mx-auto px-6 text-center mb-6">
                    <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Our Offerings</span>
                    <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Our Drone Survey & Mapping Services</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
                </div>
                <GisServices_Services_We_Offer
                    categoryData={categoryData}
                    count={count}
                />
            </section>

            {/* ── CASE STUDY BANNER ── */}
            <section className="bg-[#0A0F1A] border-y border-white/5 py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2d5689] rounded-full filter blur-[200px] opacity-10" />
                <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Empowering Your Business with Innovation <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5689] to-[#a82123]">
                            GIS Solution Drone Survey and Mapping Services
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-3xl">
                        Discover our latest projects showcasing cutting-edge technology solutions and innovative approaches across IT and Geospatial Domains.
                    </p>
                    <Link href="/portfolio" className="inline-block relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                        <button className="relative px-8 py-4 bg-gray-900 border border-white/10 text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300">
                            Explore Some of Our Work
                        </button>
                    </Link>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="bg-black pt-16">
                <WhyChooseTechmapperz
                    features={features}
                    heading={'Why Choose Techmapperz for Drone Survey & Mapping Services'}
                />
            </section>

            {/* ── FAQ ── */}
            <section className="bg-black pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                    <span className="text-[#a82123] text-sm font-semibold tracking-widest uppercase">Common Questions</span>
                    <h2 className="text-4xl max-sm:text-2xl font-bold text-white mt-3">Frequently Asked Questions</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2d5689] to-[#a82123] rounded-full mx-auto mt-4" />
                </div>
                <FAQ faqData={faqData} />
            </section>

            {/* ── CTA BANNER ── */}
            <CTABanner 
                title="Ready to Elevate Your Project with High-Accuracy Drone Data?"
                subtitle="Connect with our experts today to get end-to-end UAV survey and mapping solutions tailored to your requirements."
                primaryButtonText="Request a Drone Survey Quote"
                primaryButtonLink="/contact"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
            />
        </div>
    );
}

export default DroneService;
