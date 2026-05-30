import mongoose from 'mongoose';

const AwardSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    Date: { type: String },
});

const Award = mongoose.models.Award || mongoose.model('Award', AwardSchema);
export default Award;
