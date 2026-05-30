"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Check if device is low-end
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    setShouldAnimate(!prefersReducedMotion && !isLowEndDevice);
  }, []);

  // Return children without animation for better performance on initial load
  if (!shouldAnimate) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
