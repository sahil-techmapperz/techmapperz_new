import { FaAws, FaJira, FaConfluence, FaGithub, FaDatabase, FaCloud, FaChartBar } from "react-icons/fa";
import { SiTableau, SiSalesforce, SiServicenow } from "react-icons/si";
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamicImport from 'next/dynamic';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';

// Critical above-the-fold components
const WebsiteBanner = dynamicImport(() => import('@/app/_Components/WebsiteBanner'), {
  ssr: true,
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 to-black")
});

const WebsiteIntroduction = dynamicImport(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const OurServices = dynamicImport(() => import('@/app/_Components/OurServices'), {
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const TechStack = dynamicImport(() => import('@/app/_Components/TechStack'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamicImport(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-gray-900")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';


export const metadata = {
    title: "Top-rated IT Consulting Services in India | Techmapperz",
    description: "We provide expert IT solutions tailored to streamline operations, enhance security, and drive business growth with cutting-edge technology.",
    alternates: {
        canonical: `${BASE_URL}/service/it/itconsultingservice`,
    },
};

const ItConsulting = () => {
    const introData = {
        imageSrc: "/Photos/IT_Consulting_Introduction.webp",
        imageAlt: "IT Consulting",
        paragraphs: [
            "Transform your business with our expert IT consulting services. Techmapperz delivers strategic technology solutions that drive innovation and growth. Our experienced consultants provide comprehensive IT strategy, infrastructure optimization, and digital transformation services.",
            "Stay ahead of the competition with our cutting-edge IT solutions and expert guidance. Partner with Techmapperz to leverage technology for your business success."
        ],
        services: [
            { text: "Strategic IT planning and", highlight: "Digital Transformation" },
            { text: "Infrastructure optimization for", highlight: "Enhanced Efficiency" },
            { text: "Cybersecurity solutions for", highlight: "Data Protection" },
            { text: "Technology implementation for", highlight: "Business Growth" }
        ],
        backgroundText: "IT Consulting"
    };

    const itConsultingServices = [
        {
            id: 1,
            title: "IT Strategy Development",
            icon: "/it_consultancy_services_icon/IT Assessment.svg",
            description: "Strategic IT planning and roadmap development to align technology with your business goals and drive digital transformation."
        },
        {
            id: 2,
            title: "Infrastructure Consulting",
            icon: "/it_consultancy_services_icon/Tech Integration.svg",
            description: "Expert guidance on IT infrastructure optimization, cloud solutions, and system architecture for improved efficiency."
        },
        {
            id: 3,
            title: "Digital Transformation",
            icon: "/it_consultancy_services_icon/IT Technology consulting.svg",
            description: "Comprehensive digital transformation services to modernize your business processes and enhance operational efficiency."
        },
        {
            id: 4,
            title: "Security & Compliance",
            icon: "/it_consultancy_services_icon/IT Budgeting.svg",
            description: "Robust cybersecurity consulting and compliance solutions to protect your business assets and data."
        },
        {
            id: 5,
            title: "Technology Implementation",
            icon: "/it_consultancy_services_icon/Software Development.svg",
            description: "Expert implementation of IT solutions, including system integration, software deployment, and process automation."
        }
    ];

    const faqData = [
        {
            question: "1.	What is IT strategy and why is it important for my business",
            answer: "IT strategy aligns technology with business goals, improving efficiency, security, and scalability. It helps businesses stay competitive, optimize processes, and drive long-term growth in a digital landscape.",
        },
        {
            question: "2.	How does Techmapperz develop an It strategy for my business?",
            answer: "We assess your business needs, analyze existing systems, and create a customized IT strategy focusing on efficiency, security, and scalability to help you achieve long-term success.",
        },
        {
            question: "3.	What IT consulting services do you offer?",
            answer: "We provides IT strategy development, system integration, cybersecurity solutions, cloud computing, software development, and technology optimization to enhance business efficiency and digital transformation.",
        },
        {
            question: "4.	Can you help us optimize our data management process?",
            answer: "Yes! We optimize data management by improving storage efficiency, enhancing security, ensuring easy access, and automating processes, allowing your business to operate smoothly with accurate and reliable data.",
        },
        {
            question: "5.	How do you approach IT strategy development?",
            answer: "We align technology with business goals, assess infrastructure and implement scalable solutions, incorporating market analysis, risk assessment, and future-proofing for long-term efficiency and competitiveness",
        },
        {
            question: "6.	How do I know if my business needs IT Consulting?",
            answer: "If your business faces IT inefficiencies, security issue, outdated systems, or scalability issues, IT consulting helps you implement smarter solutions for growth and sustainability.",
        },
        {
            question: "7.	What technology do you specialize in?",
            answer: "We specialize in cloud computing, AI, cybersecurity, data analytics, web and mobile development, CRM solutions, and emerging technologies to support business innovation.",
        },
        {
            question: "8.	How do I get started with your IT consulting services?",
            answer: "Simply contact Techmapperz! We’ll assess your needs, discuss challenges, and craft a tailored IT strategy to help your business grow with the right technology.",
        },



    ];


    const itconsultingTechItems = [
        { name: "AWS", icon: <FaAws />, bg: "#f0f5ff", textColor: "#FF9900" },
        { name: "Azure", icon: <FaCloud />, bg: "#f5f5f5", textColor: "#0078D4" },
        { name: "Jira", icon: <FaJira />, bg: "#fff0f0", textColor: "#0052CC" },
        { name: "Confluence", icon: <FaConfluence />, bg: "#f0f5ff", textColor: "#172B4D" },
        { name: "Tableau", icon: <SiTableau />, bg: "#f0f5ff", textColor: "#E97627" },
        { name: "PowerBI", icon: <FaChartBar />, bg: "#fff0f0", textColor: "#F2C811" },
        { name: "Salesforce", icon: <SiSalesforce />, bg: "#f5f5f5", textColor: "#00A1E0" },
        { name: "Github", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#24C8DB" },
        { name: "Cloud", icon: <FaCloud />, bg: "#f5f5f5", textColor: "#4285F4" },
        { name: "Database", icon: <FaDatabase />, bg: "#f0f5ff", textColor: "#47A248" }
    ];


    const bannerData = {
        title: (
            <>
                Empower Your Business with Expert{" "}
                <span className="text-gradient">IT Consultancy</span>
            </>
        ),
        // title: "Empower Your Business with Expert IT Consultancy",
        subtitle: "Expert IT Consulting to Grow your Business!",
        description: "",
        buttonText: "Get In Touch",
        imageSrc: "/Photos/it_Consultancy_Mockup_banner.webp",
        imageAlt: "Web Development Mockup"
    };

    return (
        <div className="bg-gray-900 text-white relative">
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full bg-black ">


                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />
                {/* services we Offer */}
                <OurServices
                    title="Services We offer"
                    headingText=""
                    description="We provide expert IT solutions tailored to streamline operations, enhance security, and drive business growth with cutting-edge technology."
                    imageSrc="/Photos/IT_Consulting_service_we_offers.webp"
                    imageAlt="IT Consulting Services"
                    services={itConsultingServices}
                />
                {/* Technology We Uses */}

                <TechStack techItems={itconsultingTechItems} Headingtext={'Our Tech Tools'} />

                <WhyChooseTechmapperz
                    heading={'Why Choose Techmapperz for IT Consultancy'}
                />

                <FAQ faqData={faqData} />
            </section>
        </div>
    );
}

export default ItConsulting;
