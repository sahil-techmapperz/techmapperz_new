import ScrollToTop from '@/app/_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import { FaAndroid, FaApple, FaGithub, FaDatabase, FaNpm, FaCheckCircle } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { createOptimizedLoader } from '@/app/lib/utils/performanceOptimizer';
import Link from 'next/link';
import Image from 'next/image';

// Critical above-the-fold components
const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const OurProcess = dynamic(() => import('@/app/_Components/OurProcess'), {
  ...createOptimizedLoader("300px", "bg-gray-900")
});

const CTABanner = dynamic(() => import('@/app/_Components/CTABanner'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const FeaturedCaseStudy = dynamic(() => import('@/app/_Components/FeaturedCaseStudy'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
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

export const revalidate = 7200;

export const metadata = {
    title: "Mobile App Development Company in India | Android & iOS Apps | Techmapperz",
    description: "Build Android, iOS & cross-platform apps with an India-based team serving clients worldwide. View our portfolio and request a free estimate.",
    alternates: {
        canonical: `${BASE_URL}/service/it/mobile-app-development`,
    },
};



const Mobile_development = () => {

    
    const introData = {
        imageSrc: "/Photos/mobiledevelopment_introduction.webp",
        imageAlt: "Mobile App Development",
        paragraphs: [
            "Techmapperz is a trusted mobile app development company in India delivering powerful, user-friendly, and scalable mobile applications for businesses worldwide.",
            "Whether you need an Android app, iOS app, or cross-platform mobile application using Flutter or React Native, our expert developers build solutions that help your business grow and engage customers. We provide complete end-to-end mobile app development from idea and design to development, testing, and launch."
        ],
        services: [
            { text: "User-friendly & ", highlight: "responsive design" },
            { text: "Secure and ", highlight: "scalable architecture" },
            { text: "End-to-end ", highlight: "development support" },
            { text: "Performance-driven ", highlight: "mobile solutions" }
        ],
        backgroundText: "Mobile Apps"
    };

    const mobileServicesData = [
        {
            id: 1,
            title: "Android app development",
            icon: "/app_development_images/android_app_dev.png",
            description: "We build high-performance Android apps that work well and run smoothly across phones, tablets, and different screen.",
            features: [
                "Secure login, profiles & role-based access",
                "APIs and third-party integrations",
                "Push notifications",
                "Offline mode (if needed)",
                "Payments (if needed)"
            ],
            cta: { text: "Request an Android App Quote", link: "/contact" }
        },
        {
            id: 2,
            title: "iOS app development",
            icon: "/app_development_images/ios_app_dev.png",
            description: "We develop premium iPhone and iPad apps with a clean native look, strong security, and performance optimized for Apple devices.",
            features: [
                "Smooth navigation and animations & iOS-first UI",
                "Secure data handling",
                "App Store submission support",
                "Analytics to track key actions"
            ],
            cta: { text: "Request an iOS App Quote", link: "/contact" }
        },
        {
            id: 3,
            title: "Cross-platform app development",
            icon: "/app_development_images/cross_platform_dev.png",
            description: "If you want one codebase for Android and iOS, we can build with Flutter or React Native when it fits your project.",
            features: [
                "MVPs and fast launches",
                "Product teams that ship often",
                "Budget-friendly multi-platform builds",
                "Consistent UI across devices"
            ],
            cta: { text: "Talk to Us About Cross-Platform", link: "/contact" }
        },
        {
            id: 4,
            title: "E-commerce mobile apps",
            icon: "/app_development_images/ecommerce_apps.png",
            description: "We build e-commerce apps designed for fast browsing, smooth checkout, and repeat purchases with secure payments and easy admin control.",
            features: [
                "Product catalog, filters and search",
                "Cart, checkout & coupon/offer engine",
                "Payment gateway and order tracking",
                "Wishlist, reviews & notifications",
                "Admin panel / inventory & order management"
            ],
            cta: { text: "Build an E-commerce App", link: "/contact" }
        },
        {
            id: 5,
            title: "Maintenance and updates",
            icon: "/app_development_images/app_maintenance.png",
            description: "We provide ongoing support to keep your app secure, fast, and compatible with new Android/iOS releases.",
            features: [
                "Bug fixes and OS updates",
                "Performance monitoring",
                "Small improvements and new features",
                "Security patches & dependency updates"
            ],
            cta: { text: "Get a Support Plan", link: "/contact" }
        }
    ];

    const processSteps = [
        {
            title: "Discovery call",
            descriptions: ["We understand your goal, users, and key features.", "You get a clear scope and timeline."]
        },
        {
            title: "UI/UX design",
            descriptions: ["We design simple screens and a clean user flow.", "You review and approve before development."]
        },
        {
            title: "Development",
            descriptions: ["We build the app in milestones.", "You get regular updates."]
        },
        {
            title: "Testing",
            descriptions: ["We test core flows and edge cases.", "We fix issues before launch."]
        },
        {
            title: "Launch",
            descriptions: ["We help publish on Play Store and App Store.", "We track the first releases and stabilize fast."]
        }
    ];

    const faqData = [
        {
            question: "How do I choose the right framework?",
            answer: "We recommend Android native, iOS native, or cross‑platform based on your goals, timeline, and budget. We explain the pros and cons in the discovery call.",
        },
        {
            question: "How long does it take to build a mobile app?",
            answer: "It depends on features and integrations. After discovery, we share a phased plan with milestones and dates.",
        },
        {
            question: "How much does a mobile app cost?",
            answer: "Cost depends on design, features, backend work, and integrations. We can provide an estimate after a short call and basic scope.",
        },
        {
            question: "What is the difference between native and cross‑platform?",
            answer: "Native apps are built separately for Android and iOS. Cross‑platform apps share one codebase for both platforms.",
        },
        {
            question: "Do you support App Store and Play Store submission?",
            answer: "Yes. We help with release builds and submission steps.",
        },
        {
            question: "Do you provide post‑launch updates?",
            answer: "Yes. We can handle fixes, updates, and ongoing improvements.",
        },
        {
            question: "How do you handle security and privacy?",
            answer: "We use secure login methods, HTTPS, safe storage, and access controls. If you have special compliance needs, tell us in discovery.",
        }
    ];

    const mobileTechItems = [
        { name: "React Native", icon: <TbBrandReactNative />, bg: "#f0f5ff", textColor: "#61DAFB" },
        { name: "Android", icon: <FaAndroid />, bg: "#f5f5f5", textColor: "#3DDC84" },
        { name: "iOS", icon: <FaApple />, bg: "#fff0f0", textColor: "#ffffff" },
        { name: "Flutter", icon: <SiFlutter />, bg: "#f0f5ff", textColor: "#02569B" },
        { name: "Kotlin", icon: <SiKotlin />, bg: "#f0f5ff", textColor: "#7F52FF" },
        { name: "Swift", icon: <SiSwift />, bg: "#fff0f0", textColor: "#F05138" },
        { name: "Firebase", icon: <SiFirebase />, bg: "#f5f5f5", textColor: "#FFCA28" },
        { name: "Git", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#ffffff" },
        { name: "MongoDB", icon: <FaDatabase />, bg: "#f5f5f5", textColor: "#47A248" },
        { name: "NPM", icon: <FaNpm />, bg: "#f5f5f5", textColor: "#CB3837" }
    ];

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

            <style dangerouslySetInnerHTML={{
        __html: `
          .case-gradient-text-inline {
            background: linear-gradient(90deg, #f87171, #60a5fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `
      }} />

            <section 
                className="w-full min-h-[100vh] flex items-center relative bg-cover  bg-no-repeat pt-20" 
                style={{ backgroundImage: `url('/Application_Development/mobile_dev_hero.jpg')` }}
            >
                <div className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6">
                    <div className="w-fit border border-[#05d7de]/30 bg-[#05d7de]/10 backdrop-blur-sm text-[#05d7de] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Next-Gen Mobile App Development Company in India
                    </div>
                    
                    <h1 className="text-4xl lg:text-[52px] max-sm:text-3xl font-extrabold text-white max-w-[950px] leading-[1.15]">
                        Custom Mobile App That  <br/>
                        Boosts Your Business – <br/>
                       <span className="case-gradient-text-inline"> Build, Launch, Grow!</span>
                    </h1>
                    
                    <HeroButtons 
                        button1Text="Get a Free App Estimate" 
                        button1Link="/contact" 
                        button2Text="Book for a free consultation" 
                        button2Link="/contact" 
                    />
                </div>
            </section>

            <section className="w-full bg-black p-10 max-sm:px-4">
                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />
            </section>

            {/* Our Mobile App Development Services */}
            <section className="py-16 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#05d7de] text-sm font-semibold tracking-widest uppercase">Our Capabilities</span>
                        <h2 className="text-4xl max-sm:text-2xl font-extrabold text-white mt-3">Our Mobile App Development Services</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#05d7de] to-[#2d5689] rounded-full mx-auto mt-4" />
                    </div>
                    
                    <div className="space-y-12">
                        {mobileServicesData.map((service, index) => (
                            <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-center group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/60 transition-colors shadow-lg`}>
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <div className="w-full max-w-xs aspect-square relative rounded-2xl overflow-hidden border border-[#05d7de]/20 shadow-2xl shadow-[#05d7de]/10 group-hover:border-[#05d7de]/40 group-hover:shadow-[#05d7de]/30 transition-all duration-500">
                                        <Image
                                            fill
                                            src={service.icon} 
                                            alt={service.title} 
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3">
                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Features:</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-gray-300">
                                                    <FaCheckCircle className="text-[#05d7de] mt-1 mr-3 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <Link href={service.cta.link} className="inline-flex items-center text-[#05d7de] font-semibold hover:text-white transition-colors duration-300">
                                        {service.cta.text} &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <OurProcess steps={processSteps} />

            {/* ── FEATURED CASE STUDY ── */}
            <FeaturedCaseStudy />

            <TechStack techItems={mobileTechItems} />

            <section className="w-full bg-black px-10 max-sm:px-4">
                <How_Mobile_Applications_Grow_Your_Business />
                <WhyChooseTechmapperz
                    features={WhyChooseTechmapperzfunctions}
                    heading={'Why Choose Techmapperz for Mobile App Development'}
                />
                <FAQ faqData={faqData} />
            </section>
            
            <CTABanner 
                title="Have a Mobile App Idea in Mind?"
                subtitle="Let's build a scalable, high-performance mobile application tailored for your business."
            />
        </div>
    );
};

export default Mobile_development;
