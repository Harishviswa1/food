import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://harishviswanathk2022it:harish@cluster0.abe6amd.mongodb.net/food');
      console.log("DB Connected");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  };