import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});

connectDB();

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB connected !! DB Host: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR:", error);
        process.exit(1)
    }
}

export default connectDB;