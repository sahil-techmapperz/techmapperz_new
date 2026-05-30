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

const WhyChooseTechmapperz = dynamicImport(() => import('@/app/_Components/PremiumWhyChoose'), {
    ...createOptimizedLoader("400px", "bg-[#030712]")
});

const FAQ = dynamicImport(() => import('@/app/_Components/PremiumFAQ'), {
    ...createOptimizedLoader("500px", "bg-[#0a0f1c]")
});

const ServiceCaseStudy = dynamicImport(() => import('@/app/_Components/ServiceCaseStudy'), {
    ...createOptimizedLoader("400px", "bg-black")
});

const PremiumBottomBanner = dynamicImport(() => import('@/app/_Components/PremiumBottomBanner'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const CrmWorkflows = dynamicImport(() => import('./CrmWorkflows'), {
    ...createOptimizedLoader("400px", "bg-[#060b14]")
});
const CrmDeliveryProcess = dynamicImport(() => import('./CrmDeliveryProcess'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});
const CrmIndustries = dynamicImport(() => import('./CrmIndustries'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});
const CrmCta = dynamicImport(() => import('./CrmCta'), {
    ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export const metadata = {
    title: "CRM Development & Implementation Services | Techmapperz",
    description: "Custom CRM development, implementation, migration & integrations. Streamline sales, finance, and projects with dashboards and automation. Get a quote.",
    alternates: {
        canonical: `${BASE_URL}/service/it-services/crm`,
    },
};

const CRM_pages = () => {
    const introData = {
        imageSrc: "/Photos/CRM_Introduction.webp",
        imageAlt: "Custom CRM Development",
        paragraphs: [
            "Techmapperz offers custom CRM development and implementation services to help businesses manage leads, customers, sales, support, and internal workflows more efficiently. In today’s fast-moving business environment, customer data is often scattered across spreadsheets, emails, accounting tools, marketing platforms, and project trackers.",
            "A well-designed CRM system brings all this information together into one centralized platform, helping your team improve productivity, customer engagement, and decision-making.",
            "Our CRM development services include CRM design, custom development, implementation, customization, data migration, third-party integration, workflow automation, and ongoing support. Whether you need a simple CRM for your growing sales team or an advanced enterprise CRM with automation, analytics, and role-based access control, we build scalable solutions tailored to your business needs."
        ],
        services: [
            { text: "Scalable Solutions tailored to ", highlight: "business needs." },
            { text: "Centralized Platform for ", highlight: "productivity & engagement." },
            { text: "Advanced CRM with ", highlight: "automation & analytics." },
        ],
        backgroundText: "CRM Solutions"
    };

    const crmServicesData = [
        {
            id: 1,
            title: "Sales & lead management",
            icon: "/crm_services_icon/CRM Consulting.svg", // Reusing existing icons for now
            description: "Lead capture, qualification rules, pipeline stages, proposal creation, proposal templates, and lead-to-client conversion workflows — with visibility into every activity."
        },
        {
            id: 2,
            title: "Automation & workflows",
            icon: "/crm_services_icon/CRM Implementation.svg",
            description: "Task routing, SLA reminders, approvals, escalation paths, and notifications that align to your internal process (so your team does less manual chasing and more revenue work)."
        },
        {
            id: 3,
            title: "Integrations",
            icon: "/crm_services_icon/CRM development.svg",
            description: "Connect CRM with your website forms, email, calendars, ERP/accounting tools, support desk, marketing automation, and analytics — so teams don’t re-enter data and leaders finally see end-to-end performance."
        },
        {
            id: 4,
            title: "Reporting & CRM dashboards",
            icon: "/crm_services_icon/CRM Integration.svg",
            description: "Role-based dashboards for leadership, sales managers, finance, and delivery teams, including funnel analytics, conversion rates, revenue forecasting signals, and customer health indicators."
        },
        {
            id: 5,
            title: "Mobile and cloud-ready access",
            icon: "/crm_services_icon/CRM Integration.svg", // Fallback icon
            description: "Secure access for field teams and remote staff, with scalable environments and permission controls designed around how your teams operate."
        }
    ];

    const faqData = [
        {
            question: "How long does a CRM implementation take?",
            answer: "Timelines vary by complexity. A basic CRM setup can take weeks, while enterprise rollouts with integrations and custom modules can take months.",
        },
        {
            question: "Can you migrate data from spreadsheets or an old CRM?",
            answer: "Yes. We plan migration carefully, clean and validate data, and run staged imports so you keep business continuity.",
        },
        {
            question: "Do you build custom CRMs or implement platforms?",
            answer: "Both. We can implement a platform CRM and customize it, or build a custom CRM when your workflows need a more tailored approach.",
        },
        {
            question: "What systems can you integrate with a CRM?",
            answer: "Common integrations include websites/forms, email, calendars, accounting/ERP, support desks, marketing automation, and analytics tools.",
        },
        {
            question: "Will the CRM work on mobile?",
            answer: "Yes. We prioritize responsive or mobile-friendly experiences so field and remote teams can work anywhere.",
        },
        {
            question: "How do you improve user adoption?",
            answer: "We design role-based views, automate repetitive work, and train users on real workflows (not just feature walkthroughs).",
        },
        {
            question: "How do you handle security and permissions?",
            answer: "We implement least-privilege roles, secure authentication, and logging/audit options depending on your platform and requirements.",
        },
        {
            question: "Can the CRM scale as we grow?",
            answer: "Yes. We design for scale — data model, integrations, automation, and reporting — so the CRM can support more users, pipelines, and regions.",
        },
        {
            question: "Do you provide ongoing support after go-live?",
            answer: "Yes. We offer managed support, enhancements, and periodic optimization so your CRM keeps improving.",
        }
    ];

    const bannerData = {
        title: "Custom CRM Development & Implementation Services.",
        subtitle: "CUSTOM CRM DEVELOPMENT Company In INDIA",
        buttonText: "Request a Proposal",
        buttonGradient: true,
        bgImage: "/CRM_Development/CRM_Development.png",
        imageAlt: "CRM Mockup"
    };

    return (
        <div className="bg-black text-white relative">
            <BreadcrumbJsonLd items={[
                { name: 'Home', url: BASE_URL },
                { name: 'Services', url: `${BASE_URL}/service` },
                { name: 'IT Services', url: `${BASE_URL}/service/it-services` },
                { name: 'CRM Solutions', url: `${BASE_URL}/service/it-services/crm` }
            ]} />
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />

            <section className="w-full overflow-hidden">
                <WebsiteIntroduction
                    backgroundText={introData.backgroundText}
                    services={introData.services}
                    paragraphs={introData.paragraphs}
                    imageAlt={introData.imageAlt}
                    imageSrc={introData.imageSrc}
                />

                <CrmWorkflows />

                <AdvancedServices
                    title="CRM features we typically implement"
                    description="Every business is different, but most high-performing CRMs share a strong foundation. Based on your requirements, we can implement:"
                    services={crmServicesData}
                />

                <CrmDeliveryProcess />

                <CrmIndustries />

                <div className="py-20 relative bg-[#0a0f1c] overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>
                    <div className="max-w-[1600px] m-auto relative z-10 text-center mb-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
                            Our CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            See how we transformed internal operations and client relationships.
                        </p>
                    </div>

                    {/* New Split UI layout for the Case Study */}
                    <ServiceCaseStudy slug="techmapperz-crm" type="IT" />
                </div>

                <WhyChooseTechmapperz
                    heading={'Why Choose Techmapperz for CRM'}
                />

                <FAQ faqData={faqData} />

                <CrmCta />
            </section>
        </div>
    );
}

export default CRM_pages;