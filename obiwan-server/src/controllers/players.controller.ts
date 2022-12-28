import { Request, Response } from "express"
import GetPlayer from "../helpers/getPlayers"

/** 
 * getAllPlayer.
 * 
 * Purpose:
 * - Get all players.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const getAllPlayer = await GetPlayer.getAllPlayers()

        res.status(201).json({
            getAllPlayer
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * getOnePlayer.
 * 
 * Purpose:
 * - Get a player.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const getOnePlayer = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const player = await new GetPlayer(id)
        const getPlayer = await player.getOnePLayer()

        res.status(201).json({
            getPlayer
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * updateName.
 * 
 * Purpose:
 * - Update name player.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const updateName = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * deletePlayer.
 * 
 * Purpose:
 * - Delete player.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const deletePlayer = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}