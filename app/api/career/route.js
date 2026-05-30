import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Career from '@/app/lib/models/Career';
import { uploadFile } from '@/app/lib/imagekit';

export async function GET() {
  try {
    await connectDB();
    const allCareer = await Career.find();
    return NextResponse.json(allCareer, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const file = formData.get('file');
    const dataStr = formData.get('data');
    
    if (!dataStr) {
      return NextResponse.json({ message: 'provide all the necessary details' }, { status: 201 });
    }

    const { name, mobile, message, designetion } = JSON.parse(dataStr);

    if (name && mobile && message && file && designetion) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filetype = file.type.split('/');
      const fileName = file.name.split('.');
      const fileExt = `${fileName[0]}.${filetype[1]}`;

      const resume_url = await uploadFile(buffer, fileExt);
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const allCareer = await Career.find();
      const newCareer = new Career({
        name,
        mobile,
        message,
        designetion,
        resume: resume_url,
        userId: allCareer.length + 1,
        Date: formattedDate,
      });
      await newCareer.save();
      return NextResponse.json({ message: 'your application submitted successfully' }, { status: 200 });
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
    const { selectedCareerIds } = body;

    if (selectedCareerIds && Array.isArray(selectedCareerIds)) {
      const result = await Career.deleteMany({ _id: { $in: selectedCareerIds } });

      if (result.deletedCount > 0) {
        return NextResponse.json({ message: 'Career applications deleted successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'No career applications found with the provided ids.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: 'Invalid request. Provide an array of career application ids.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting career applications.', error: error.message }, { status: 500 });
  }
}

