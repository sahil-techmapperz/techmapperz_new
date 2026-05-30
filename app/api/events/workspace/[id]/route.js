import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Event from '@/app/lib/models/Event';
import { unlink } from 'fs/promises';
import path from 'path';

// GET workspace image by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const event = await Event.findOne({ _id: id, type: 'workspace' });
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Workspace image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: event
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching workspace image:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error fetching workspace image', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// PUT update workspace image by ID
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    
    const {
      src,
      alt,
      type,
      width,
      height,
    } = body;

    const event = await Event.findOne({ _id: id, type: 'workspace' });
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Workspace image not found' },
        { status: 404 }
      );
    }

    // Update event fields
    if (src !== undefined) {
      event.src = src;
      event.image = src; // Also update image field for compatibility
    }
    if (alt !== undefined) {
      event.alt = alt;
      event.title = alt; // Also update title for compatibility
      event.description = alt; // Also update description for compatibility
    }
    if (type !== undefined) event.gridType = type;
    if (width !== undefined) event.width = width;
    if (height !== undefined) event.height = height;

    await event.save();
    
    return NextResponse.json({
      success: true,
      data: event
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating workspace image:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error updating workspace image', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// DELETE workspace image by ID
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    // Get the event first to access the image path
    const event = await Event.findOne({ _id: id, type: 'workspace' });
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Workspace image not found' },
        { status: 404 }
      );
    }

    // Delete the image file if it exists in the uploads/workspace folder
    const imageToDelete = event.src || event.image;
    if (imageToDelete) {
      try {
        // Check if the image is a local file (starts with /uploads/)
        if (imageToDelete.startsWith('/uploads/workspace/')) {
          const imagePath = path.join(process.cwd(), 'public', imageToDelete);
          await unlink(imagePath);
          console.log('Deleted workspace image file:', imagePath);
        } else if (imageToDelete.includes('/uploads/workspace/')) {
          // Handle full URLs that contain /uploads/workspace/
          const urlPath = new URL(imageToDelete).pathname;
          if (urlPath.startsWith('/uploads/workspace/')) {
            const imagePath = path.join(process.cwd(), 'public', urlPath);
            await unlink(imagePath);
            console.log('Deleted workspace image file:', imagePath);
          }
        }
      } catch (fileError) {
        // If file doesn't exist or can't be deleted, log but don't fail the deletion
        console.warn('Could not delete workspace image file:', imageToDelete, fileError.message);
      }
    }

    // Delete the event from database
    await Event.findByIdAndDelete(id);
    
    return NextResponse.json({
      success: true,
      message: 'Workspace image deleted successfully'
    }, { status: 200 });
  } catch (error) {
    console.error('Error deleting workspace image:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error deleting workspace image', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

