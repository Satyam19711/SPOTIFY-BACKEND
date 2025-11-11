const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`);
    console.log("MONGODB is connected successfully");
  } catch (error) {
    console.log("MONGODB is connection fail", error.message);
  }
};

module.exports = connectDB;
