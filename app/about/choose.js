'use client'
import React, { useState } from "react";
import styles from './choose.module.css';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";

const Choose = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };


    const accordionData = [

        {
            title: "Plan",
            content: "We understand the problem, define the goals, and create the right strategy."
        },
        {
            title: "Create",
            content: "We design and develop the right solution using suitable tools and technologies."
        },
        {
            title: "Optimize",
            content: "We refine workflows, improve usability, and ensure the solution performs effectively."
        },
        {
            title: "Achieve",
            content: "We help clients generate measurable results, business value, and long-term impact."
        }
    ];


    return (
        <div className={styles.main}>
            <section className={styles.first_part}>
                <div className={`grid grid-cols-2 max-sm:grid-cols-1 items-center gap-[4rem]`}>
                    <div className={styles.image_container}>
                        <Image
                            src="/Photos/Aboutus3.webp"
                            alt="About Us"
                            width={500}
                            height={300}
                            className="shadow-xl"
                        />
                    </div>

                    <div className={styles.company_info}>

                        <h2 className={`text-[36px] max-sm:text-center font-bold text-white mb-[2rem] max-sm:text-[24px]`}>
                            Why Choose Techmapperz?
                        </h2>
                        <ul className="list-disc pl-5 space-y-4 text-[#A3A3A3] text-lg max-sm:text-base">
                            <li><strong className="text-white">Proven Expertise:</strong> Team of certified geospatial analysts and developers with 20+ major projects completed.</li>
                            <li><strong className="text-white">Quality & Reliability:</strong> ISO-certified processes (ISO 9001) ensure on-time, on-budget delivery.</li>
                            <li><strong className="text-white">Client Satisfaction:</strong> Over 90% of clients are repeat or referred customers; we treat every project with attention to detail.</li>
                            <li><strong className="text-white">Innovation:</strong> We embrace the latest tech (AI-driven imagery processing, cloud GIS platforms) to give you an edge.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.second_paragraph}>
                    <p className="max-sm:text-[14px] text-center mb-8">
                        We follow a clear and practical process to turn concepts into working solutions:
                    </p>

                    <h2 className={`text-[36px] text-center font-bold text-white mb-[2rem] max-sm:text-[24px]`}>
                        Our Process: Turning Ideas into Impact
                    </h2>

                    <div className={styles.accordion}>
                        {accordionData.map((item, index) => (
                            <div key={index} className={styles.accordion_item}>
                                <button
                                    onClick={() => toggleSection(index)}
                                    className={`${styles.accordion_button} text-white w-full flex justify-between items-center p-4`}
                                >
                                    <span className="text-lg font-medium text-left flex-1">
                                        {item.title}
                                    </span>
                                    <span className={`transform transition-transform duration-200 ${openSections[index] ? 'rotate-180' : ''}`}>
                                        <IoIosArrowDown />
                                    </span>
                                </button>
                                {openSections[index] && (
                                    <div className={`${styles.accordion_panel} text-justify text-[#A3A3A3] p-4`}>
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>

    );
};

export default Choose;
