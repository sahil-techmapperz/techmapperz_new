"use client";

import { useState } from "react";
import Link from "next/link";

const Resources = ({ sections, title, subtitle, link = "#" }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <li
      className="relative text-center group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link}
        className={`text-lg text-black transition-transform duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`}
      >
        {title}
      </Link>

      {/* Dropdown Menu */}
      <ul
        className={`absolute flex top-full right-[-200px] w-[60vw] bg-[#007F7B] z-50 p-4 rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
          isDropdownVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="list"
      >
        {/* Left Section */}
        <li className="w-[40%] text-center p-6" role="listitem">
          <Link
            href={link}
            className="text-3xl font-bold mb-4 text-white underline"
          >
            {title}
          </Link>
          <p className="text-sm mb-8 text-justify text-white">{subtitle}</p>
        </li>

        {/* Right Section */}
        <li className="w-[60%] p-4 bg-white text-black grid grid-cols-2 gap-8 rounded-md" role="listitem">
          {sections?.map((section, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <ul className="list-none">
                {section.items?.map((item, idx) => (
                  <li key={idx} className="mb-3" role="listitem">
                    <Link
                      href={item.link}
                      className="text-md text-[#007F7B] hover:text-[#005A55] transition-colors duration-200 underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      </ul>
    </li>
  );
};

export default Resources;
