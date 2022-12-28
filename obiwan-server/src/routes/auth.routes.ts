import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

/** 
 * router
 * 
 * Purpose:
 * - Import Router from express to enabled GET - PUT - DELETE - POST
 * 
 * References:
 * - https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
 */
const router = Router()

/** 
 * Register.
 * 
 * Purpose:
 * - *POST => Register user into database.
 */
router.post("/register", register)

/** 
 * Login.
 * 
 * Purpose:
 * - *POST => Login user into database.
 */
router.post("/login", login)

export default router