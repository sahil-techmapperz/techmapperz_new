import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL


export const metadata = {
    title: "Transforming Aerial Imagery into Actionable Geospatial Products | Techmapperz",
    description: "We capture large scale data using drone, harnessing LiDAR technology to deliver various outputs including high-precision maps and 3D models, as well as analytical outputs.",
    alternates: {
        canonical: `${BASE_URL}/service/droneservice/dronedataprocessing`,
    },
};

const Dronedataprocessing = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Processing drone data is an essential part of converting raw aerial imagery into some useful geospatial products. We capture large scale data using drone, harnessing LiDAR technology to deliver various outputs including high-precision maps and 3D models, as well as analytical outputs. Such processed data sets allow industries including construction, agriculture, urban planning and environmental monitoring to make informed decisions with unparalleled accuracy and efficiency. We utilize state-of-the-art methods to process drone data and ensure that the othomosaics are of high-resolution to optimise project planning, asset management, and spatial analysis.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Drone Data Processing Services",
            desc:
                "",

            Services: [{
                id: 1,
                servicetitle:
                    "Image Stitching Orthomosaic Generation ",
                servicedescription:
                    "We stitch images together to create high resolution, georeferenced orthomosaic maps. Such maps render the surveyed area accurately without distortion and can be used for land surveying, infrastructure planning, environmental monitoring, and many other applications.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/orthomosaic.webp"

            },
            {
                id: 2,
                servicetitle:
                    "Point Cloud Processing ",
                servicedescription:
                    "LiDAR point cloud data processing ranges from raw to dense point cloud. Such datasets provide a comprehensive understanding of terrain and structuresand may be used for volume computations, burial studies, and digital twin modeling.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/point_cloud.webp"
            },
            {
                id: 3,
                servicetitle:
                    "Digital Surface Model (DSM)",
                servicedescription:
                    "DSM shows the Earth's surface, including buildings, vegetation and other structures. This data is valuable for line-of-sight calculations, urban planning and flood risk, providing a detailed topographical view.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/DSM.webp"

            },

            {
                id: 4,
                servicetitle:
                    "Digital Elevation Model (DEM) ",
                servicedescription:
                    "We produce high-accuracy digital elevation models (DEMs) of terrain on the earth’s surface. Digital Elevation Models are utilized for various applications, including hydrological modeling, cost-sharing, development projects, and infrastructure design.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/DEM.webp"

            },

            {
                id: 5,
                servicetitle:
                    "Contour Mapping ",
                servicedescription:
                    "We create contour maps to pinpoint different elevation levels and the morphology of terrain in detail. These maps are critical for engineering, mining and agriculture, allowing professionals to plan excavation, drainage and land use projects.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/contour.webp"

            },
            {
                id: 6,
                servicetitle:
                    "3D Mesh Modeling ",
                servicedescription:
                    "We are Drone Data Providers who provides and generates highly detailed 3D mesh models extracted from drone data, a feature-rich output gaining popularity in several applications and industries. These models are popular in virtual reality applications, for monitoring construction progress, and for asset inspections.",
                serviceimg:
                    "/gis_images/drone_services/drone_data_processing/3d_mesh_modelling.webp"

            }
            ]
        }
    ]

    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/drone_services/Drone_Main_Page/Drone_data_processing.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Drone Data Processing</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link> / <Link href="/service/gis/droneservice"> Drone Services</Link> / Drone Data Processing
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
export default Dronedataprocessing 