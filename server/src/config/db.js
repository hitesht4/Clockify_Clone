const mongoose = require("mongoose");
const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log("connected to db successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
