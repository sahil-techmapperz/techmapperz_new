import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


export const metadata = {
    title: "GIS Mapping Services | Utility & LULC Mapping | GIS Company India | Techmapperz",
    description: "Improve your decision-making with Techmapperz’s cutting-edge GIS mapping solutions. From navigation mapping and utilities to cadastral and urban planning, uses advanced geospatial data for efficiency and growth.",
    alternates: {
        canonical: `${BASE_URL}/service/gisservice/gismapping`,
    },
};


const Gismapping = () => {
    const GisMappingIntrouctiondata = [{
        title: "GIS mapping is a fusion of technology and geography data that translates, analyzes, and interprets geographical data. We, at Techmapperz, provide the best cutting-edge GIS mapping technology solutions to the businesses and governments sector in terms of innovation, operating effectively, and making better decisions. We, through our GIS mapping services, meet every requirement of every kind of industry, starting from accurate navigation to green urban planning.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our GIS Mapping Services",
            desc:
                "Discover our extensive lineup of GIS mapping services, created with precision, speed, and readability:",

            Services: [{
                id: 1,
                servicetitle:
                    "Navigation Mapping",
                servicedescription:
                    " An accurate navigation map is very important for today's transportation and logistics sector. Our mapping solutions for navigation provide accurate geospatial information to optimize routes and minimize travel time. We create high-definition maps with the latest road networks, traffic patterns, and geographic attributes on the go for fleet management, delivery networks, or mobility applications to ensure efficiency in operations, reduced costs, and improved customer satisfaction.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/Navigation_mapping.webp"
            },
            {
                id: 2,
                servicetitle:
                    "Utility Mapping ",
                servicedescription:
                    "Utility mapping through GIS is essential for an industry to reduce accidents, over expenditure, costly rerouting, damaged reputations, injuries, project downtime etc. With the help of utility mapping, clients can have a clear roadmap of the underground and above-ground utility networks; in detail, this makes planning for installments easier, and efforts in infrastructure maintenance will not go futile and errors during excavation or construction works. We combine GIS technology with field data to offer accurate maps to support enhanced decision-making and risk management.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/utility_map.webp"
            },
            {
                id: 3,
                servicetitle:
                    "Cadastral Mapping",
                servicedescription:
                    "Our cadastral mapping service produces detailed maps containing property divisions, land parcels, and ownership details. Using cadastral maps, government organizations, urban planners, and property developers will find it easier to manage land records resolve boundary disputes with investors, promote property deals, etc.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/Cadastral_map.webp"
            },

            {
                id: 4,
                servicetitle:
                    "Urban Planning and Mapping",
                servicedescription:
                    "Rapid growth of urban areas can only be supported by smart and sustainable planning.We provide a variety of geospatial data that will be of great help in providing urban planning and mapping services for zoning in all aspects. Through our mapping services, we assist city planners and local governments in identifying infrastructure, population density, environmental constraints, and growth patterns, thereby aiding the design of smarter cities, and optimizing resources for development, as well as balanced development.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/urban.webp"
            },

            {
                id: 5,
                servicetitle:
                    "Agricultural Mapping ",
                servicedescription:
                    "The use of GIS mapping in agricultural operations is crucial for increasing productivity. For smart farming detailed information about soil types, crop patterns, irrigation systems, and weather patterns are very important. Various methods such as precision farming, yield forecasting, and crop monitoring in precision agriculture help agricultural companies and farmers to optimize their productivity, and wastage reduction which guarantees sustainability while performing the decision-making process.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/Agriculture.webp"
            },
            {
                id: 6,
                servicetitle:
                    "LULC Mapping (Land Use and Land Cover) ",
                servicedescription:
                    "The accurate and concise data as well as the precise and reliable information about the changes in land use and land cover which is gathered from LULC mapping aid in Environmental Monitoring and Sustainable Development. In order to develop High-resolution maps for this purpose, one must obtain a map that can help identify and manage specific types of land resources – e.g., urban areas, agricultural lands, forests, water bodies, etc.",
                serviceimg:
                    "/gis_images/gis_services/gis_mapping/LULC_Hoogly.webp"
            }
            ]
        }
    ]

    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/GIS_Mapping_Page_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-red-200/50 to-transparent'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">GIS Mapping</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/gisservice"> GIS Services</Link> / GIS Mapping
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