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

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase() });

    if (existingSubscriber) {
      // If exists but unsubscribed, resubscribe
      if (!existingSubscriber.isSubscribed) {
        existingSubscriber.isSubscribed = true;
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = null;
        await existingSubscriber.save();
        return NextResponse.json(
          { message: 'Successfully resubscribed to newsletter', subscriber: existingSubscriber },
          { status: 200 }
        );
      }
      // Already subscribed
      return NextResponse.json(
        { message: 'Email is already subscribed', subscriber: existingSubscriber },
        { status: 200 }
      );
    }

    // Create new subscriber
    const newSubscriber = new Newsletter({
      email: email.toLowerCase(),
      isSubscribed: true,
      subscribedAt: new Date()
    });

    await newSubscriber.save();

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    
    // Handle duplicate key error (MongoDB unique constraint)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email is already subscribed' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Error subscribing to newsletter', details: error.message },
      { status: 500 }
    );
  }
}

