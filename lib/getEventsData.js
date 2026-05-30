import logger from '@/app/lib/utils/logger';

// Utility function to fetch events data
export async function getEventsData(options = {}) {
  const { 
    type = 'events', 
    limit, 
    status = 'all', 
    category,
    revalidate = 300 // 5 minutes cache 
  } = options;

  try {
    // Use full URL - required for Next.js fetch during build
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Build query parameters
    const params = new URLSearchParams();
    params.append('type', type);
    
    if (limit) params.append('limit', limit.toString());
    if (status) params.append('status', status);
    if (category) params.append('category', category);

    // Check if events API route exists, if not return empty array
    const url = `${baseUrl}/api/events?${params.toString()}`;
    
    const response = await fetch(url, {
      next: { revalidate },
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(() => {
      // Silently return null on fetch errors - expected during build
      return null;
    });

    // If fetch failed, return empty array
    if (!response) {
      logger.log('❌ getEventsData - No response received');
      return [];
    }

    logger.log('📡 getEventsData - Response status:', response.status, response.statusText);

    if (!response.ok) {
      // If API route doesn't exist (404), return empty array gracefully
      if (response.status === 404) {
        logger.log('⚠️ getEventsData - API route not found (404)');
        return [];
      }
      // For other errors, return empty array instead of throwing
      logger.log('⚠️ getEventsData - Response not OK:', response.status);
      return [];
    }

    const result = await response.json();
    logger.log('📥 getEventsData - Response received:', {
      success: result.success,
      dataLength: result.data?.length || 0,
      hasData: !!result.data
    });
    
    if (!result.success) {
      // Return empty array instead of throwing error
      logger.log('⚠️ getEventsData - Response success is false');
      return [];
    }

    const data = result.data || [];
    logger.log(`✅ getEventsData - Returning ${data.length} items`);
    
    return data;
  } catch (error) {
    // Silently return empty array for any error
    // Errors are expected during build when server isn't running
    // Return empty array as fallback
    return [];
  }
}

// Specific helper functions
export async function getEvents(limit, status = 'completed', revalidate = 600) {
  return getEventsData({ type: 'events', limit, status, revalidate });
}

export async function getCultureData() {
  return getEventsData({ type: 'culture' });
}

export async function getWorkspaceImages() {
  return getEventsData({ type: 'workspace' });
}

export async function getEventsByCategory(category, limit) {
  return getEventsData({ type: 'events', category, limit });
}

export async function getUpcomingEvents(limit = 5) {
  return getEventsData({ type: 'events', status: 'upcoming', limit });
}

export async function getFeaturedEvents(limit = 3) {
  const events = await getEventsData({ type: 'events' });
  return events.filter(event => event.featured).slice(0, limit);
} 