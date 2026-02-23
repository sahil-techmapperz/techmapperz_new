"use client"
import Career4 from '@/public/Photos/our_mision_img.webp'
import Career5 from '@/public/Photos/our_vsion_img.webp'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";


const Missionvision = () => {

  return (
    <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 gap-[5rem] max-sm:gap-2 max-sm:grid-cols-1 justify-center items-center overflow-x-hidden">
      <div className="flex flex-col">
        <Image src={Career4} alt={Career4} className=" w-[70%] mx-auto" />
        <h2 className="text-[26px] max-sm:text-[20px] max-sm:text-center  text-white">Our Mission</h2>
        <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-justify text-white mt-[2rem]">We at Techmapperz, understand that each organisation is different, and so are their challenges, so when we tailor solutions, we ensure that it is as simplified as it can be. Our mission is simplified solutions for complex problems.</p>
        {/* <button
          style={{ boxShadow: "0px 0px 8px 0px #00B0FE" }}
          className="bg-white max-sm:m-auto text-[#00B0FE] mt-2 py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Know More <FaArrowRightLong /></Link>
        </button> */}
      </div>

      <div className="flex flex-col" >
        <Image src={Career5} alt={Career5} className="w-[70%]  mx-auto" />
        <h2 className="text-[26px] mb-[1.5rem] max-sm:text-[20px] max-sm:text-center text-white">Our Vision</h2>
        <p className="text-[18px] max-sm:text-[14px] leading-[33px] text-justify text-white">With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, to be a trusted provider of end-to-end IT services and solutions to businesses globally.</p>
        {/* <button
          style={{ boxShadow: "0px 0px 8px 0px #00B0FE" }}
          className="bg-white max-sm:m-auto text-[#00B0FE] mt-2 py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Know More <FaArrowRightLong /></Link>
        </button> */}
      </div>
    </div>
  )
}

export default Missionvision
