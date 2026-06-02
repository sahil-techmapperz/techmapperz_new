import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  fileId: { type: String },
  fileName: { type: String },
  uploadedAt: { type: Date, default: Date.now },
});

const Media = mongoose.models.media || mongoose.model('media', MediaSchema);
export default Media;
