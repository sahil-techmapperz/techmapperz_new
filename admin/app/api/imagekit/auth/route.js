import { NextResponse } from 'next/server'
import ImageKit from 'imagekit-javascript'

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
});

export async function GET() {
  try {
    // Generate token with proper parameters
    const token = imagekit.getAuthenticationParameters({
      token: '', // Empty string for client-side upload
      expire: Math.floor(Date.now() / 1000) + 3600, // 1 hour expiry
      tokenId: Date.now().toString(), // Unique token ID
      signature: imagekit.getSignature({
        token: '',
        expire: Math.floor(Date.now() / 1000) + 3600,
        tokenId: Date.now().toString()
      })
    });

    return NextResponse.json({
      token: token.token,
      expire: token.expire,
      tokenId: token.tokenId,
      signature: token.signature
    });
  } catch (error) {
    console.error('Error generating ImageKit token:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
} 