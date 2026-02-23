import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { title } = await params;
    const blogPosts = await BlogPost.find({ title: new RegExp(title, 'i') })
      .populate('author')
      .populate('comments');
    
    if (blogPosts.length === 0) {
      return NextResponse.json({ error: 'No blog posts found' }, { status: 404 });
    }
    
    return NextResponse.json(blogPosts, { status: 200 });
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return NextResponse.json({ error: 'Error searching blog posts' }, { status: 500 });
  }
}

