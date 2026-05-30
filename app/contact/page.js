import ScrollToTop from '../_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { IoLocation } from "react-icons/io5";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { ISR_CONFIGS, createOptimizedLoader } from '../lib/utils/performanceOptimizer';

// Lazy load ContactForm as it's not critical for initial render
const ContactForm = dynamic(() => import('../_Components/ContactForm'), {
	ssr: true,
	...createOptimizedLoader("400px", "bg-gradient-to-r from-gray-900 to-gray-800")
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (3600 seconds = 1 hour)
export const revalidate = 3600;

export const metadata = {
	title: "Contact us for all your IT & GIS needs  | Techmapperz",
	description: "Techmapperz is a leading IT Services, GIS and Drone Services provider company in India. ",
	alternates: {
		canonical: `${BASE_URL}/contact`,
	},
};

import { BreadcrumbJsonLd } from '../_Components/JsonLd';

const Contact = () => {
	const getBreadcrumbItems = () => [
		{ name: 'Home', url: BASE_URL },
		{ name: 'Contact Us', url: `${BASE_URL}/contact` }
	];

	return (
		<div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
			<BreadcrumbJsonLd items={getBreadcrumbItems()} />
			<ScrollToTop />

			{/* Premium Ambient Background Effects */}
			<div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#4a8cd4]/15 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
			<div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

			{/* Content */}
			<div className="relative z-10 w-full overflow-hidden">
				{/* Hero Section */}
				<div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-16">
					<div className='text-center space-y-4 mb-16'>
						<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mx-auto">
							<span className="w-2 h-2 rounded-full bg-[#4a8cd4] animate-pulse"></span>
							<span className="text-xs font-bold tracking-widest text-gray-300 uppercase">Contact Us</span>
						</div>
						<h1 className='text-5xl md:text-6xl font-extrabold tracking-tight'>
							Your concerns are our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">priority</span>
						</h1>
						<p className='text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto'>
							Reach out to us today. We'd love to hear from you and discuss how we can help elevate your business.
						</p>
					</div>

					{/* Form Section */}
					<div className="w-full max-w-4xl mx-auto mb-24">
						<ContactForm />
					</div>
				</div>

				{/* Contact Info Grid */}
				<div className='w-full bg-white/[0.01] border-y border-white/5 py-24'>
					<div className='max-w-[1400px] mx-auto px-6 md:px-12'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

							{/* Card 1: Mail */}
							<div className='group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center'>
								<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a8cd4] to-[#8b5cf6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
								<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
									<HiOutlineMail className="text-[#4a8cd4]" />
								</div>
								<h2 className='text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300'>Let's Talk</h2>
								<p className='text-gray-400 mb-6'>Tell us about your next project or big idea.</p>
								<a href="mailto:info@techmapperz.com"
									className='inline-block text-[#4a8cd4] hover:text-white border-b border-[#4a8cd4]/30 hover:border-white transition-all duration-300 font-medium'>
									info@techmapperz.com
								</a>
							</div>

							{/* Card 2: Phone */}
							<div className='group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center'>
								<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d2292b] to-[#ff4747] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
								<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
									<HiOutlinePhone className="text-[#d2292b]" />
								</div>
								<h2 className='text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300'>Say Hello</h2>
								<p className='text-gray-400 mb-6'>Drop us a line or give us a call.</p>
								<div className='flex flex-col gap-2'>
									<a href="tel:+919643002065" className='text-white font-medium hover:text-[#d2292b] transition-colors duration-300'>
										+91-9643002065
									</a>
									<a href="tel:+913335752689" className='text-white font-medium hover:text-[#d2292b] transition-colors duration-300'>
										+91-3335752689
									</a>
								</div>
							</div>

							{/* Card 3: Address */}
							<div className='group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center'>
								<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#d2292b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
								<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
									<IoLocation className="text-[#8b5cf6]" />
								</div>
								<h2 className='text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300'>Our Offices</h2>
								<div className='space-y-4 text-left w-full'>
									<div className='flex gap-4 items-start p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300'>
										<IoLocation className='flex-shrink-0 mt-1 text-xl text-[#8b5cf6]' />
										<p className='text-gray-300 text-sm leading-relaxed'>55, Lane - 2, Westend Marg, Saidullajab, Near Saket metro, New Delhi - 110030</p>
									</div>
									<div className='flex gap-4 items-start p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300'>
										<IoLocation className='flex-shrink-0 mt-1 text-xl text-[#8b5cf6]' />
										<p className='text-gray-300 text-sm leading-relaxed'>CF 401, Block CF, Sector 1, Salt Lake, Kolkata - 700064</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* Map Section */}
				<div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24">
					<div className="text-center mb-12">
						<h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4'>
							Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">Our HQ</span>
						</h2>
						<p className="text-gray-400 font-light">Find us easily via Google Maps.</p>
					</div>

					<div className='relative w-full rounded-[2rem] p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-500'>
						<div className="absolute inset-0 bg-gradient-to-tr from-[#376bab]/10 to-[#d2292b]/10 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
						<div className="relative w-full rounded-[1.5rem] overflow-hidden bg-black shadow-inner">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.596906446634!2d88.415269676073!3d22.594174726557426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754e9bb6f449%3A0xfef69449a7f4a853!2sCF-401%2C%20CF%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1681305583641!5m2!1sen!2sin"
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-[500px] md:h-[650px] filter grayscale-[0.2] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
								title="Techmapperz Office Location"
								style={{ border: 0 }}
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;