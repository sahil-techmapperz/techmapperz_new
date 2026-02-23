"use client";
import { motion } from "framer-motion";

export default function SliderCard({ data }) {
  return (
    <motion.div
      className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]"
      layout
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.banner_img_url}
        alt="Transition Image"
        src={data.banner_img_url}
        className="absolute w-full h-full rounded-2xl object-cover brightness-75"
      />

      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div className="md-2 h-[2px] w-3 rounded-full bg-white"></motion.div>
          <motion.p layoutId={data.heading} className="text-xs text-[#D5D5D6]">
            {data.heading}
          </motion.p>
          {/* <motion.h1
            layoutId={data.subTitle}
            className="text-xl leading-6 text-white"
          >
            {data.subTitle}
          </motion.h1> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
