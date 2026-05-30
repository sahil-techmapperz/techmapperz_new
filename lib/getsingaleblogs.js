export default async function getRecentblogs(page=1){
    try {
        // In Server Components, we need to use the full URL
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const url = `${baseUrl}/api/newblogpost/recent`;
        console.log('Fetching recent blogs from:', url);
        
        const results = await fetch(url, {
            next: {
                revalidate: 10
            }
        });

        if (!results.ok) {
            throw new Error(`HTTP error! status: ${results.status}`);
        }

        return await results.json();
    } catch (error) {
        console.error('Error fetching recent blog data:', error);
        // Return fallback data structure
        return [];
    }
}