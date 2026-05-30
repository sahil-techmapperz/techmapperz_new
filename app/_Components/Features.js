"use client";
import { motion } from "framer-motion";
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
      desc: "We supply superior Web apps and dynamic websites with a highly responsive design. In close collaboration with clients, our web developers create aesthetically pleasing websites. We are working as a leading web development team building robust back ends and dynamic front end structures.",
      icon: <Image src={web_dev} className="w-[40px]" alt="Web Development Icon" />,
      hover_icon: web_dev_Color_changed,
      link: "/service/it-services/web-development"
    },
    {
      backImage: "Photos/feature_2.webp",
      title: "App Development",
      desc: "We offer top tier mobile app design and functionality with a well equipped development team using the best application program interface. The goal is to build secure and scalable IT applications on diverse platforms.",
      icon: <Image src={app_dev} className="w-[40px]" alt="Mobile App Development Icon" />,
      hover_icon: app_dev_Color_changed,
      link: "/service/it-services/mobile-development"
    },

    {
      backImage: "Photos/feature_4.webp",
      title: "CRM Solution",
      desc: "We are offering tailored CRM software development solutions. At Techmapperz, we design & develop custom CRM systems that seamlessly align with your business objectives, enabling you to efficiently manage interactions, track sales, and gain valuable insights from customer data.",
      icon: <Image src={crm} className="w-[40px]" alt="CRM Solution Icon" />,
      hover_icon: crm_Color_changed,
      link: "/service/it-services/crm"
    },
    {
      backImage: "Photos/feature_5.webp",
      title: "IT Consulting",
      desc: "Grow your business with our expert IT consulting and advisory services. At Techmapperz, we deliver strategic insights and innovative solutions developed for your specific challenges. Partner with us to turn your IT vision into reality and drive your business forward.",
      icon: <Image src={consultant} className="w-[40px]" alt="IT Consulting Icon" />,
      hover_icon: consultant_Color_changed,
      link: "/service/it-services/it-consulting"
    },

    {
      backImage: "Photos/feature_3.webp",
      title: "Drone Services",
      desc: "As your number one trusted GIS partner we deliver precision drone data capture ensuring high precision data accuracy. Having the best drone technology at our end, we assure this.",
      icon: <Image src={drone} className="w-[40px] h-[40px]" alt="Drone Service Icon" />,
      hover_icon: drone_Color_changed,
      link: "/service/drone-services"
    },



    {
      backImage: "Photos/feature_6.webp",
      title: "GIS Solution",
      desc: "Enhance business with powerful GIS service analytics. By harnessing vast amounts of location based data to understand current dynamics, you can predict future trends. Leverage big data intelligence with intuitive tools that optimize processes and unlock a new perspective.",
      icon: <Image src={GIS} className="w-[40px]" alt="GIS Service Icon" />,
      hover_icon: GIS_Color_changed,
      link: "/service/gis-services"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1600px] mx-auto z-10 relative pt-4"
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={itemVariants} className="w-full h-full">
          <FlipCard
            title={feature.title}
            desc={feature.desc}
            icon={feature.icon}
            link={feature.link}
            hover_icon={feature.hover_icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;
