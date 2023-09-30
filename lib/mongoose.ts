import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("MONGODB_URL is not defined");

  if (isConnected) {
    return console.log("Mongoose is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Stack-Overflow",
    });
    isConnected = true;
    console.log("Mongoose is connected");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};
