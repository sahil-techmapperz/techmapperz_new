'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX, FiMaximize2 } from 'react-icons/fi';

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
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const images = [
		{ src: img1, alt: 'Team at Techmapperz', height: 280 },
		{ src: img2, alt: 'Office workspace', height: 360 },
		{ src: img3, alt: 'Project collaboration', height: 240 },
		{ src: img4, alt: 'GIS work session', height: 320 },
		{ src: img5, alt: 'Team meeting', height: 280 },
		{ src: img6, alt: 'Drone survey team', height: 360 },
		{ src: img7, alt: 'Office environment', height: 300 },
		{ src: img8, alt: 'Development team', height: 360 },
		{ src: img9, alt: 'Field operations', height: 320 },
		{ src: img10, alt: 'Office culture', height: 280 },
		{ src: img11, alt: 'Tech lab', height: 360 },
		{ src: img12, alt: 'Team celebration', height: 240 },
		{ src: img13, alt: 'Project presentation', height: 320 },
		{ src: img14, alt: 'Workshop session', height: 280 },
		{ src: img15, alt: 'Creative workspace', height: 360 },
		{ src: img16, alt: 'Innovation lab', height: 300 },
		{ src: img17, alt: 'Team outing', height: 360 },
		{ src: img18, alt: 'Office life', height: 320 },
	];

	const goNext = (e) => {
		e.stopPropagation();
		setSelectedIndex(prev => (prev + 1) % images.length);
	};

	const goPrev = (e) => {
		e.stopPropagation();
		setSelectedIndex(prev => (prev - 1 + images.length) % images.length);
	};

	return (
		<>
			{/* Grid gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
				{images.map((image, index) => (
					<div
						key={index}
						className="cursor-pointer overflow-hidden rounded-2xl group relative border border-white/5 hover:border-[#00B0FE]/30 transition-all duration-300 aspect-square"
						onClick={() => setSelectedIndex(index)}
						role="button"
						aria-label={`View ${image.alt}`}
						tabIndex={0}
						onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
					>
						<div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-105">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							{/* Hover overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
								<div className="flex items-center justify-between w-full translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
									<span className="text-white text-sm font-medium">{image.alt}</span>
									<div className="w-8 h-8 rounded-full bg-[#00B0FE]/80 flex items-center justify-center">
										<FiMaximize2 className="text-white text-sm" />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Lightbox */}
			{mounted && selectedIndex !== null && typeof document !== 'undefined' && createPortal(
				<div
					className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
					onClick={() => setSelectedIndex(null)}
					role="dialog"
					aria-modal="true"
					aria-label="Image viewer"
				>
					<div
						className="relative w-full max-w-5xl h-[85vh] flex items-center"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Prev */}
						<button
							className="absolute left-0 -translate-x-14 max-sm:-translate-x-0 max-sm:left-2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#00B0FE]/60 transition-all duration-300"
							onClick={goPrev}
							aria-label="Previous image"
						>
							‹
						</button>

						{/* Image */}
						<div className="relative w-full h-full rounded-2xl overflow-hidden">
							<Image
								src={images[selectedIndex].src}
								alt={images[selectedIndex].alt}
								fill
								className="object-contain"
								priority
							/>
						</div>

						{/* Next */}
						<button
							className="absolute right-0 translate-x-14 max-sm:translate-x-0 max-sm:right-2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#00B0FE]/60 transition-all duration-300"
							onClick={goNext}
							aria-label="Next image"
						>
							›
						</button>

						{/* Close */}
						<button
							className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#00B0FE] transition-all duration-300"
							onClick={() => setSelectedIndex(null)}
							aria-label="Close image viewer"
						>
							<FiX />
						</button>

						{/* Counter */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-sm px-4 py-2 rounded-full">
							{selectedIndex + 1} / {images.length}
						</div>
					</div>
				</div>,
				document.body
			)}
		</>
	);
};

export default OfficeLive;