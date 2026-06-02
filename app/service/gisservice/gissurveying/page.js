import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
    title: "Advance Land Survey Mapping| LiDAR and Drone| Techmapperz | India",
    description: "Techmapperz offers precise GIS surveying services, including land, LiDAR, and drone surveying, tailored to meet your project needs with accuracy and efficiency",
    alternates: {
        canonical: `${BASE_URL}/service/gisservice/gissurveying`,
    },
};


const Gismapping = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Reliable and accurate mapping can be done with the help of GIS Surveying as it uses modern surveying techniques alongwith geographic data collection. We can get access to the spatial data of various sectors such as environmental monitoring, urban planning,etc. with the integration of Aerial mapping, Remote Sensing and GPS with GIS Surveying.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our GIS Surveying Services",
            desc:
                "We offer GIS Surveying services that meet your project requirements. The provided GIS Surveying services are:",

            Services: [{
                id: 1,
                servicetitle:
                    "Land Surveying ",
                servicedescription:
                    "Land Surveying services can be used when characteristics of a site are required  along with it it can be used for boundary determination and elevation data also. Ensuring that we provide accurate data of surveys for construction, boundary of properties and even for land development including the topographical survey which can be used sor site designing and planning.",
                serviceimg:
                    "/gis_images/gis_services/GIS_surveying/land surveying.webp"
            },
            {
                id: 2,
                servicetitle:
                    "Geodetic Surveying ",
                servicedescription:
                    "To gather precised data of areas that are vast which are mostly used for large projects Geodetic surveying is the most suitable service. To ensure proper measuremnts are taken for infrastructral projects like pipelines, power grids and even highways geodatic surveying can support large-scale mapping with the generationof geodatic control network.",
                serviceimg:
                    "/gis_images/gis_services/GIS_surveying/geodatic.webp"

            },
            {
                id: 3,
                servicetitle:
                    "LiDAR Surveying ",
                servicedescription:
                    "LiDAR technology is one of those which can be used to gather detailed 3D data which is the most accurate and precised representation pf the Earth’s surface. This leads to proper utilization of models generated from the terrains so that it can be used for flood mapping, environmental studies, and infrastructure developments. This service is the best option for the places where traditional methods are more time consuming and harder and places those are vast or inaccessible.",
                serviceimg:
                    "/gis_images/gis_services/GIS_surveying/lidar.webp"

            },

            {
                id: 4,
                servicetitle:
                    "Aerial and Drone Surveying ",
                servicedescription:
                    "With the help of drones we implement aerial surveys which can provide us 3D models along with high-resolution and real-time images. This service can be used in various sectors such as agriculture, land monitoring and even for the construction field ensuring with data that is quickly gathered that too comprising a vast area while cutting cost.",
                serviceimg:
                    "/gis_images/gis_services/GIS_surveying/aerial_drone surveying.webp"
            }



            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/GIS_Survey_page_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl lg:text-[45px] max-sm:text-4xl font-bold text-white max-w-[900px] leading-[1.2]">GIS Surveying</h1>
                    <p className="text-center text-gray-400 text-lg lg:text-[17px]">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/gisservice"> GIS Services</Link> / GIS Surveying
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