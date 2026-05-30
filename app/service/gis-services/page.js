// pages/gisServices.js
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';

import GIS_Mapping from "@/public/gis_images/GIS_Main_Page/GIS_Mapping.webp";
import GIS_Consulting from "@/public/gis_images/GIS_Main_Page/GIS_Consulting.webp";
import GIS_Data_Digitization from "@/public/gis_images/GIS_Main_Page/GIS_Data_Digitization.webp";
import Web_GIS from "@/public/gis_images/GIS_Main_Page/Web_GIS.webp";
import GIS_Survey from "@/public/gis_images/GIS_Main_Page/GIS_Survey.webp";
import GISintroImg from "@/public/gis_images/GISintroImg.webp";

// Critical above-the-fold components
const WebsiteBanner = dynamic(() => import('@/app/_Components/PremiumWebsiteBanner'), {
  ssr: true,
  ...createOptimizedLoader("500px", "bg-[#020617]")
});

const WebsiteIntroduction = dynamic(() => import('@/app/_Components/WebsiteIntroduction'), {
  ssr: true,
  ...createOptimizedLoader("400px", "bg-black")
});

// Below-the-fold components - lazy load
const GisServices_Services_We_Offer = dynamic(() => import('@/app/_Components/GisServices_Services_We_Offer'), {
  ...createOptimizedLoader("500px", "bg-gray-900")
});

const WhyChooseTechmapperz = dynamic(() => import('@/app/_Components/WhyChooseTechmapperz'), {
  ...createOptimizedLoader("400px", "bg-gray-800")
});

const PremiumOpenFAQ = dynamic(() => import('@/app/_Components/PremiumOpenFAQ'), {
  ...createOptimizedLoader("500px", "bg-black")
});

const ServiceCaseStudy = dynamic(() => import('@/app/_Components/ServiceCaseStudy'), {
  ...createOptimizedLoader("400px", "bg-[#0a0f1c]")
});

const CrmIndustries = dynamic(() => import('@/app/service/it-services/crm/CrmIndustries'), {
  ...createOptimizedLoader("400px", "bg-[#030712]")
});

