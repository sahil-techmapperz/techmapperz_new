const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.local' });

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    console.error('Please define the MONGO_URL environment variable inside .env');
    process.exit(1);
}

const Portfolio = require('./app/lib/models/Portfolio.js').default;

async function updateDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        const updateResult = await Portfolio.findOneAndUpdate(
            { slug: 'white-spread-foods' },
            { 
                $set: { 
                    'projectDetails.projectType': 'B2B E-commerce Platform + Sales Dashboard',
                    'projectDetails.industry': 'Dairy / FMCG / Distribution',
                    'projectDetails.coreFunctionality': 'Hierarchy-Based Order Approval + ERP-Connected Sales Flow',
                    'projectDetails.businessGoal': 'Improve order control, sales visibility, and operational integration'
                }
            },
            { new: true }
        );

        console.log('Successfully updated portfolio: white-spread-foods', updateResult.projectDetails);
        process.exit(0);
    } catch (error) {
        console.error('Error updating DB:', error);
        process.exit(1);
    }
}

updateDB();
