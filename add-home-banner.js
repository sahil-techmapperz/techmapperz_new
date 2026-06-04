const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './.env.local' });

const MONGO_URL = process.env.MONGO_URL;

const BannerSchema = new mongoose.Schema({
  heading: { type: String },
  banner_img_url: { type: String },
  userId: { type: String },
  subTitle: { type: String },
});

const Banner = mongoose.models.banner || mongoose.model('banner', BannerSchema);

async function addHomeBanner() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    const newBanner = new Banner({
      heading: "Driving Growth Through \n Smart IT ,GIS & \n Drone Solutions",
      subTitle: "Responsive, SEO-Optimized IT, GIS & Drone Solutions Built With Modern Technologies",
      banner_img_url: "/background_image/home_hero_v3.png",
      userId: "home-hero"
    });

    await newBanner.save();
    console.log('Successfully added the default Home Hero banner to the database.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addHomeBanner();
