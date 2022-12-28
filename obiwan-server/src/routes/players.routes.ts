import { Router } from "express";
import { getAllPlayers, getOnePlayer, updateName, deletePlayer } from "../controllers/players.controller";

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
 * getOnePlayer.
 * 
 * Purpose:
 * - *GET => Get one players.
 */
router.get("/get-player/:id", getOnePlayer)

/** 
 * updateName.
 * 
 * Purpose:
 * - *PUT => Update player firstName and lastName.
 */
router.put("/update-player/:id", updateName)

/** 
 * deletePlayer.
 * 
 * Purpose:
 * - *DELETE => Delete player.
 */
router.delete("/delete-player/:id", deletePlayer)

export default router