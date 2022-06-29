const mongoose = require("mongoose");

//mogoDb Connection
const connectDB = async () => {
  try {
    //connecting mogoDb URL.
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // cyan.underline coming from colors package
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
