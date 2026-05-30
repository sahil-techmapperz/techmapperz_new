'use client'
import { motion } from 'framer-motion'
import { MdSearch, MdDocumentScanner, MdDesignServices, MdCode, MdBugReport, MdSettings } from 'react-icons/md'

const Roadmap = () => {
	const cards = [
		{
			id: '01',
			title: 'Discovery Workshop',
			icon: <MdSearch className="text-4xl" />,
			description: 'The workshop is designed to be transparent, informative and innovation agency led by Techmapperz. We conduct in-depth research, gather data, and analyse it to evaluate the feasibility, practicality, and usability of our clients ideas. These insights help us craft user personas, define project scope, identify risks, and set clear goals.',
			bgImage: '/Roadmap/Discovery_Workshop.webp'
		},
		{
			id: '02',
			title: 'Planning & Documentation',
			icon: <MdDocumentScanner className="text-4xl" />,
			description: 'Techmapperz prioritizes user experience, security, and performance in their carefully planned development process. Our ability to adapt and provide compliant, tailored software solutions that satisfy the particular requirements of our international clientele is made possible by this pivotal stage. ',
			bgImage: '/Roadmap/Planning&Documentation.webp'
		},
		{
			id: '03',
			title: 'UX/UI Design',
			icon: <MdDesignServices className="text-4xl" />,
			description: 'Our UX/UI design services assist clients in producing smooth, intuitive digital experiences. Our material is arranged naturally to improve user engagement and make sure consumers can access what they need with ease. We create designs that focus user demands, increase happiness, and fit with your company goals for a competitive advantage by fusing practical design with aesthetically pleasing elements.',
			bgImage: '/Roadmap/UXUI_Design.webp'
		},
		{
			id: '04',
			title: 'Development',
			icon: <MdCode className="text-4xl" />,
			description: 'Our development process goes beyond code—we craft unique, tailor-made solutions designed to solve real business challenges. By combining innovation with industry best practices, we deliver secure, scalable, and high-performing applications that can help you compete other competitors.',
			bgImage: '/Roadmap/Development.webp'
		},
		{
			id: '05',
			title: 'Testing & Deployment',
			icon: <MdBugReport className="text-4xl" />,
			description: 'Our testing and implementation services ensure your software is robust, secure, and ready for launch. We conduct thorough testing to identify and resolve issues, guaranteeing optimal performance. After implementation, we also provide post-release monitoring to ensure product stability.',
			bgImage: '/Roadmap/Development.webp'
		},
		{
			id: '06',
			title: 'Support & Maintenance',
			icon: <MdSettings className="text-4xl" />,
			description: 'Being a top Website development firm, we offer post-launch assistance to improve functionality and durability. We guarantee dependability, security, and smooth operation with our maintenance services, which include bug fixes, updates, security patches, and technical assistance. For Mobile app, websites, and services, a robust support system reduces downtime, improves user experience, and guarantees long-term success.',
			bgImage: '/Roadmap/Support&Maintenance.webp'
		}
	]

	return (
		<div className="bg-[#020817] p-4 md:p-8 flex flex-col items-center justify-center">
			<div className="w-full max-w-7xl mb-12 text-center">
				<div className="inline-block">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Development Road Map</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
				</div>

			</div>
			<div className="flex flex-col md:flex-row w-full max-w-7xl border-[1px] border-white rounded-2xl overflow-hidden gap-0">
				{cards.map((card, index) => (
					<motion.div
						key={card.id}
						className={`relative bg-[#0A1229]/60 backdrop-blur-sm p-4 md:p-6 cursor-pointer group overflow-hidden ${index !== cards.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-[1px] border-white' : ''
							} min-h-[150px] hover:min-h-[200px] md:h-[400px] md:max-h-[400px] transition-all duration-300`}
						initial={{
							flex: 1
						}}
						whileHover={{
							flex: typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1,
							scale: 1.02
						}}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gray-700"
						// style={{
						// 	backgroundImage: `url(${card.bgImage})`,
						// 	backgroundSize: 'cover',
						// 	backgroundPosition: 'center',
						// 	backgroundRepeat: 'no-repeat'
						// }}
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-[#0A1229]/90 via-[#0A1229]/80 to-[#0A1229]/70 group-hover:from-[#0A1229]/70 group-hover:via-[#0A1229]/60 group-hover:to-[#0A1229]/50 transition-all duration-300" />

						<div className="relative z-10 h-full flex flex-col">
							<div className="text-white group-hover:text-cyan-400 mb-2 transform group-hover:scale-110 transition-transform duration-300">
								{card.icon}
							</div>
							<div className="flex items-baseline gap-2 mb-2">
								<span className="text-gray-500 text-xs md:text-sm font-mono">{card.id}</span>
								<h3 className="text-white text-sm md:text-[18px] font-semibold group-hover:text-cyan-300 transition-colors duration-300">
									{card.title}
								</h3>
							</div>
							<p className="text-gray-400 text-xs md:text-sm md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 delay-100 transform md:group-hover:translate-y-0 md:translate-y-2">
								{card.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Roadmap