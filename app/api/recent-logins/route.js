import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import RecentLogin from '@/app/lib/models/RecentLogin';

export async function GET() {
  try {
    await connectDB();
    const recentLogins = await RecentLogin.find().sort({ loginTime: -1 }).limit(10);
    return NextResponse.json(recentLogins, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching recent logins' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Missing email' }, { status: 400 });
    }

    const getCurrentDateString = () => {
      const date = new Date();
      const offsetInMinutes = 5 * 60 + 30; // Indian Standard Time (IST) is UTC +5:30
      const indianDate = new Date(date.getTime() + offsetInMinutes * 60000);

      const year = indianDate.getUTCFullYear();
      const month = String(indianDate.getUTCMonth() + 1).padStart(2, '0');
      const day = String(indianDate.getUTCDate()).padStart(2, '0');
      let hours = indianDate.getUTCHours();
      const minutes = String(indianDate.getUTCMinutes()).padStart(2, '0');
      const seconds = String(indianDate.getUTCSeconds()).padStart(2, '0');

      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours === 0 ? 12 : hours;
      hours = String(hours).padStart(2, '0');

      return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    };

    const date = getCurrentDateString();
    const newLogin = new RecentLogin({ email, loginTime: date });
    await newLogin.save();
    
    return NextResponse.json(newLogin, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding new login data' }, { status: 500 });
  }
}

