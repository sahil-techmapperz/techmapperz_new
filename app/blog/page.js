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

const ArticlePage = async ({ searchParams }) => {
  // In Next.js 16, searchParams is a Promise and must be awaited
  const params = await searchParams;
  // Ensure page is a number and defaults to 1
  const page = Number(params?.page) || 1;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ScrollToTop />

      <div className='relative w-full'>
        <Image 
          src={blogs_banner_img} 
          className='w-full h-[500px] object-cover' 
          alt="Blogs Banner - IT & GIS Technology Insights"
          {...IMAGE_CONFIGS.banner}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className='absolute inset-0 w-full h-full bg-black/80 bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Blogs</h1>
          <p className='text-center text-lg max-sm:text-sm max-sm:w-full text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <div className="flex gap-4 text-white mt-8">
            <Link href="/contact">
              <button
                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
              >
                Get A  Quote
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-3 p-8 max-sm:px-2">
        <div className="w-full md:w-[70%] h-auto">
          <BlogList page={page} />
        </div>
        <div className="w-full md:w-[30%]">
          <SearchPosts />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};


export default ArticlePage;
