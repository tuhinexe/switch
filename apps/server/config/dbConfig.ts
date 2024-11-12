import mongoose from "mongoose";
import { Logger } from "../middlewares/logger";

const logger = new Logger();

const connectDB = async () => {
  try {
    // @ts-ignore
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.success(`MongoDB Connected..!`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
