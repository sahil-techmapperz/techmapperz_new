import Link from "next/link";
import React from "react";

const PremiumButton = ({
  href = "#",
  text,
  variant = "primary", // "primary" or "secondary"
  icon: Icon,
  gradient = false,
  external = false,
  className = ""
}) => {
  const isPrimary = variant === "primary";

  const baseStyles = "group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 rounded-full overflow-hidden backdrop-blur-md";
  
  const primaryStyles = gradient
    ? "bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
    : "bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]";
    
  const secondaryStyles = "bg-[rgba(59,130,246,0.27)] border border-[rgba(0,97,255,1)] hover:bg-[rgba(59,130,246,0.4)]";

  const combinedStyles = `${baseStyles} ${isPrimary ? primaryStyles : secondaryStyles} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {Icon && !isPrimary && <span className="text-[#ff4747]"><Icon className="text-xl group-hover:scale-110 transition-transform duration-300" /></span>}
      {text}
      {Icon && isPrimary && <Icon className="group-hover:translate-x-1 transition-transform" />}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {content}
    </Link>
  );
};

export default PremiumButton;
