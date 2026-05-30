import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  JobID: String,
  Jobtype: String,
  location: String,
  experience: String,
  designetion: String,
  description: String,
  education: String,
  perksBenefits: String,
  candidateProfile: String,
  roleResponsibility: String,
  salary: String,
  Date: { type: String },
});

const Job = mongoose.models.jobs || mongoose.model('jobs', jobSchema);
export default Job;

