import React from "react";
import Image from "next/image";

const OurGISService = ({ OurGISServices }) => {
    return (
        <div className="w-full py-2 md:py-8">
            <h2 className="text-3xl font-bold text-center mb-4">
                {OurGISServices[0].title}
            </h2>
            <p className="text-center text-gray-400 text-[18px] max-sm:text-[14px]  mb-10">
                {OurGISServices[0].desc}
            </p>

            <div className="space-y-12">
                {OurGISServices[0].Services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Section with Transition */}
                        <div className="w-full md:w-[45%] overflow-hidden rounded-[20px] relative aspect-video md:aspect-auto md:h-64">
                            <Image
                                src={service.serviceimg || "https://via.placeholder.com/500"}
                                alt={service.servicetitle}
                                fill={true}
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover shadow-lg transform transition duration-700 ease-in-out hover:scale-110 hover:shadow-xl"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-[55%] text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                {service.servicetitle}
                            </h3>
                            <p className="text-gray-400 text-[18px] max-sm:text-[14px] text-justify">{service.servicedescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurGISService;