const PremiumBottomBanner = dynamic(() => import('@/app/_Components/PremiumBottomBanner'), {
  ...createOptimizedLoader("400px", "bg-[#020617]")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS Mapping & Geospatial Services Company in India|Techmapperz GIS Services",
  description: "Techmapperz offers GIS Mapping & Geospatial Services in India for Utilities, Agriculture, Urban Planning & Infrastructure Projects for businesses and Government. High-accuracy data with custom GIS solutions.",
  alternates: {
    canonical: `${BASE_URL}/service/gis-services`,
  },
};

export const categoryData = [
  {
    name: 'GIS Mapping ',
    image: GIS_Mapping,
    link: '/service/gis-services/gis-mapping'
  },
  {
    name: 'Data Digitization',
    image: GIS_Data_Digitization,
    link: '/service/gis-services/data-digitization'
  },
  {
    name: 'GIS Consulting',
    image: GIS_Consulting,
    link: '/service/gis-services/gis-consulting'
  },
  {
    name: 'Web GIS Development',
    image: Web_GIS,
    link: '/service/gis-services/web-gis-development'
  },
  {
    name: 'GIS Surveying',
    image: GIS_Survey,
    link: '/service/gis-services/gis-surveying'
  }
];

const count = categoryData.length;

const features = [
  {
    img: '/gis_images/why_choose_gis_icons/High_Accuracy_Data.svg',
    title: 'High Accuracy Data',
    description: 'We deliver accurate and error-free project results with our advanced tools, professional mapping & imaging workflows, and skilled team helping analysis and decision-making through reliable geospatial analytics.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/End_To_End_Solutions.svg',
    title: 'End To End Solutions',
    description: 'Techmapperz provides end-to-end geospatial solutions and GIS services as per project requirements whether it is urban planning, infrastructure development, environmental monitoring, or location intelligence implementation.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/cost_effective.svg',
    title: 'Cost-Effective',
    description: 'We provide affordable prices while maintaining quality, delivering high-value geospatial services and GIS services to businesses and organisations of any size.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/fast_turnaround.svg',
    title: 'Fast Turnarounds',
    description: 'With effective workflows, skilled team, advanced drone surveys, and without compromising on accuracy we ensure your projects remain on schedule.'
  }
];

const faqData = [
  {
    question: "1. How does GIS Mapping improve operational efficiency?",
    answer: "Through GIS Mapping Services and advanced GIS services, businesses can derive data-based choices through the visualisation of complicated geographic information. The use of accurate maps supported by geospatial analytics and location intelligence in urban planning together with the logistics field leads to resource optimisation, cost reduction, and better industry-wide decision-making capabilities through reliable geospatial solutions.",
  },
  {
    question: "2. What is the role of Navigation Mapping in GIS?",
    answer: "Distribution paths and trip durations become shorter because Navigation Mapping generates accurate location datasets through GIS mapping services and advanced geospatial solutions. Operational efficiency as well as customer satisfaction improve through the use of geospatial analytics and location intelligence in logistics and fleet management systems for mobility applications.",
  },
  {
    question: "3. What is Utility Mapping, and how does it help infrastructure management?",
    answer: "The utility mapping services system delivers complete information about the infrastructure networks of water, electricity, and gas distribution systems through accurate GIS mapping services and reliable geospatial solutions. This solution enables administrative entities and business operators to handle infrastructure management and development planning while using location intelligence, and to stop accidents at building sites or during excavation.",
  },
  {
    question: "4. How does Cadastral Mapping support land management?",
    answer: "The cadastral mapping services system presents complete property records which visualise land parcels and establish boundaries together with the property ownership information using accurate GIS mapping services and structured geospatial solutions. Property developers as well as governments together with urban planners use these GIS services to settle disputes so they can optimise their land management functions.",
  },
  {
    question: "5. How can GIS help in agricultural operations?",
    answer: "GIS for agriculture allows users to optimise farming practices since they receive information about different soil types, irrigation systems, and local weather patterns through GIS mapping services and advanced geospatial analytics. Through these GIS services and geospatial solutions, farmers can achieve higher production levels, reduce losses, and practise farming more sustainably",
  },
  {
    question: "6. How does Data Digitization enhance GIS functionality?",
    answer: "The process of GIS data conversion and data digitisation transforms physical documents and mapping products into digital data formats which can be used by GIS services and modern geospatial solutions. This digital transformation enables organisations to enhance data control and accuracy, improve integration within geospatial services, and support better operational decisions through reliable geospatial analytics.",
  },
  {
    question: "7. Can Techmapperz develop customised GIS applications for my business?",
    answer: "Yes, our organisation develops customised GIS applications through mobile and web platform development as part of our GIS consulting services and advanced geospatial solutions. Mobile applications provided through these GIS services enable team members to view and work with geospatial data from any location, improving operational efficiency and strengthening decision-making through reliable location intelligence.",
  },
  {
    question: "8. Why should I choose Techmapperz for my GIS needs?",
    answer: "Techmapperz integrates forward-thinking GIS services and advanced geospatial solutions through experts who understand numerous industries. As a trusted GIS services provider, we combine customised GIS consulting services, skilled professionals, and a strong focus on quality to deliver accurate, reliable, and time-sensitive geospatial data supported by geospatial analytics and location intelligence, enabling successful business outcomes.",
  },
  {
    question: "9. How can GIS Surveying improve construction projects? ",
    answer: "Construction projects require accurate spatial data that comes from GIS surveying services and reliable GIS mapping services. The implementation of GIS services and advanced geospatial solutions enables correct measurement of land parcels, boundary definition, and detailed terrain analysis, which leads to organised construction planning and efficient project implementation supported by geospatial analytics."
  },
  {
    question: "10. What is LiDAR Surveying, and why is it important? ",
    answer: "Practical 3D Earth surface information results from LiDAR survey services and advanced geospatial solutions that use laser-based LiDAR surveying technology. The mapping of inaccessible areas such as forests and floodplains, as well as infrastructure model creation, relies on accurate spatial data supported by GIS mapping services and geospatial analytics."
  }
];

const bannerData = {
  title: "GIS Mapping & Geospatial Solutions for Smart Planning & Decision Making",
  subtitle: "Leading GIS Services Provider Company in India",
  buttonText: "Get a Free Consultation",
  buttonGradient: true,
  bgImage: "/GIS/GIS.png",
  imageAlt: "GIS Services Mapping Solutions"
};

const introData = {
  imageSrc: GISintroImg,
  imageAlt: "GIS Geospatial Services",
  paragraphs: [
    "Techmapperz is a leading GIS services provider company in India. We use satellite and UAV data including drone survey data with advanced spatial analysis and geospatial analytics for accurate mapping & imaging and planning. Our services include land parcel mapping, infrastructure asset mapping, environmental analysis, and utility mapping.",
    "We deliver end-to-end geospatial solutions and location intelligence support for infrastructure and government projects."
  ],
  services: [
    { text: "Successfully completed", highlight: "2000+ sq. km" },
    { text: "Delivered 6000+ km of", highlight: "linear mapping" },
    { text: "High-accuracy", highlight: "GIS mapping services" },
    { text: "Expertise in", highlight: "utility & cadastral mapping" },
    { text: "Reliable GIS consulting for", highlight: "data-driven decisions" }
  ],
  backgroundText: "GIS Solutions"
};

import { BreadcrumbJsonLd } from '@/app/_Components/JsonLd';

const gisservice = () => {

  return (
    <>
      <div className="bg-black text-white">
        <BreadcrumbJsonLd items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Services', url: `${BASE_URL}/service` },
          { name: 'GIS Services', url: `${BASE_URL}/service/gis-services` }
        ]} />
        <ScrollToTop />
        <WebsiteBanner {...bannerData} />
        <section>

          <WebsiteIntroduction
            imageSrc={introData.imageSrc}
            imageAlt={introData.imageAlt}
            paragraphs={introData.paragraphs}
            services={introData.services}
            backgroundText={introData.backgroundText}
          />

          <GisServices_Services_We_Offer categoryData={categoryData} count={count} />

          <div className="py-20 relative bg-[#0a0f1c] overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 opacity-10 mix-blend-screen" style={{ backgroundImage: "url('/Patterns/circuit.svg')", backgroundSize: 'cover' }}></div>
            <div className="max-w-[1600px] m-auto relative z-10 text-center mb-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
                Our GIS Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Success Story</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                See how we transformed operations, improved decision-making, and accelerated growth with geospatial insights.
              </p>

              {/* CTA matching the brief */}
              <div className="flex justify-center mb-12 relative z-20">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all transform hover:-translate-y-1">
                  Talk To Our GIS Experts
                </Link>
              </div>
            </div>

            {/* New Split UI layout for the Case Study */}
            <ServiceCaseStudy type="GIS" />
          </div>

          <WhyChooseTechmapperz features={features} heading={'Why Choose Techmapperz for GIS Services'} />

          <CrmIndustries />

          <PremiumOpenFAQ faqData={faqData} />

          <PremiumBottomBanner />

        </section>
      </div>
    </>
  );
};

export default gisservice;
