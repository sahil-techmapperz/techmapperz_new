"use client"
import Career4 from '@/public/Photos/our_mision_img.webp'
import Career5 from '@/public/Photos/our_vsion_img.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiTarget, FiEye } from 'react-icons/fi'

const Missionvision = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 justify-center items-stretch relative z-10 py-10">

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a8cd4]/0 via-[#4a8cd4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

        <div className="relative z-10 w-full mb-10 flex justify-center items-center">
          <div className="absolute w-[200px] h-[200px] bg-[#4a8cd4]/20 rounded-full blur-[80px] group-hover:bg-[#4a8cd4]/30 transition-colors duration-500"></div>
          <Image src={Career4} alt="Our Mission" className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[60%] object-contain drop-shadow-[0_10px_30px_rgba(74,140,212,0.3)] transform group-hover:scale-105 transition-transform duration-700 relative z-10" />
        </div>

        <div className="relative z-10 mt-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4a8cd4] to-[#376bab] shadow-lg">
              <FiTarget className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Mission</h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
            We at Techmapperz understand that each organization is different, and so are their challenges. When we tailor solutions, we ensure they are as simplified as they can be. <strong className="text-white font-semibold">Our mission is simplified solutions for complex problems.</strong>
          </p>
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#d2292b]/0 via-[#d2292b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

        <div className="relative z-10 w-full mb-10 flex justify-center items-center">
          <div className="absolute w-[200px] h-[200px] bg-[#d2292b]/20 rounded-full blur-[80px] group-hover:bg-[#d2292b]/30 transition-colors duration-500"></div>
          <Image src={Career5} alt="Our Vision" className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[60%] object-contain drop-shadow-[0_10px_30px_rgba(210,41,43,0.3)] transform group-hover:scale-105 transition-transform duration-700 relative z-10" />
        </div>

        <div className="relative z-10 mt-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d2292b] to-[#a82123] shadow-lg">
              <FiEye className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Vision</h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
            With technology becoming the most important part of our day to day life, we are driven by the commitment to deliver the best of IT solutions, <strong className="text-white font-semibold">to be a trusted provider of end-to-end IT services and solutions to businesses globally.</strong>
          </p>
        </div>
      </motion.div>

    </div>
  )
}

export default Missionvision
