import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response1 = await fetch('https://www.test.geotechcybernauts.com/wp-json/wp/v2/posts');
    const posts = await response1.json();

    const authorId = posts[0].author;
    const response2 = await fetch(`https://www.test.geotechcybernauts.com/wp-json/wp/v2/users/${authorId}`);
    const author = await response2.json();

    const response3 = await fetch(`https://www.test.geotechcybernauts.com/wp-json/wp/v2/media/${posts[0].featured_media}`);
    const media = await response3.json();

    const postsWithAuthor = posts.map((post) => ({
      ...post,
      author: author.name,
      img_url: media.guid,
    }));

    return NextResponse.json(postsWithAuthor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

