import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { id } = await request.json();
    const response = await fetch(`https://www.test.geotechcybernauts.com/wp-json/wp/v2/posts/${id}`);
    const post = await response.json();
    
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

