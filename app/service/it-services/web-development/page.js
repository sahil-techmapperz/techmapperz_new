import Image from 'next/image';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaJs, FaPhp, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';
import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';

// Critical above-the-fold components
const WebsiteBanner = dynamicImport(() => import('@/app/_Components/PremiumWebsiteBanner'), {
    ssr: true,
    ...createOptimizedLoader("500px", "bg-[#020617]")
});

const WebDevIntroduction = dynamicImport(() => import('@/app/_Components/WebDevIntroduction'), {
    ssr: true,
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

// Below-the-fold components - lazy load
const AdvancedServices = dynamicImport(() => import('@/app/_Components/AdvancedServices'), {
    ...createOptimizedLoader("600px", "bg-[#020617]")
});

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/PremiumWhyChoose'), {
    ...createOptimizedLoader("400px", "bg-[#030712]")
});

const TechStack = dynamicImport(() => import('@/app/_Components/PremiumTechStack'), {
    ...createOptimizedLoader("300px", "bg-[#020617]")
});

const WebsiteDesignElements = dynamicImport(() => import('@/app/_Components/PremiumDesignElements'), {
    ...createOptimizedLoader("400px", "bg-[#050B14]")
});

const FAQ = dynamicImport(() => import('@/app/_Components/PremiumFAQ'), {
    ...createOptimizedLoader("500px", "bg-[#0a0f1c]")
});

const Roadmap = dynamicImport(() => import('@/app/_Components/ModernRoadmap'), {
    ...createOptimizedLoader("400px", "bg-[#030712]")
});

const WhyWebDevImportant = dynamicImport(() => import('@/app/_Components/WhyWebDevImportant'), {
    ...createOptimizedLoader("600px", "bg-[#050B14]")
});

const CaseStudyCard = dynamicImport(() => import('@/app/_Components/CaseStudyCard'), {
    ...createOptimizedLoader("400px", "bg-black")
});

