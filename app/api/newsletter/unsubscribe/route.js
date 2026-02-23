import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Newsletter from '@/app/lib/models/Newsletter';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const subscriber = await Newsletter.findOne({ email: email.toLowerCase() });

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in newsletter subscribers' },
        { status: 404 }
      );
    }

    if (!subscriber.isSubscribed) {
      return NextResponse.json(
        { message: 'Email is already unsubscribed' },
        { status: 200 }
      );
    }

    subscriber.isSubscribed = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    return NextResponse.json(
      { message: 'Successfully unsubscribed from newsletter', subscriber },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error);
    return NextResponse.json(
      { error: 'Error unsubscribing from newsletter', details: error.message },
      { status: 500 }
    );
  }
}

