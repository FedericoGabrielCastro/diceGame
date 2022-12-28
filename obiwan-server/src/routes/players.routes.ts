import { Router } from "express";
import { getAllPlayers, getOnePlayer } from "../controllers/players.controller";

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
 * GetAllPlayers.
 * 
 * Purpose:
 * - *GET => Get all players.
 */
router.get("/get-all-players", getAllPlayers)

/** 
 * getOnePlayer .
 * 
 * Purpose:
 * - *GET => Get one players.
 */
router.get("/get-player/:id", getOnePlayer)

export default router