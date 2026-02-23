import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Testimonial from '@/app/lib/models/Testimonial';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    const updatedJob = await request.json();

    const updatedTestimonialData = await Testimonial.findOneAndUpdate({ _id: userId }, updatedJob, { new: true });

    if (updatedTestimonialData) {
      return NextResponse.json(updatedTestimonialData, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

