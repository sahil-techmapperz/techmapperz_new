# Backend Category Model Setup Guide

This guide explains how to set up the proper Category model and routes in your backend to work with the frontend category management system.

## 1. Create Category Model

First, create a Category model file (e.g., `models/Category.js`):

```javascript
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  },
  description: {
    type: String,
    default: '',
    maxlength: 500
  },
  color: {
    type: String,
    default: '#3B82F6',
    validate: {
      validator: function(v) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
      },
      message: 'Color must be a valid hex color'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create index for better performance
categorySchema.index({ name: 1 });
categorySchema.index({ isActive: 1 });

// Pre-save middleware to update timestamp
categorySchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
```

## 2. Update Your Routes File

Make sure your routes file imports the models correctly:

```javascript
const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Adjust path as needed
const Event = require('../models/Event'); // Adjust path as needed

// ... paste the category routes you provided here
```

## 3. Mount the Routes

In your main server file (e.g., `server.js` or `app.js`), make sure the routes are mounted:

```javascript
const categoryRoutes = require('./routes/categories'); // Adjust path as needed

// Mount routes
app.use('/api/events/categories', categoryRoutes); // This matches frontend expectations
```

## 4. Initialize Default Categories

Create a script to initialize default categories in your database:

```javascript
// scripts/initCategories.js
const mongoose = require('mongoose');
const Category = require('../models/Category');

const defaultCategories = [
  {
    name: 'Conference',
    description: 'Professional conferences and seminars',
    color: '#3B82F6',
    isActive: true,
    order: 1
  },
  {
    name: 'Team Building',
    description: 'Team building activities and events',
    color: '#10B981',
    isActive: true,
    order: 2
  },
  {
    name: 'Hackathon',
    description: 'Coding competitions and hackathons',
    color: '#8B5CF6',
    isActive: true,
    order: 3
  },
  {
    name: 'Meeting',
    description: 'Company meetings and presentations',
    color: '#F59E0B',
    isActive: true,
    order: 4
  },
  {
    name: 'Celebration',
    description: 'Company celebrations and parties',
    color: '#EF4444',
    isActive: true,
    order: 5
  },
  {
    name: 'Training',
    description: 'Training sessions and workshops',
    color: '#06B6D4',
    isActive: true,
    order: 6
  }
];

async function initCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdb');
    
    for (const categoryData of defaultCategories) {
      const existingCategory = await Category.findOne({ name: categoryData.name });
      if (!existingCategory) {
        await Category.create(categoryData);
        console.log(`Created category: ${categoryData.name}`);
      } else {
        console.log(`Category already exists: ${categoryData.name}`);
      }
    }
    
    console.log('Category initialization complete');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing categories:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  initCategories();
}

module.exports = initCategories;
```

Run this script: `node scripts/initCategories.js`

## 5. Current Frontend Configuration

The frontend is currently configured to call these endpoints:
- GET `/api/events/categories?type=all` - Get all categories
- GET `/api/events/categories/:id` - Get category by ID
- POST `/api/events/categories` - Create category
- PUT `/api/events/categories/:id` - Update category
- DELETE `/api/events/categories/:id?action=force` - Delete category

Make sure your backend routes are mounted to match these paths.

## 6. Testing the Setup

Once everything is set up, test the endpoints:

```bash
# Get all categories
curl -X GET http://localhost:8000/api/events/categories?type=all

# Create a new category
curl -X POST http://localhost:8000/api/events/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Workshop","description":"Educational workshops","color":"#F59E0B","isActive":true}'

# Update a category
curl -X PUT http://localhost:8000/api/events/categories/CATEGORY_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Workshop","description":"Updated description"}'

# Delete a category
curl -X DELETE http://localhost:8000/api/events/categories/CATEGORY_ID?action=force
```

## 7. Troubleshooting

### Issue: 404 errors
- Verify routes are mounted correctly in your main server file
- Check that the URL path matches: `/api/events/categories`
- Ensure the Category model is imported correctly

### Issue: Database connection errors
- Verify MongoDB is running
- Check connection string in environment variables
- Ensure Category model is properly registered with Mongoose

### Issue: Validation errors
- Check that required fields (name) are provided
- Verify color format is valid hex color
- Ensure unique constraints are not violated

## 8. Database Migration (if needed)

If you already have events with categories stored as strings, you might want to migrate them:

```javascript
// scripts/migrateCategories.js
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Event = require('../models/Event');

async function migrateCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Get all unique category names from events
    const uniqueCategories = await Event.distinct('category');
    
    // Create Category documents for each unique category
    for (const categoryName of uniqueCategories) {
      if (categoryName) {
        const existingCategory = await Category.findOne({ name: categoryName });
        if (!existingCategory) {
          await Category.create({
            name: categoryName,
            description: `Category for ${categoryName} events`,
            color: '#3B82F6',
            isActive: true
          });
          console.log(`Migrated category: ${categoryName}`);
        }
      }
    }
    
    console.log('Category migration complete');
    process.exit(0);
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  migrateCategories();
}
```

This guide should help you set up the backend properly to work with the frontend category management system. 