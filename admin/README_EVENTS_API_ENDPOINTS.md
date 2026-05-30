# Events Management System - API Endpoints Documentation

This document provides comprehensive information about all API endpoints available for the Events Management System, including Events, Culture, and Workspace modules.

## Table of Contents
- [Base Configuration](#base-configuration)
- [Events API](#events-api)
- [Categories API](#categories-api)
- [Culture API](#culture-api)
- [Workspace API](#workspace-api)
- [File Upload API](#file-upload-api)
- [Response Formats](#response-formats)
- [Error Handling](#error-handling)
- [Usage Examples](#usage-examples)

## Base Configuration

The API base URL is configured in `utils/api.js`:
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
```

All API calls use the centralized `api` instance with automatic error handling and authentication.

## Events API

### Available Functions

#### 1. Get All Events
```javascript
eventsApi.getAll(page = 1, limit = 10, status = 'all', category = '')
```
- **Endpoint**: `GET /events?type=events&limit=${limit}&status=${status}&category=${category}`
- **Parameters**:
  - `page`: Page number (default: 1)
  - `limit`: Number of items per page (default: 10)
  - `status`: Filter by status ('all', 'active', 'inactive')
  - `category`: Filter by category (optional)
- **Returns**: Array of event objects

#### 2. Get Event by ID
```javascript
eventsApi.getById(id)
```
- **Endpoint**: `GET /events/event/${id}`
- **Parameters**: `id` - Event ID
- **Returns**: Single event object
- **Throws**: Error if event not found (404)

#### 3. Get Events by Category
```javascript
eventsApi.getByCategory(category, limit = 10)
```
- **Endpoint**: `GET /events/category/${category}?limit=${limit}`
- **Parameters**:
  - `category`: Event category
  - `limit`: Number of items (default: 10)
- **Returns**: Array of events in specified category

#### 4. Get Featured Events
```javascript
eventsApi.getFeatured(limit = 5)
```
- **Endpoint**: `GET /events/featured?limit=${limit}`
- **Parameters**: `limit` - Number of featured events (default: 5)
- **Returns**: Array of featured events

#### 5. Create Event
```javascript
eventsApi.create(data)
```
- **Endpoint**: `POST /events/event`
- **Parameters**: Event data object
- **Required Fields**:
  - `title`: Event title
  - `description`: Event description
  - `date`: Event date
  - `location`: Event location
  - `category`: Event category
  - `image`: Event image (URL or file path)
- **Auto-added**: `type: 'event'`

#### 6. Update Event
```javascript
eventsApi.update(id, data)
```
- **Endpoint**: `PUT /events/event/${id}`
- **Parameters**: 
  - `id`: Event ID
  - `data`: Updated event data
- **Auto-added**: `type: 'event'`

#### 7. Delete Event
```javascript
eventsApi.delete(id)
```
- **Endpoint**: `DELETE /events/event/${id}`
- **Parameters**: `id` - Event ID
- **Throws**: Error if ID is missing or event not found

## Categories API

### Available Functions

#### 1. Get All Categories
```javascript
categoriesApi.getAll()
```
- **Endpoint**: `GET /categories`
- **Returns**: Array of category objects

#### 2. Get Category by ID
```javascript
categoriesApi.getById(id)
```
- **Endpoint**: `GET /categories/${id}`
- **Parameters**: `id` - Category ID
- **Returns**: Single category object

#### 3. Create Category
```javascript
categoriesApi.create(data)
```
- **Endpoint**: `POST /categories`
- **Parameters**: Category data object
- **Required Fields**:
  - `name`: Category name
  - `description`: Category description (optional)
  - `color`: Category color (hex code, default: '#3B82F6')
  - `isActive`: Active status (default: true)

#### 4. Update Category
```javascript
categoriesApi.update(id, data)
```
- **Endpoint**: `PUT /categories/${id}`
- **Parameters**:
  - `id`: Category ID
  - `data`: Updated category data

#### 5. Delete Category
```javascript
categoriesApi.delete(id)
```
- **Endpoint**: `DELETE /categories/${id}`
- **Parameters**: `id` - Category ID

## Culture API

### Available Functions

#### 1. Get All Culture Items
```javascript
cultureApi.getAll()
```
- **Endpoint**: `GET /events?type=culture`
- **Returns**: Array of culture value objects

#### 2. Get Culture Item by ID
```javascript
cultureApi.getById(id)
```
- **Endpoint**: `GET /events/culture/${id}`
- **Parameters**: `id` - Culture item ID
- **Returns**: Single culture item object

#### 3. Create Culture Item
```javascript
cultureApi.create(data)
```
- **Endpoint**: `POST /events/culture`
- **Parameters**: Culture data object
- **Required Fields**:
  - `title`: Culture value title
  - `description`: Culture value description
  - `icon`: Emoji icon
  - `order`: Display order (optional, default: 1)

#### 4. Update Culture Item
```javascript
cultureApi.update(id, data)
```
- **Endpoint**: `PUT /events/culture/${id}`
- **Parameters**:
  - `id`: Culture item ID
  - `data`: Updated culture data

#### 5. Delete Culture Item
```javascript
cultureApi.delete(id)
```
- **Endpoint**: `DELETE /events/culture/${id}`
- **Parameters**: `id` - Culture item ID

## Workspace API

### Available Functions

#### 1. Get All Workspace Images
```javascript
workspaceApi.getAll()
```
- **Endpoint**: `GET /events?type=workspace`
- **Returns**: Array of workspace image objects

#### 2. Get Workspace Image by ID
```javascript
workspaceApi.getById(id)
```
- **Endpoint**: `GET /events/workspace/${id}`
- **Parameters**: `id` - Workspace image ID
- **Returns**: Single workspace image object

#### 3. Create Workspace Image
```javascript
workspaceApi.create(data)
```
- **Endpoint**: `POST /events/workspace`
- **Parameters**: Workspace image data object
- **Required Fields**:
  - `src`: Image URL or file path
  - `alt`: Alt text for image
  - `type`: Image type/category
  - `width`: Image width (optional)
  - `height`: Image height (optional)

#### 4. Update Workspace Image
```javascript
workspaceApi.update(id, data)
```
- **Endpoint**: `PUT /events/workspace/${id}`
- **Parameters**:
  - `id`: Workspace image ID
  - `data`: Updated workspace data

#### 5. Delete Workspace Image
```javascript
workspaceApi.delete(id)
```
- **Endpoint**: `DELETE /events/workspace/${id}`
- **Parameters**: `id` - Workspace image ID

## File Upload API

### Local File Upload
```javascript
// Available at: /api/local-upload
```
- **Endpoint**: `POST /api/local-upload`
- **Method**: FormData with file
- **Validation**:
  - Max file size: 5MB
  - Allowed types: image/jpeg, image/png, image/gif, image/webp
- **Returns**: `{ success: true, filePath: '/uploads/folder/filename' }`
- **Storage**: Files saved to `public/uploads/` directory

### Upload Directories
- Events: `public/uploads/events/`
- Culture: `public/uploads/culture/`
- Workspace: `public/uploads/workspace/`
- General: `public/uploads/general/`

## Response Formats

### Success Response
```javascript
{
  data: [...] // Array of objects or single object
}
```

### Error Response
```javascript
{
  error: "Error message",
  status: 400/404/500
}
```

### Event Object Structure
```javascript
{
  _id: "event_id",
  title: "Event Title",
  description: "Event Description",
  date: "2025-01-30T10:00:00Z",
  location: "Event Location",
  category: "conference",
  image: "/uploads/events/image.jpg",
  status: "active",
  type: "event",
  createdAt: "2025-01-30T08:00:00Z",
  updatedAt: "2025-01-30T08:00:00Z"
}
```

### Category Object Structure
```javascript
{
  _id: "category_id",
  name: "Conference",
  description: "Professional conferences and seminars",
  color: "#3B82F6",
  isActive: true,
  createdAt: "2025-01-30T08:00:00Z",
  updatedAt: "2025-01-30T08:00:00Z"
}
```

### Culture Object Structure
```javascript
{
  _id: "culture_id",
  title: "Culture Value",
  description: "Culture Description",
  icon: "🚀",
  order: 1,
  createdAt: "2025-01-30T08:00:00Z",
  updatedAt: "2025-01-30T08:00:00Z"
}
```

### Workspace Object Structure
```javascript
{
  _id: "workspace_id",
  src: "/uploads/workspace/image.jpg",
  alt: "Office workspace",
  type: "office",
  width: 800,
  height: 600,
  createdAt: "2025-01-30T08:00:00Z",
  updatedAt: "2025-01-30T08:00:00Z"
}
```

## Error Handling

All API functions include comprehensive error handling:

### Common Error Types
- **404 Not Found**: Item doesn't exist
- **400 Bad Request**: Invalid data or missing required fields
- **500 Server Error**: Internal server error

### Error Handling Pattern
```javascript
try {
  const result = await eventsApi.getById(id)
  // Handle success
} catch (error) {
  console.error('API Error:', error.message)
  // Handle specific error types
  if (error.message.includes('not found')) {
    // Handle 404
  }
}
```

## Usage Examples

### 1. Fetching Events with Filters
```javascript
// Get all active events in 'conference' category
const { data: events } = await eventsApi.getAll(1, 10, 'active', 'conference')

// Get featured events for homepage
const { data: featured } = await eventsApi.getFeatured(3)
```

### 2. Creating an Event with Image Upload
```javascript
// First upload image
const formData = new FormData()
formData.append('file', imageFile)
formData.append('folder', 'events')

const uploadResponse = await fetch('/api/local-upload', {
  method: 'POST',
  body: formData
})
const { filePath } = await uploadResponse.json()

// Then create event
const eventData = {
  title: 'Tech Conference 2025',
  description: 'Annual technology conference',
  date: '2025-03-15T09:00:00Z',
  location: 'Convention Center',
  category: 'conference',
  image: filePath
}

const response = await eventsApi.create(eventData)
```

### 3. Managing Culture Values
```javascript
// Get all culture values
const { data: cultureValues } = await cultureApi.getAll()

// Add new culture value
const newValue = {
  title: 'Innovation',
  description: 'We embrace creativity and forward-thinking',
  icon: '💡',
  order: 1
}

await cultureApi.create(newValue)
```

### 4. Category Management
```javascript
// Get all categories
const { data: categories } = await categoriesApi.getAll()

// Add new category
const newCategory = {
  name: 'Workshop',
  description: 'Educational workshops and training sessions',
  color: '#F59E0B',
  isActive: true
}

await categoriesApi.create(newCategory)

// Update category
await categoriesApi.update(categoryId, {
  name: 'Updated Workshop',
  description: 'Updated description',
  color: '#10B981',
  isActive: false
})
```

### 5. Workspace Gallery Management
```javascript
// Get all workspace images
const { data: images } = await workspaceApi.getAll()

// Add new workspace image
const imageData = {
  src: '/uploads/workspace/office-1.jpg',
  alt: 'Modern office space',
  type: 'office',
  width: 1200,
  height: 800
}

await workspaceApi.create(imageData)
```

## Important Notes

1. **Image URL Processing**: All image paths are automatically processed through `getImageUrl()` function to ensure proper URL formatting
2. **Defensive Programming**: All API functions include checks for different response structures
3. **Type Safety**: Functions validate required parameters and throw descriptive errors
4. **Consistent Returns**: All functions return data in consistent format `{ data: [...] }`
5. **Authentication**: All API calls automatically include authentication headers when available

## Integration with Components

### DataTable Integration
```javascript
// Events page
const { data: events } = await eventsApi.getAll()
// Pass to DataTable component with proper columns configuration
```

### Form Integration
```javascript
// Event form submission
const handleSubmit = async (formData) => {
  try {
    await eventsApi.create(formData)
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

### Modal Integration
```javascript
// Edit modal
const handleEdit = async (id) => {
  const { data: event } = await eventsApi.getById(id)
  // Populate form with event data
}
```

This documentation should help frontend developers easily integrate with all available API endpoints in the Events Management System. 