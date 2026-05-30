import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { categorie } = await params;
    const blogPosts = await BlogPost.find({ category: categorie })
      .populate('author')
      .populate('comments');

    if (blogPosts.length === 0) {
      return NextResponse.json({ error: 'No posts found for this category' }, { status: 404 });
    }

    return NextResponse.json(blogPosts, { status: 200 });
  } catch (error) {
    console.error('Error getting blog posts by category:', error);
    return NextResponse.json({ error: 'Error getting blog posts by category' }, { status: 500 });
  }
}

