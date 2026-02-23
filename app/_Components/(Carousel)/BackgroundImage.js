"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundImage({ transitionData, currentSliderData }) {
  return (
    <AnimatePresence mode="wait">
      {transitionData && (
        <motion.img
          key={transitionData.banner_img_url}
          layoutId={transitionData.banner_img_url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute top-0 left-0 z-10 w-full h-full object-cover brightness-50"
          src={transitionData.banner_img_url}
        />
      )}

      <motion.img
        key={currentSliderData?.data.banner_img_url + "transition"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: { ease: "linear", duration: 0.6 } }}
        className="absolute left-0 top-0 w-full h-full object-cover brightness-50"
        src={currentSliderData?.data.banner_img_url}
      />
    </AnimatePresence>
  );
}
