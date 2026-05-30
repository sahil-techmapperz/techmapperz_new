"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RequestQuoteForm from "./QuoteRequestForm";

const RequestQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the popup form visibility
  const [isVisible, setIsVisible] = useState(true); // Controls button animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevState) => !prevState);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <div>
      {/* Request a Quote Button */}
      <div className="fixed top-1/3 right-0 transform -translate-y-1/2 z-50 flex items-center">
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: -90 }}
          animate={
            isVisible
              ? { x: 0, opacity: 1 }
              : { x: 100, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="origin-bottom-right"
        >
          <button
            onClick={openForm}
            className="text-white bg-blue-600 px-4 py-2 rounded-lg text-center"
          >
            Request a Quote
          </button>
        </motion.div>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center 2xl:mt-[5rem] justify-center bg-black bg-opacity-50 z-50">
            
            <RequestQuoteForm closeForm={closeForm}/>
         
        </div>
      )}
    </div>
  );
};

export default RequestQuoteButton;
