import doteenv from "dotenv"

/** 
 * Config doteenv.
 * 
 * Purpose:
 * - Provides an instance for setting environment variables
 * 
 * References:
 * - https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/
 * - https://yarnpkg.com/package/@types/dotenv
 */
const envFound = doteenv.config()

/** 
 * Error conditional.
 * 
 * Purpose:
 * - If it doesn't find the requested environment variable, it sends an error message.
 */
if(envFound.error) {
    throw new Error("Couldn't find .env file")
}

/** 
 * Export env.
 * 
 * Purpose:
 * - Export enviroment variable.
 */
export default {
    port: process.env.PORT,
    mongoDB: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET
}