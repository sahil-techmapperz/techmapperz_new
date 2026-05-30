import mongoose from 'mongoose';

const ExitIntentLeadSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    workEmail: { type: String },
    projectDescription: { type: String },
    Date: { type: String },
});

const ExitIntentLead = mongoose.models.ExitIntentLead || mongoose.model('ExitIntentLead', ExitIntentLeadSchema);
export default ExitIntentLead;
