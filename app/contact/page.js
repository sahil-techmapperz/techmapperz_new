import ScrollToTop from '../_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import { IoLocation } from "react-icons/io5";
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

const Contact = () => {
	return (
		<div className="relative min-h-screen bg-black text-white">
			<ScrollToTop />
			
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(55,107,171,0.4)_0%,transparent_70%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(210,41,43,0.2)_0%,transparent_70%)]"></div>
			<div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/90"></div>
			
			{/* Content */}
			<div className="relative z-10">
				{/* Hero Section */}
				<div className="max-w-[1600px] mx-auto px-4 pt-24 pb-16">
					<div className='text-center space-y-4 mb-6'>
						<h1 className='text-4xl md:text-5xl font-bold leading-tight'>
							<span className="bg-gradient-to-r from-white via-[#396BA9] to-white bg-clip-text text-transparent">
								Your concerns are our priority
							</span>
						</h1>
						<p className='text-[#396BA9] font-semibold text-xl md:text-2xl'>
							We'd love to hear from you
						</p>
					</div>

					{/* Form Section */}
					<div className="max-w-4xl mx-auto">
						<ContactForm />
					</div>
				</div>

				{/* Contact Info Section */}
				<div className='bg-gradient-to-r from-[#396BA9] to-[#2a4f7d]'>
					<div className='max-w-[1600px] mx-auto px-4 py-16'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='bg-black/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300'>
								<h2 className='text-2xl md:text-3xl font-bold mb-4'>Let's Talk</h2>
								<p className='text-gray-200 mb-3'>Tell us about your next project.</p>
								<a href="mailto:info@techmapperz.com" 
									 className='inline-block text-white hover:text-[#87171D] border-b-2 border-[#87171D] transition-all duration-300'>
									info@techmapperz.com
								</a>
							</div>

							<div className='bg-black/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300'>
								<h2 className='text-2xl md:text-3xl font-bold mb-4'>Say Hello</h2>
								<p className='text-gray-200 mb-3'>Drop us a line or give us a call.</p>
								<p className='text-white hover:text-[#87171D] border-b-2 border-[#87171D] transition-all duration-300 inline-block'>
									+91-9643002065 / +91-3335752689
								</p>
							</div>

							<div className='bg-black/10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300'>
								<h2 className='text-2xl md:text-3xl font-bold mb-6'>Our Offices</h2>
								<div className='space-y-6'>
									<div className='flex gap-3 group'>
										<IoLocation className='flex-shrink-0 mt-1 text-2xl text-[#87171D] group-hover:scale-110 transition-transform duration-300' />
										<p className='text-gray-200'>55, Lane - 2, Westend Marg, Saidullajab, Near Saket metro station, New Delhi - 110030, India</p>
									</div>
									<div className='flex gap-3 group'>
										<IoLocation className='flex-shrink-0 mt-1 text-2xl text-[#87171D] group-hover:scale-110 transition-transform duration-300' />
										<p className='text-gray-200'>CF 401, Block CF, Sector 1, Salt Lake, Kolkata-700064, India</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Map Section */}
				<div className="max-w-[1600px] mx-auto px-4 py-16">
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-white'>
						<span className='relative inline-block'>
							Visit Us
							<div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#87171D] to-transparent'></div>
						</span>
					</h2>
					<div className='rounded-xl overflow-hidden shadow-2xl border-2 border-[#396BA9]/20 bg-white'>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.596906446634!2d88.415269676073!3d22.594174726557426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754e9bb6f449%3A0xfef69449a7f4a853!2sCF-401%2C%20CF%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1681305583641!5m2!1sen!2sin"
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full h-[500px] md:h-[600px]"
							title="Techmapperz Office Location"
							style={{ border: 0 }}
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;