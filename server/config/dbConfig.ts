import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // @ts-ignore
        const conn = await mongoose.connect(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    }

export default connectDB;