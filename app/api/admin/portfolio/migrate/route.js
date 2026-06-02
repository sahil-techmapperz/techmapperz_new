import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';
import enhancedPortfolioData from '@/app/portfolios/PortfolioData';

export async function GET() {
    try {
        await connectDB();
        
        // Count existing
        const existingCount = await Portfolio.countDocuments();
        if (existingCount > 0) {
            return NextResponse.json({ 
                success: false, 
                message: `Migration aborted. Database already contains ${existingCount} portfolios.`
            });
        }

        // Insert all
        const docs = await Portfolio.insertMany(enhancedPortfolioData);

        return NextResponse.json({ 
            success: true, 
            message: `Successfully migrated ${docs.length} portfolios to MongoDB!`,
            data: docs 
        });
    } catch (error) {
        console.error('Migration error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to migrate portfolios' },
            { status: 500 }
        );
    }
}
