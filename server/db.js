const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URI, (err) => {
    !err ? console.error("Server connection established") : console.error(err);
  });
};

module.exports = connectToDatabase;
