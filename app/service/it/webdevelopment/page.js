import Image from 'next/image';
import dynamicImport from 'next/dynamic';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { FaJs, FaPhp, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
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

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-900")
});

const TechStack = dynamicImport(() => import('@/app/_Components/TechStack'), {
  ...createOptimizedLoader("300px", "bg-black")
});

const WebsiteDesignElements = dynamicImport(() => import('@/app/_Components/DesignElements'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamicImport(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-gray-900")
});

const Roadmap = dynamicImport(() => import('@/app/_Components/ExpandableCards'), {
  ...createOptimizedLoader("400px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Website Design & Development Company in India | Techmapperz',
    description: 'Techmapperz is a top-rated web development company in India, designing and developing custom, mobile-responsive, and SEO-friendly websites that drive real results.',
    alternates: {
        canonical: `${BASE_URL}/service/it/webdevelopment`,
    },
};

const WebDevelopment = () => {
    // WebsiteIntroduction data
    const imageSrc = "/Photos/webdevelopment_introduction.webp";
    const imageAlt = "Web Development Services";
    const paragraphs = [
        "Transform your digital presence with Techmapperz's expert web development services. We create custom, responsive, and SEO-friendly websites that drive results and enhance your brand's online visibility.",
        "From simple business websites to complex e-commerce platforms, our experienced developers deliver cutting-edge solutions tailored to your specific needs and business objectives."
    ];
    const services = [
        { text: "Custom website development with", highlight: "Modern Technologies" },
        { text: "Responsive design for", highlight: "All Devices" },
        { text: "SEO-optimized websites for", highlight: "Better Visibility" },
        { text: "E-commerce solutions for", highlight: "Online Success" }
    ];
    const backgroundText = "Web Development";

    const ourServicesData = [
        {
            id: 1,
            title: "Custom Website Development",
            icon: "/website_Development_Services_icon/Custom_Website_Development.svg",
            description: "We create bespoke websites tailored to your business needs, ensuring unique design, optimal functionality, and seamless user experience across all devices."
        },
        {
            id: 2,
            title: "E-Commerce Development",
            icon: "/website_Development_Services_icon/E-Commerce Website Development.svg",
            description: "Build powerful e-commerce platforms with secure payment gateways, inventory management, and user-friendly shopping experiences to boost your online sales."
        },
        {
            id: 3,
            title: "Web Portal Development",
            icon: "/website_Development_Services_icon/Web Portal Development.svg",
            description: "Develop comprehensive web portals for businesses, organizations, and communities with advanced features, user management, and scalable architecture."
        },
        {
            id: 4,
            title: "Website Maintenance and Support",
            icon: "/website_Development_Services_icon/Website Maintenance and Support.svg",
            description: "Comprehensive website maintenance services including security updates, performance optimization, content updates, and technical support to keep your site running smoothly."
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
            question: "1.	How Can I choose the best custom website development company for my business?",
            answer: "Look for a company with a proven portfolio, positive client reviews, and a clear understanding of your industry needs.",
        },
        {
            question: "2.	What does a Web Development Company DO?",
            answer: "A web development company designs, builds, and maintains websites and applications, ensuring they are functional and user-friendly.",
        },
        {
            question: "3.	Why is a responsive website so important for my Business?",
            answer: "Responsive website is most important for every business A responsive website enhances user experience across devices, boosts SEO rankings, and helps capture a larger audience.",
        },
        {
            question: "4.	How much a does new website cost?",
            answer: "Website costs vary depending on features, design complexity, and functionality; we provide tailored quotes to fit your unique needs and budget.",
        },
        {
            question: "5.	Will my E-commerce website be mobile-friendly?",
            answer: "Yes, we ensure your E-commerce website is optimized for mobile devices to deliver a smooth shopping experience to customers on the go.",
        },
        {
            question: "6.	Will you maintain my website for me?",
            answer: "Yes, we offer ongoing maintenance services to ensure your website remains secure, up-to-date, and performs optimally.",
        },
        {
            question: "7.	How long does it take to build a responsive Website?",
            answer: "The timeline varies based on project scope but typically ranges from a few weeks to a few months.",
        },
        {
            question: "8.	Can I update the Website myself once it's built?",
            answer: "Yes, we provide you with an easy-to-use content management system (CMS) or Control panel, so you can update your website whenever necessary without needing technical skills.",
        },
    ];

    const bannerData = {
        title: (
            <>
                <span className="text-gradient">Custom  Websites </span>
                {" "}Designed to Promote Your Brand & Boost{" "}
                <span className="text-gradient">Business Growth</span>
            </>
        ),
        subtitle: "TOP RATED AGENCY FOR WEB DEVELOPMENT",
        description: "",
        buttonText: "Get In Touch",
        imageSrc: "/Photos/Webdevelopment_Mockup_banner.webp",
        imageAlt: "Web Development Mockup"
    };

    return (
        <div className="bg-black text-white relative">
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full overflow-hidden">
                <WebsiteIntroduction backgroundText={backgroundText} services={services} paragraphs={paragraphs} imageAlt={imageAlt} imageSrc={imageSrc} />
                <OurServices
                    title="Services we offer"
                    headingText=""
                    description="We create full mobile responsive, fast, secure and user-friendly websites customized to your business needs. From design to development, we build digital experiences that drive results."
                    imageSrc="/Photos/webdevelopment_service_we_offers.webp"
                    imageAlt="Web Development Services"
                    services={ourServicesData}
                />

                <div className=" relative  bg-cover bg-center " style={{ backgroundImage: "url('/Photos/banner_3.webp')" }}>
                    <div className="px-20 py-10 flex max-sm:flex-col-reverse max-sm:gap-2 max-sm:px-2 max-sm:items-center justify-center gap-10 items-center w-full max-w-[1600px] m-auto">
                        <div className="flex flex-col gap-4 w-1/2 max-sm:w-full ">
                            <h1 className="text-4xl max-sm:text-2xl font-bold ">Why Web Design and Web Development is Important?</h1>
                            <p className='text-[18px] max-sm:text-[16px]'>Today the world is connected online, people get to the Internet for any kind of need they may have, in this era Web design and web development are crucial for any business that wants to create an online presence. it is the first impression of your company, make sure it is a good one, and a functioning one as well. A good web design and functionality is also a key element in good sales and business growth.</p>
                        </div>
                        <Image src="/Photos/Why_web Design_Important.webp" unoptimized="true" alt="Why Web Design and Web Development is Important?" className='w-[30%] rounded-md max-sm:w-[90vw]' width={100} height={100} />
                    </div>
                </div>

                <Roadmap />
                <WebsiteDesignElements />
                <TechStack techItems={itTechItems} />

                <WhyChooseTechmapperz
                    heading={'Why Choose Techmapperz for Website Development'}
                />

                <FAQ faqData={faqData} />
            </section>
        </div>
    );
}

export default WebDevelopment;