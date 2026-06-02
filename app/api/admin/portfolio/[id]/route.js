import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Portfolio from '@/app/lib/models/Portfolio';

export async function PUT(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();
        const { id } = await params;

        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!updatedPortfolio) {
            return NextResponse.json(
                { success: false, error: 'Portfolio not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: updatedPortfolio });
    } catch (error) {
        console.error('Error updating portfolio:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to update portfolio' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;

        const deletedPortfolio = await Portfolio.findByIdAndDelete(id);

        if (!deletedPortfolio) {
            return NextResponse.json(
                { success: false, error: 'Portfolio not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        console.error('Error deleting portfolio:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete portfolio' },
            { status: 500 }
        );
    }
}
