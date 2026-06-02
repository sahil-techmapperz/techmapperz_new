import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


export const metadata = {
    title: "Geospatial Innovation | GIS Strategy Development | Techmapperz",
    description: "Solve GIS complexities with Techmapperz GIS services. We offer Strategy Development, Spatial Analysis, Remote Sensing, Data Management, and Automation for smarter decision-making.",
    alternates: {
        canonical: `${BASE_URL}/service/gisservice/gisconsulting`,
    },
};


const Gismapping = () => {
    const GisMappingIntrouctiondata = [{
        title: "GIS is the basis of the modern decision-making ecosystem and at Techmapperz it is the key to success. Businesses face tremendous geospatial data problems because of the complexity of GIS itself. Our company provides customized solutions for analysis which in turn help in overcoming those challenges.  We use the latest and advanced that can help in creating new pathways for efficient and smart business systems and their management. From city design and planning to infrastructure and resource management, we are your partners of choice in geospatial innovation.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our GIS Consulting Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "GIS Strategy Development",
                servicedescription:
                    "Implementation of GIS is of great importance and for it to be truly seamless, there is a need of an effective strategy. Documents concerning system architecture, system benefits, technology used, as well as an investment recovery strategy are of vital importance, but most importantly, technology infrastructure which is capable of supporting all this is the most crucial thing. Our team collaborates with you to develop a tailored GIS road map that aligns with your business goals.",
                serviceimg:
                    "/gis_images/gis_services/gis_consulting/gis_strategy.webp"
            },
            {
                id: 2,
                servicetitle:
                    "Spatial Data Analysis and Visualization",
                servicedescription:
                    "We transform raw geospatial data into actionable insights. We specialize in spatial analysis, aiding you in discovering relationships, patterns, and trends in your data. We present complex data in an easily adaptable format, through interactive maps, dynamic dashboards, and engaging infographics and derive actionable strategies for your business.",
                serviceimg:
                    "/gis_images/gis_services/gis_consulting/spatial_data.webp"

            },
            {
                id: 3,
                servicetitle:
                    "Geospatial Data Management ",
                servicedescription:
                    "Working with massive geospatial data can be challenging. Our data management solutions enable you to structure, manage, and enhance your data.We focus on ensuring data integrity, accuracy, and compliance with industry standards, so your information remains reliable and easily accessible whenever needed.",
                serviceimg:
                    "/gis_images/gis_services/gis_consulting/geospatial_data_management.webp"

            },

            {
                id: 4,
                servicetitle:
                    "Remote Sensing and Image Processing",
                servicedescription:
                    "Drone Imagery and High Resolution Satellites can help in crop monitoring, Infrastructural mapping, land use and land cover analysis. We have expertise in Image Processing, Image Classification, Change Detection Analysis and even feature extraction helping our clients to make informed decision-making with the help of the valuable insights.",
                serviceimg:
                    "/gis_images/gis_services/gis_consulting/remote_sensing.webp"

            },

            {
                id: 5,
                servicetitle:
                    "GIS Workflow Automation ",
                servicedescription:
                    "Automate repetitive GIS activities to save time and increase precision. From data updates to map production to report creation, our automated solutions simplify the process, lowering manual labor and eliminating errors. We enable you to drive productivity and divert valuable resources through automating recurrent tasks, keeping your team dedicated to more high-impact strategic activities.",
                serviceimg:
                    "/gis_images/gis_services/gis_consulting/gis_workflow_automation.webp"

            }
            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />

            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/GIS_Consultancy_services.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-red-200/50 to-transparent'>
                    <h1 className="text-4xl lg:text-[45px] max-sm:text-4xl font-bold text-white max-w-[900px] leading-[1.2]">GIS Consulting</h1>
                    <p className="text-center text-gray-400 text-lg lg:text-[17px]">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/gisservice"> GIS Services</Link> / GIS Consulting
                    </p>
                    <div className="flex gap-4">
                        <Link href="/contact">
                            <button
                                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
                            >
                                Get A Free Quote
                                <FaArrowRightLong />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="p-4 sm:p-6 md:p-8 lg:p-20 max-w-[1600px] mx-auto">
                <GisServicesIntroduction GisMappingIntrouctiondata={GisMappingIntrouctiondata} />
                <OurGISService OurGISServices={OurGISServices} />

            </section>
        </div>
    )
}
export default Gismapping 