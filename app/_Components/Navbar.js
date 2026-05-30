"use client"; // Add this directive at the top

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaPhoneAlt, FaInstagram, FaEnvelope, FaLinkedinIn, FaYoutube, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';

import company_logo from "@/public/logo.webp"
import Resources from './Resources';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const pathname = usePathname();



  const sections = [
    {
      title: 'Geospatial Services',
      items: [
        { name: 'GIS Services', link: '/service/gis-services' },
        { name: 'Drone Services', link: '/service/drone-services' },
      ],
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Website Development', link: '/service/it-services/web-development' },
        { name: 'Mobile App Development', link: '/service/it-services/mobile-development' },
        { name: 'CRM Solution', link: '/service/it-services/crm' },
        { name: 'IT Consultancy', link: '/service/it-services/it-consulting' },
      ],
    },
  ];

  const Industrysections = [
    {
      // title: 'Industry Expertise',
      title: '',
      items: [
        { name: 'E-commerce', link: '/industry/e-commerce' },
        { name: 'Education & E-Learning', link: '/industry/education-e-learning' },
        { name: 'Government And public Sector', link: '/industry/government-public-sector' },
        { name: 'Health Care', link: '/industry/healthcare' },
      ],
    },
    {
      // title: 'Industry Expertise',
      title: '',
      items: [
        { name: 'Logistic & Supply Chain', link: '/industry/logistics-supply-chain' },
        { name: 'Manufacturing', link: '/industry/manufacturing' },
        { name: 'Retail', link: '/industry/retail' },
        { name: 'Travel & Hospitality', link: '/industry/travel-hospitality' },
      ],
    },
  ];


  const sections2 = [
    {
      title: 'Blogs',
      items: [
        { name: 'Blogs', link: '/blog?page=1' },
      ],
    },
    {
      title: 'Portfolios',
      items: [
        { name: 'Portfolios', link: '/portfolios' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'Events', link: '/events' },
      ],
    },
  ];

  return (
    <>

      <div className={` fixed top-0 w-full h-[50px] z-[200]`}>

        <div className={` w-full flex justify-between items-center py-3 px-2 z-[200] bg-gray-100 transition-transform duration-300`}
        >
          <div className="md:w-1/5 w-1/2 ml-0 md:ml-14">
            <Link href="/">
              <Image
                src={company_logo}
                alt="company logo"
                priority
                width={200}
              />
            </Link>
          </div>


          <div className="hidden md:flex justify-center items-center absolute right-0">
            <ul className="list-none relative flex gap-6 mr-[80px]">
              <li className="relative text-center">
                <Link
                  href="/"
                  className={`text-lg text-black flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/' ? 'after:w-full' : ''
                    }`}
                >
                  Home
                </Link>
              </li>


              <Resources
                sections={sections}
                title={"Service"}
                subtitle={
                  "Providing cutting-edge IT solutions and GIS services to streamline operations, enhance decision-making, and drive business success."
                }
                color={"#007F7B"}
                link={"/service"}
              />


              <Resources
                sections={sections2}
                title={"Resources"}
                subtitle={
                  "Explore valuable resources on IT and GIS solutions, empowering your business with insights, tools, and industry best practices."
                }
                color={"#007F7B"}
                link={"/blog?page=1"}
              />

              <Resources
                sections={Industrysections}
                title={"Industry"}
                subtitle={
                  "We provide expert IT solutions that help businesses grow and adapt to the changing technology landscape."
                }
                color={"#007F7B"}
                link={"/industry"}
              />

              <li className="relative text-center">
                <Link
                  href="/about"
                  className={`text-lg text-black flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/about' ? 'after:w-full' : ''
                    }`}
                >
                  About us
                </Link>
              </li>
              <li className="relative text-center ml-[60px]">
                <Link
                  href="/contact"
                  className={"inline-flex items-center px-6 py-2 rounded-full animate-blink bg-gradient-to-r from-[#376bab] from-40% to-[#d2292b] text-white font-semibold hover:shadow-lg transition-all duration-300"}
                >
                  Contact us
                </Link>
              </li>



            </ul>
          </div>

          <button
            ref={btnRef}
            onClick={onOpen}
            className="block text-black md:hidden text-3xl cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open navigation menu"
            type="button"
          >
            {!isOpen && <AiOutlineMenu />}
          </button>

        </div>





        {/* Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-[1100] bg-black bg-opacity-70">
            <div
              className="fixed top-0 right-0 h-full w-full  bg-[#181818] shadow-lg transform transition-transform duration-300"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute z-[1200] top-5 right-5 text-white text-2xl min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close navigation menu"
                type="button"
              >
                ✖
              </button>

              {/* Drawer Links */}
              <nav className="h-full flex relative flex-col justify-center items-center gap-8 text-white" aria-label="Mobile navigation">
                <Link href="/" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Home
                </Link>
                <Link href="/service" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Service
                </Link>
                <Link href="/industry" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Industry
                </Link>
                <Link href="/portfolios" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Portfolios
                </Link>
                <Link href="/blog?page=1" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Blogs
                </Link>
                <Link href="/events" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Events
                </Link>
                <Link href="/about" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  About Us
                </Link>
                <Link href="/contact" onClick={onClose} className="text-2xl min-h-[44px] min-w-[120px] flex items-center justify-center">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>


    </>
  );
};

export default Navbar;





