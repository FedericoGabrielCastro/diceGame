import { Request, Response } from "express"
import RollGame from "../helpers/diceGame"


/** 
 * playerRollDice.
 * 
 * Purpose:
 * - player roll dice.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const playerRollDice = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const game = await new RollGame(id)
        const playerRollDices = await game.playerRollDice

        res.status(201).json({
            playerRollDices
        })
    } catch (error) {
        res.status(400).json({
            msn: "The ID enteres isn't valid!"
        })
    }
}

/** 
 * generalRanking.
 * 
 * Purpose:
 * - Get general ranking.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const generalRanking = async (req: Request, res: Response) => {
    try {
        const ranking = await RollGame.generalRanking()

        res.status(201).json({
            ranking
        })
    } catch (error) {
        res.status(500).json({
            msn: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * getBetterPlayer.
 * 
 * Purpose:
 * - Get better player.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const getBetterPlayer = async (req: Request, res: Response) => {
    try {
        const betterPlayer = await RollGame.getBetterPlayer
        
        res.status(201).json({
            betterPlayer
        })
    } catch (error) {
        res.status(500).json({
            msn: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * getWorstPlayer.
 * 
 * Purpose:
 * - Get worst player.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const getWorstPlayer = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

/** 
 * deleteGames.
 * 
 * Purpose:
 * - Delete games.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const deleteGames = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}