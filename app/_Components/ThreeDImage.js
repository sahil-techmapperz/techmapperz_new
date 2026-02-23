"use client";
import { useState } from "react";
import Image from "next/image";
import Hero_img from "@/public/Photos/3Drendered_digital_Ear.webp";

const ThreeDImage = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside the div
    const y = e.clientY - rect.top; // Mouse Y inside the div
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25; // Tilt up/down (-15 to 15 deg)
    const rotateY = ((x - centerX) / centerX) * 25; // Tilt left/right (-15 to 15 deg)

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-8 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.2s ease-out",
        }}
        className="relative z-10 drop-shadow-2xl"
      >
        <Image
          src={Hero_img}
          alt="IT & GIS Solutions"
          height={800}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ThreeDImage;
