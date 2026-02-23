import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET() {
  try {
    await connectDB();
    const recentPosts = await BlogPost.find()
      .sort({ created_at: -1 })
      .limit(3)
      .populate('author')
      .populate('comments');

    return NextResponse.json(recentPosts, { status: 200 });
  } catch (error) {
    console.error('Error getting recent blog posts:', error);
    return NextResponse.json({ error: 'Error getting recent blog posts' }, { status: 500 });
  }
}

