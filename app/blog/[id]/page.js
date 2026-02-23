import AuthorDetails from "@/app/_Components/AuthorDetails";
import RecentBlogList from "@/app/_Components/RecentBlogList";
import RelatedPosts from "@/app/_Components/RelatedPosts";
import SinglePost from "@/app/_Components/SinglePost";
import getPost from "@/lib/getPost";
import getRelatedPosts from "@/lib/getRelatedPosts";

export async function generateMetadata({ params }, parent) {
  // read route params - params is a Promise in Next.js 16
  const { id } = await params;

  // fetch data
  const product = await getPost(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // Ensure images is an array
  const productImages = Array.isArray(product?.images) ? product.images : [];

  return {
    title: product?.title || 'Blog Post',
    openGraph: {
      images: [...previousImages, ...productImages], // Extending previous images with product images
    },
  };
}



const ArticlePage = async ({ params }) => {
  // params is a Promise in Next.js 16, must be awaited
  const { id } = await params;
  const post = await getPost(id);
  const relatedPosts = await getRelatedPosts(id);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="h-96 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/Photos/banner_2.webp")' }}>
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="text-lg mt-2"><a href="/">Home</a> / <a href="/blog?page=1">Blogs</a> / Blog</p>
      </div>
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-8 p-8 max-sm:p-0">
        <div className="w-full md:w-2/3">
          <SinglePost post={post} />
        </div>
        <div className="w-full md:w-1/3">
          <AuthorDetails author={post.author} />
          <RelatedPosts relatedPosts={relatedPosts} />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
