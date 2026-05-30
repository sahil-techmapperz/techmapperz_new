import logger from '@/app/lib/utils/logger';

export default async function getTestimonial(){
    try {
        // Use full URL - required for Next.js fetch during build
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const url = `${baseUrl}/api/testimonial`;
        
        const results = await fetch(url, {
            next: {
                revalidate: 600 // Cache for 10 minutes
            }
        });

        if (!results.ok) {
            throw new Error(`HTTP error! status: ${results.status}`);
        }

        return await results.json();
    } catch (error) {
        // Silently return fallback - errors are expected during build when server isn't running
        // Return fallback data structure
        return { success: true, data: [] };
    }
}