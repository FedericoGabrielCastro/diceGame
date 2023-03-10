import { Router } from "express";
import { generalRanking, playerRollDice, getWorstPlayer, getBetterPlayer, deleteGames } from "../controllers/diceGame.controller"; 
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
 * PlayerRollDice.
 * 
 * Purpose:
 * - *POST => User roll dice.
 */
router.post("/player/:id", validateToken, playerRollDice)

/** 
 * generalRanking.
 * 
 * Purpose:
 * - *GET => Get ranking game.
 */
router.get("/ranking", validateToken, generalRanking)

/** 
 * getBetterPlayer.
 * 
 * Purpose:
 * - *GET => Get best player in game.
 */
router.get("/better-player", validateToken, getBetterPlayer)

/** 
 * getWorstPlayer
 * 
 * Purpose:
 * - *GET => Get worst player in game.
 */
router.get("/worst-player", validateToken, getWorstPlayer)


/** 
 * deleteGames.
 * 
 * Purpose:
 * - *DELETE => delete game id.
 */
router.delete("/delete/:id", validateToken, deleteGames)

export default router