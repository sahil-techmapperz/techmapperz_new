import Casestudies from './client-page';
import enhancedPortfolioData from './PortfolioData';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL
export const metadata = {
  title: 'Our Work Portfolio | IT, GIS & Drone Projects | Techmapperz',
  description: 'Discover Techmapperz diverse portfolio of IT and GIS projects—from drone-based mapping to custom software development—and see how we drive real-world innovation across industries.',
  keywords: ['portfolio', 'IT services', 'GIS solutions', 'case studies', 'web development', 'technology consulting'],
  openGraph: {
    title: 'Our Work Portfolio | IT, GIS & Drone Projects | Techmapperz',
    description: 'Explore our comprehensive portfolio of IT and GIS solutions',
    type: 'website',
    siteName: 'Techmapperz',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work Portfolio | IT, GIS & Drone Projects | Techmapperz',
    description: 'Explore our comprehensive portfolio of IT and GIS solutions',
  },
  alternates: {
    canonical: `${BASE_URL}/portfolios`,
  },
};

export default function Page() {
  return <Casestudies portfolioData={enhancedPortfolioData} />;
} 