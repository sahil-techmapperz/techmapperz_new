import { NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = 'http://blogs.techmapperz.com/wp-json/wp/v2';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';

    const response = await axios.get(`${baseUrl}/posts?_embed&&search=${search}`);

    const postData = response.data.map((post) => {
      const author = post._embedded.author[0];
      const excerpt = post.excerpt.rendered;

      return {
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        description: excerpt,
        author: {
          id: author.id,
          name: author.name,
          link: author.link,
        },
      };
    });
    
    return NextResponse.json(postData[0] || {}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

