import logger from '@/app/lib/utils/logger';

export default async function getallblogs(page = 1, parpage = 9) {
    try {
        // Ensure page is a number
        const pageNum = Number(page) || 1;
        const perPage = Number(parpage) || 9;

        // Use full URL - required for Next.js fetch during build
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const url = `${baseUrl}/api/newblogpost?page=${pageNum}&perPage=${perPage}`;

        const results = await fetch(url, {
            next: { revalidate: 300 } // Cache for 5 minutes
        });

        if (!results.ok) {
            throw new Error(`HTTP error! status: ${results.status}`);
        }

        const data = await results.json();

        // Handle API response structure
        if (data.blogPosts && Array.isArray(data.blogPosts)) {
            return {
                blogPosts: data.blogPosts,
                totalPages: data.totalPages || 1,
                currentPage: data.currentPage || pageNum
            };
        }

        // Fallback: return empty structure
        return { success: true, blogPosts: [], totalPages: 0, currentPage: pageNum };
    } catch (error) {
        // Silently return fallback - errors are expected during build when server isn't running
        // Return fallback data structure
        return { success: true, blogPosts: [], totalPages: 0, currentPage: Number(page) || 1 };
    }
}