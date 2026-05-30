import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const perPage = searchParams.get('perPage') ? parseInt(searchParams.get('perPage')) : 6;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

    if (isNaN(page) || page < 1) {
      return NextResponse.json({ error: 'Invalid page number' }, { status: 400 });
    }

    const skip = (page - 1) * perPage;

    const blogPosts = await BlogPost.find()
      .populate({
        path: 'author',
        select: 'name picture authorDetails email socialLinks',
      })
      .populate({
        path: 'comments',
        select: 'content name email created_at replies',
      })
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(perPage);

    const totalBlogPosts = await BlogPost.countDocuments();
    const totalPages = Math.ceil(totalBlogPosts / perPage);

    return NextResponse.json({
      blogPosts: blogPosts,
      currentPage: page,
      totalBlogPosts: totalBlogPosts,
      totalPages: totalPages,
    }, { status: 200 });
  } catch (error) {
    console.error('Error getting blog posts:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    return NextResponse.json({ 
      error: 'Error getting blog posts',
      details: error.message 
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { title, content, author, images, category, maincontent } = body;

    if (title && content && author && images && category && maincontent) {
      const blogPost = new BlogPost({ title, content, author, images, category, maincontent });
      await blogPost.save();
      return NextResponse.json(blogPost, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Please provide all required information' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

