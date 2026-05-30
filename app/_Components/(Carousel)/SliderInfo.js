"use client";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";

export default function SliderInfo({ transitionData, currentSliderData }) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo data={transitionData ? transitionData : currentSliderData?.data} />
    </>
  );
}
