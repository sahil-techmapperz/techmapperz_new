import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
    title: "Inspection Analysis GIS | Utility Inspection | Techmapperz | Delhi",
    description: "Techmapperz deploys the latest drone technology to perform high accuracy inspection analysis which keeps your infrastructure running safely and smoothly.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice/inspectionandanalysis`,
    },
};


const InspectionandAnalysis = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Techmapperz deploys the latest drone technology to perform high accuracy inspection analysis which keeps your infrastructure running safely and smoothly. Our drone equipments offer data harvesting and analysis, nearly in real-time, which limits the need for outdated inspection for new analysis without comprising on the accuracy and thereby reducing the interruption. Through our industrial drone services, we help clients across a range of industries with regulatory compliance, operational efficiency and early identification of emerging issues before they become espensive to resolve.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Inspection Analysis Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "Infrastructure Inspection: ",
                servicedescription:
                    "We carry high-resolution cameras and sensors aboard our drones for inspecting the details of the images and the data collected during inspections of bridges, towers, buildings, or other infrastructure for speedy identification of wear and tear, structural damage, or other potential risks and safety and long-term durability assurance of critical infrastructure.",
                serviceimg:
                    "/gis_images/drone_services/inspection_analysis/Infrastructure_inspection.webp"
            },
            {
                id: 2,
                servicetitle:
                    "Power Line & Utility Inspection",
                servicedescription:
                    "Power line & Utility Inspections are crucial for identifying hazards and preventing outages. Drones enhance the process with infrared imagery and high-definition video, to detect overheating, corrosion, and vegetation incursions that might lead to failures or accidents of service",
                serviceimg:
                    "/gis_images/drone_services/inspection_analysis/power_and_utility_surveying.webp"

            },
            {
                id: 3,
                servicetitle:
                    "Solar Panel Inspection ",
                servicedescription:
                    "Solar panel efficiency requires regular evaluation and maintenance to ensure that they work effectively. Our drone technology identifies faults such as crack, bad wiring,etc. in the solar array without using scaffolding or ladders. This way, we will be able to identify areas that malfunction and optimize solar panel performance by delivering thermal imaging scans of such areas.",
                serviceimg:
                    "/gis_images/drone_services/inspection_analysis/solar_panel_inspection.webp"
            },

            {
                id: 4,
                servicetitle:
                    "Oil & Gas Pipeline Monitoring ",
                servicedescription:
                    "The monitoring of pipelines is a vital component in the maintenance of the integrity and safety of oil and gas infrastructure. Drones can also cover large zones over time efficiently to collect high resolution imagery and thermal data to look out for leaks, corrosion, and other harmful elements that might need further actions to be taken. ",
                serviceimg:
                    "/gis_images/drone_services/inspection_analysis/oil_gas_pipeline_surveying.webp"

            }
            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />

            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Drone_Inspection_analysis_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Inspection Analysis</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link> / <Link href="/service/gis/droneservice"> Drone Services</Link> / Inspection Analysis
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
export default InspectionandAnalysis 