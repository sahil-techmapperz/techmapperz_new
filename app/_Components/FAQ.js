'use client'
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1600px] mx-auto sm:px-10 px-4 py-10">
            <h2 className="text-xl sm:text-2xl md:text-[28px] leading-10 font-bold text-center mb-6">
                Frequently Asked Questions <span className="font-[500]" >(FAQs)</span>
            </h2>
            <div className="lg:w-[80%] md:w-[90%] w-full mx-auto space-y-3 sm:space-y-4">
                {faqData && faqData.length > 0 && faqData.map((faq, index) => (
                    <div key={index} className="sm:p-4 p-3 border-b border-gray-500 shadow-lg">
                        <button
                            className="flex justify-between items-center w-full text-lg sm:text-xl md:text-2xl font-semibold text-left text-gray-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span
                                className={`transition-all duration-[3000ms] ${openIndex === index ? "text-red-500" : "text-gray-500"
                                    }`}
                            >
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-[3000ms] ease-in-out ${openIndex === index ? "max-h-[1000px]" : "max-h-0"
                                }`}
                        >
                            {openIndex === index && (
                                <p className="mt-2 text-sm sm:text-base md:text-lg font-medium text-left text-gray-400">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
