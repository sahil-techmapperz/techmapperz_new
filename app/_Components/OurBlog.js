import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const OurBlog = async () => {
  let page = 1;
  let parpage = 3;
  let data = await getallblogs(page, parpage);
  
  const blogPosts = Array.isArray(data) 
    ? data 
    : (data?.data && Array.isArray(data.data)) 
      ? data.data 
      : (data?.blogPosts && Array.isArray(data.blogPosts))
        ? data.blogPosts
        : [];
  
  return (
    <section className="relative bg-[#070A11] py-24 px-4 overflow-hidden border-t border-white/5 max-sm:hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#2d5689]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#05D7DE]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <span className="text-[#05D7DE] text-sm font-bold tracking-[0.2em] uppercase">Techmapperz Insights</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
          Our Latest Blogs
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#2d5689] to-[#05D7DE] mx-auto rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.length > 0 ? blogPosts.map(post => (
            <div key={post._id || post.id || Math.random()}>
              <Card post={post} />
            </div>
          )) : (
            <div className="col-span-3 text-center py-12 bg-[#111622] border border-white/5 rounded-3xl">
              <p className="text-lg text-gray-400 font-light">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Explore More CTA */}
      <div className="relative z-10 flex justify-center mt-16 mb-8">
        <Link
          href="/blog"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#111622] border border-[#05D7DE]/30 rounded-full hover:bg-[#05D7DE]/10 transition-all duration-300 shadow-[0_0_15px_rgba(5,215,222,0.1)] hover:shadow-[0_0_30px_rgba(5,215,222,0.2)]"
        >
          <span className="text-white text-sm font-bold tracking-wide uppercase transition-colors group-hover:text-[#05D7DE]">Explore More Blogs</span>
          <FaArrowRight className="text-[#05D7DE] group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default OurBlog;
