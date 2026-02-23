import { notFound } from 'next/navigation';
import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import enhancedPortfolioData from '../PortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Generate metadata for each portfolio item
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Find the portfolio item by slug or link match
  const portfolioItem = enhancedPortfolioData.find(item => {
    const itemSlug = item.slug || item.link?.replace('/portfolios/', '') || 
                    item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return itemSlug === slug;
  });

  if (!portfolioItem) {
    return {
      title: 'Portfolio Item Not Found | Techmapperz',
      description: 'The requested portfolio item could not be found.',
    };
  }

  const description = Array.isArray(portfolioItem.details) 
    ? portfolioItem.details[0] 
    : portfolioItem.details;

  return {
    title: `${portfolioItem.name} | ${portfolioItem.category} Portfolio | Techmapperz`,
    description: description?.substring(0, 160) + '...' || `${portfolioItem.name} - Professional ${portfolioItem.category} project by Techmapperz`,
    alternates: {
      canonical: `${BASE_URL}/portfolios/${slug}`,
    },
    openGraph: {
      title: `${portfolioItem.name} | Techmapperz Portfolio`,
      description: description?.substring(0, 160) + '...',
      images: [portfolioItem.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${portfolioItem.name} | Techmapperz Portfolio`,
      description: description?.substring(0, 160) + '...',
      images: [portfolioItem.image],
    },
    keywords: [
      portfolioItem.category,
      portfolioItem.projectDetails?.industry,
      portfolioItem.projectDetails?.projectType,
      'Techmapperz',
      ...(portfolioItem.techStack?.split(',').map(tech => tech.trim()) || [])
    ].filter(Boolean).join(', ')
  };
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  return enhancedPortfolioData.map((item) => {
    const slug = item.slug || item.link?.replace('/portfolios/', '') || 
                item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
      slug: slug,
    };
  });
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;

  // Find the portfolio item by slug or link match
  const portfolioItem = enhancedPortfolioData.find(item => {
    const itemSlug = item.slug || item.link?.replace('/portfolios/', '') || 
                    item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return itemSlug === slug;
  });

  // If no portfolio item is found, return 404
  if (!portfolioItem) {
    notFound();
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug={slug}
    />
  );
}