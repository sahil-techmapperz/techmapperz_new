export default async function getCaseStudies(category) {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL; // Ensure this is defined in your .env file
    const url = new URL(`/api/casestudies/${category}`, baseUrl);

    const response = await fetch(url.toString(), {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        next: {
            revalidate: 10
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
