import getallblogs from '@/lib/getallblogs';
import Card from './Card';
import Link from 'next/link';
import HoverButton from './ExpandButton';


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
  
  const totalPages = data?.totalPages || 0;
  return (
    <section className="bg-black py-8 max-sm:py-2 max-sm:p-2 px-[4rem] text-center max-sm:hidden">
      <h1 className="text-3xl font-semibold max-sm:text-xl  mb-6 text-white">Our Latest Blogs</h1>
      {/* <h1 className="text-4xl font-bold mb-6 text-white">Latest Blogs</h1> */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-start">
        {blogPosts.length > 0 ? blogPosts.map(post => (
          <div key={post._id || post.id || Math.random()}>
            <Card post={post} />
          </div>
        )) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-xl text-gray-400">No blog posts available at the moment.</p>
          </div>
        )}
      </div>

      <Link
        href="/blog"
        className='flex justify-center mt-5 mb-[50px]'
      >
        <HoverButton text=" Explore more" />
      </Link>
    </section>
  );
};

export default OurBlog;
