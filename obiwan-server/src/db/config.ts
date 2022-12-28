import { connect } from "mongoose";
import config from "../config";

/** 
 * ConnectDB.
 * 
 * Purpose:
 * - Connect mongodb or return an error to connect with mongoDB
 * 
 * References:
 * - https://mongoosejs.com/
 */
export const connectDB = async () => {
    try {
        await connect(config.mongoDB as string)
        console.log("MONGODB database connected successfully!!")
    } catch (error) {
        console.log("Failed to connect database ")
    }
}
