"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineArrowRight } from "react-icons/ai";


const GisServices_Services_We_Offer = ({ categoryData, count }) => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="w-full  bg-gradient-to-b from-blue-950 to-black relative">
            <div className="max-w-[1600px] mx-auto px-0 py-12">
                <h1 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Services We Offer
                </h1>
                <div className={`grid ${count === 5 ? "grid-cols-5" : "grid-cols-3"} max-lg:grid-cols-1 relative`}>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-blue-900/5" />
                        <div className="absolute inset-0">
                            <Image
                                src={hoveredImage || categoryData[0].image}
                                alt="Background"
                                fill
                                className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage ? 'opacity-100 scale-110 brightness-75' : 'opacity-0 scale-100'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-900/0 to-black/60" />
                        </div>
                    </div>

                    {categoryData.map((category, index) => (
                        <div key={index} className={`relative group z-10 ${count - 1 != index && 'border-r border-white'}  `}>
                            <Link
                                href={`${category.link}`}
                                className={`relative ${count === 5 ? "aspect-[3/5]" : "aspect-[3/3]"}  block overflow-hidden`}
                                onMouseEnter={() => setHoveredImage(category.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-cover transition-all duration-700 ease-in-out ${hoveredImage && hoveredImage ? 'opacity-0' : 'opacity-80'
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black/90 group-hover:from-blue-900/05 group-hover:via-black/60 group-hover:to-black/80 transition-all duration-500" />
                                </div>
                                <div className="relative h-full bottom-0 flex flex-col justify-end items-center text-center px-1 py-4 z-10 transition-all duration-500 ease-in-out transform group-hover:justify-center  group-hover:-translate-y-2">
                                    <h3 className="text-xl md:text-xl font-bold text-white mb-4 group-hover:mb-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                        {category.name}
                                    </h3>
                                    <div className="h-auto w-full text-center absolute bottom-0 left-0 bg-transparent group-hover:via-black/60 text-sm py-2 flex items-center justify-center gap-2">
                                        Read More <AiOutlineArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};


export default GisServices_Services_We_Offer;

