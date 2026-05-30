import mongoose from 'mongoose';

const BrandSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    Date: { type: String },
});

const Brand = mongoose.models.Brand || mongoose.model('Brand', BrandSchema);
export default Brand;
