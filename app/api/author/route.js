import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Author from '@/app/lib/models/Author';

export async function GET() {
  try {
    await connectDB();
    const authors = await Author.find().select('-password').lean(); // Exclude password field
    console.log(`Fetched ${authors.length} authors from database`);
    return NextResponse.json(authors, { status: 200 });
  } catch (error) {
    console.error('Error fetching authors:', error);
    return NextResponse.json(
      { message: 'Error fetching authors', error: error.message },
      { status: 500 }
    );
  }
}

