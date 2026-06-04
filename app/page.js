import ScrollToTop from './_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import HomeHero from './_Components/HomeHero';

// Critical above-the-fold components - optimized for performance
const Features = dynamic(() => import('./_Components/Features'), {
  ssr: true, // Enable SSR for important services section
  loading: () => (
    <div className="min-h-[300px] bg-black animate-pulse">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-800 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  ),
});

// Mobile-optimized lazy loading with intersection observer
const Portfolio = dynamic(() => import('./_Components/Portfolio'), {
  loading: () => (
    <div className="min-h-[200px] lg:min-h-[400px] bg-gray-900 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-8"></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="h-48 bg-gray-800 rounded-2xl"></div>
          <div className="h-48 bg-gray-800 rounded-2xl"></div>
        </div>
      </div>
    </div>
  ),
});

const Technology = dynamic(() => import('./_Components/Technology'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-gray-800 animate-pulse" />,
});

const IndustryExpertise = dynamic(() => import('./_Components/Industry_Expertise'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-black animate-pulse" />,
});

const AboutUs = dynamic(() => import('./_Components/AboutUs'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-gray-900 animate-pulse" />,
});

const HappyClients = dynamic(() => import('./_Components/HappyClients'), {
  loading: () => <div className="min-h-[100px] lg:min-h-[200px] bg-gray-800 animate-pulse" />,
});

const OurBlog = dynamic(() => import('./_Components/OurBlog'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[400px] bg-gray-900 animate-pulse" />,
});

const Testimonial = dynamic(() => import('./_Components/Testimonial'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[300px] bg-black animate-pulse" />,
});

const Homecontact = dynamic(() => import('./_Components/Homecontact'), {
  loading: () => <div className="min-h-[150px] lg:min-h-[400px] bg-gray-900 animate-pulse" />,
});
import HoverButton from './_Components/ExpandButton';
import Link from 'next/link';
import company_logo from "@/public/logo.webp";
import { LazySection } from './_hooks/useIntersectionObserver';
import ScrollReveal from './_Components/ScrollReveal';
import connectDB from './lib/db';
import Banner from './lib/models/Banner';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL





export const metadata = {
  title: "IT Company | GIS Services Company | Drone Survey | Techmapperz | India",
  description: "Techmapperz is a leading IT, GIS, and Drone Solutions provider company in India. From custom web and app development to CRM systems and drone services, we streamline operations, drive data-driven decisions, and fuel sustainable growth for organizations of every scale.",
  keywords: [
    'IT company India',
    'GIS services company',
    'drone survey India',
    'web development company',
    'mobile app development',
    'CRM development',
    'custom software development',
    'GIS mapping services',
    'drone data processing',
    'spatial analysis',
    'geographic information systems',
    'digital transformation',
    'technology consulting India',
    'software solutions',
    'data digitization',
    'geospatial solutions',
    'drone surveying',
    'web application development',
    'enterprise software'
  ].join(', '),
  authors: [{ name: 'Techmapperz Team' }],
  creator: 'Techmapperz',
  publisher: 'Techmapperz',
  openGraph: {
    title: "Leading IT & GIS Solutions Company | Techmapperz India",
    description: "Transform your business with Techmapperz's comprehensive IT and GIS solutions. We offer web development, mobile apps, CRM systems, drone surveys, GIS mapping, and data digitization services across India.",
    url: BASE_URL,
    siteName: 'Techmapperz',
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: `${BASE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Techmapperz - Leading IT & GIS Solutions Company in India",
      },
      {
        url: `${BASE_URL}/Photos/company_logo.webp`,
        width: 800,
        height: 600,
        alt: "Techmapperz Company Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@techmapperz',
    creator: '@techmapperz',
    title: "Leading IT & GIS Solutions Company | Techmapperz India",
    description: "Transform your business with comprehensive IT and GIS solutions. Web development, mobile apps, CRM systems, drone surveys & more.",
    images: [`${BASE_URL}/logo.webp`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'en-IN': BASE_URL
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology Services',
  classification: 'Business',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'business:contact_data:country_name': 'India'
  }
};




const Home = async () => {
  let latestBanner = null;
  try {
    await connectDB();
    // Try to find specifically the Home Hero banner, otherwise fallback to any banner
    let banners = await Banner.find({ pageName: "Home Hero" }).sort({ _id: -1 }).limit(1).lean();
    
    if (!banners || banners.length === 0) {
      banners = await Banner.find().sort({ _id: -1 }).limit(1).lean();
    }
    if (banners && banners.length > 0) {
      // lean() returns plain JS object but we stringify and parse to avoid Mongoose doc issues across server boundaries
      latestBanner = JSON.parse(JSON.stringify(banners[0]));
    }
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  return (
    <div className='bg-[#070A11]'>
      <ScrollToTop />
      <HomeHero bannerData={latestBanner} />
      <section className="bg-[#070A11] pt-16 pb-12 max-sm:py-8 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full border-t border-white/5">
        <ScrollReveal>
          <div className="w-full max-w-7xl mx-auto mb-16">
            <div className="text-center">
              <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
                Our Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#05D7DE] mx-auto rounded-full" />
            </div>
          </div>
          <Features />
          <div className="flex relative justify-center mt-5 mb-[50px]">
            <Link href="/service">
              <HoverButton text="View All Services" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Portfolio Section - Higher priority, loads sooner on mobile */}
      <LazySection 
        mobileRootMargin="150px 0px"
        fallback={
          <div className="min-h-[400px] bg-gray-900 animate-pulse">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-8"></div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="h-48 bg-gray-800 rounded-2xl"></div>
                <div className="h-48 bg-gray-800 rounded-2xl"></div>
              </div>
            </div>
          </div>
        }
      >
        <section className='bg-gray-900'>
          <Portfolio />
        </section>
      </LazySection>

      {/* Technology Section */}
      <LazySection 
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-gray-800 animate-pulse" />}
      >
        <ScrollReveal>
          <Technology />
        </ScrollReveal>
      </LazySection>

      {/* Industry Expertise Section */}
      <LazySection 
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-black animate-pulse" />}
      >
        <ScrollReveal>
          <IndustryExpertise />
        </ScrollReveal>
      </LazySection>

      {/* About Us Section */}
      <LazySection 
        mobileRootMargin="75px 0px"
        fallback={<div className="min-h-[300px] bg-gray-900 animate-pulse" />}
      >
        <ScrollReveal>
          <AboutUs />
        </ScrollReveal>
      </LazySection>

      {/* Happy Clients Section */}
      <LazySection 
        mobileRootMargin="75px 0px"
        fallback={<div className="min-h-[200px] bg-gray-800 animate-pulse" />}
      >
        <ScrollReveal>
          <HappyClients />
        </ScrollReveal>
      </LazySection>

      {/* Blog Section */}
      <LazySection 
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[400px] bg-gray-900 animate-pulse" />}
      >
        <ScrollReveal>
          <OurBlog />
        </ScrollReveal>
      </LazySection>

      {/* Testimonial Section */}
      <LazySection 
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[300px] bg-black animate-pulse" />}
      >
        <ScrollReveal>
          <Testimonial />
        </ScrollReveal>
      </LazySection>

      {/* Contact Section */}
      <LazySection 
        mobileRootMargin="25px 0px"
        fallback={<div className="min-h-[400px] bg-gray-900 animate-pulse" />}
      >
        <ScrollReveal>
          <Homecontact />
        </ScrollReveal>
      </LazySection>
    </div>
  );
};

export default Home;
