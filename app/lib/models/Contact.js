import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  projectdetails: { type: String, required: true },
  projectType: { type: String },
  Date: { type: String, required: true },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;

