import express, { Application } from "express";
import config  from "../config";

/** 
 * App.
 * 
 * Purpose:
 * - Express is essentially a series of middleware function calls.
 * 
 * References:
 * - https://expressjs.com/es/guide/using-middleware.html
 */
export const app: Application = express()

/** 
 * Port.
 * 
 * Purpose:
 * - Provide a path to run the server.
 * 
 * References:
 * - https://expressjs.com/en/starter/hello-world.html
 */
export const port: string = config.port as string