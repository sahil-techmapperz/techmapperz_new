import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  name: { type: String },
  Companyname: { type: String },
  message: { type: String },
  avater: { type: String },
  Date: { type: String },
});

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
export default Testimonial;

