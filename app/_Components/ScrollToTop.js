'use client'
import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // This component does not render anything
  return null;
}
