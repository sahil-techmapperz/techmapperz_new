import { NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = 'http://blogs.techmapperz.com/wp-json/wp/v2';

async function fetchAuthors() {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data.reduce((authors, author) => {
      authors[author.id] = author;
      return authors;
    }, {});
  } catch (error) {
    console.error('Error fetching authors:', error);
    return {};
  }
}

function extractPostData(posts, authors) {
  return posts.map((post) => {
    const featuredMedia = post._embedded['wp:featuredmedia'];
    const imgUrl = featuredMedia && featuredMedia[0]?.media_details?.sizes?.full?.source_url;
    const author = authors[post.author];

    return {
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered,
      content: post.content.rendered,
      imgUrl: imgUrl || null,
      date: post.date,
      author: {
        id: author.id,
        name: author.name,
        link: author.link,
      },
    };
  });
}

export async function GET(request, { params }) {
  try {
    const { postId } = await params;
    const postResponse = await axios.get(`${baseUrl}/posts/${postId}?_embed`);
    const post = postResponse.data;
    const authors = await fetchAuthors();
    const postData = extractPostData([post], authors)[0];
    
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

