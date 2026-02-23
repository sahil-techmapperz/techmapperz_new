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
const OurCrm = dynamicImport(() => import('@/app/_Components/OurCrm'), {
  ...createOptimizedLoader("400px", "bg-gray-900")
});

const OurServices = dynamicImport(() => import('@/app/_Components/OurServices'), {
  ...createOptimizedLoader("500px", "bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900")
});

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const FAQ = dynamicImport(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "Custom CRM Software Development | CRM Solutions | Techmapperz",
    description: "Techmapperz's custom CRM solution centralizes your data, automates follow-ups, and accelerates growth—all tailored to your unique needs.",
    alternates: {
        canonical: `${BASE_URL}/service/it/crmservice`,
    },
};

const CRM_pages = () => {

    const introData = {
        imageSrc: "/Photos/CRM_Introduction.webp",
        imageAlt: "CRM Solutions",
        paragraphs: [
            "In modern business handling leads, sales, finance, and projects through different applications is the main problem to grow your business. By combining activities and enabling effortless lead management with follow-up automation, modern CRM systems effectively maximise conversion rates. Moreover, task assignment and reporting promptly become cooperative work. This tool does not only help track data seamlessly but it provides insights that lead to significant moves that will save effort and boost productivity."
        ],
        services: [
            { text: "CRM Solution boosts sales and ", highlight: "enhances productivity." },
            { text: "CRM Dashboard simplifies data analysis ", highlight: "for strategic growth." },
            { text: "Customize CRM to enhance ", highlight: "customer engagement." },
        ],
        backgroundText: "CRM Solutions"
    };

    const crmServicesData = [
        {
            id: 1,
            title: "CRM Customization",
            icon: "/crm_services_icon/CRM Consulting.svg",
            description: "CRM customization is the system to fit a business's specific needs, improving efficiency and user experiences. Our CRM involves adjusting features, fields, and workflows to match the company's goals. Techmapperz Customization CRM helps streamline processes and enhances customer relationship management."
        },
        {
            id: 2,
            title: "CRM development",
            icon: "/crm_services_icon/CRM Implementation.svg",
            description: "CRM development includes creating or improving Customer Relationship Management systems, to meet a business's specific needs. This includes the creation of custom features and the best automation of all processes related to the client."
        },
        {
            id: 3,
            title: "CRM Migration",
            icon: "/crm_services_icon/CRM development.svg",
            description: "With global competition you need very carefully to pack up all your valuable customer data, contacts, and workflows, making sure nothing gets lost in the process. With the right approach, CRM migration can feel seamless, helping your business thrive on a platform that offers better features and improved performance, all while keeping things running smoothly behind the scenes."
        },
        {
            id: 4,
            title: "CRM Deployment",
            icon: "/crm_services_icon/CRM Integration.svg",
            description: "As big data is one of the most valued assets in this digital age, how you manage information about your customers can actually make or break your business. Investing in customer relationship management (CRM) software yields many benefits and quickly brings return."
        }
    ];

    const faqData = [
        {
            question: "1.	How much does a CRM Cost?",
            answer: "The cost depends on features, customization, and deployment type. We offer flexible pricing to match your business needs and budget.",
        },
        {
            question: "2.	Why does your team need a CRM?",
            answer: "A CRM helps you organize customer data, Finance management and improve communication, making your team more efficient and productive.",
        },
        {
            question: "3.	What are the benefits of integrating a CRM with other tools?",
            answer: "Integrating your CRM with other tools improves workflow automation, data accuracy, and overall productivity by centralizing business processes.",
        },
        {
            question: "4.	Can the CRM software be customized",
            answer: "Yes! At Techmapperz, we build scalable CRM solutions that grow with your business. You can easily add new features, users, and integrations as your needs evolve.",
        },
        {
            question: "5.	Can I get a mobile-friendly or cloud-based CRM?",
            answer: "Of course! We develop CRMs that work on any device, allowing you to manage your business from anywhere.",
        },
        {
            question: "6.	Will the CRM be scalable as my business grows?",
            answer: "Yes, we design scalable CRM solutions that evolve with your business, accommodating growth and new requirements.",
        },
        {
            question: "7.	DO you provide training and support after CRM deployment?",
            answer: "Yes! Techmapperz offers in-depth training and ongoing support to ensure your team efficiently uses the CRM, maximizing productivity and business growth with seamless operations.",
        },
        {
            question: "8.	Can I migrate my data from an old CRM or spreadsheets to the new CRM?",
            answer: "Absolutely! We ensures a secure, hassle-free migration process, transferring all your valuable data accurately while maintaining system integrity without downtime or data loss.",
        },
    ];

    const bannerData = {
        title: (
            <>
                Unlock Success with our Custom{" "}
                <span className="text-gradient">CRM Solution</span>
            </>
        ),
        subtitle: "TOP RATED AGENCY FOR WEB DESIGN",
        description: "",
        buttonText: "Get In Touch",
        imageSrc: "/Photos/CRM_Mockup_banner.webp",
        imageAlt: "Web Development Mockup"
    };

    return (
        <div className="bg-gray-900 text-white relative overflow-hidden">
            <ScrollToTop />

            <WebsiteBanner {...bannerData} />

            <section className="w-full max-sm:px-5 max-sm:py-4 px-20 py-10 bg-black relative">
                <WebsiteIntroduction
                    imageSrc={introData.imageSrc}
                    imageAlt={introData.imageAlt}
                    paragraphs={introData.paragraphs}
                    services={introData.services}
                    backgroundText={introData.backgroundText}
                />

                <OurCrm />
                <OurServices
                    title="Services We Offer"
                    headingText=""
                    description="At Techmapperz, we deliver comprehensive CRM solutions that streamline your business operations and enhance customer relationships. Our expert team ensures seamless implementation and integration of CRM systems tailored to your needs."
                    imageSrc="/Photos/CRM_Service_we_offer.webp"
                    imageAlt="CRM Development Services"
                    services={crmServicesData}
                />

                <WhyChooseTechmapperz
                    heading={'Why Choose Techmapperz for CRM'}
                />

                <FAQ faqData={faqData} />
            </section>
        </div>
    );
}

export default CRM_pages;