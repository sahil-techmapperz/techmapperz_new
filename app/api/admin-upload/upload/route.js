import { NextResponse } from 'next/server'
import ImageKit from 'imagekit'

// Initialize ImageKit with same env vars as main site
let imagekit = null;

if (process.env.ImagekitpublicKey && process.env.ImagekitprivateKey && process.env.ImagekiturlEndpoint) {
  imagekit = new ImageKit({
    publicKey: process.env.ImagekitpublicKey,
    privateKey: process.env.ImagekitprivateKey,
    urlEndpoint: `https://ik.imagekit.io/${process.env.ImagekiturlEndpoint}`,
  });
}

export async function POST(request) {
  try {
    if (!imagekit) {
      return NextResponse.json(
        { error: 'ImageKit is not configured. Please set ImageKit environment variables.' },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('image')

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Upload to ImageKit
    const uploadResponse = await new Promise((resolve, reject) => {
      imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: '/blog-images',
        useUniqueFileName: true
      }, (error, result) => {
        if (error) reject(error)
        else resolve(result)
      })
    })

    // Return the URL in the format TinyMCE expects
    return NextResponse.json({
      location: uploadResponse.url,
      url: uploadResponse.url,
      fileId: uploadResponse.fileId
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
} 