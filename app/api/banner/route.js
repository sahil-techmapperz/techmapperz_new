import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Banner from '@/app/lib/models/Banner';
import { uploadFile } from '@/app/lib/imagekit';

export async function GET() {
  try {
    await connectDB();
    const allBanner = await Banner.find();
    return NextResponse.json(allBanner, { status: 200 });
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

    const { heading, banner_img_url, subTitle, pageName } = JSON.parse(dataStr);

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filetype = file.type.split('/');
      const fileName = file.name.split('.');
      const fileExt = `${fileName[0]}.${filetype[1]}`;
      const Banner_url = await uploadFile(buffer, fileExt);

      const allBanner = await Banner.find();
      const newBanner = new Banner({
        banner_img_url: Banner_url,
        userId: allBanner.length + 1,
        heading,
        subTitle,
        pageName,
      });
      await newBanner.save();
      return NextResponse.json({ message: 'your banner details submitted successfully', data: newBanner }, { status: 200 });
    } else if (banner_img_url) {
      const allBanner = await Banner.find();
      const newBanner = new Banner({
        banner_img_url,
        userId: allBanner.length + 1,
        heading,
        subTitle,
        pageName,
      });
      await newBanner.save();
      return NextResponse.json({ message: 'your banner details submitted successfully', data: newBanner }, { status: 200 });
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
    const { selectedHomeBannerIds } = body;

    if (selectedHomeBannerIds && Array.isArray(selectedHomeBannerIds)) {
      const result = await Banner.deleteMany({ _id: { $in: selectedHomeBannerIds } });

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

