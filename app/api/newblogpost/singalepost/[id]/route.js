import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const blogPost = await BlogPost.findById(id).populate('author').populate('comments');
    
    if (!blogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json(blogPost, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

