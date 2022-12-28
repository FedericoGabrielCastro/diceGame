import { Router } from "express";
import { error404 } from "../controllers/error404.controller";

const router = Router()

/** 
 * Error 404.
 * 
 * Purpose:
 * - Provider a route when the user have 404 or 500 http.status.error.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
router.get("*", error404)
router.post("*", error404)
router.put("*", error404)
router.patch("*", error404)
router.delete("*", error404)

export default router