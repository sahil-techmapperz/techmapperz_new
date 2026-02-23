

const getRelatedPosts = async (postId) => {
  try {
    // In Server Components, we need to use the full URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/newblogpost/related/${postId}`,{
        next:{
            revalidate:10
        }
    });
    return response.json();
  } catch (error) {
    console.error("Failed to fetch related posts", error);
    return [];
  }
};

export default getRelatedPosts;
