import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/lib/models/Newsletter';

export async function GET() {
  try {
    await connectDB();
    const totalCount = await Newsletter.countDocuments({ isSubscribed: true });
    const totalAll = await Newsletter.countDocuments();
    
    return NextResponse.json(
      { 
        subscribed: totalCount,
        total: totalAll
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error getting newsletter count:', error);
    return NextResponse.json(
      { error: 'Error getting newsletter count', details: error.message },
      { status: 500 }
    );
  }
}

