import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  category: {
    type: String,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ['events', 'culture', 'workspace'],
    required: true,
    default: 'events',
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed', 'all'],
    default: 'all',
  },
  // For culture highlights
  icon: {
    type: String,
  },
  // For workspace images
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  // Grid layout type for workspace images
  gridType: {
    type: String,
    enum: ['featured', 'tall', 'wide', 'wide2', 'square'],
    default: 'square',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export default Event;

