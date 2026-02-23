import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/lib/models/Author';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const { name, picture, authorDetails } = await request.json();

    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      { name, picture, authorDetails },
      { new: true }
    );

    if (!updatedAuthor) {
      return NextResponse.json({ error: 'Author not found' }, { status: 404 });
    }

    return NextResponse.json(updatedAuthor, { status: 200 });
  } catch (error) {
    console.error('Error updating author:', error);
    return NextResponse.json({ error: 'Error updating author' }, { status: 500 });
  }
}

