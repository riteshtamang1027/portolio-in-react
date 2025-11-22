import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URL
    );

    console.log("MongoDB connected successfully.", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Connected failed.", error);
  }
};

export default connectDB;
