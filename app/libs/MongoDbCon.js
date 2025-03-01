import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
const dbCon = async () => {
      try {
    await mongoose.connect(`${process.env.DBURL}`, {
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

export default dbCon;