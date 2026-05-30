import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'welcome to AdminRoute' }, { status: 200 });
}

