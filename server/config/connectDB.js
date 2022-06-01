const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection DB successeded");
  } catch (error) {
    console.error(`failed to reach DB => ${error}`);
  }
};

module.exports = connectDB;
