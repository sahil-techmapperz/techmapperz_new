import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/lib/models/Newsletter';

export async function GET() {
  try {
    await connectDB();
    const subscribers = await Newsletter.find({ isSubscribed: true })
      .sort({ subscribedAt: -1 })
      .lean();
    
    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return NextResponse.json(
      { error: 'Error fetching newsletter subscribers', details: error.message },
      { status: 500 }
    );
  }
}

