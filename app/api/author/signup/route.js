import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/lib/models/Author';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await connectDB();
    const { name, picture, authorDetails, password, email, socialLinks } = await request.json();
    const author = new Author({ name, picture, authorDetails, password, email, socialLinks });
    await author.save();

    const token = jwt.sign({ _id: author._id }, process.env.JWT_SECRET || 'your_jwt_secret');
    return NextResponse.json({ author, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

