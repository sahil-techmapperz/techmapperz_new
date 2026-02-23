import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Login from '@/app/lib/models/Login';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    const user = await Login.find({ email, password });

    if (user.length > 0 && user[0].email) {
      const token = jwt.sign({ userId: user[0]._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1d' });
      return NextResponse.json({ user, token }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'NO USER NOT FOUND' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'EMAIL OR PASSWORD IS INCORRECT' }, { status: 404 });
  }
}

