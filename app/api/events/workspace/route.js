import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Event from '@/app/lib/models/Event';

// POST create workspace image
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const {
      src,
      alt,
      type = 'square',
      width = 300,
      height = 300,
    } = body;

    if (!src) {
      return NextResponse.json(
        { error: 'Image source (src) is required for workspace images' },
        { status: 400 }
      );
    }

    const event = new Event({
      src,
      alt: alt || 'Workspace image',
      type: 'workspace',
      gridType: type,
      width,
      height,
      image: src, // Also set image field for compatibility
      title: alt || 'Workspace image',
      description: alt || 'Workspace image',
      date: new Date(),
      status: 'completed',
    });

    await event.save();

    return NextResponse.json({
      success: true,
      data: event,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating workspace image:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}

