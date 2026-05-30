
'use client'
import { FaLightbulb, FaHandshake, FaBrain, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import { GiCog } from 'react-icons/gi';
import { motion } from 'framer-motion';

const CompanyValues = () => {
	const values = [
		{
			icon: <FaLightbulb />,
			text: 'Simplicity',
			description: 'We keep solutions clear, practical, and easy to adopt.'
		},
		{
			icon: <FaHandshake />,
			text: 'Flexibility',
			description: 'We stay adaptable and open-minded in dynamic project environments.'
		},
		{
			icon: <FaBrain />,
			text: 'Ingenuity',
			description: 'We value thoughtful ideas and creative approaches to problem solving.'
		},
		{
			icon: <FaBalanceScale />,
			text: 'Accountability',
			description: 'We take ownership of our work and our commitments.'
		},
		{
			icon: <FaShieldAlt />,
			text: 'Integrity',
			description: 'We make responsible decisions based on professionalism and trust.'
		}
	];

	return (
		<section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-[#020617] overflow-hidden border-t border-b border-white/5">
			{/* Ambient Glows */}
			<div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-[#4a8cd4]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
			<div className="absolute bottom-[30%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

			<div className="relative z-10 text-center mb-20 space-y-4">
				<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mx-auto">
					<span className="w-2 h-2 rounded-full bg-[#d2292b] animate-pulse"></span>
					<span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Core Beliefs</span>
				</div>
				<h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
					Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">Values</span>
				</h2>
			</div>

			<div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 w-full max-w-[1200px] mx-auto relative z-10">
				{values.map((value, index) => (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.15, duration: 0.5 }}
						key={index}
						className="flex flex-col items-center group relative cursor-pointer"
					>
						{/* Spinning Gear & Icon Container */}
						<div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mb-6">
							{/* Deep Background Glow on Hover */}
							<div className="absolute inset-0 bg-[#4a8cd4]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* The Spinning Gear */}
							<motion.div
								animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
								transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
								className="absolute inset-0 flex items-center justify-center text-[#4a8cd4] text-[7rem] md:text-[8rem] opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(74,140,212,0.8)] transition-all duration-300"
							>
								<GiCog />
							</motion.div>

							{/* Center Icon */}
							<div className="relative z-10 text-white text-3xl md:text-4xl bg-[#020617] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-[#4a8cd4] shadow-[inset_0_0_10px_rgba(74,140,212,0.5)] group-hover:scale-110 group-hover:bg-[#4a8cd4] group-hover:text-white transition-all duration-300">
								{value.icon}
							</div>
						</div>

						{/* Text Header */}
						<div className="text-white text-lg md:text-xl font-bold tracking-wide group-hover:text-[#4a8cd4] transition-colors duration-300">
							{value.text}
						</div>

						{/* Glassmorphic Hover Tooltip */}
						<div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-64 p-4 rounded-xl bg-[#020617]/90 border border-white/10 backdrop-blur-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 z-50 text-center pointer-events-none">
							<div className="text-gray-300 text-sm leading-relaxed">{value.description}</div>
							{/* Tooltip top triangle pointer */}
							<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#020617]/90 border-t border-l border-white/10 rotate-45 transform"></div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default CompanyValues;