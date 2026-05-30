import Link from "next/link";
import ScrollToTop from "../_Components/ScrollToTop";
import dynamicImport from 'next/dynamic';
import blogs_banner_img from "@/public/Photos/blogs_banner.webp";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IMAGE_CONFIGS, createOptimizedLoader, ISR_CONFIGS } from '../lib/utils/performanceOptimizer';

// Critical above-the-fold component - load immediately
const BlogList = dynamicImport(() => import("../_Components/BlogList"), {
  ssr: true,
  ...createOptimizedLoader("600px", "bg-gray-900")
});

// Sidebar components - lazy load
const SearchPosts = dynamicImport(() => import("../_Components/SearchPosts"), {
  loading: () => (
    <div className="h-32 bg-gray-800 animate-pulse rounded-lg mb-4">
      <div className="p-4">
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  )
});

const RecentBlogList = dynamicImport(() => import("../_Components/RecentBlogList"), {
  loading: () => (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-20 bg-gray-800 animate-pulse rounded-lg"></div>
      ))}
    </div>
  )
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Force dynamic for search params
export const dynamic = 'force-dynamic';

// Remove ISR for dynamic pages
// export const revalidate = ISR_CONFIGS.blog;

export const metadata = {
  title: "IT & GIS Blogs | Drone Solutions & Tech Trends | Techmapperz",
  description: "Discover cutting-edge technology insights on GIS, Drones, AI, and IT solutions in our blog. Join us in chasing a vision for a better tomorrow—where technology simplifies the complex problem.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

import { BreadcrumbJsonLd } from '../_Components/JsonLd';

const ArticlePage = async ({ searchParams }) => {
  // In Next.js 16, searchParams is a Promise and must be awaited
  const params = await searchParams;
  // Ensure page is a number and defaults to 1
  const page = Number(params?.page) || 1;

  const getBreadcrumbItems = () => [
    { name: 'Home', url: BASE_URL },
    { name: 'Blogs', url: `${BASE_URL}/blog` }
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <BreadcrumbJsonLd items={getBreadcrumbItems()} />
      <ScrollToTop />

      {/* Ambient Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#4a8cd4]/15 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#d2292b]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className='relative w-full'>
        <Image
          src={blogs_banner_img}
          className='w-full h-[500px] object-cover'
          alt="Blogs Banner - IT & GIS Technology Insights"
          {...IMAGE_CONFIGS.banner}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className='absolute inset-0 w-full h-full bg-[#020617]/80 backdrop-blur-sm flex flex-col justify-center items-center'>
          <h1 className='text-center text-5xl md:text-7xl text-white font-extrabold tracking-tight'>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#d2292b]">Blog</span>
          </h1>
          <p className='text-center text-lg md:text-xl text-gray-300 font-light mt-6 px-4 md:px-8 max-w-3xl'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions.
          </p>
          <div className="flex gap-4 text-white mt-10">
            <Link href="/contact">
              <button
                className="py-4 px-8 rounded-full bg-gradient-to-r from-[#4a8cd4] to-[#d2292b] font-bold tracking-wide transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(210,41,43,0.3)] hover:shadow-[0_0_30px_rgba(74,140,212,0.5)] transform hover:-translate-y-1"
              >
                Let's Innovate
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 py-16 px-6 md:px-12">
        <div className="w-full lg:w-[70%] h-auto">
          <BlogList page={page} />
        </div>
        <div className="w-full lg:w-[30%] space-y-8 sticky top-28 h-fit">
          <SearchPosts />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};


export default ArticlePage;
