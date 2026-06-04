const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    console.error('Please define the MONGO_URL environment variable inside .env.local');
    process.exit(1);
}

const GalleryImageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    alt: { type: String }
});

const PortfolioSchema = new mongoose.Schema({
    slug: { type: String },
    name: { type: String },
    galleryImages: [GalleryImageSchema]
}, { strict: false });

const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', PortfolioSchema);

const defaultGallery = [
    { src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000", alt: "Project Overview" },
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", alt: "Technical Details" },
    { src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800", alt: "Topography" },
    { src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800", alt: "Execution" },
    { src: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800", alt: "Terrain Check" }
];

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        const portfolios = await Portfolio.find({});
        let updatedCount = 0;

        for (const portfolio of portfolios) {
            if (!portfolio.galleryImages || portfolio.galleryImages.length === 0) {
                portfolio.galleryImages = defaultGallery;
                await portfolio.save();
                console.log(`Updated portfolio: ${portfolio.name || portfolio.slug || portfolio._id}`);
                updatedCount++;
            }
        }

        console.log(`Successfully added default gallery images to ${updatedCount} portfolios.`);
        process.exit(0);
    } catch (error) {
        console.error('Error updating DB:', error);
        process.exit(1);
    }
}

updateDB();
