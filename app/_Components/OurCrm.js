'use client'
import { useState, useEffect } from 'react';

import finance_1 from '@/public/CRM_Carousel/finance_1.webp';
import finance_2 from '@/public/CRM_Carousel/finance_2.webp';
import finance_3 from '@/public/CRM_Carousel/finance_3.webp';
import finance_4 from '@/public/CRM_Carousel/finance_4.webp';

import project_1 from '@/public/CRM_Carousel/project_1.webp';
import project_2 from '@/public/CRM_Carousel/project_2.webp';
import project_3 from '@/public/CRM_Carousel/project_3.webp';
import project_4 from '@/public/CRM_Carousel/project_4.webp';

import sales_1 from '@/public/CRM_Carousel/sales_1.webp';
import sales_2 from '@/public/CRM_Carousel/sales_2.webp';
import sales_3 from '@/public/CRM_Carousel/sales_3.webp';
import sales_4 from '@/public/CRM_Carousel/sales_4.webp';





import Image from 'next/image';

const OurCrm = () => {
    const [activeTab, setActiveTab] = useState('Sales Management');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const managementFeatures = [
        {
            id: "1",
            title: "Sales Management",
            images: [sales_1, sales_2, sales_3, sales_4],
            description: "Sales management is at the core of many businesses, and a well-functioning customer relationship management dashboard provides for lead tracking like. Automating the follow-up process to keep potential clients engaged and tracking performance metrics can directly manage your sales cycle and business growth.",
            features: [
                "Efficient Lead Capturing",
                "Lead Qualification",
                "Engagement & Follow-Ups",
                "Proposal Creation",
                "Proposal Customization",
                "Lead-to-Client Conversion Strategies",
                "Post-Sales Relationship"
            ]
        },
        {
            id: "2",
            title: "Finance Management",
            images: [finance_1, finance_2, finance_3, finance_4],
            description: "Managing your finances can be a difficult juggling act, especially without the right tools. Its techmapperz finance management features make invoicing, collection of payments, and neat expense tracking easily.",
            features: [
                "Automated Bill Payments",
                "Financial Reporting & Analysis",
                "Invoice Management",
                "Timely Billing",
                "Proposal Customization",
                "Ticket Raising & Dispute Resolution",
                "Compliance & Record-Keeping"
            ]
        },
        {
            id: "3",
            title: "Project Management",
            images: [project_1, project_2, project_3, project_4],
            description: "It is no easy feat to take control of multiple projects. As-a result of project management features integrated into the CRM dashboard, projects can be assigned, tracked, and collaborated on without losing momentum.",
            features: [
                "Project Planning & Goal Setting",
                "Daily & Weekly Task Management",
                "Schedule & Conduct Meetings",
                "Resource Allocation",
                "Overall Progress Monitoring",
                "Performance Chart & Reporting",
                "Risk Management & Issue Resolution"
            ]
        }
    ];

    // Auto-play carousel effect
    useEffect(() => {
        const timer = setInterval(() => {
            const activeFeature = managementFeatures.find(f => f.title === activeTab);
            if (activeFeature) {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % activeFeature.images.length
                );
            }
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [activeTab]);

    return (
        <div className=" pb-10 w-full max-w-[1600px] mx-auto">
            <ul className='flex flex-wrap justify-center mb-8'>
                {managementFeatures.map((feature) => (
                    <li key={feature.id} className="m-2">
                        <button
                            onClick={() => {
                                setActiveTab(feature.title);
                                setCurrentImageIndex(0);
                            }}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === feature.title
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {feature.title}
                        </button>
                    </li>
                ))}
            </ul>
            {managementFeatures.map((feature) => (
                activeTab === feature.title && (
                    <div
                        key={feature.id}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 rounded-lg p-6 shadow-lg"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                                {feature.title}
                            </h3>
                            <p className='text-gray-300 text-lg mb-6'>{feature.description}</p>
                            <ul className="space-y-3">
                                {feature.features.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-3 text-gray-300"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[450px] rounded-lg overflow-hidden ">
                            {feature.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity  duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${feature.title} image ${index + 1}`}
                                        className="object-contain object-center min-h-[350px] w-full h-full"
                                        fill
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default OurCrm;