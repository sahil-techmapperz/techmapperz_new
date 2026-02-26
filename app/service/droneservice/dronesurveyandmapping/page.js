import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


export const metadata = {
    title: "Drone Survey & Mapping Services | High-Accuracy UAV Mapping India",
    description: "High-precision drone survey and mapping services using advanced UAV & GIS technology. Reliable solutions for government & enterprise projects across India.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice/dronesurveyandmapping`,
    },
};

const DroneSurveyandMapping = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Techmapperz is a leading drone survey and mapping company in India, utilizing advanced UAV technology and strong GIS expertise to deliver high-precision, detailed, and reliable mapping solutions. Our drone survey services support the generation of accurate geospatial data for environmental monitoring, land management, infrastructure planning, asset management, and energy & telecommunication projects. Techmapperz’s drone-based survey solutions act as an efficient alternative to conventional land surveying methods, which are often time-consuming, costly, and limited by accessibility. Our drone survey and mapping services are faster, cost-effective, and scalable, enabling timely project execution while maintaining the highest standards of accuracy and quality for a wide range of clients across India.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Drone Survey & Mapping Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "Topographic Mapping ",
                servicedescription:
                    "Techmapperz provides high-accuracy drone-based topographic mapping services that capture elevation changes, terrain features, and land contours with precision. Our drone survey and mapping services support urban planning, civil engineering, infrastructure development, and land management, enabling informed decision-making and reliable project execution.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/Topographic_map.webp"

            },
            {
                id: 2,
                servicetitle:
                    "Orthophoto Generation ",
                servicedescription:
                    "We generate high-resolution orthophotos through advanced drone mapping and geometric correction techniques, ensuring true-scale imagery free from distortions caused by terrain variation or camera tilt. These orthophotos are widely used for land surveys, agricultural planning, asset inspection, environmental monitoring, and GIS analysis.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/ortrhophoto_generation.webp"
            },
            {
                id: 3,
                servicetitle:
                    "3D Terrain & Surface Modelling",
                servicedescription:
                    "Using high-quality drone survey data, we create detailed 3D terrain models, DSMs, and surface representations for infrastructure, mining, and environmental studies. These models support drainage analysis, feasibility assessment, slope evaluation, vegetation analysis, and land-use optimization, reducing project risks and improving planning accuracy.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/3D_Drone_Terrain.webp"
            },

            {
                id: 4,
                servicetitle:
                    "Digital Elevation Models (DEM) & Contour Mapping",
                servicedescription:
                    "Our drone survey and data processing services deliver accurate Digital Elevation Models (DEM) and contour maps essential for flood modeling, watershed analysis, road design, and land development projects. The outputs are GIS-ready and compliant with industry standards.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/DEM.png"

            },

            {
                id: 5,
                servicetitle:
                    "Corridor Mapping for Linear Infrastructure",
                servicedescription:
                    "Techmapperz offers drone corridor mapping services for linear infrastructure projects such as roads, railways, pipelines, transmission lines, and canals. High-resolution aerial data supports route alignment, environmental impact assessment, construction planning, and regulatory compliance, ensuring smooth project execution.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/corridor_mapping.webp"

            }
            ,

            {
                id: 6,
                servicetitle:
                    "GIS-Ready Drone Data & Deliverables",
                servicedescription:
                    "All drone survey outputs are delivered in GIS-compatible formats, enabling seamless integration with existing systems for spatial analysis, asset management, and decision support across government and enterprise projects.",
                serviceimg:
                    "/gis_images/drone_services/drone_surveying_mapping/GIS-Ready Drone Data & Deliverables.png"

            }
            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Drone_Survey_and_Mapping_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Drone Survey & Mapping</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/droneservice"> Drone Services</Link> / Drone Survey & Mapping
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
export default DroneSurveyandMapping 