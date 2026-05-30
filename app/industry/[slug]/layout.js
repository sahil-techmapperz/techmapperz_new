import { categoryData } from '@/app/_Components/Industry_Expertise';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const getIndustryMetadata = (slug) => {
		switch (slug) {
			case 'e-commerce':
				return {
					canonical: 'e-commerce',
					title: 'E-commerce Website & App Development Company | Techmapperz',
					description: 'Custom e-commerce solutions, including B2B Website & Mobile App, online marketplaces, payment integration, and inventory management systems.',
					keywords: 'e-commerce solutions, B2B platforms, online marketplace development, payment integration, inventory management'
				};
			case 'education-e-learning':
				return {
					canonical: 'education-e-learning',
					title: 'Education & E-learning Software & App Development Experts | Techmapperz',
					description: 'Transform education with our IT & geospatial solutions. We offer custom LMS development, virtual classrooms, and interactive content—providing scalable systems, 24/7 support, and data-driven insights.',
					keywords: 'e-learning solutions, LMS development, virtual classrooms, educational apps, interactive content'
				};
			case 'government-public-sector':
				return {
					canonical: 'government-public-sector',
					title: 'IT & Geospatial Solutions for Government & Public Sector | Techmapperz',
					description: 'Empower governance with our digital solutions—from e-governance to citizen portals and digital documentation. Streamline operations, enhance public service delivery, and make data-driven decisions with ease.',
					keywords: 'e-governance solutions, public sector technology, digital documentation, citizen portals'
				};
			case 'healthcare':
				return {
					canonical: 'healthcare',
					title: 'IT Solutions for Healthcare | EMR & Telemedicine | Techmapperz',
					description: 'Transform patient care with our custom healthcare solutions—from EMR systems to telemedicine, mobile apps, and analytics. Elevate operations, ensure compliance, and make patient care a breeze.',
					keywords: 'healthcare technology, EMR systems, telemedicine solutions, healthcare apps, medical analytics'
				};
			case 'logistics-supply-chain':
				return {
					canonical: 'logistics-supply-chain',
					title: 'Trusted IT Solutions for Logistics & Supply Chain | Techmapperz',
					description: 'Boost your logistics and supply chain efficiency with our IT & geospatial solutions. From fleet management to route optimization, we provide custom, scalable systems backed by 24/7 support. We help you reduce costs, enhance customer experiences, and make data-driven decisions.',
					keywords: 'logistics technology, supply chain solutions, fleet management, inventory tracking, route optimization'
				};
			case 'manufacturing':
				return {
					canonical: 'manufacturing',
					title: 'Top-rated IT & Drone Solutions for the Manufacturing Sector | Techmapperz',
					description: 'Transform your manufacturing processes with Techmapperz’s IT, GIS, and Drone solutions. Explore advanced process automation, production planning, Industrial IoT, and more for improved efficiency, quality, and resource optimization.',
					keywords: 'manufacturing technology, process automation, quality control, industrial IoT, production planning'
				};
			case 'retail':
				return {
					canonical: 'retail',
					title: 'Software & IT Solutions for Retail & Supply Chain | Techmapperz',
					description: 'Retail solutions including POS systems, inventory management, and omnichannel retail platforms.',
					keywords: 'retail technology, POS systems, inventory management, customer analytics, omnichannel retail'
				};
			case 'travel-hospitality':
				return {
					canonical: 'travel-hospitality',
					title: 'Website & App Development for Travel & Hospitality | Techmapperz',
					description: 'Transform the travel and hospitality sector with our custom digital solutions—booking systems, hotel management, travel apps, and more.',
					keywords: 'travel technology, hospitality solutions, booking systems, hotel management, travel apps'
				};
			default:
				return {
					canonical: '',
					title: 'IT & Geospatial Solutions for Industries | Techmapperz',
					description: 'Explore Techmapperz’s IT, GIS, and Drone solutions across E-commerce, Education, Healthcare, and Government sectors—innovative, scalable, and cost-effective.',
					keywords: 'technology solutions, custom software, digital transformation, industry solutions'
				};
		}
	};

	const metadata = getIndustryMetadata(slug);
	// console.log(metadata);
	return {
		title: metadata.title,
		description: metadata.description,
		keywords: metadata.keywords,
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			type: 'website',
			siteName: 'Techmapperz'
		},
		twitter: {
			card: 'summary_large_image',
			title: metadata.title,
			description: metadata.description
		},
		alternates: {
			canonical: `${BASE_URL}/industry/${metadata.canonical}`,
		},
	};
}

export default function Layout({ children }) {
	return children;
}