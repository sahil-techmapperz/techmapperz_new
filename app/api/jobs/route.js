import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Job from '@/app/lib/models/Job';

export async function GET() {
  try {
    await connectDB();
    const allJob = await Job.find();
    return NextResponse.json(allJob, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { 
      description, 
      designetion, 
      experience, 
      location, 
      JobID, 
      Jobtype,
      education,
      perksBenefits,
      candidateProfile,
      roleResponsibility,
      salary
    } = body;

    if (description && designetion && experience && location && JobID && Jobtype) {
      const allJob = await Job.find();
      const newJob = new Job({
        description,
        designetion,
        Jobtype,
        experience,
        location,
        userId: allJob.length + 1,
        JobID,
        education: education || '',
        perksBenefits: perksBenefits || '',
        candidateProfile: candidateProfile || '',
        roleResponsibility: roleResponsibility || '',
        salary: salary || '',
      });
      await newJob.save();
      return NextResponse.json(newJob, { status: 200 });
    } else {
      return NextResponse.json({ message: 'provide all details' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { selectedjobsIds } = body;

    if (selectedjobsIds && Array.isArray(selectedjobsIds)) {
      const result = await Job.deleteMany({ _id: { $in: selectedjobsIds } });

      if (result.deletedCount > 0) {
        return NextResponse.json({ message: 'job deleted successfully.' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'No job found with the provided ids.' }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: 'Invalid request. Provide an array of career ids.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting job.', error: error.message }, { status: 500 });
  }
}

