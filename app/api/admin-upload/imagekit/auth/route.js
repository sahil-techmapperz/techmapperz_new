import { NextResponse } from 'next/server'
import ImageKit from 'imagekit-javascript'

// Initialize ImageKit with same env vars as main site
let imagekit = null;

if (process.env.ImagekitpublicKey && process.env.ImagekitprivateKey && process.env.ImagekiturlEndpoint) {
  imagekit = new ImageKit({
    publicKey: process.env.ImagekitpublicKey,
    privateKey: process.env.ImagekitprivateKey,
    urlEndpoint: `https://ik.imagekit.io/${process.env.ImagekiturlEndpoint}`,
  });
}

export async function GET() {
  try {
    if (!imagekit) {
      return NextResponse.json(
        { error: 'ImageKit is not configured. Please set ImageKit environment variables.' },
        { status: 500 }
      );
    }

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