
import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { FaReact, FaAndroid, FaApple, FaGithub, FaDatabase, FaNpm } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiFirebase, SiReactnative } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';

// Critical above-the-fold components
const WebsiteBanner = dynamic(() => import('@/app/_Components/WebsiteBanner'), {
  ssr: true,
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 to-black")
});

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const OurServices = dynamic(() => import('@/app/_Components/OurServices'), {
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const How_Mobile_Applications_Grow_Your_Business = dynamic(() => import('@/app/_Components/How_Mobile_Applications_Grow_Your_Business'), {
  ...createOptimizedLoader("400px", "bg-gray-900")
});

const TechStack = dynamic(() => import('@/app/_Components/TechStack'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamic(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-gray-900")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
    title: "Custom Mobile App Development Company | Android & iOS Apps | Techmapperz",
    description: "Techmapperz is a top-rated mobile app development company in India, crafting custom iOS & Android apps with user-friendly design, robust security, and end-to-end solutions.",
    alternates: {
        canonical: `${BASE_URL}/service/it/mobiledevelopment`,
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
            description: "Want to shine on the App Store? Our iOS app development team integrates cutting-edge technology with interactive design to build your ideas into reality. We specialize in delivering seamless user experiences, optimized applications, and dashboards that capture your user's attention. Here at Techmapperz, we’ll help you turn your business idea into an iOS application."
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

        title: (
            <>
                <span className="text-gradient">Custom Mobile App</span>
                {" "} That Boosts Your Business – {" "}
                <span className="text-gradient">Build, Launch, Grow!</span>
            </>
        ),
        // title: "Custom Mobile App That Boost Your Business – Build, Launch, Grow!",
        subtitle: "Next-Gen Mobile App Development Company",
        description: "",
        buttonText: "Get In Touch",
        imageSrc: "/Photos/mobile_development_Mockup_banner.webp",
        imageAlt: "Web Development Mockup"
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
        <div className="bg-black text-white">

            <ScrollToTop />

            <WebsiteBanner {...bannerData} />



            <section className="w-full bg-black p-10 max-sm:px-4">
                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />
                {/* services we Offer */}
                <OurServices
                    title="Services we offer"
                    headingText=""
                    description="We develop high-performance, user-friendly mobile apps customized to your business needs, ensuring innovation, scalability, and seamless user experiences."
                    imageSrc="/Photos/mobiledevelopment_service_we_offers.webp"
                    imageAlt="Mobile Development Services"
                    services={mobileServicesData}
                />
                {/* Technology We Uses */}
            </section>
            <TechStack techItems={mobileTechItems} />
            <section className="w-full bg-black px-10 max-sm:px-4">
                <How_Mobile_Applications_Grow_Your_Business />
                <WhyChooseTechmapperz
                    features={WhyChooseTechmapperzfunctions}
                    heading={'Why Choose Techmapperz for Mobile App Development'}
                />
                <FAQ faqData={faqData} />
            </section>
        </div>
    );
};

export default Mobile_development;
