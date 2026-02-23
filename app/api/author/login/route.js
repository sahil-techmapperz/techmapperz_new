import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/lib/models/Author';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    const author = await Author.findOne({ email });
    
    if (!author) {
      return NextResponse.json({ error: 'Invalid login credentials' }, { status: 400 });
    }

    const isPasswordMatch = await argon2.verify(author.password, password);
    if (!isPasswordMatch) {
      return NextResponse.json({ error: 'Invalid login credentials' }, { status: 400 });
    }

    const token = jwt.sign({ _id: author._id }, process.env.JWT_SECRET || 'your_jwt_secret');
    return NextResponse.json({ author, token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

