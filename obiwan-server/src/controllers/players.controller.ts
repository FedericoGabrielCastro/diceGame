import { Request, Response } from "express"
import GetPlayer from "../helpers/getPlayers"
import UpdatePlayerName from "../helpers/updatePlayerName"

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
export const updateName = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { firstName, lastName } = req.body
        
        const updatePlayerName = await new UpdatePlayerName(id, firstName, lastName)

        res.status(201).json({
            msg: "Player updated",
            updatePlayerName
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: "Player does't exist"
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
export const deletePlayer = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const player = await new GetPlayer(id)
        
        player.getAndDelete()

        res.status(201).json({
            msg: "Player deleted",
            player
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: "Player does't exist"
        })
    }
}