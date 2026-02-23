import { NextResponse } from 'next/server'
import ImageKit from 'imagekit'

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
                { error: 'ImageKit is not configured.' },
                { status: 500 }
            )
        }

        const { fileId } = await request.json()

        if (!fileId) {
            return NextResponse.json(
                { error: 'File ID is required' },
                { status: 400 }
            )
        }

        await new Promise((resolve, reject) => {
            imagekit.deleteFile(fileId, (error, result) => {
                if (error) reject(error)
                else resolve(result)
            })
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Delete error:', error)
        return NextResponse.json(
            { error: 'Failed to delete image' },
            { status: 500 }
        )
    }
}
