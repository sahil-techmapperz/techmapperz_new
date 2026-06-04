import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Banner from '@/app/lib/models/Banner';
import { uploadFile } from '@/app/lib/imagekit';

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    
    // Check Content-Type to see if it's formData or json
    const contentType = request.headers.get('content-type') || '';
    
    let updatedBannerData = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file');
      const dataStr = formData.get('data');
      const parsedData = dataStr ? JSON.parse(dataStr) : {};

      if (file && file instanceof Blob) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const filetype = file.type.split('/');
        const fileName = file.name.split('.');
        const fileExt = `${fileName[0]}.${filetype[1]}`;
        const Banner_url = await uploadFile(buffer, fileExt);
        parsedData.banner_img_url = Banner_url;
      }

      updatedBannerData = await Banner.findOneAndUpdate({ _id: userId }, parsedData, { new: true });
    } else {
      const updatedData = await request.json();
      updatedBannerData = await Banner.findOneAndUpdate({ _id: userId }, updatedData, { new: true });
    }

    if (updatedBannerData) {
      return NextResponse.json(updatedBannerData, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Banner not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating banner:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
