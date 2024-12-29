const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";
//const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
};

initDb();
