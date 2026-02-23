import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Category from '@/app/lib/models/Category';
import Event from '@/app/lib/models/Event';

// GET category by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Update count from events
    const count = await Event.countDocuments({ 
      category: { $regex: new RegExp(`^${category.name}$`, 'i') },
      type: 'events'
    });
    category.count = count;

    return NextResponse.json({
      success: true,
      data: category
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error fetching category', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// PUT update category
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const { name, description, color, isActive } = body;

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // If name is being changed, check for duplicates
    if (name && name.toLowerCase().trim() !== category.name) {
      const existingCategory = await Category.findOne({ 
        name: name.toLowerCase().trim(),
        _id: { $ne: id }
      });

      if (existingCategory) {
        return NextResponse.json(
          { success: false, error: 'Category with this name already exists' },
          { status: 409 }
        );
      }

      // Update events with old category name to new category name
      await Event.updateMany(
        { 
          category: { $regex: new RegExp(`^${category.name}$`, 'i') },
          type: 'events'
        },
        { $set: { category: name.trim() } }
      );

      category.name = name.toLowerCase().trim();
    }

    if (description !== undefined) category.description = description;
    if (color !== undefined) category.color = color;
    if (isActive !== undefined) category.isActive = isActive;

    // Update count
    const count = await Event.countDocuments({ 
      category: { $regex: new RegExp(`^${category.name}$`, 'i') },
      type: 'events'
    });
    category.count = count;
    category.lastUsed = count > 0 ? new Date() : category.lastUsed;

    await category.save();

    return NextResponse.json({
      success: true,
      data: category
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating category:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Category with this name already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Error updating category', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || 'soft'; // 'soft' or 'force'

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Check if category is used in events
    const eventsCount = await Event.countDocuments({ 
      category: { $regex: new RegExp(`^${category.name}$`, 'i') },
      type: 'events'
    });

    if (action === 'force' && eventsCount > 0) {
      // Delete all events with this category
      await Event.deleteMany({ 
        category: { $regex: new RegExp(`^${category.name}$`, 'i') },
        type: 'events'
      });
    } else if (eventsCount > 0) {
      // Soft delete: just remove category from events
      await Event.updateMany(
        { 
          category: { $regex: new RegExp(`^${category.name}$`, 'i') },
          type: 'events'
        },
        { $unset: { category: '' } }
      );
    }

    // Delete the category
    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: `Category deleted successfully. ${eventsCount > 0 ? `${eventsCount} events affected.` : ''}`
    }, { status: 200 });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error deleting category', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

