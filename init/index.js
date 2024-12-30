require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const localMongoUrl = "mongodb://127.0.0.1:27017/wanderlust";
const atlasMongoUrl = process.env.ATLASDB_URL;

async function transferData() {
  try {
    // Connect to local database
    await mongoose.connect(localMongoUrl);
    console.log("Connected to local database");

    // Fetch data from local database
    const listings = await Listing.find({});
    console.log(`Fetched ${listings.length} listings from local database`);

    // Disconnect from local database
    await mongoose.disconnect();

    // Connect to MongoDB Atlas
    await mongoose.connect(atlasMongoUrl);
    console.log("Connected to MongoDB Atlas");

    // Clear and insert data into Atlas
    await Listing.deleteMany({});
    await Listing.insertMany(listings);
    console.log("Data successfully transferred to MongoDB Atlas");

    // Disconnect from MongoDB Atlas
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error during data transfer:", err);
  }
}

transferData();
