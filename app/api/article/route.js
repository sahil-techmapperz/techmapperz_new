import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.test.geotechcybernauts.com/wp-json/wp/v2/posts');
    const posts = await response.json();
    
    const postsWithImgurl = await Promise.all(
      posts.map(async (post) => {
        const imgResponse = await fetch(`https://www.test.geotechcybernauts.com/wp-json/wp/v2/media/${post.featured_media}`);
        const imgData = await imgResponse.json();
        return { ...post, img_url: imgData.guid };
      })
    );

    return NextResponse.json(postsWithImgurl, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

