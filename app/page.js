import ScrollToTop from './_Components/ScrollToTop';
import dynamic from 'next/dynamic';

// Critical above-the-fold components - optimized for performance
const OptimizedHomeCarousel = dynamic(() => import('./_Components/OptimizedHomeCarousel'), {
  ssr: true, // Enable SSR for critical above-the-fold content
  loading: () => (
    <div className="h-[90vh] bg-black animate-pulse">
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-800 rounded w-64 mx-auto"></div>
          <div className="h-4 bg-gray-700 rounded w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
});

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




const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <OptimizedHomeCarousel />
      <section className="bg-black pt-8 max-sm:py-2 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full ">
        <div className="grid grid-cols-1 m-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-semibold mb-4">Our Services</h1>
          </div>
          <div className="flex flex-col items-center">
            {/* <p className="text-gray-300 w-[70%] max-sm:w-full text-center text-lg max-sm:text-[14px] mb-8">
            To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.
          </p> */}
          </div>
        </div>
        <Features />
        <div className="flex relative justify-center mt-5 mb-[50px]">
          <Link href="/service">
            <HoverButton text="View All Services" />
          </Link>
        </div>
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
        <Technology />
      </LazySection>

      {/* Industry Expertise Section */}
      <LazySection 
        mobileRootMargin="100px 0px"
        fallback={<div className="min-h-[300px] bg-black animate-pulse" />}
      >
        <IndustryExpertise />
      </LazySection>

      {/* About Us Section */}
      <LazySection 
        mobileRootMargin="75px 0px"
        fallback={<div className="min-h-[300px] bg-gray-900 animate-pulse" />}
      >
        <AboutUs />
      </LazySection>

      {/* Happy Clients Section */}
      <LazySection 
        mobileRootMargin="75px 0px"
        fallback={<div className="min-h-[200px] bg-gray-800 animate-pulse" />}
      >
        <HappyClients />
      </LazySection>

      {/* Blog Section */}
      <LazySection 
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[400px] bg-gray-900 animate-pulse" />}
      >
        <OurBlog />
      </LazySection>

      {/* Testimonial Section */}
      <LazySection 
        mobileRootMargin="50px 0px"
        fallback={<div className="min-h-[300px] bg-black animate-pulse" />}
      >
        <Testimonial />
      </LazySection>

      {/* Contact Section */}
      <LazySection 
        mobileRootMargin="25px 0px"
        fallback={<div className="min-h-[400px] bg-gray-900 animate-pulse" />}
      >
        <Homecontact />
      </LazySection>
    </div>
  );
};

export default Home;
