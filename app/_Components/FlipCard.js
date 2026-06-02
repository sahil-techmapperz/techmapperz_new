import Link from 'next/link';
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { memo } from 'react';

const FlipCard = memo(({ desc = "", title = "", icon = <FaLaptopCode />, link = "" }) => {
  return (
    <div className="group h-full flex flex-col p-8 rounded-[2rem] bg-[#111622]/80 backdrop-blur-xl border border-white/5 hover:border-[#d2292b]/30 transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-[0_10px_40px_rgba(210,41,43,0.1)] hover:-translate-y-2">
      
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b7bff]/10 via-[#855896]/10 to-[#d2292b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#1C2433] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl overflow-hidden">
        {/* The icon SVG itself - we use brightness to turn it white if needed, but allow custom SVG colors */}
        <div className="w-10 h-10 object-contain text-white drop-shadow-[0_0_8px_rgba(210,41,43,0.5)] flex items-center justify-center">
            {icon}
        </div>
      </div>

      {/* Title */}
      {title && (
        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d2292b] transition-colors duration-500 relative z-10 tracking-tight">
          {title}
        </h2>
      )}

      {/* Description */}
      <div className="flex-grow relative z-10 mb-8">
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {desc}
        </p>
      </div>

      {/* Button */}
      <div className="relative z-10 mt-auto">
        <Link 
          href={link} 
          className="inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 bg-[#1C2433] border border-white/10 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#4b7bff] group-hover:via-[#855896] group-hover:to-[#d2292b] group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(210,41,43,0.3)]"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>
          <FaArrowRight className="text-[#ffb3b3] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </div>

    </div>
  );
});

FlipCard.displayName = 'FlipCard';

export default FlipCard;



