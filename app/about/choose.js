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
            content: "This is the first and foremost step in delivering your project ahead of your expectations, though we are driven by results, we never let that hamper our course of understanding you and requirement. We ensure that our research is onto every vertical that involves the company competitors, target market, and customer psychographics. This is critical and crucial in our further action plan."
        },
        {
            title: "Create",
            content: 'We have a talent pool to make any company jealous, and we use this talent pool to do the creation in such a way that it serves our mission statement "simple solution for complex scenarios". What our team creates is not just fills the vacuum of your requirement but also ensures that the solution remains simple while doing so. In the process, we also ensure that we remain committed to the budget and deadline.'
        },
        {
            title: "Leads",
            content: "The word leads define a lot of internal and external factors and processes that we do to ensure that everything goes as planned. This is always project dependent, but the crucial step that we undertake under this is to keep your project and requirement confidential, keep it to a need-to-know basis amongst all sections of employees, also maintaining multiple tier experts for the tab on billing or unexpected or additional expenses. With a lot of government and time-sensitive clients' jobs that we do, this layering guarantees us that we don't miss a deadline."
        },
        {
            title: "Achieve",
            content: "This is it! The execution of the project, no matter how much ever ecstatic it may make us feel, but this is one step we take with utmost precaution. We make certain that everything goes and works as planned, and usually, this is a smooth one for us since we take so much care of everything that precedes this."
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

                        <h2 className={`text-[36px] max-sm:text-center font-bold text-white mb-[2rem] max-sm:text-[14px]`}>
                            Why Choose Techmapperz?
                        </h2>
                        <p>The smaller things make a big difference in everything we do. We at Techmapperz also believe in the attention to detail methodology. Our eye for detail in every project that we manage is what makes us stand out from the
                            rest. We have a 4-step approach on how we execute a project.</p>
                    </div>
                </div>

                <div className={styles.second_paragraph}>
                    <p className="max-sm:text-[14px]">
                        All the services that Techmapperz offers ensure that this four-step methodology is followed, one of the many reasons that
                        most of our clients are either referred by our existing clients or are returning clients. Working with us will always make you
                        feel a sense of calmness and confidence; we treat our clients this way because we would want to be treated this way.
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
