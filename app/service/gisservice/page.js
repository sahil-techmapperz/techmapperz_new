// pages/gisServices.js
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import HeroButtons from '@/app/_Components/HeroButtons';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import { createOptimizedLoader, ISR_CONFIGS } from '@/app/lib/utils/performanceOptimizer';

import GIS_Mapping from "@/public/gis_images/GIS_Main_Page/GIS_Mapping.webp";
import GIS_Consulting from "@/public/gis_images/GIS_Main_Page/GIS_Consulting.webp";
import GIS_Data_Digitization from "@/public/gis_images/GIS_Main_Page/GIS_Data_Digitization.webp";
import Web_GIS from "@/public/gis_images/GIS_Main_Page/Web_GIS.webp";
import GIS_Survey from "@/public/gis_images/GIS_Main_Page/GIS_Survey.webp";
import GISintroImg from "@/public/gis_images/GISintroImg.webp";

// Critical above-the-fold components

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

const FAQ = dynamic(() => import('@/app/_Components/FAQ'), {
  ...createOptimizedLoader("500px", "bg-black")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "GIS Consulting & Mapping Services | Web GIS Applications | Techmapperz",
  description: "Techmapperz is India's leading GIS service provider. We offer high-accuracy GIS data, end-to-end geospatial solutions, and cost-effective GIS solutions to drive better decision-making and operational efficiency.",
  alternates: {
    canonical: `${BASE_URL}/service/gis/gisservice`,
  },
};

export const categoryData = [
  {
    name: 'GIS Mapping ',
    image: GIS_Mapping,
    link: '/service/gisservice/gismapping'
  },
  {
    name: 'Data Digitization',
    image: GIS_Data_Digitization,
    link: '/service/gisservice/datadigitization'
  },
  {
    name: 'GIS Consulting',
    image: GIS_Consulting,
    link: '/service/gisservice/gisconsulting'
  },
  {
    name: 'Web GIS Development',
    image: Web_GIS,
    link: '/service/gisservice/webgisdevelopment'
  },
  {
    name: 'GIS Surveying',
    image: GIS_Survey,
    link: '/service/gisservice/gissurveying'
  }
];

const count = categoryData.length;

const features = [
  {
    img: '/gis_images/why_choose_gis_icons/High_Accuracy_Data.svg',
    title: 'High Accuracy Data',
    description: 'We deliver accurate and error-free project results with our advanced tools and skilled team helping analysis and decision-making.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/End_To_End_Solutions.svg',
    title: 'End To End Solutions',
    description: 'Techmapperz provide end-to-end solutions as per project requirements whether it is urban planning or environmental monitoring.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/cost_effective.svg',
    title: 'Cost-Effective',
    description: 'We provide affordable prices while maintaining quality, delivering high-value services to businesses and organizations of any size.'
  },
  {
    img: '/gis_images/why_choose_gis_icons/fast_turnaround.svg',
    title: 'Fast Turnarounds',
    description: 'With effective workflows, skilled team, and without compromising on accuracy we ensure your projects remain on schedule.'
  }
];

const faqData = [
  {
    question: "1.	How does GIS Mapping improve operational efficiency?",
    answer: "Through GIS Mapping businesses can derive data-based choices through their visualization of complicated geographic information. The use of accurate maps in urban planning together with the logistics field leads to resource optimization cost reduction and better industry-wide decision-making capabilities.",
  },
  {
    question: "2.	What is the role of Navigation Mapping in GIS?",
    answer: "Distribution paths and trip durations become shorter because Navigation Mapping generates correct location datasets. Operational efficiency as well as customer satisfaction improve through the use of this solution in logistics and fleet management systems for mobility applications.",
  },
  {
    question: "3.	What is Utility Mapping, and how does it help infrastructure management?",
    answer: "The utility mapping system delivers complete information about the infrastructure networks of water, electricity and gas distribution systems. This solution enables administrative entities and business operators to handle infrastructure management and development planning and to stop accidents at building sites or while excavating.",
  },
  {
    question: "4.	How does Cadastral Mapping support land management?",
    answer: "The Cadastral Mapping system presents complete property records which visualize land parcels and establish boundaries together with the property ownership info. Property developers as well as governments together with urban planners need to settle disputes so they can optimize their land management functions.",
  },
  {
    question: "5.	How can GIS help in agricultural operations?",
    answer: "GIS users can optimize farming practices since they receive information about different soil types and irrigation systems and local weather patterns from Agricultura Mapping. Through GIS applications farmers can reach higher production statistics and reduce losses along with practicing farming more sustainably.",
  },
  {
    question: "6.	How does Data Digitization enhance GIS functionality?",
    answer: "The process of Data Digitization transforms physical documents and mapping products into digital data formats which can be used by GIS systems. The digital transformation enables organizations to enhance data control and accuracy as well as achieve better operational integration and make enhanced operational decisions.",
  },
  {
    question: "7.	Can Techmapperz develop customized GIS applications for my business?",
    answer: "Yes, Our business builds customized GIS applications through mobile and web platform development. Mobile applications provided by this solution enable team members to view and work with geospatial data through any location thus enhancing their operational efficiency and decision capabilities.",
  },
  {
    question: "8.	Why should I choose Techmapperz for my GIS needs?",
    answer: "Techmapperz integrates forward-thinking GIS technology through their experts who understand numerous industries. The combination of our specific solutions together with our expert team along with our focus on quality delivers accurate and reliable and time-sensitive geospatial data which enables business accomplishments.",
  },
  {
    question: "9. How can GIS Surveying improve construction projects? ",
    answer: "Construction projects require exact geospatial data that comes from GIS Surveying methods. The implementation of GIS enables correct measurement of land parcels while defining boundaries and revealing terrain details which leads to organized construction planning and implementation projects."
  },
  {
    question: "10. What is LiDAR Surveying, and why is it important? ",
    answer: "Practical 3D Earth surface information results from the laser-based LiDAR Surveying technology. The mapping of inaccessible places including forests and floodplains as well as infrastructure model creation relies on accurate data delivered by LiDAR."
  }
];

const gisservice = () => {

  const introData = {
    imageSrc: GISintroImg,
    imageAlt: "GIS Services",
    paragraphs: [
      "At Techmapperz we help transform your operations, improve your decision-making, and accelerate your growth with the help of our GIS solutions. We offer end-to-end GIS Solutions that help the public & Government organizations, improve their decision support system. Our goal is simple: to give detailed and accurate spatial data insights that facilitate better decision-making, operational efficiency, and strategic planning."
    ],
    services: [
      { text: "High Accuracy", highlight: "GIS Data" },
      { text: "End-to-End", highlight: "Geospatial Services" },
      { text: "High-Precision", highlight: "Outputs" },
      { text: "Cost-Effective  & ", highlight: "Scalable Solution" }
    ],
    backgroundText: "GIS Services"
  };

  return (
    <>
      <div className="bg-black text-white relative overflow-hidden">
        <ScrollToTop />

        <section
          className="w-full min-h-[90vh] flex items-center relative bg-cover bg-center bg-no-repeat pt-20"
          style={{ backgroundImage: `url('/GIS_Service/GIS_Service.png')` }}
        >
          <div 
            className="max-w-[1600px] w-full mx-auto px-20 max-sm:px-4 relative z-10 flex flex-col gap-6"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            <div className="w-fit border border-[#4a5f82] bg-[#2a3c5a]/40 backdrop-blur-sm text-[#799ccc] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              CUTTING-EDGE GIS SOLUTIONS SERVICE PROVIDER IN INDIA
            </div>

            <h1 className="text-4xl lg:text-[45px] max-sm:text-4xl font-bold text-white max-w-[900px] leading-[1.2]">
              GIS Mapping & Geospatial  <br className="hidden lg:block" />
              Solutions for Smart Planning <br className="hidden lg:block" />
              & Decision Making
            </h1>

            <p className="lg:text-[17px] text-gray-300 max-w-2xl capitalize text-lg">
             Leading IT Strategy & Consulting Company in India.
            </p>

            <HeroButtons button1Text="Get a Free Consultation" button2Text="View Our Work" />
          </div>
        </section>
        <section>

          <WebsiteIntroduction
            imageSrc={introData.imageSrc}
            imageAlt={introData.imageAlt}
            paragraphs={introData.paragraphs}
            services={introData.services}
            backgroundText={introData.backgroundText}
          />
          <GisServices_Services_We_Offer categoryData={categoryData} count={count} />
          <WhyChooseTechmapperz features={features} heading={'Why Choose Techmapperz for GIS Services'} />
          <FAQ faqData={faqData} />

        </section>
      </div>
    </>
  );
};

export default gisservice;
