import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import PaginationButtons from './PaginationButtons';
import getallblogs from '@/lib/getallblogs';

const BlogList = async ({ page }) => {
  // Ensure page is a number
  const pageNum = Number(page) || 1;
  const data = await getallblogs(pageNum);
  const { blogPosts = [], totalPages = 1 } = data || {};

  return (
    <div className="w-full">
      {blogPosts && blogPosts.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up"
        >
          {blogPosts.map((post) => (
            <div
              key={post._id}
              className="relative rounded-[2rem] overflow-hidden group hover:z-10 h-[450px] sm:h-[500px]"
            >
              <Link href={`/blog/${post._id}`} className="w-full h-full focus:outline-none relative isolate ring-1 ring-white/10 hover:ring-white/30 hover:shadow-[0_0_50px_rgba(74,140,212,0.3)] transition-all duration-500 bg-[#020617] flex flex-col justify-end">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={post.images?.[0]?.trim() || '/placeholder-image.jpg'}
                    alt={post.title || 'Blog post image'}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 z-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Dual Gradient Overlay for perfect readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 to-transparent h-[40%] z-10 pointer-events-none"></div>

                {/* Hover Color Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4a8cd4]/30 via-transparent to-[#d2292b]/30 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex flex-col p-6 sm:p-8">

                  {/* Top Header */}
                  <div className="flex justify-between items-start z-20">
                    <span className="inline-flex px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#020617] bg-white rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 bg-[#020617]/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-medium text-white uppercase tracking-widest">
                        {moment(post.created_at).format('MMM DD, YYYY')}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-auto flex flex-col z-20">

                    {/* Author info */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#4a8cd4] uppercase tracking-widest font-sans">
                        {post.author?.name || "TECHMAPPERZ"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[23px] font-sans font-bold text-white leading-tight drop-shadow-md line-clamp-3">
                      {post.title}
                    </h3>

                    {/* Expandable Excerpt & Action Container */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="min-h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end">
                        <div className="pt-3 pb-3 px-3 -mx-3">
                          <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed font-sans mb-5">
                            {post.content}
                          </p>

                          <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 rounded-full bg-white text-[#020617] flex shrink-0 items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] transform group-hover:scale-110 transition-all duration-300">
                              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300">
                              Read Article
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[90dvh] text-3xl text-center text-gray-500">
          No posts found.
        </div>
      )}
      {blogPosts && blogPosts.length > 0 && (
        <PaginationButtons page={Number(page)} totalPages={totalPages} />
      )}
    </div>
  );
};

export default BlogList;
