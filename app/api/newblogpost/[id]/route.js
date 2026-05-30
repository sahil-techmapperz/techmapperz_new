import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const { title, content, author, images, category } = await request.json();

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content, author, images, category },
      { new: true }
    );

    if (!updatedBlogPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBlogPost, { status: 200 });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    console.log('DELETE blog post request received for ID:', id);
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedBlogPost) {
      console.log('Blog post not found:', id);
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    console.log('Blog post deleted successfully:', id);
    return NextResponse.json({ message: 'Blog post deleted successfully', deletedPost: deletedBlogPost }, { status: 200 });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
  }
}

