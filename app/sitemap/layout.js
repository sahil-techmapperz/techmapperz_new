const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
	title: 'Techmapperz is a leading IT, GIS and Drone Solutions|Sitemap | Techmapperz',
	description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website, including our services, portfolio, industries, and resources.',
	openGraph: {
		title: 'Techmapperz is a leading IT, GIS and Drone Solutions|Sitemap | Techmapperz',
		description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website.',
		type: 'website',
		url: '/sitemap',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sitemap | Techmapperz',
		description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website.'
	},
	alternates: {
		canonical: `${BASE_URL}/sitemap`,
	},
};

export default function SitemapLayout({ children }) {
	return <>{children}</>;
}