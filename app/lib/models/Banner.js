import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
  heading: { type: String },
  banner_img_url: { type: String },
  userId: { type: String },
  subTitle: { type: String },
  pageName: { type: String },
});

const Banner = mongoose.models.banner || mongoose.model('banner', BannerSchema);
export default Banner;

