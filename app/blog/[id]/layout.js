import getPost from "@/lib/getPost";

export async function generateMetadata({ params }) {
	const { id } = await params;
	const post = await getPost(id);
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL
	// console.log(post);

	return {
		title: post.title,
		description: post.content,
		openGraph: {
			title: post.title,
			description: post.content,
			type: 'article',
			publishedTime: post.date,
			authors: [post.author?.name ?? "Unknown"],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.content
		},
		alternates: {
			canonical: `${BASE_URL}/blog/${encodeURIComponent(post._id)}`,
		},
	};
}

export default function BlogLayout({ children }) {
	return <>{children}</>;
}