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
    <div className="p-4 max-sm:px-2 shadow-lg rounded-lg">
      <h1 className="text-2xl max-sm:text-[18px] font-bold mb-4">Recent Posts</h1>
      {recentPosts.length > 0 ? recentPosts.map((recent) => (
        <div key={recent._id} className="flex max-sm:flex-col gap-4 mb-4">
          <Image src={recent.images?.[0]?.trim() || '/placeholder-image.jpg'} alt={recent.title || 'Recent post image'} width={100} height={100} className="w-[100px] max-sm:w-full h-[100px] max-sm:h-auto object-cover rounded-md" sizes="(max-width: 640px) 100vw, 100px" />
          <div>
            <h1 className="text-lg max-sm:text-[16px] font-semibold cursor-pointer">
              <Link href={`/blog/${recent._id}`}>{recent.title.slice(0, 100) + "..."}</Link>
            </h1>
            <h1>{moment(recent.created_at).format('YYYY-MM-DD')}</h1>
          </div>
        </div>
      )) : (
        <div className="text-center py-4">
          <p className="text-gray-500">No recent posts available.</p>
        </div>
      )}
    </div>
  );
};

export default RecentBlogList;
