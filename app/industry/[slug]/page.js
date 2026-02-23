"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categoryData } from '@/app/_Components/Industry_Expertise';

const IndustryDetailPage = () => {

	const params = useParams();
	const industry = categoryData.find(
		cat => cat.name.toLowerCase().replace(/[&\s]+/g, '-') === params.slug
	);

	// Dynamic features based on industry type
	const getIndustryFeatures = (slug) => {
		switch(slug) {
			case 'e-commerce':
				return [
					{ title: "B2B Solutions", description: "Enterprise-grade B2B e-commerce platforms" },
					{ title: "Online Marketplaces", description: "Custom marketplace development solutions" },
					{ title: "Payment Integration", description: "Secure payment gateway integrations" },
					{ title: "Inventory Management", description: "Real-time inventory tracking and management" }
				];
			case 'education-e-learning':
				return [
					{ title: "LMS Development", description: "Custom learning management system solutions" },
					{ title: "Virtual Classrooms", description: "Interactive virtual learning environments" },
					{ title: "Educational Apps", description: "Mobile and web-based educational applications" },
					{ title: "Interactive Content", description: "Engaging digital learning content creation" }
				];
			case 'government-public-sector':
				return [
					{ title: "E-Governance", description: "Digital government service platforms" },
					{ title: "Public Services", description: "Citizen-centric digital solutions" },
					{ title: "Digital Documentation", description: "Paperless document management systems" },
					{ title: "Citizen Portals", description: "User-friendly government service portals" }
				];
			case 'healthcare':
				return [
					{ title: "EMR Systems", description: "Electronic medical record management" },
					{ title: "Telemedicine", description: "Remote healthcare delivery platforms" },
					{ title: "Healthcare Apps", description: "Patient care and management applications" },
					{ title: "Medical Analytics", description: "Healthcare data analysis solutions" }
				];
			case 'logistics-supply-chain':
				return [
					{ title: "Fleet Management", description: "Real-time fleet tracking and management" },
					{ title: "Inventory Tracking", description: "End-to-end inventory monitoring" },
					{ title: "Supply Chain Analytics", description: "Advanced supply chain optimization" },
					{ title: "Route Optimization", description: "Smart routing and delivery planning" }
				];
			case 'manufacturing':
				return [
					{ title: "Process Automation", description: "Manufacturing process automation solutions" },
					{ title: "Quality Control", description: "Automated quality assurance systems" },
					{ title: "Production Planning", description: "Smart production scheduling and management" },
					{ title: "Industrial IoT", description: "Connected manufacturing solutions" }
				];
			case 'retail':
				return [
					{ title: "POS Systems", description: "Modern point-of-sale solutions" },
					{ title: "Inventory Management", description: "Smart retail inventory control" },
					{ title: "Customer Analytics", description: "Retail customer behavior insights" },
					{ title: "Omnichannel Retail", description: "Seamless multi-channel retail solutions" }
				];
			case 'travel-hospitality':
				return [
					{ title: "Booking Systems", description: "Advanced travel booking platforms" },
					{ title: "Hotel Management", description: "Comprehensive hotel management solutions" },
					{ title: "Travel Apps", description: "Custom travel and booking applications" },
					{ title: "Customer Experience", description: "Enhanced guest experience platforms" }
				];
			default:
				return [
					{ title: "Custom Solutions", description: "Tailored solutions designed specifically for your business needs" },
					{ title: "Latest Technology", description: "Implementation of cutting-edge technologies and best practices" },
					{ title: "Scalable Systems", description: "Solutions that grow with your business needs" },
					{ title: "24/7 Support", description: "Round-the-clock technical support and maintenance" }
				];
		}
	};

	const features = getIndustryFeatures(params.slug);

	// Dynamic benefits based on industry type
	const getIndustryBenefits = (slug) => {
		switch(slug) {
			case 'e-commerce':
				return [
					{ title: "Increased Sales", description: "Boost revenue through optimized digital channels" },
					{ title: "Market Reach", description: "Expand your business to new markets globally" },
					{ title: "Customer Engagement", description: "Enhanced shopping experience and customer loyalty" },
					{ title: "Operational Efficiency", description: "Streamlined order and inventory management" }
				];
			case 'education-e-learning':
				return [
					{ title: "Enhanced Learning", description: "Improved student engagement and outcomes" },
					{ title: "Accessibility", description: "Learning available anytime, anywhere" },
					{ title: "Cost Efficiency", description: "Reduced operational and infrastructure costs" },
					{ title: "Progress Tracking", description: "Better monitoring of student performance" }
				];
			case 'government-public-sector':
				return [
					{ title: "Improved Services", description: "Better citizen service delivery" },
					{ title: "Transparency", description: "Enhanced accountability and accessibility" },
					{ title: "Cost Savings", description: "Reduced administrative overhead" },
					{ title: "Data Security", description: "Secure handling of sensitive information" }
				];
			case 'healthcare':
				return [
					{ title: "Better Patient Care", description: "Improved healthcare service delivery" },
					{ title: "Efficient Operations", description: "Streamlined medical processes" },
					{ title: "Data Accuracy", description: "Enhanced medical record management" },
					{ title: "Compliance", description: "Meeting healthcare regulations and standards" }
				];
			case 'logistics-supply-chain':
				return [
					{ title: "Real-time Tracking", description: "Enhanced visibility across supply chain" },
					{ title: "Cost Optimization", description: "Reduced operational expenses" },
					{ title: "Faster Delivery", description: "Improved delivery times and efficiency" },
					{ title: "Better Planning", description: "Data-driven supply chain decisions" }
				];
			case 'manufacturing':
				return [
					{ title: "Higher Productivity", description: "Increased manufacturing output" },
					{ title: "Quality Assurance", description: "Improved product quality control" },
					{ title: "Resource Optimization", description: "Better resource utilization" },
					{ title: "Reduced Downtime", description: "Minimized production interruptions" }
				];
			case 'retail':
				return [
					{ title: "Sales Growth", description: "Increased revenue through multiple channels" },
					{ title: "Customer Insights", description: "Better understanding of customer behavior" },
					{ title: "Inventory Control", description: "Optimized stock management" },
					{ title: "Competitive Edge", description: "Enhanced market positioning" }
				];
			case 'travel-hospitality':
				return [
					{ title: "Guest Satisfaction", description: "Enhanced customer experience" },
					{ title: "Revenue Growth", description: "Optimized booking and pricing" },
					{ title: "Operational Excellence", description: "Streamlined hospitality operations" },
					{ title: "Brand Loyalty", description: "Increased customer retention" }
				];
			default:
				return [
					{ title: "Increased Efficiency", description: "Streamline operations and improve productivity" },
					{ title: "Cost Reduction", description: "Optimize resources and reduce operational costs" },
					{ title: "Better Customer Experience", description: "Enhanced user experience and satisfaction" },
					{ title: "Data-Driven Insights", description: "Make informed decisions with advanced analytics" }
				];
		}
	};

	const benefits = getIndustryBenefits(params.slug);

	if (!industry) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-black">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
					<Link href="/" className="text-blue-400 hover:text-blue-300">
						Return to Home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			{/* Hero Header Section */}
			<div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
				<div className="absolute inset-0 bg-black/70 z-10" />
				<Image
					src={industry.image}
					alt={industry.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
					<span className="text-4xl sm:text-5xl md:text-6xl mb-4">{industry.icon}</span>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
						{industry.name}
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl animate-fade-in-up px-4">
						{industry.desc}
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="py-8 sm:py-12 md:py-16 px-4">
				<div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
					{/* Services Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Services</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{industry.categoryTypes.map((type, index) => (
									<div
										key={index}
										className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
									>
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{type}</h3>
										<p className="text-gray-400 text-sm sm:text-base">
											Comprehensive solutions for {type.toLowerCase()} in the {industry.name.toLowerCase()} sector
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Features Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Key Features</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{features.map((feature, index) => (
									<div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-1">
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{feature.title}</h3>
										<p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Benefits Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Benefits</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-1">
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{benefit.title}</h3>
										<p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8 text-center">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
							<p className="text-gray-400 text-sm sm:text-base mb-6">
								Let's discuss how we can help transform your {industry.name.toLowerCase()} business
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/contact"
									className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
								>
									Contact Us
								</Link>
								<Link
									href="/"
									className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
								>
									Back to Industries
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};

export default IndustryDetailPage;
