// hooks/useAOS.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1200, // Animation duration
        once: false, // Animation should happen every time the element is scrolled into view
      });
    }
  }, []);
};

export default useAOS;
