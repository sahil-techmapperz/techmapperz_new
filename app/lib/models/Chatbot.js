import mongoose from 'mongoose';

const datasetSchema = new mongoose.Schema({
  questions: [String],
  keywords: [String],
  answers: [String],
  similarityThreshold: Number,
});

const Chatbot = mongoose.models.chatbot || mongoose.model('chatbot', datasetSchema);
export default Chatbot;

