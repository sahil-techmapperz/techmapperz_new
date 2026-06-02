import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';

export async function GET() {
    try {
        await connectDB();
        const portfolios = await Portfolio.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: portfolios });
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch portfolios' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        
        // Ensure slug is unique, or autogenerate if empty
        if (!body.slug && body.name) {
            body.slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        }

        const newPortfolio = new Portfolio(body);
        await newPortfolio.save();
        
        return NextResponse.json({ success: true, data: newPortfolio });
    } catch (error) {
        console.error('Error creating portfolio:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to create portfolio' },
            { status: 500 }
        );
    }
}
