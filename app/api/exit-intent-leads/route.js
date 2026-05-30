import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import ExitIntentLead from '@/app/lib/models/ExitIntentLead';

export async function GET() {
    try {
        await connectDB();
        const allLeads = await ExitIntentLead.find();
        return NextResponse.json(allLeads, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const { name, email, phone, workEmail, projectDescription } = body;

        if (name && email && phone) {
            const allLeads = await ExitIntentLead.find();
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

            const newLead = new ExitIntentLead({
                name,
                email,
                phone,
                workEmail: workEmail || '',
                projectDescription: projectDescription || '',
                Date: formattedDate,
                userId: allLeads.length + 1,
            });

            await newLead.save();
            return NextResponse.json({ message: 'success' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'provide essential details (name, email, phone)' }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        await connectDB();
        const body = await request.json();
        const { selectedLeadIds } = body;

        if (selectedLeadIds && Array.isArray(selectedLeadIds)) {
            const result = await ExitIntentLead.deleteMany({ _id: { $in: selectedLeadIds } });

            if (result.deletedCount > 0) {
                return NextResponse.json({ message: 'Leads deleted successfully.' }, { status: 200 });
            } else {
                return NextResponse.json({ message: 'No leads found with the provided ids.' }, { status: 404 });
            }
        } else {
            return NextResponse.json({ message: 'Invalid request. Provide an array of lead ids.' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting leads.', error: error.message }, { status: 500 });
    }
}
