import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { memo } from 'react';

const FlipCard = memo(({ desc = "", title = "", icon = <FaLaptopCode />, link = "" }) => {
  return (
    <div className="group relative w-full h-full p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20"></div>

      {/* Glowing Orb Effect on Hover */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#376bab] to-[#d2292b] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 z-0"></div>

      <div className="relative z-20 flex flex-col h-full">
        {/* Premium Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#376bab]/20 to-[#d2292b]/20 border border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
          <div className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {icon}
          </div>
        </div>

        {/* Content */}
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
            {title}
          </h3>
        )}

        <div className="flex-grow">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light mb-8 group-hover:text-gray-300 transition-colors duration-500">
            {desc}
          </p>
        </div>

        {/* Modern Interactive Button */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            aria-label={`Learn more about ${title}`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747] group-hover:to-white transition-all duration-500">
              Explore Service
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-300">
              <FiArrowRight className="text-white text-sm" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

FlipCard.displayName = 'FlipCard';

export default FlipCard;



