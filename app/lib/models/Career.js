import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  name: { type: String },
  mobile: { type: String, required: true },
  designetion: { type: String },
  message: { type: String },
  resume: { type: String },
  Date: { type: String },
});

const Career = mongoose.models.career || mongoose.model('career', careerSchema);
export default Career;

