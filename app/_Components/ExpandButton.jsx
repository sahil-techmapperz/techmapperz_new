import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HoverButton = ({ text }) => {
  return (
    <button
      className="new-button relative flex items-center justify-end text-white no-underline rounded-[133.333px] pr-6 cursor-pointer border-none bg-transparent overflow-hidden group"
    >

      {/* Arrow Icon */}
        <div className="div-block-11 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#376bab] via-[#376bab] via-60% to-[#d2292b] group-hover:bg-none  text-white rounded-full z-10 transition-all duration-1000  group-hover:text-white">
        <FaArrowRight />
        </div>

        {/* Button Text */}
        <div className="text-block ml-2 z-10">{text}</div>

        {/* Background Animation */}
        <div className="button-bg absolute inset-0 bg-gradient-to-r from-[#376bab] via-[#376bab] via-60% to-[#d2292b] w-0 h-full transition-all duration-300 group-hover:w-full"></div>
    </button>
  );
};

export default HoverButton;
