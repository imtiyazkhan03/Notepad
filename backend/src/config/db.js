import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khanimtiyaz7863662:zstCFhoPndg61uPv@cluster0.xcocrsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to MONGODB",error)
  }
};
