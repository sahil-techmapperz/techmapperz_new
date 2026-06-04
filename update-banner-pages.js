const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });
const MONGO_URL = process.env.MONGO_URL;

const BannerSchema = new mongoose.Schema({
  heading: { type: String },
  banner_img_url: { type: String },
  userId: { type: String },
  subTitle: { type: String },
  pageName: { type: String },
});

const Banner = mongoose.models.banner || mongoose.model('banner', BannerSchema);

async function updatePageNames() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    // Update all banners with empty pageName
    const banners = await Banner.find();
    
    for (const banner of banners) {
      if (!banner.pageName) {
        if (banner.userId === "home-hero") {
          banner.pageName = "Home Hero";
        } else {
          // These are the old 5 banners
          banner.pageName = "Services Carousel";
        }
        await banner.save();
      }
    }

    console.log('Successfully updated banner page names.');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updatePageNames();
