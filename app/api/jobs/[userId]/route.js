import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Job from '@/app/lib/models/Job';

// GET single job by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    
    const job = await Job.findById(userId);
    
    if (!job) {
      return NextResponse.json(
        { message: 'Job not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// PUT update job by ID
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
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

    const job = await Job.findById(userId);
    
    if (!job) {
      return NextResponse.json(
        { message: 'Job not found' },
        { status: 404 }
      );
    }

    // Update job fields
    if (description !== undefined) job.description = description;
    if (designetion !== undefined) job.designetion = designetion;
    if (experience !== undefined) job.experience = experience;
    if (location !== undefined) job.location = location;
    if (JobID !== undefined) job.JobID = JobID;
    if (Jobtype !== undefined) job.Jobtype = Jobtype;
    if (education !== undefined) job.education = education;
    if (perksBenefits !== undefined) job.perksBenefits = perksBenefits;
    if (candidateProfile !== undefined) job.candidateProfile = candidateProfile;
    if (roleResponsibility !== undefined) job.roleResponsibility = roleResponsibility;
    if (salary !== undefined) job.salary = salary;

    await job.save();
    
    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// DELETE single job by ID
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { userId } = await params;
    
    const job = await Job.findByIdAndDelete(userId);
    
    if (!job) {
      return NextResponse.json(
        { message: 'Job not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Job deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting job', error: error.message },
      { status: 500 }
    );
  }
}

