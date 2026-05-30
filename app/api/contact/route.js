import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Contact from '@/app/lib/models/Contact';

export async function GET() {
  try {
    await connectDB();
    const allContact = await Contact.find();
    return NextResponse.json(allContact, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, mobile, projectType, projectdetails } = body;

    if (name && email && mobile && projectType && projectdetails) {
      const allContact = await Contact.find();
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const newContact = new Contact({
        name,
        email,
        mobile,
        projectType,
        projectdetails,
        Date: formattedDate,
        userId: allContact.length + 1,
      });

      await newContact.save();
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } else if (projectType === '') {
      const allContact = await Contact.find();
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const newContact = new Contact({
        name,
        email,
        mobile,
        projectType: 'false',
        projectdetails,
        Date: formattedDate,
        userId: allContact.length + 1,
      });

      await newContact.save();
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'provide all details' }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { selectedContactIds } = body;

    if (selectedContactIds && Array.isArray(selectedContactIds)) {
      const result = await Contact.deleteMany({ _id: { $in: selectedContactIds } });

      if (result.deletedCount > 0) {
        return NextResponse.json({ message: 'Contacts deleted successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'No contacts found with the provided ids.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: 'Invalid request. Provide an array of contact ids.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting contacts.', error: error.message }, { status: 500 });
  }
}

