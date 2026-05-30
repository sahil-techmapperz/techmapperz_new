import { FaAws, FaJira, FaConfluence, FaGithub, FaDatabase, FaCloud, FaChartBar } from "react-icons/fa";
import { SiTableau, SiSalesforce, SiServicenow } from "react-icons/si";
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamicImport from 'next/dynamic';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';
import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';
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
const AdvancedServices = dynamicImport(() => import('@/app/_Components/AdvancedServices'), {
    ...createOptimizedLoader("600px", "bg-[#020617]")
});

const TechStack = dynamicImport(() => import('@/app/_Components/PremiumTechStack'), {
    ...createOptimizedLoader("300px", "bg-[#020617]")
});

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/PremiumWhyChoose'), {
    ...createOptimizedLoader("400px", "bg-[#030712]")
});

const FAQ = dynamicImport(() => import('@/app/_Components/PremiumFAQ'), {
    ...createOptimizedLoader("500px", "bg-[#0a0f1c]")
});

const ServiceCaseStudy = dynamicImport(() => import('@/app/_Components/ServiceCaseStudy'), {
    ...createOptimizedLoader("400px", "bg-black")
});

const ItConsultingWhyChoose = dynamicImport(() => import('./ItConsultingWhyChoose'), {
    ...createOptimizedLoader("400px", "bg-[#030712]")
});
const ItConsultingRoadmap = dynamicImport(() => import('./ItConsultingRoadmap'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});
const ItConsultingCta = dynamicImport(() => import('./ItConsultingCta'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "IT Consulting Services in India | Techmapperz",
    description: "Techmapperz offers expert IT consulting in India – strategic planning, infrastructure optimization, cybersecurity, and digital transformation to accelerate your business growth.",
    alternates: {
        canonical: `${BASE_URL}/service/it-services/it-consulting`,
    },
};

const ItConsulting = () => {
    const introData = {
        imageSrc: "/Photos/IT_Consulting_Introduction.webp",
        imageAlt: "IT Consulting Services in India",
        paragraphs: [
            "Techmapperz provides professional IT consulting services in India to help businesses improve operations, strengthen technology infrastructure, and accelerate digital growth. Our expert consultants work closely with organizations to deliver practical solutions in IT strategy consulting, digital transformation, infrastructure optimization, cybersecurity, and technology implementation.",
            "We help businesses align technology with their goals, reduce operational inefficiencies, improve system performance, and build scalable digital solutions. Whether you are planning an IT upgrade, modernizing legacy systems, improving cybersecurity, or adopting new digital tools, Techmapperz delivers reliable consulting services tailored to your business needs."
        ],
        services: [
            { text: "Strategic IT planning for smarter ", highlight: "business decisions" },
            { text: "Digital transformation consulting to ", highlight: "modernize operations" },
            { text: "Infrastructure optimization for better ", highlight: "performance" },
            { text: "Cybersecurity solutions to protect ", highlight: "systems & data" },
            { text: "Technology implementation for ", highlight: "sustainable growth" }
        ],
        backgroundText: "IT Consulting"
    };

    const itConsultingServices = [
        {
            id: 1,
            title: "IT Strategy Development",
            icon: "/it_consultancy_services_icon/IT Assessment.svg",
            description: "We offer IT strategy consulting and roadmap development to align technology investments with your business goals, improve decision-making, and support digital transformation."
        },
        {
            id: 2,
            title: "Infrastructure Consulting",
            icon: "/it_consultancy_services_icon/Tech Integration.svg",
            description: "Our infrastructure consulting services help businesses optimize IT environments, improve system performance, adopt cloud solutions, and build scalable architecture for future growth."
        },
        {
            id: 3,
            title: "Digital Transformation",
            icon: "/it_consultancy_services_icon/IT Technology consulting.svg",
            description: "We provide digital transformation consulting services to modernize business processes, improve workflow efficiency, and help organizations adopt the right digital technologies."
        },
        {
            id: 4,
            title: "Security & Compliance",
            icon: "/it_consultancy_services_icon/IT Budgeting.svg",
            description: "Our cybersecurity and compliance consulting services help protect business systems, sensitive data, and IT environments while supporting regulatory and security best practices."
        },
        {
            id: 5,
            title: "Technology Implementation",
            icon: "/it_consultancy_services_icon/Software Development.svg",
            description: "We deliver technology implementation services including software deployment, system integration, automation, and solution setup to help businesses improve productivity and operational efficiency."
        }
    ];

    const faqData = [
        {
            question: "How do I know if my business needs IT consulting?",
            answer: "If you face recurring IT issues, high operational costs, or are planning growth, consulting can align technology with your goals. We help you assess and decide.",
        },
        {
            question: "What industries do you serve?",
            answer: "We serve diverse sectors including healthcare, education, retail, logistics, and more. Our consultants tailor solutions to each industry's needs.",
        },
        {
            question: "What is the process to engage your services?",
            answer: "Simply contact us for a free initial call. We'll discuss your needs, recommend a plan, and provide a transparent quote. We start with a trial phase to ensure the right fit.",
        },
        {
            question: "How are consulting projects priced?",
            answer: "We offer flexible engagement models (fixed-price, T&M, dedicated team). After initial scoping, you'll get a clear proposal. We emphasize upfront cost estimates and 1-week trial periods.",
        }
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
        title: "Expert IT Consulting Services in India.",
        subtitle: "Leading IT Strategy & Consulting Company in India.",
        buttonText: "Get a Free Consultation",
        buttonGradient: true,
        bgImage: "/IT_Consulting/IT_Consulting.png",
        imageAlt: "IT Consulting Services Mockup"
    };

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'IT Services', url: `${BASE_URL}/service/it-services` },
                { name: 'IT Consulting', url: `${BASE_URL}/service/it-services/it-consulting` }
            ]} />
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full overflow-hidden">
                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />

                <AdvancedServices
                    title="Services We offer"
                    description="We provide expert IT solutions tailored to streamline operations, enhance security, and drive business growth with cutting-edge technology."
                    services={itConsultingServices}
                />

                <div className="py-20 relative bg-[#0a0f1c] overflow-hidden">
                    <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>
                    <div className="max-w-[1600px] m-auto relative z-10 text-center mb-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
                            Our IT Consulting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            See how we successfully planned and implemented transformations for our clients.
                        </p>
                    </div>

                    {/* New Split UI layout for the Case Study */}
                    <ServiceCaseStudy type="IT" />
                </div>

                <ItConsultingRoadmap />

                <TechStack techItems={itconsultingTechItems} />

                <ItConsultingWhyChoose />

                <FAQ faqData={faqData} />

                <ItConsultingCta />
            </section>
        </div>
    );
}

export default ItConsulting;
