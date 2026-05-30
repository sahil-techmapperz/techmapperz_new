'use client'
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '@/public/lifeatTechmapperz/img_1.webp';
import img2 from '@/public/lifeatTechmapperz/img_2.webp';
import img3 from '@/public/lifeatTechmapperz/img_3.webp';
import img4 from '@/public/lifeatTechmapperz/img_4.webp';
import img5 from '@/public/lifeatTechmapperz/img_5.webp';
import img6 from '@/public/lifeatTechmapperz/img_6.webp';
import img7 from '@/public/lifeatTechmapperz/img_7.webp';
import img8 from '@/public/lifeatTechmapperz/img_8.webp';
import img9 from '@/public/lifeatTechmapperz/img_9.webp';
import img10 from '@/public/lifeatTechmapperz/img_10.webp';
import img11 from '@/public/lifeatTechmapperz/img_11.webp';
import img12 from '@/public/lifeatTechmapperz/img_12.webp';
import img13 from '@/public/lifeatTechmapperz/img_13.webp';
import img14 from '@/public/lifeatTechmapperz/img_14.webp';
import img15 from '@/public/lifeatTechmapperz/img_15.webp';
import img16 from '@/public/lifeatTechmapperz/img_16.webp';
import img17 from '@/public/lifeatTechmapperz/img_17.webp';
import img18 from '@/public/lifeatTechmapperz/img_18.webp';

const OfficeLive = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	// Curated 5 images for a "bento box" style grid layout
	const featuredImages = [
		{
			src: img1,
			alt: 'Techmapperz Team Discussion',
			className: "md:col-span-2 md:row-span-2 h-[350px] md:h-[600px]" // Large featured left 
		},
		{
			src: img2,
			alt: 'Office Environment',
			className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]"
		},
		{
			src: img4,
			alt: 'Techmapperz Workspace',
			className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]"
		},
		{
			src: img6,
			alt: 'Team Collaboration',
			className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]"
		},
		{
			src: img10,
			alt: 'Office Culture',
			className: "md:col-span-1 md:row-span-1 h-[250px] md:h-[288px]"
		},
	];

	return (
		<section className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[#020617] border-t border-white/5 overflow-hidden">
			{/* Ambient Background Glows */}
			<div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#4a8cd4]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
			<div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
			<div className="absolute inset-0 bg-[url('/Patterns/grid.svg')] bg-center bg-repeat opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

			<div className="relative w-full max-w-[1400px] mx-auto z-10">

				{/* Top Header Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 max-w-6xl mx-auto">
					{/* Left Title */}
					<div className="space-y-5 text-center lg:text-left">
						<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-sm mx-auto lg:mx-0">
							<span className="w-2 h-2 rounded-full bg-[#f74858] animate-pulse"></span>
							<span className="text-[11px] font-bold tracking-[0.18em] text-white/70 uppercase">Our Culture</span>
						</div>
						<h2 className="text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.1]">
							Life @ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#f74858]">Techmapperz</span>
						</h2>
					</div>

					{/* Right Description */}
					<div className="text-gray-400 text-[16px] md:text-lg font-light leading-relaxed text-center lg:text-left border-l-0 lg:border-l lg:border-white/10 lg:pl-10">
						We are building a work culture driven by learning, teamwork, creativity, and ownership. Our workspace reflects the energy of a team that is passionate about technology, practical problem solving, and meaningful outcomes.
					</div>
				</div>

				{/* Bento Grid Layout for Selected Images */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10 w-full">
					{featuredImages.map((image, index) => (
						<motion.div
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
							key={index}
							className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-[#0A0F18] border border-white/5 shadow-2xl hover:border-white/20 transition-all duration-500 ${image.className}`}
							onClick={() => setSelectedImage(image)}
						>
							<div className="absolute inset-0 bg-[#4a8cd4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
								sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
								priority={index === 0}
							/>
							{/* Soft Vignette/Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500 pointer-events-none z-10"></div>

							{/* Lightbox Trigger Text */}
							<div className="absolute inset-0 flex items-end justify-center p-6 md:p-8 z-20">
								<div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pb-2">
									<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
										View Photo
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

			</div>

			{/* Custom Lightbox */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
						animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
						exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-[#020617]/90 flex items-center justify-center z-[100] p-4 md:p-10"
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
							className="relative w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-black"
							onClick={(e) => e.stopPropagation()}
						>
							<Image
								src={selectedImage.src}
								alt={selectedImage.alt}
								fill
								className="object-contain"
								priority
							/>
							<button
								className="absolute top-6 right-6 text-white/70 bg-black/50 hover:bg-white/10 rounded-full p-3 backdrop-blur-md border border-white/10 hover:text-white transition-all duration-300 group shadow-xl"
								onClick={() => setSelectedImage(null)}
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default OfficeLive;