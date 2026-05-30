import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Event from '@/app/lib/models/Event';
import { unlink } from 'fs/promises';
import path from 'path';

// GET single event by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    const event = await Event.findById(id);
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: event
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error fetching event', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// PUT update event by ID
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    
    const {
      title,
      description,
      image,
      date,
      category,
      featured,
      type = 'events',
      status,
      icon,
      src,
      alt,
      gridType,
    } = body;

    const event = await Event.findById(id);
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    // Update event fields
    if (title !== undefined) event.title = title;
    if (description !== undefined) event.description = description;
    if (image !== undefined) event.image = image;
    if (src !== undefined) event.src = src;
    if (date !== undefined) event.date = new Date(date);
    if (category !== undefined) event.category = category;
    if (featured !== undefined) event.featured = featured;
    if (type !== undefined) event.type = type;
    if (status !== undefined) event.status = status;
    if (icon !== undefined) event.icon = icon;
    if (alt !== undefined) event.alt = alt;
    if (gridType !== undefined) event.gridType = gridType;

    await event.save();
    
    return NextResponse.json({
      success: true,
      data: event
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error updating event', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// DELETE event by ID
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    
    // Get the event first to access the image path
    const event = await Event.findById(id);
    
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    // Delete the image file if it exists in the uploads folder
    // Handle both events and workspace images
    const imageToDelete = event.image || event.src;
    if (imageToDelete) {
      try {
        // Check if the image is a local file (starts with /uploads/)
        if (imageToDelete.startsWith('/uploads/events/') || imageToDelete.startsWith('/uploads/workspace/')) {
          const imagePath = path.join(process.cwd(), 'public', imageToDelete);
          await unlink(imagePath);
          console.log('Deleted image file:', imagePath);
        } else if (imageToDelete.includes('/uploads/events/') || imageToDelete.includes('/uploads/workspace/')) {
          // Handle full URLs that contain /uploads/events/ or /uploads/workspace/
          const urlPath = new URL(imageToDelete).pathname;
          if (urlPath.startsWith('/uploads/events/') || urlPath.startsWith('/uploads/workspace/')) {
            const imagePath = path.join(process.cwd(), 'public', urlPath);
            await unlink(imagePath);
            console.log('Deleted image file:', imagePath);
          }
        }
      } catch (fileError) {
        // If file doesn't exist or can't be deleted, log but don't fail the deletion
        console.warn('Could not delete image file:', imageToDelete, fileError.message);
      }
    }

    // Delete the event from database
    await Event.findByIdAndDelete(id);
    
    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully'
    }, { status: 200 });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error deleting event', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

