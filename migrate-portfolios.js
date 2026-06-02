require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

// Temporary script to migrate data
async function migrateData() {
  if (!process.env.MONGO_URL) {
    console.error('MONGO_URL missing in .env.local');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, { bufferCommands: false });
    console.log('Connected to MongoDB');

    // Due to Next.js alias imports like @/app, this script will use dynamic import 
    // to bypass the alias issue in a raw node script. Wait, since it's hard to import 
    // next.js files in a raw node script, we'll just ask the user to use an API route 
    // or we'll fetch from the local API route.
    console.log('\nTo migrate your data effortlessly, please visit:');
    console.log('http://localhost:3000/api/admin/portfolio/migrate');
    console.log('\nWe created an API route to handle this securely!');
    
    process.exit(0);
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  }
}

migrateData();
