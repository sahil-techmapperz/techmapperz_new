import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Event from '@/app/lib/models/Event';

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'events';
    const status = searchParams.get('status') || 'all';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : null;
    const category = searchParams.get('category');

    console.log('📊 Events API - Request params:', { type, status, limit, category });

    // Build query - handle both new documents with 'type' field and old documents without it
    // For backward compatibility: if type is 'events', also match documents without type field
    // For culture and workspace, if no specific items found, fall back to events
    const query = {};
    let useFallback = false;
    
    if (type === 'events') {
      // Match events with type='events' OR documents without type field (legacy events)
      query.$or = [
        { type: 'events' },
        { type: { $exists: false } }, // Legacy events without type field
        { type: null } // Also handle null values
      ];
    } else {
      // For culture and workspace, first try to find specific type
      query.type = type;
    }
    
    // Add status filter if not 'all'
    // Note: Existing events have status field, so this should work
    if (status !== 'all') {
      query.status = status;
    }
    
    // Add category filter if provided
    if (category) {
      query.category = category;
    }

    console.log('🔍 Events API - Query:', JSON.stringify(query, null, 2));

    // Execute query
    let eventsQuery = Event.find(query).sort({ date: -1, created_at: -1 });
    
    // Apply limit if provided
    if (limit && limit > 0) {
      eventsQuery = eventsQuery.limit(limit);
    }

    let events = await eventsQuery;
    console.log(`✅ Events API - Found ${events.length} ${type} items in database`);
    
    // If no specific items found for culture/workspace, fall back to events
    if (events.length === 0 && (type === 'culture' || type === 'workspace')) {
      console.log(`🔄 Events API - No ${type} items found, falling back to events`);
      useFallback = true;
      
      // Build fallback query for events
      const fallbackQuery = {
        $or: [
          { type: 'events' },
          { type: { $exists: false } },
          { type: null }
        ]
      };
      
      if (status !== 'all') {
        fallbackQuery.status = status;
      }
      
      if (category) {
        fallbackQuery.category = category;
      }
      
      let fallbackQueryBuilder = Event.find(fallbackQuery).sort({ date: -1, created_at: -1 });
      
      // Limit to 4 items for culture, 6 for workspace
      const fallbackLimit = type === 'culture' ? 4 : 6;
      fallbackQueryBuilder = fallbackQueryBuilder.limit(fallbackLimit);
      
      events = await fallbackQueryBuilder;
      console.log(`✅ Events API - Found ${events.length} events as fallback`);
    }
    
    if (events.length > 0) {
      console.log('📝 Events API - First item sample:', JSON.stringify(events[0].toObject(), null, 2));
    }

    // Transform data based on type
    let data = events.map((event, index) => {
      const eventObj = event.toObject();
      
      if (type === 'culture') {
        // Return culture highlight format - use events data as fallback
        // Map category to icons if icon doesn't exist
        const iconMap = {
          'Event': '🎉',
          'Team Building': '🤝',
          'Conference': '📢',
          'Workshop': '🛠️',
          'Hackathon': '💻',
          'Celebration': '🎊',
        };
        return {
          _id: eventObj._id,
          id: eventObj._id.toString(),
          icon: eventObj.icon || iconMap[eventObj.category] || '🌟',
          title: eventObj.title,
          description: eventObj.description,
        };
      } else if (type === 'workspace') {
        // Return workspace image format - use events data as fallback
        // Distribute grid types for better layout
        const gridTypes = ['square', 'wide', 'tall', 'square', 'wide2', 'square'];
        const gridType = eventObj.gridType || gridTypes[index % gridTypes.length];
        return {
          _id: eventObj._id,
          id: eventObj._id.toString(),
          src: eventObj.src || eventObj.image,
          alt: eventObj.alt || eventObj.title,
          type: gridType,
        };
      } else {
        // Return event format
        return {
          _id: eventObj._id,
          id: eventObj._id.toString(),
          title: eventObj.title,
          description: eventObj.description,
          image: eventObj.image,
          date: eventObj.date,
          category: eventObj.category,
          featured: eventObj.featured || false,
          status: eventObj.status || 'upcoming', // Include status field
        };
      }
    });

    console.log(`📤 Events API - Returning ${data.length} transformed items`);
    if (data.length > 0) {
      console.log('📦 Events API - First transformed item:', JSON.stringify(data[0], null, 2));
    }

    return NextResponse.json({
      success: true,
      data: data,
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      data: [],
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const {
      title,
      description,
      image,
      date,
      category,
      featured,
      type = 'events',
      status = 'upcoming',
      icon,
      src,
      alt,
      gridType,
    } = body;

    // Validate required fields based on type
    if (type === 'culture') {
      if (!title || !description) {
        return NextResponse.json(
          { error: 'Title and description are required for culture highlights' },
          { status: 400 }
        );
      }
    } else if (type === 'workspace') {
      if (!src && !image) {
        return NextResponse.json(
          { error: 'Image source (src or image) is required for workspace images' },
          { status: 400 }
        );
      }
    } else {
      // Regular events
      if (!title || !description || !image) {
        return NextResponse.json(
          { error: 'Title, description, and image are required for events' },
          { status: 400 }
        );
      }
    }

    const event = new Event({
      title,
      description,
      image: image || src,
      date: date ? new Date(date) : new Date(),
      category,
      featured: featured || false,
      type,
      status,
      icon,
      src: src || image,
      alt: alt || title,
      gridType: gridType || 'square',
    });

    await event.save();

    return NextResponse.json({
      success: true,
      data: event,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}

