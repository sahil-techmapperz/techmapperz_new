import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Comment from '@/app/lib/models/Comment';

export async function POST(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const { content, name, email } = await request.json();

    const comment = await Comment.findById(id);

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    comment.replies.push({ content, name, email });
    await comment.save();
    
    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.error('Error replying to comment:', error);
    return NextResponse.json({ error: 'Error replying to comment' }, { status: 500 });
  }
}

