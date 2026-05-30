"use client";

import React from 'react';
import Carousel from 'react-multi-carousel';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';


const Scrool_Icons = ({ icons = [] }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const defaultIcons = [
        <FaReact color="#61DBFB" size={60} />,
        <FaNodeJs color="#68A063" size={60} />,
        <FaPython color="#306998" size={60} />,
        <FaHtml5 color="#E44D26" size={60} />,
        <FaCss3Alt color="#264de4" size={60} />,
        <FaJsSquare color="#F0DB4F" size={60} />
    ];

    return (
        <div className=' mt-[30px] py-[30px]' style={{ background: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 2.08%, rgba(197, 197, 197, 0.3) 50.09%, rgba(0, 0, 0, 0.3) 98.44%)" }}>
            <div className='w-full max-w-[1600px] mx-auto'>
            <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={3000}>
                {(icons.length > 0 ? icons : defaultIcons).map((icon, index) => (
                    <div key={index} className="flex justify-center items-center">
                        {icon}
                    </div>
                ))}
            </Carousel>
            </div>
            
        </div>
    );
};

export default Scrool_Icons;
