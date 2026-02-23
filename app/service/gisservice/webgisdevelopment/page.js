import GisServicesIntroduction from '@/app/_Components/GisServicesIntroduction'
import OurGISService from '@/app/_Components/OurGISService'
import ScrollToTop from '@/app/_Components/ScrollToTop'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
    title: "GIS Application Design | Mobile GIS Application | Techmapperz",
    description: "Techmapperz is an organization which helps in providing customized GIS application designs specifically designed and developed to meet the unique requirements of the clients business.",
    alternates: {
        canonical: `${BASE_URL}/service/gisservice/webgisdevelopment`,
    },
};

const Gismapping = () => {
    const GisMappingIntrouctiondata = [{
        title:
            "Techmapperz is an organization which helps in providing customized GIS application designs specifically designed and developed to meet the unique requirements of the clients business. Our applications for GIS Solutions are designed and developed in order to help deliver scalable solutions, ensuring it to be user-friendly and efficienct processes. This lets an organisation to use its data in a most appropriate way by allowing spatial information management. From intuitive user interfaces to robust back-end systems, our GIS applications are built to support the dynamic demands of modern business environments.",
        // img: 
        // ""
    }];

    const OurGISServices = [
        {
            title:
                "Our Web GIS Development Services",
            desc:
                "",

            Services: [
                {
                    id: 1,
                    servicetitle:
                        "Custom GIS Application Development",
                    servicedescription:
                        "Our forte is developing customized GIS solutions in line with your organization's precise needs. From concept to delivery, we collaborate closely with you to ensure the final product fits your business goals in all ways possible. We do our best to create applications that meet high standards in terms of performance, reliability, and user delight from day one to day a thousand at the time of deployment.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/Custom_GIS_App_development.webp"
                },
                {
                    id: 2,
                    servicetitle:
                        "Mobile GIS Application Development",
                    servicedescription:
                        "We realize that in the present mobile-oriented society, access to geospatial data and tools must be mobile. Through our mobile GIS application development services, users can collect, analyze, and share spatial data anywhere. We ensure that our mobile GIS solutions are user-friendly, responsive, and optimized for both iOS and Android smartphones. Whether you need asset management applications, data gathering in the field, or location monitoring in real-time, we provide you with those.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/mobile_gis.webp"
                },
                {
                    id: 3,
                    servicetitle:
                        "Web GIS Application Development ",
                    servicedescription:
                        "This service provided by us helps in easily accessing GIS data with any device which is connected with internet so that our clients can view real-time data from any part of the world. We provide user-friendly and responsive web applications that has mapping and spatial analysis tool in it. In a nutshell, our clients can easily scale and manage complex data no matter how huge the data is with our customized applications.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/web_gis.webp"
                },

                {
                    id: 4,
                    servicetitle:
                        "Geospatial Data Integration",
                    servicedescription:
                        " We customise applications in such a way that it can be easily integrated with geospatial data helping to get the access of real time data further supporting its analysis. We design GIS applications in such a way that it can easily integrate with various data formats and geospatial platforms to discover insights.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/mobile_gis.webp"
                },

                {
                    id: 5,
                    servicetitle:
                        "User Interface (UI) and User Experience (UX) Design ",
                    servicedescription:
                        "If an application is eye pleasing and user friendly it is likely to be used and succesful. We at Techmapperz are focused to create such GIS applications with the help of our explerienced team in designing. Our team is fully engaged in making applications which can work on mobile, web or even desktop with such an interface that is very easy to use and smooth that the your team can quickle adapt its usage.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/UI_UX.webp"
                },

                {
                    id: 6,
                    servicetitle:
                        "Application Maintenance and Support ",
                    servicedescription:
                        "We provide our clients complete support and maintenance after the deployment of our applications eventually helping clients to enjoy the applications that are fully functional and secure to use. We provide updates, troubleshooting and enhancement in the application performance so that it can sink with new technologies which will ultimately help in the smooth run of the business.",
                    serviceimg:
                        "/gis_images/gis_services/web_gis_development/Application_Maintenance_and_Support.webp"
                }

            ]
        }
    ]
    return (
        <div className="bg-black text-white">
            <ScrollToTop />
            <section className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/gis_images/Web_GIS_Development_Banner.webp")' }}>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-black/80'>
                    <h1 className="text-4xl font-bold max-sm:text-2xl">Web GIS Development</h1>
                    <p className="text-xl text-center max-sm:text-[16px]  text-gray-400">
                        <Link href="/">Home</Link> / <Link href="/service">Services</Link>/<Link href="/service/gis/gisservice"> GIS Services</Link> / Web GIS Development
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