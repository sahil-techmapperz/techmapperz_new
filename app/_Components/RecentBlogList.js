import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import getRecentblogs from '@/lib/getsingaleblogs';


const RecentBlogList = async () => {
  const recentPostsResponse = await getRecentblogs();

  // Handle the response structure and ensure we have an array
  const recentPosts = Array.isArray(recentPostsResponse)
    ? recentPostsResponse
    : (recentPostsResponse?.data && Array.isArray(recentPostsResponse.data))
      ? recentPostsResponse.data
      : [];

  return (
    <div className="p-6 bg-white/[0.02] border border-white/5 shadow-2xl rounded-2xl backdrop-blur-md">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide">Recent Posts</h2>

      <div className="space-y-4">
        {recentPosts.length > 0 ? recentPosts.slice(0, 5).map((recent) => (
          <Link href={`/blog/${recent._id}`} key={recent._id} className="group flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black/50">
              <Image
                src={recent.images?.[0]?.trim() || '/placeholder-image.jpg'}
                alt={recent.title || 'Recent post image'}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="80px"
              />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight group-hover:text-[#4a8cd4] transition-colors duration-300 mb-1.5">
                {recent.title}
              </h3>
              <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2292b]"></span>
                {moment(recent.created_at).format('MMM DD, YYYY')}
              </span>
            </div>
          </Link>
        )) : (
          <div className="text-center py-8 bg-white/5 rounded-xl border border-white/5">
            <p className="text-gray-500 text-sm">No recent posts available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBlogList;
