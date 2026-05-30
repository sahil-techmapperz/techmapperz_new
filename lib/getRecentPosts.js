import logger from '@/app/lib/utils/logger';

const getRecentPosts = async () => {
  try {
    // In Server Components, we need to use the full URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = `${baseUrl}/api/newblogpost/recent`;
    logger.log('Fetching recent posts from:', url);
    
    const response = await fetch(url, {
      next: {
        revalidate: 300 // Cache for 5 minutes
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    logger.error("Failed to fetch recent posts", error);
    return [];
  }
};

export default getRecentPosts;