const PremiumBottomBanner = dynamicImport(() => import('@/app/_Components/PremiumBottomBanner'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Custom Website Development Company in India | Techmapperz",
    description: "Techmapperz offers custom website development, eCommerce solutions & web applications in India. SEO-friendly, responsive & conversion-focused websites.",
    alternates: {
        canonical: `${BASE_URL}/website-development-company-india`,
    },
};

const WebDevelopment = () => {
    // WebsiteIntroduction data
    const imageSrc = "/website_Development_service_img/webdevelopment_introduction_ing.png";
    const imageAlt = "Custom Website Development Company in India";
    const mainParagraph = "Techmapperz Is A Leading Website Development Company In India Offering Custom Web Design, ECommerce Development, And Web Application Solutions. We Build Responsive, Fast-Loading, And SEO-Friendly Websites Tailored For Startups, SMEs, Enterprises, And Government Organizations.";
    const rightParagraph = "We Combine UI/UX Design, Modern Development Technologies, And Performance Optimization To Ensure Your Website Attracts Traffic And Converts Visitors Into Clients.";
    
    const services = [
        { text: "Custom Website Development", highlight: "" },
        { text: "E-Commerce Solutions.", highlight: "" },
        { text: "Web Portal Development.", highlight: "" },
        { text: "Website Maintenance & Support.", highlight: "" }
    ];
    const backgroundText = "Web Development";

    const ourServicesData = [
        {
            id: 1,
            title: "Custom Website Development",
            icon: "/website_Development_Services_icon/Custom_Website_Development.svg",
            description: "We build fully customized websites tailored to your business goals, brand identity, and target audience. Our websites are designed for speed, performance, and user experience, ensuring seamless functionality across all devices and browsers. Perfect for corporate websites, service-based companies, GIS & drone service providers, startups, and professional firms."
        },
        {
            id: 2,
            title: "E-Commerce Website Development",
            icon: "/website_Development_Services_icon/E-Commerce Website Development.svg",
            description: "Launch a powerful online store with secure payment gateways, smooth checkout flow, inventory management, and scalable architecture. We develop e-commerce websites that are optimized for sales, performance, and customer retention. Whether you're selling electronics, fashion, industrial products, or specialized services, we build online stores designed to convert visitors into customers."
        },
        {
            id: 3,
            title: "Web Portal Development",
            icon: "/website_Development_Services_icon/Web Portal Development.svg",
            description: "We develop robust and scalable web portals for enterprises, organizations, and communities. Our portals support advanced features such as user roles, dashboards, data management, reporting, and API integrations."
        },
        {
            id: 4,
            title: "Website Maintenance & Technical Support",
            icon: "/website_Development_Services_icon/Website Maintenance and Support.svg",
            description: "Keep your website secure, updated, and performing at its best with our ongoing maintenance and support services. We handle security patches, performance optimization, content updates, backups, and technical monitoring, so you can focus on your business."
        }
    ];

    const itTechItems = [
        { name: "React", icon: <FaReact />, bg: "#f0f5ff", textColor: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, bg: "#f5f5f5", textColor: "#339933" },
        { name: "JavaScript", icon: <FaJs />, bg: "#fff0f0", textColor: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, bg: "#fff0f0", textColor: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, bg: "#f0f5ff", textColor: "#1572B6" },
        { name: "PHP", icon: <FaPhp />, bg: "#f0f5ff", textColor: "#777BB4" },
        { name: "MongoDB", icon: <FaDatabase />, bg: "#f5f5f5", textColor: "#47A248" },
        { name: "Git", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#181717" },
        { name: "Docker", icon: <FaDocker />, bg: "#f0f5ff", textColor: "#2496ED" },
        { name: "NPM", icon: <FaNpm />, bg: "#f5f5f5", textColor: "#CB3837" },
        { name: "SQL", icon: <SiMysql />, bg: "#f0f5ff", textColor: "#4479A1" }
    ];

    const faqData = [
        {
            question: "1. How long does it take to develop a website?",
            answer: "A standard business website typically takes 2–4 weeks. E-commerce websites and custom web portals may take 4–8 weeks depending on features, integrations, and design requirements.",
        },
        {
            question: "2. Will my website be mobile-friendly and SEO-optimized?",
            answer: "Yes. All websites we develop are fully mobile responsive, fast-loading, and structured with SEO best practices including optimized URLs, meta tags, schema mark-up, and performance optimization to improve Google rankings.",
        },
        {
            question: "3. Do you provide e-commerce website development services?",
            answer: "Yes, we build secure and scalable e-commerce websites with payment gateway integration, inventory management, GST billing, shipping integration, and admin dashboards.",
        },
        {
            question: "4. Can you redesign my existing website?",
            answer: "Absolutely. We offer website redesign services to improve UI/UX, performance, security, and SEO ranking. We can also migrate your website to modern frameworks if required.",
        },
        {
            question: "5. Do you offer website maintenance and support?",
            answer: "Yes, we provide ongoing website maintenance including security updates, speed optimization, content updates, backups, and technical support to ensure smooth operation.",
        },
        {
            question: "6. What technologies do you use for website development?",
            answer: "We work with modern technologies including React, Next.js, PHP, Laravel, CodeIgniter, WordPress, and custom CMS solutions depending on your business needs.",
        },
        {
            question: "7. Do you integrate CRM or third-party tools?",
            answer: "Yes. We integrate CRM systems, WhatsApp Business API, payment gateways, analytics tools, ERP systems, and other third-party applications to automate your business operations.",
        },
        {
            question: "8. How can I get started with Techmapperz?",
            answer: "You can contact us through our website or request a free consultation. We analyze your requirements and provide a customized proposal based on your goals and budget.",
        },
    ];

    const bannerData = {
        title: "Custom Website Development Company in India",
        subtitle: "Responsive, SEO-Optimized Business & E-Commerce Websites Built With Modern Technologies",
        description: "",
        buttonText: "Request a Proposal",
        bgImage: "/website_Development_service_img/hero_img.png",
        buttonGradient: true,
        imageAlt: "Custom Website Development Company in India"
    };



    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'Web Development', url: `${BASE_URL}/website-development-company-india` }
            ]} />
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full overflow-hidden">
                <WebDevIntroduction 
                    title="Introduction"
                    mainParagraph={mainParagraph} 
                    rightParagraph={rightParagraph}
                    services={services} 
                    imageAlt={imageAlt} 
                    imageSrc={imageSrc} 
                />

                <AdvancedServices
                    title="Our Website Development Services"
                    description="We Design And Develop Mobile-Responsive, Fast, Secure, And Scalable Websites That Help Businesses Establish A Strong Online Presence And Generate Real Results"
                    services={ourServicesData}
                />

                <WhyWebDevImportant />

                <Roadmap />

                <WebsiteDesignElements />
                <WhyChooseTechmapperz
                    heading={'Why Choose Techmapperz for Website Development'}
                />

                {/* <div className="py-20 relative bg-[#0a0f1c] overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/Photos/circuit-board.svg')", backgroundSize: 'cover' }}></div>

                  
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

                    <div className="max-w-[1600px] m-auto px-4 md:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                           
                            <div className="order-2 lg:order-1 relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[40px] blur-xl opacity-50"></div>
                                <div className="relative">
                                    <CaseStudyCard filter="Web Development" limit={1} />
                                </div>
                            </div>

                          
                            <div className="order-1 lg:order-2 text-left lg:pl-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wider mb-6">
                                    PROVEN RESULTS
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                                    Our Web Development <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                        Case Studies
                                    </span>
                                </h2>
                                <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed max-w-xl">
                                    Explore how we have transformed businesses through custom website development and eCommerce solutions. Our data-driven approach ensures digital experiences that captivate audiences and drive measurable growth.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                                    <Link href="/portfolios" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-2">
                                            View All Case Studies
                                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                                    </Link>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-white hidden p-[2px] sm:block">100%</div>
                                            <div className="text-gray-400 text-sm hidden p-[2px] sm:block">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                
                {/* <TechStack techItems={itTechItems} /> */}

                

                <FAQ faqData={faqData} />

                <PremiumBottomBanner />
            </section>
        </div>
    );
}

export default WebDevelopment;