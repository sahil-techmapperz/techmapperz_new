import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamicImport from 'next/dynamic';
import { FaReact, FaAndroid, FaApple, FaGithub, FaDatabase, FaNpm } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiFirebase, SiReactnative } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';

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

const CaseStudyCard = dynamicImport(() => import('@/app/_Components/CaseStudyCard'), {
    ...createOptimizedLoader("400px", "bg-black")
});

const PremiumBottomBanner = dynamicImport(() => import('@/app/_Components/PremiumBottomBanner'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
    title: "Custom Mobile App Development Company | Android & iOS Apps | Techmapperz",
    description: "Techmapperz is a leading Mobile App development service provider in India. We develop intuitive and smooth functioning mobile applications with highly secure features and robust development technologies..",
    alternates: {
        canonical: `${BASE_URL}/service/it-services/mobile-development`,
    },
};

const Mobile_development = () => {
    const introData = {
        imageSrc: "/Photos/mobiledevelopment_introduction.webp",
        imageAlt: "Mobile Development",
        paragraphs: [
            "Techmapperz is a leading Mobile App development service provider in India. Whether  you want a Native web app for android or ios or custom apps using Flutter or React Native, we have developed it all for our customers. At Techmapperz, we offer end-to-end mobile app development services to fulfill your needs and boost your business.",
        ],
        services: [
            { text: "Custom Mobile Apps Built to ", highlight: "Boost Your Business" },
            { text: "Fully responsive and ", highlight: "User-friendly Design and Development" },
            { text: "End-to-end solution for ", highlight: "Mobile App Development" },
            { text: "Architectural ", highlight: "Integrity and Data Security" }
        ],
        backgroundText: "Mobile Apps"
    };

    const mobileServicesData = [
        {
            id: 1,
            title: "Android App Development",
            icon: "/app_development_icon/Native app.svg",
            description: "We offer fully functional, user-friendly Android Mobile App development services. Our experienced mobile app development team customises the app to your business requirements. We create Android apps that not only grow your business but also boost your brand promotion."
        },
        {
            id: 2,
            title: "iOS App Development",
            icon: "/app_development_icon/Native app.svg",
            description: "Want to shine on the App Store? Our iOS app development team integrates cutting-edge technology with interactive design to build your ideas into reality. We specialize in delivering seamless user experiences, optimized applications, and dashboards that capture your user's attention. Here at Techmapperz, we’ll help you turn your business idea into an iOS application."
        },
        {
            id: 3,
            title: "Progressive Web App Development",
            icon: "/app_development_icon/Hybrid App.svg",
            description: "As a Progressive web App development company, our web app development services integrate cutting-edge technology with a human touch, ensuring every app user’s journey is both seamless and engaging. Understanding your vision and aiming, our expert designers and developers create an app that can leave an impact that is not just aesthetic but also quantifiable. "
        },
        {
            id: 4,
            title: "Native App Development",
            icon: "/app_development_icon/User Interface.svg",
            description: "Our experienced Native App development service developed a fast user-centric cross-platform mobile application. We have a team of skilled native app developers who use their technical knowledge and user-friendly design technology to build apps that are intuitive, beautiful, and perform seamlessly. We will work together from the first brainstorm to decide what your goals are, what features are necessary, and what your ideal user flow should look like."
        },
        {
            id: 5,
            title: "E-Commerce App Development",
            icon: "/app_development_icon/Business Solution.svg",
            description: "At Techmapperz, we deliver responsive, safe, and speedy e-commerce mobile apps that customers love. From user-friendly navigation of your site to seamless checkouts, we’ll help you turn casual browsers into confirm buyers—at their fingertips."
        }
    ];

    const faqData = [
        {
            question: "1.	How Do I choose the right mobile app development framework?",
            answer: "Techmapperz helps you select the best framework based on your app’s functionality, scalability, and target audience, ensuring smooth performance, security, and future growth opportunities.",
        },
        {
            question: "2.   How long does it take to build a responsive Mobile App?",
            answer: "The timeline depends on the app's complexity, but most projects take anywhere from a few weeks to several months for a fully functional launch.",
        },
        {
            question: "3.	How much does it cost to develop a mobile app?",
            answer: "Costs vary based on features, platform, and challenges. We offer affordable pricing and customized solutions to fit your business needs.",
        },
        {
            question: "4.	What are the differences between Native and Hybrid mobile app development?",
            answer: "Native apps are built for a specific platform (iOS or Android) for top performance, while Hybrid apps work across platforms with a single codebase, reducing development time and cost.",
        },
        {
            question: "5.	Can you integrate new technologies like AI, and ML into my App?",
            answer: "Absolutely! We specialize in AI-driven features like chatbots, predictive analytics, and automation to enhance your app’s functionality.",
        },
        {
            question: "6.	Do you provide post-launch support and updates?",
            answer: "Yes, we offer ongoing support, updates and maintenance to keep your app running smoothly and up-to-date with the latest trends.",
        },
        {
            question: "7.	How do you handle app security and data privacy?",
            answer: "Protecting your app and user data is our top priority. We use encryption, secure authentication, and follow data protection regulations to ensure maximum security.",
        },
        {
            question: "8.	Can you help with App store submission and approvals?",
            answer: "Yes, we handle the entire app store submission process, ensuring your app meets all guidelines for a smooth approval on both the Apple App Store and Google Play Store.",
        },
    ];

    const mobileTechItems = [
        { name: "React Native", icon: <TbBrandReactNative />, bg: "#f0f5ff", textColor: "#61DAFB" },
        { name: "Android", icon: <FaAndroid />, bg: "#f5f5f5", textColor: "#3DDC84" },
        { name: "iOS", icon: <FaApple />, bg: "#fff0f0", textColor: "#000000" },
        { name: "Flutter", icon: <SiFlutter />, bg: "#f0f5ff", textColor: "#02569B" },
        { name: "Kotlin", icon: <SiKotlin />, bg: "#f0f5ff", textColor: "#7F52FF" },
        { name: "Swift", icon: <SiSwift />, bg: "#fff0f0", textColor: "#F05138" },
        { name: "Firebase", icon: <SiFirebase />, bg: "#f5f5f5", textColor: "#FFCA28" },
        { name: "Git", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#181717" },
        { name: "MongoDB", icon: <FaDatabase />, bg: "#f5f5f5", textColor: "#47A248" },
        { name: "NPM", icon: <FaNpm />, bg: "#f5f5f5", textColor: "#CB3837" }
    ];

    const bannerData = {
        title: "Custom Mobile App That Boosts Your Business.",
        subtitle: "Next-Gen Mobile App Development Company",
        buttonText: "Request a Proposal",
        buttonGradient: true,
        bgImage: "/app_developments/hero_banner.png"
    };

    const WhyChooseTechmapperzfunctions = [
        {
            img: '/flexibility.svg',
            title: 'Flexibility',
            description: 'We understand your need, and sometime we know that it can be time critical yet should be affordable.'
        },
        {
            img: '/Quality.svg',
            title: 'Quality',
            description: 'Quality makes us excel. Our approach is designed to provide it at all levels of functioning up to the micro level details.'
        },
        {
            img: '/Friendly.svg',
            title: 'Security',
            description: 'Our team planning is so efficient that the project overall time is not extended, thus keeping the overall cost in check.'
        },
        {
            img: '/reduce_cost.svg',
            title: 'Reduce cost',
            description: 'Our team planning is so efficient that the project overall time is not extended and thus keeping the overall cost in check.'
        }
    ];

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'Mobile App Development', url: `${BASE_URL}/service/it-services/mobile-development` }
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
                    title="Services we offer"
                    description="We develop high-performance, user-friendly mobile apps customized to your business needs, ensuring innovation, scalability, and seamless user experiences."
                    services={mobileServicesData}
                />

                <div className="py-20 relative bg-[#0a0f1c]">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/Photos/circuit-board.svg')", backgroundSize: 'cover' }}></div>
                    <div className="max-w-[1600px] m-auto px-4 md:px-8 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-wide">
                            Our Mobile Application <span className="text-blue-500">Case Studies</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                            Explore some of our recently completed Mobile Development projects.
                        </p>
                        <CaseStudyCard filter="Mobile Application" />
                        <div className="mt-16">
                            <Link href="/portfolios" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                View Full Case Studies
                            </Link>
                        </div>
                    </div>
                </div>

                <TechStack techItems={mobileTechItems} />

                <WhyChooseTechmapperz
                    features={WhyChooseTechmapperzfunctions}
                    heading={'Why Choose Techmapperz for Mobile App Development'}
                />

                <FAQ faqData={faqData} />

                <PremiumBottomBanner />
            </section>
        </div>
    );
};

export default Mobile_development;
