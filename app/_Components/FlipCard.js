import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { memo } from 'react';

const FlipCard = memo(({ desc = "", title = "", icon = <FaLaptopCode />, link = "" }) => {
  return (
    <div className="w-full mb-4 md:mb-6 p-3 md:p-4 group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-500 ease-in-out will-change-transform hover:transform hover:scale-105">
      {/* Icon */}
      <div className="text-3xl md:text-5xl mb-3 md:mb-4 transition-all duration-700 relative z-10 group-hover:fill-white">
        <div className="group-hover:brightness-0 text-white">{icon}</div>
      </div>

      {/* Title */}
      {title && (
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-300 group-hover:text-white transition-colors duration-700 relative z-10">
          {title}
        </h2>
      )}

      {/* Description */}
      <div className="space-y-2 md:space-y-3">
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-white transition-colors duration-700 relative z-10">
          {desc}
        </p>
      </div>

      {/* Button */}
      <Link 
        href={link} 
        className="inline-block custom-button text-sm md:text-base px-4 md:px-6 py-3 md:py-4 mt-3 md:mt-4 border border-white rounded-lg text-white transition-all duration-700 relative z-10 group-hover:bg-white group-hover:text-black min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label={`Learn more about ${title}`}
      >
        {title ? `Learn More About ${title}` : 'Learn More'}
      </Link>

      {/* Background gradient on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#376bab] via-[#376bab] via-60% to-[#d2292b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
    </div>
  );
});

FlipCard.displayName = 'FlipCard';

export default FlipCard;



