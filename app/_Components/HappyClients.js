"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Genesys_logo from "@/public/Photos/Genesys_logo.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.webp";
import shrc_logo from "@/public/Photos/Shrc_logo.webp";
import whitespreadfoods_logo from "@/public/Photos/whitespreadfoods_logo.webp";
import NS_logo from "@/public/Photos/NS_logo.webp";
import khanconsultants_logo from "@/public/Photos/khanconsultants_logo.webp";
import new_company_logo from "@/public/Photos/new_company_logo.webp";
import Facalties_online_logo from "@/public/Photos/Facalties_online_logo.webp";
import English_faculties_logo from "@/public/Photos/English_faculties_logo.webp";
import Fabcon_Logo from "@/public/Photos/Fabcon Logo.webp";
import aereo_logo from "@/public/Photos/aereo_logo.webp";
import consortium_logo from "@/public/Photos/consortium_logo.webp";

const clientsRow = [
  Genesys_logo,
  Cocreatelab_logo,
  manusherghorbari_logo,
  premierautosource_logo,
  whitespreadfoods_logo,
  shrc_logo,
  NS_logo,
  Fabcon_Logo,
  khanconsultants_logo,
  English_faculties_logo,
  Facalties_online_logo,
  new_company_logo,
  aereo_logo,
  consortium_logo
];

// Split clients into two rows for the dual marquee
const half = Math.ceil(clientsRow.length / 2);
const row1Clients = clientsRow.slice(0, half);
const row2Clients = clientsRow.slice(half);

// Duplicate the arrays to create seamless infinite loops
const duplicatedRow1 = [...row1Clients, ...row1Clients];
const duplicatedRow2 = [...row2Clients, ...row2Clients];

const ClientCard = ({ client, index }) => (
  <div
    key={index}
    className="relative flex justify-center items-center w-40 h-28 md:w-56 md:h-36 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm p-6 overflow-hidden"
  >
    <Image
      src={client}
      alt={`Client partner logo ${index}`}
      className="object-contain max-h-full max-w-full drop-shadow-md"
    />
  </div>
);

const HappyClients = () => {
  return (
    <section className="bg-[#020617] relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#376bab]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d2292b]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]"></span>
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Trusted By Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Happy Clients</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Empowering disruptive startups and global enterprises across multiple industries to achieve digital excellence.
          </p>
        </motion.div>

      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex flex-col gap-6 overflow-hidden w-full mt-10">

        {/* Fade gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

        {/* Animated Track 1: Right to Left */}
        <motion.div
          className="flex whitespace-nowrap gap-6 md:gap-8 items-center justify-start min-w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedRow1.map((client, index) => (
            <ClientCard key={`row1-${index}`} client={client} index={index} />
          ))}
        </motion.div>

        {/* Animated Track 2: Left to Right */}
        <motion.div
          className="flex whitespace-nowrap gap-6 md:gap-8 items-center justify-start min-w-max"
          animate={{ x: ["-50%", 0] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedRow2.map((client, index) => (
            <ClientCard key={`row2-${index}`} client={client} index={index} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HappyClients;

