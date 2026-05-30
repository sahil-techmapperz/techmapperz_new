import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Category from '@/app/lib/models/Category';
import Event from '@/app/lib/models/Event';

// GET all categories
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';

    // Get all categories from Category collection
    let categories = await Category.find().sort({ name: 1 }).lean();

    // If no categories exist in Category collection, extract from events
    if (categories.length === 0) {
      // Get unique categories from events
      const events = await Event.find({ type: 'events' }).select('category').lean();
      const uniqueCategories = [...new Set(events.map(e => e.category).filter(Boolean))];
      
      // Create category documents from unique event categories
      for (const catName of uniqueCategories) {
        const count = await Event.countDocuments({ category: catName, type: 'events' });
        const category = new Category({
          name: catName.toLowerCase(),
          description: `Category: ${catName}`,
          color: '#3B82F6',
          isActive: true,
          count: count,
        });
        await category.save();
      }
      
      // Fetch again after creating
      categories = await Category.find().sort({ name: 1 }).lean();
    }

    // Update counts for each category from events
    for (const category of categories) {
      const count = await Event.countDocuments({ 
        category: { $regex: new RegExp(`^${category.name}$`, 'i') },
        type: 'events'
      });
      category.count = count;
    }

    return NextResponse.json({
      success: true,
      data: categories
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error fetching categories', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// POST create new category
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, description, color, isActive } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Category name is required' },
        { status: 400 }
      );
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ 
      name: name.toLowerCase().trim() 
    });

    if (existingCategory) {
      return NextResponse.json(
        { success: false, error: 'Category with this name already exists' },
        { status: 409 }
      );
    }

    // Get count of events with this category
    const count = await Event.countDocuments({ 
      category: { $regex: new RegExp(`^${name}$`, 'i') },
      type: 'events'
    });

    const newCategory = new Category({
      name: name.toLowerCase().trim(),
      description: description || '',
      color: color || '#3B82F6',
      isActive: isActive !== undefined ? isActive : true,
      count: count,
      lastUsed: count > 0 ? new Date() : null,
    });

    await newCategory.save();

    return NextResponse.json({
      success: true,
      data: newCategory
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Category with this name already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Error creating category', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

