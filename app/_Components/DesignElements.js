// components/WebsiteDesignElements.js
'use client';
import Image from 'next/image';
import { useState } from 'react';

const designElements = [
    {
        id: 1,
        primaryImage: '/Photos/Combind1.webp',
        title: 'Graphics',
        description:
            'It is a collective term used to describe everything visual, like the photos, logos, and icons on a website.',
    },
    {
        id: 2,
        primaryImage: '/Photos/Combind5.webp',
        title: 'Navigation',
        description:
            'Ease of navigation is the glue that keeps the website visitor on the website; it should be simple, effective.',
    },
    {
        id: 3,
        primaryImage: '/Photos/Combind3.webp',
        title: 'Colour',
        description:
            'Colours are an essential part of a website, having a psychological impact on visitors while giving the site personality.',
    },
    {
        id: 4,
        primaryImage: '/Photos/Combind4.webp',
        title: 'Speed',
        description:
            'This may be the last point but it is the first thing customers and visitors notice in a website.',
    },
];

const WebsiteDesignElements = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <>

            <div
                className=" bg-cover"
                style={{
                    backgroundImage: "url('/Photos/Bg_WebsiteDesignElements.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='w-full h-full bg-black/70'>
                    <div className='w-full px-20 max-sm:px-2 py-10 max-w-[1600px] mx-auto bottom-1 '>
                        <h3 className="text-4xl max-sm:text-2xl font-bold text-center">
                            Elements of Website Design
                        </h3>

                        <div className="flex flex-row max-sm:flex-col gap-3 w-full m-auto items-end max-sm:items-center min-h-[350px]">
                            {designElements.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex-1  bg-gray-800  
                            ${hovered === item.id ? 'activediv bg-cover bg-center bg-no-repeat' : ''} hover-height`}
                                    onMouseEnter={() => setHovered(item.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div
                                        className={'flex flex-col justify-center gap-5 items-center p-2 w-full h-full rounded-sm '}
                                    >
                                        <Image
                                            src={item.primaryImage}
                                            alt={`${item.title} Icon`}
                                            width={50}
                                            height={50}
                                        />
                                        <h1 className="text-2xl font-bold">{item.title}</h1>
                                        <p
                                            className={`text-center ${item.extraClasses}  transition-all duration-500 ease-in-out opacity-0 max-h-0 overflow-hidden 
                                            ${hovered === item.id ? 'opacity-100 max-h-[100px] py-2 ' : ''}`}
                                            title={item.description}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <style jsx>{`
                .hover-height {
                    height: 250px; // Initial height on hover
                    width: 300px;
                    transition: height 0.7s ease-in-out; // Smooth transition effect
                    cursor: pointer; // Change cursor on hover
                    border-radius:10px;
                }
                .activediv {
                    height: 300px; // Increased height on active hover
                    border-width: 3px;
                    border-radius:10px;
                    transition: all 0.7s ease-in-out, background-color 0.7s ease-in-out, border 0.7s ease-in-out; // Transition effects
                }

            `}</style>

                </div>
            </div>
        </>
    );
};

export default WebsiteDesignElements;
