import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Chatbot from '@/app/lib/models/Chatbot';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    const updatedJob = await request.json();

    const updatedChatbotIdsData = await Chatbot.findOneAndUpdate({ _id: userId }, updatedJob, { new: true });

    if (updatedChatbotIdsData) {
      return NextResponse.json(updatedChatbotIdsData, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Dataset not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating Dataset:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

