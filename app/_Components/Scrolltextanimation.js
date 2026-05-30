"use client"

import { motion } from 'framer-motion';


const textAnimation = {
    initial: { x: "100vw" },
    animate: {
      x: ["100vw", "-100vw"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear"
      }
    }
  };

const Scrolltextanimation = ({text}) => {
  return (
    <div>
      <div className="relative overflow-hidden mb-0 text-[26px] p-5 text-white  sm:p-4 sm:text-justify sm:text-[24px]" style={{background: "linear-gradient(90deg, #9F9F9F 0%, #393939 49%, #9F9F9F 100%)"}}>
        <motion.div style={{ width: "max-content", whiteSpace: "nowrap" }} {...textAnimation}>
          {text}
        </motion.div>
      </div>
    </div>
  )
}

export default Scrolltextanimation
