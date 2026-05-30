import { NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = 'http://blogs.techmapperz.com/wp-json/wp/v2';

async function fetchTotalPostCount() {
  const response = await axios.get(`${baseUrl}/posts`);
  const totalPostCount = parseInt(response.headers['x-wp-total']);
  return totalPostCount;
}

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

async function fetchPosts(page = 1, perPage = 5) {
  const response = await axios.get(`${baseUrl}/posts?_embed&page=${page}&per_page=${perPage}`);
  return response.data;
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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
    const Perpage = searchParams.get('perpage') ? parseInt(searchParams.get('perpage')) : 5;
    
    const authors = await fetchAuthors();
    const totalPostCount = await fetchTotalPostCount();
    const totalPages = Math.ceil(totalPostCount / Perpage);
    const posts = await fetchPosts(page, Perpage);
    const postData = extractPostData(posts, authors);
    
    return NextResponse.json({
      page,
      Perpage,
      totalPostCount,
      totalPages,
      posts: postData,
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

