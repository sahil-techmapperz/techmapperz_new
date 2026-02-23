import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    const blogPosts = await BlogPost.find({}).select('category -_id');
    const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Error getting categories:', error);
    return NextResponse.json({ error: 'Error getting categories' }, { status: 500 });
  }
}

