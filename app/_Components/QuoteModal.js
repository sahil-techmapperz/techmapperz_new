// components/QuoteModal.js
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import QuoteRequestForm from './QuoteRequestForm'; // Import the new QuoteRequestForm

const QuoteModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white p-6 rounded-lg w-full max-w-4xl mx-4 sm:mx-auto"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Request a Quote</h2>
            <button onClick={onClose} className="text-xl font-bold">X</button>
          </div>
          <QuoteRequestForm /> {/* Use the new QuoteRequestForm component */}
        </motion.div>
      </div>
    )
  );
};

export default QuoteModal;
