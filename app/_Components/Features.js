"use client";
import Link from "next/link";
import dynamic from 'next/dynamic';
import crm from '@/public/Icons/crm.svg'
import drone from '@/public/Icons/drone.svg'
import web_dev from '@/public/Icons/web_dev.svg'
import app_dev from '@/public/Icons/app_dev.svg'
import consultant from '@/public/Icons/consultant.svg'
import GIS from '@/public/Icons/GIS.svg'

import crm_Color_changed from '@/public/Icons/crm_Color_Changed.webp'
import drone_Color_changed from '@/public/Icons/drone_Color_Changed.webp'
import web_dev_Color_changed from '@/public/Icons/web_dev_Color_Changed.webp'
import app_dev_Color_changed from '@/public/Icons/app_dev_Color_changed.webp'
import consultant_Color_changed from '@/public/Icons/consultant_Color_Changed.webp'
import GIS_Color_changed from '@/public/Icons/GIS_Color_Changed.webp'
import Image from "next/image";
import { IMAGE_CONFIGS } from '../lib/utils/performanceOptimizer';

// Lazy load FlipCard for better performance
const FlipCard = dynamic(() => import('./FlipCard'), {
  loading: () => (
    <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl animate-pulse">
      <div className="p-6">
        <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  )
});

const Features = () => {
  const features = [

    {
      backImage: "Photos/feature_1.webp",
      title: "Website Development",
      desc: "Boost your Business sales with the help of our Custom Website Development services. Techmapperz is a top-rated website development company in India for top-rated user interactive, mobile-responsive, and SEO-friendly website design and development.",
      icon: <Image src={web_dev} className="w-[60px]" alt="Website Development Icon" />,
      hover_icon: web_dev_Color_changed,
      link: "/service/it/webdevelopment"
    },
    {
      backImage: "Photos/feature_2.webp",
      title: "App Development",
      desc: "Techmapperz is a leading Mobile App development service provider in India. Whether you want a Native web app for Android or iOS or custom apps using Flutter or React Native, we have developed it all for our customers.",
      icon: <Image src={app_dev} className=" w-[60px] " alt="App Development Icon" />,
      hover_icon: app_dev_Color_changed,
      link: "/service/it/mobiledevelopment"
    },

    {
      backImage: "Photos/feature_4.webp",
      title: "CRM Solution",
      desc: "We are offering tailored CRM software development solutions. At Techmapperz, we design & develop custom CRM systems that seamlessly align with your business objectives, enabling you to efficiently manage interactions, track sales, and gain valuable insights from customer data.",
      icon: <Image src={crm} className="w-[60px]" alt="CRM Solution Icon" />,
      hover_icon: crm_Color_changed,
      link: "/service/it/crmservice"
    },
    {
      backImage: "Photos/feature_5.webp",
      title: "IT Consulting",
      desc: "Grow your business with our expert IT consulting and advisory services. At Techmapperz, we deliver strategic insights and innovative solutions developed for your specific challenges. Partner with us to turn your IT vision into reality and drive your business forward.",
      icon: <Image src={consultant} className="w-[60px]" alt="IT Consulting Icon" />,
      hover_icon: consultant_Color_changed,
      link: "/service/it/itconsultingservice"
    },

    {
      backImage: "Photos/feature_3.webp",
      title: "Drone Services",
      desc: "Elevate your projects with our cutting-edge Drone Survey and Mapping services at Techmapperz. We are providing high-accuracy drone survey & mapping services in India for construction, mining, agriculture & GIS projects. Fast, reliable & cost-effective UAV surveys.",
      icon: <Image src={drone} className="w-[60px]" alt="Drone Services Icon" />,
      hover_icon: drone_Color_changed,
      link: "/service/gis/droneservice"
    },



    {
      backImage: "Photos/feature_6.webp",
      title: "GIS Solution",
      desc: "We offer end-to-end GIS Solutions that help the public & Government organizations, improve their decision support system. Our goal is simple: to give detailed and accurate spatial data insights that facilitate better decision-making, operational efficiency, and strategic planning.",
      icon: <Image src={GIS} className="w-[60px]" alt="GIS Solution Icon" />,
      hover_icon: GIS_Color_changed,
      link: "/service/gis/gisservice"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1600px] mx-auto ">
      {features.map((feature, index) => (
        <FlipCard
          key={index}
          title={feature.title}
          desc={feature.desc}
          icon={feature.icon}
          link={feature.link}
          hover_icon={feature.hover_icon}
        />
      ))}
    </div>
  );
};

export default Features;
