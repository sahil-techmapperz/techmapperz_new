import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const OurBlog = async () => {
  let page = 1;
  let parpage = 3;
  let data = await getallblogs(page, parpage);

  // Handle the response structure and ensure we have an array
  const blogPosts = Array.isArray(data)
    ? data
    : (data?.data && Array.isArray(data.data))
      ? data.data
      : (data?.blogPosts && Array.isArray(data.blogPosts))
        ? data.blogPosts
        : [];

  return (
    <section className="bg-[#020617] relative py-20 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d2292b]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#376bab]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4a8cd4] to-[#ff4747] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300 uppercase">Insights & News</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8cd4] to-[#ff4747]">Perspectives</span>
            </h2>
          </div>
          <div className="md:pb-2">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm"
            >
              View All Articles
              <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:text-[#ff4747] transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.length > 0 ? blogPosts.map((post, index) => (
            <div key={post._id || post.id || index} className="h-full">
              <Card post={post} />
            </div>
          )) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 bg-white/[0.02] border border-white/5 rounded-2xl">
              <p className="text-xl text-gray-400">New insights are being written. Check back soon!</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default OurBlog;
