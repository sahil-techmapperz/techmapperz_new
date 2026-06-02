"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadMoreGallery({ projects }) {
  const [visibleCount, setVisibleCount] = useState(5);
  
  const galleryLayoutClasses = [
    "md:col-span-2 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[400px] hover:border-[#05D7DE]/30 transition-all duration-300",
    "md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[400px] hover:border-[#05D7DE]/30 transition-all duration-300",
    "md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300",
    "md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300",
    "md:col-span-1 group rounded-2xl overflow-hidden border border-white/5 bg-[#161C26] flex flex-col h-80 md:h-[350px] hover:border-[#05D7DE]/30 transition-all duration-300"
  ];

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.slug || idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 5) * 0.1 }}
              className={galleryLayoutClasses[idx % 5]}
            >
              <Link href={`/portfolios/${project.slug}`} className="w-full h-full flex flex-col relative flex-grow">
                <div className="relative flex-grow overflow-hidden bg-[#1C2331]">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161C26] to-transparent opacity-60"></div>
                </div>
                <div className="p-4 bg-[#141A24] border-t border-white/5 flex items-center justify-between z-10 mt-auto">
                  <span className="text-gray-300 text-sm font-medium line-clamp-1 truncate max-w-[80%]">{project.name}</span>
                  <span className="text-[#05D7DE] text-[10px] font-bold px-2 py-1 bg-[#05D7DE]/10 rounded-full shrink-0">{project.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleLoadMore}
            className="px-10 py-3 bg-transparent border-[1.5px] border-[#05D7DE] text-[#05D7DE] font-semibold rounded-full hover:bg-[#05D7DE] hover:text-[#090E17] transition-colors duration-300 tracking-wide shadow-[0_0_15px_rgba(5,215,222,0.15)] hover:shadow-[0_0_20px_rgba(5,215,222,0.4)]"
          >
            Load More Portfolios
          </button>
        </div>
      )}
    </div>
  );
}
