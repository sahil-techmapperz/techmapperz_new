import { notFound } from 'next/navigation';
import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Generate metadata for each portfolio item
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  await connectDB();
  const portfolioItem = await Portfolio.findOne({ slug: slug }).lean();

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
    title: portfolioItem.seoTitle || `${portfolioItem.name} | ${portfolioItem.category} Portfolio | Techmapperz`,
    description: portfolioItem.seoDescription || description?.substring(0, 160) + '...' || `${portfolioItem.name} - Professional ${portfolioItem.category} project by Techmapperz`,
    alternates: {
      canonical: `${BASE_URL}/portfolios/${slug}`,
    },
    openGraph: {
      title: portfolioItem.seoTitle || `${portfolioItem.name} | Techmapperz Portfolio`,
      description: portfolioItem.seoDescription || description?.substring(0, 160) + '...',
      images: [portfolioItem.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: portfolioItem.seoTitle || `${portfolioItem.name} | Techmapperz Portfolio`,
      description: portfolioItem.seoDescription || description?.substring(0, 160) + '...',
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
  await connectDB();
  const portfolios = await Portfolio.find({}, 'slug').lean();
  
  return portfolios.map((item) => {
    return {
      slug: item.slug,
    };
  });
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;

  await connectDB();
  const portfolioItemData = await Portfolio.findOne({ slug: slug }).lean();

  // If no portfolio item is found, return 404
  if (!portfolioItemData) {
    notFound();
  }

  // Parse to plain object for client component
  const portfolioItem = JSON.parse(JSON.stringify(portfolioItemData));

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug={slug}
    />
  );
}