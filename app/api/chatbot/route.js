import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Chatbot from '@/app/lib/models/Chatbot';

export async function GET() {
  try {
    await connectDB();
    const allData = await Chatbot.find();
    return NextResponse.json(allData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const Dataset = await request.json();

    if (Dataset) {
      const newDataset = new Chatbot(Dataset);
      await newDataset.save();
      return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'provide all the necessary details' }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { selectedChatbotIds } = body;

    if (selectedChatbotIds && Array.isArray(selectedChatbotIds)) {
      const result = await Chatbot.deleteMany({ _id: { $in: selectedChatbotIds } });

      if (result.deletedCount > 0) {
        return NextResponse.json({ message: 'ChatbotIds deleted successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'No ChatbotIds found with the provided ids.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: 'Invalid request. Provide an array of ChatbotIds application ids.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting ChatbotIds applications.', error: error.message }, { status: 500 });
  }
}

