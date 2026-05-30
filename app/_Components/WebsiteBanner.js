"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import PremiumButton from "./PremiumButton";

const WebsiteBanner = ({ title, subtitle, description, buttonText, imageSrc, imageAlt, bgImage }) => {
	return (
		<section className="min-h-[80vh] mt-10 banner w-full flex items-center relative bg-black" >
			{bgImage && (
				<div 
					className="absolute inset-0 z-0"
					style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}
				></div>
			)}
			<div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-black via-black/80 to-transparent max-sm:hidden z-0"></div>
			<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent max-sm:hidden z-0"></div>
			<div className="max-w-[1600px] h-full  mx-auto px-20 max-sm:px-4  max-lg:pt-16 flex justify-between items-center max-lg:flex-col gap-8 relative z-10">
				<div className="w-1/2 max-lg:w-full flex flex-col gap-3">
					<div className="bg-[#376bab] text-white px-4 py-2 rounded-full w-fit  text-sm font-medium">
						{subtitle}
					</div>
					<h1 className="text-5xl max-sm:text-3xl font-bold ">
						{title}
					</h1>
					<p className="text-lg max-sm:text-base text-gray-200 ">
						{description}
					</p>
					<div className="flex gap-4">
						<PremiumButton 
							href="/contact" 
							text="Get A Quote" 
							variant="primary" 
							gradient={true}
							icon={FaArrowRightLong} 
						/>

					</div>
				</div>
				<div className="w-1/2 max-lg:w-full relative">
					{imageSrc && (
						<Image
							src={imageSrc}
							alt={imageAlt}
							width={700}
							height={500}
							className="w-full h-auto"
							priority
						/>
					)}
				</div>
			</div>
			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
		</section>
	);
}

export default WebsiteBanner;