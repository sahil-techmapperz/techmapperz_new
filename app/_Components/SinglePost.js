import moment from 'moment';
import Image from 'next/image';
import CommentForm from './CommentForm';

const SinglePost = ({ post }) => {
  if (!post) {
    return <p className="text-center text-gray-500">Post not found</p>;
  }

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row gap-8 p-8">
        <div className="w-full">
          <div className="mb-12">
            <Image src={post.images?.[0]?.trim() || '/placeholder-image.jpg'} alt={post.title || 'Blog post image'} width={800} height={400} className="w-full mb-4 rounded-md" sizes="(max-width: 768px) 100vw, 800px" priority />
            <div className="flex justify-between text-sm font-bold mb-4">
              <div>{`BY ${post.author?.name?.toUpperCase() ?? "Unknown"}`}</div>
              <div>{`COMMENTS ${Array.isArray(post.comments) ? post.comments.length : 0}`}</div>
              <div>{`${moment(post.created_at).format('YYYY-MM-DD')}`}</div>
            </div>
            <div className="text-2xl font-bold mb-2">{post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: post.maincontent }} />
          </div>

          <div className="comments_list">
            <h1 className="text-2xl font-bold">Comments</h1>
            {Array.isArray(post.comments) && post.comments.length > 0 ? post.comments.map(com => (
              <div key={com._id} className="flex flex-col gap-4 my-4 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full text-center text-white flex items-center justify-center text-lg font-bold">
                    {com.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold">{com.name}</div>
                    <div className="text-sm text-gray-400">{com.email}</div>
                    <div className="text-sm text-gray-400">{moment(com.created_at).format('YYYY-MM-DD HH:mm')}</div>
                  </div>
                </div>
                <div className="ml-16">
                  <div>{com.content}</div>
                  {com.replies && com.replies.length > 0 && (
                    <div className="ml-8 mt-4">
                      {com.replies.map(reply => (
                        <div key={reply._id} className="flex items-center gap-4 my-2">
                          <div className="w-10 h-10 bg-gray-600 rounded-full text-center text-white flex items-center justify-center text-md font-bold">
                            {reply.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-bold">{reply.name}</div>
                            <div className="text-sm text-gray-400">{reply.email}</div>
                            <div className="text-sm text-gray-400">{moment(reply.created_at).format('YYYY-MM-DD HH:mm')}</div>
                            <div>{reply.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <p className="text-gray-500 mt-4">No comments yet. Be the first to comment!</p>
            )}
          </div>
          <CommentForm postId={post._id} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
