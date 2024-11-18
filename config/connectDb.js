const mongoose = require('mongoose');

const connectDbs = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
};

module.exports = connectDbs;
