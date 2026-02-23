import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Comment from '@/app/lib/models/Comment';
import BlogPost from '@/app/lib/models/BlogPost';

export async function GET() {
  try {
    await connectDB();
    const comments = await Comment.find();
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { content, name, email, postId } = await request.json();
    const comment = new Comment({ content, name, email, postId });
    await comment.save();

    const post = await BlogPost.findById(postId);
    if (post) {
      post.comments.push(comment);
      await post.save();
    }

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

