'use client'
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1600px] mx-auto sm:px-10 px-4 py-10">
            
            <div className="lg:w-[80%] md:w-[90%] w-full mx-auto space-y-3 sm:space-y-4">
                {faqData && faqData.length > 0 && faqData.map((faq, index) => (
                    <div key={index} className="sm:p-6 p-4 mb-4 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl hover:border-[#05d7de]/30 transition-all duration-300 shadow-lg">
                        <button
                            className="flex justify-between items-center w-full text-lg sm:text-xl md:text-2xl font-semibold text-left text-gray-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span
                                className={`transition-all duration-300 ${openIndex === index ? "text-[#05d7de]" : "text-gray-500"
                                    }`}
                            >
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[1000px]" : "max-h-0"
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
