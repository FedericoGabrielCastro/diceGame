import { Router } from "express";
import { getAllPlayers, getOnePlayer, updateName, deletePlayer } from "../controllers/players.controller";
import { validateToken } from "../middllewares/validateJWT";

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
router.get("/get-all-players", validateToken, getAllPlayers)

/** 
 * getOnePlayer.
 * 
 * Purpose:
 * - *GET => Get one players.
 */
router.get("/get-player/:id", validateToken, getOnePlayer)

/** 
 * updateName.
 * 
 * Purpose:
 * - *PUT => Update player firstName and lastName.
 */
router.put("/update-player/:id", validateToken, updateName)

/** 
 * deletePlayer.
 * 
 * Purpose:
 * - *DELETE => Delete player.
 */
router.delete("/delete-player/:id", validateToken, deletePlayer)

export default router