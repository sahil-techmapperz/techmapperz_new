import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Testimonial from '@/app/lib/models/Testimonial';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: 'public_uw+Iy20W6XHXO3AjkXEW2K+2tgo=',
  privateKey: 'private_B4IrCM6a0Q7Q+r/03UZGZINFyrE=',
  urlEndpoint: 'https://ik.imagekit.io/lrrkr27gr',
});

const uploadFile = async (fileBuffer, fileName) => {
  try {
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: fileName,
      folder: '/uploads',
    });
    return response.url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function GET() {
  try {
    await connectDB();
    const allTestimonial = await Testimonial.find().lean();
    
    // Log for debugging
    console.log(`Fetched ${allTestimonial.length} testimonials from database`);
    
    return NextResponse.json(allTestimonial, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/testimonial:', error);
    return NextResponse.json({ 
      message: error.message || 'Failed to fetch testimonials',
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
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

    const { name, Companyname, message } = JSON.parse(dataStr);

    if (name && Companyname && message && file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filetype = file.type.split('/');
      const fileName = file.name.split('.');
      const fileExt = `${fileName[0]}.${filetype[1]}`;

      const avater_url = await uploadFile(buffer, fileExt);
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const allTestimonial = await Testimonial.find();
      const newTestimonial = new Testimonial({
        name,
        Companyname,
        message,
        avater: avater_url,
        userId: allTestimonial.length + 1,
        Date: formattedDate,
      });
      await newTestimonial.save();
      return NextResponse.json({ newTestimonial }, { status: 200 });
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
    const { selectedTestimonialIds } = body;

    if (selectedTestimonialIds && Array.isArray(selectedTestimonialIds)) {
      const result = await Testimonial.deleteMany({ _id: { $in: selectedTestimonialIds } });

      if (result.deletedCount > 0) {
        return NextResponse.json({ message: 'Testimonial deleted successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'No Testimonial found with the provided ids.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: 'Invalid request. Provide an array of Testimonial application ids.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting Testimonial applications.', error: error.message }, { status: 500 });
  }
}

