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
    const blogPost = await BlogPost.findById(id);
    
    if (!blogPost) {
      return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
    }

    const relatedPosts = await BlogPost.find({
      category: blogPost.category,
      _id: { $ne: blogPost._id },
    })
      .populate('author')
      .populate('comments')
      .limit(3);

    return NextResponse.json(relatedPosts, { status: 200 });
  } catch (error) {
    console.error('Error getting related blog posts:', error);
    return NextResponse.json({ error: 'Error getting related blog posts' }, { status: 500 });
  }
}

