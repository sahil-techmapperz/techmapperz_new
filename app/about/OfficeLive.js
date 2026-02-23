'use client'
import Image from 'next/image';
import { useState } from 'react';

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

	const images = [
		{ src: img1, alt: 'Office Environment 1', height: 300 },
		{ src: img2, alt: 'Office Environment 2', height: 400 },
		{ src: img3, alt: 'Office Environment 3', height: 250 },
		{ src: img4, alt: 'Office Environment 4', height: 350 },
		{ src: img5, alt: 'Office Environment 5', height: 300 },
		{ src: img6, alt: 'Office Environment 6', height: 400 },
		{ src: img7, alt: 'Office Environment 6', height: 400 },
		{ src: img8, alt: 'Office Environment 6', height: 400 },
		{ src: img9, alt: 'Office Environment 6', height: 400 },
		{ src: img10, alt: 'Office Environment 1', height: 300 },
		{ src: img11, alt: 'Office Environment 2', height: 400 },
		{ src: img12, alt: 'Office Environment 3', height: 250 },
		{ src: img13, alt: 'Office Environment 4', height: 350 },
		{ src: img14, alt: 'Office Environment 5', height: 300 },
		{ src: img15, alt: 'Office Environment 6', height: 400 },
		{ src: img16, alt: 'Office Environment 6', height: 400 },
		{ src: img17, alt: 'Office Environment 6', height: 400 },
		{ src: img18, alt: 'Office Environment 6', height: 400 },
		
	];

	return (
		<section className="py-20 px-[5rem] max-sm:px-[15px] bg-[rgba(33,33,33,1)]">
			<div className="text-center mb-16">
				<h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Life @ Techmapperz</h2>
				<p className="text-gray-300 text-lg mb-4">Experience our workspace environment</p>
				<div className="w-20 h-1 bg-[#00B0FE] mx-auto rounded-full"></div>
			</div>

			<div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-[1400px]">
				{images.map((image, index) => (
					<div 
						key={index} 
						className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group mb-6"
						onClick={() => setSelectedImage(image)}
						style={{ height: `${image.height}px` }}
					>
						<div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-105">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
								<span className="text-white text-base font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
									View Image
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{selectedImage && (
				<div 
					className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative w-full max-w-5xl h-[85vh]">
						<Image
							src={selectedImage.src}
							alt={selectedImage.alt}
							fill
							className="object-contain"
							priority
						/>
						<button 
							className="absolute top-4 right-4 text-white bg-[#00B0FE] rounded-full p-2 hover:bg-white hover:text-[#00B0FE] transition-all duration-300"
							onClick={(e) => {
								e.stopPropagation();
								setSelectedImage(null);
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default OfficeLive;