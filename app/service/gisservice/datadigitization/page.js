import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
    title: "Data Digitization For Land | Cadastral Mapping | Techmapperz | Kolkata",
    description: "Enhance GIS operations with expert Data Digitization: Georeferencing, Attribute Data Integration, Cadastral Digitization, and Remote Sensing.",
    alternates: {
        canonical: `${BASE_URL}/service/gisservice/datadigitization`,
    },
};


const Gismapping = () => {
    const GisMappingIntrouctiondata = [{
        title: "As we know, Data Digitization refers to the conversion or transformation of any physical data into digital form. It includes documents of surveys, maps, etc. This process provides significantly enhanced GIS operations with greater accessibility, usability, and accuracy even in attribution. Data Digitization helps in accessing Spatial analysis, efficient data management, and smooth integration when it is integrated with various advanced GIS tools and platforms. It provides innovative solutions in data driven areas which helps and supports in informed decision-making.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Data Digitization Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "Georeferencing",
                servicedescription:
                    "Georeferencing is the process of providing spatial information of coordinates in the real world to maps. Our georeferencing services aids in the integration of satellite images, paper maps, and aerial photographs into various GIS platforms through established coordinate systems, providing precise location-based information which can be used as per project requirements . This service is utilized in refreshing old cadastral maps, mapping of property boundaries, etc. which can also be integrated with other geo-spatial data.",
                serviceimg:
                    "/gis_images/gis_services/data_digitization/georeferencing.webp"
            },
            {
                id: 2,
                servicetitle:
                    "Integration of Attribute Data ",
                servicedescription:
                    "The relevance of Geographic and Analytical Data increases rapidly when basic descriptive attributes is combined with Geographic Data . By integrating all data of land-use classification, ownership, and utility specification in GIS databases offers better decision-making and detailed analysis. It also provides effective and efficient operations in activities like land-use mapping, infrastructure management, and resource tracking.",
                serviceimg:
                    "/gis_images/gis_services/data_digitization/Data_integration_Hoogly_attribute_1.webp"

            },
            {
                id: 3,
                servicetitle:
                    "Topo Sheet and Cadastral Digitization: ",
                servicedescription:
                    "Topographic and Cadastral Digitization solutions convert topographic and cadastral paper records into accurate digital models. In this services Contours are mapped and boundaries are precise. The management of land parcels and the analysis of terrain by using such services is the main objective of this service. Topographic data in digital format enable organizations to develop complex elevation models thus making it highly useful for environmental academic research, construction planning, and land use.",
                serviceimg:
                    "/gis_images/gis_services/data_digitization/Topo_Sheet_and_Cadastral_Digitization.webp"
            },

            {
                id: 4,
                servicetitle:
                    "Remote Sensing Image Processing: ",
                servicedescription:
                    "We specialise in Remote Sensing Image Processing to derive actionable information from both satellite and aerial imagery. We have complex image classification, vegetation analysis and change detection that enables organizations to effectively monitor environmental changes, urban growth and disaster effects. Our services include which include environmental monitoring, such as tracking for deforestation and disaster management, mapping areas affected by floods and evaluating the socio-environmental impact of earthquakes. Our solutions provide accurate, timely data that enable data driven decisions in critical business functions.",
                serviceimg:
                    "/gis_images/gis_services/data_digitization/remote_sensing_image_processing.webp"
            }
            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Data_Digitization_page_banner.webp")' }}>
                <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80 
                p-6 max-md:p-4 max-sm:p-3 min-h-screen">
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Data Digitization</h1>
                    <p className="text-xl text-center max-sm:text-[16px] text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/gisservice"> GIS Services</Link> / Data Digitization
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