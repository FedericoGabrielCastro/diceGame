import { Player } from "../models/Player";

/**
 * Get players.
 * 
 * Purpose:
 * - Get players/player.
 */
class GetPlayer {
    
    /**
     * Private.
     * 
     * Purpose:
     * - Set private var.
     */
    private id: string

    /**
     * Constructor.
     * 
     * Purpose:
     * - Defined props.
     */
    constructor(id: string) {
        this.id = id
    }

    /**
     * GetAllPlayers.
     * 
     * Purpose:
     * - Get all players from database. 
     */
    static async getAllPlayers() {
        const players = await Player.find({})

        /**
         * Response.
         * 
         * Purpose:
         * - Returns an object player for players in database. 
        */ 
        const response = players.map(player => {
            const obj = {
                id: player._id,
                firstname: player.firstName,
                lastName: player.lastName,
                wonRate: player.wonRate,
            }

            return obj
        })

        return response
    }

    /**
     * GetOnePlayers.
     * 
     * Purpose:
     * - Get one player from database (find by id). 
     */
    async getOnePLayer() {
        const player = await Player.findById({_id: this.id})

        if (!player?._id) return false
        
        return {
            firstName: player?.firstName,
            lastName: player?.lastName,
            playHistory: player?.playHistory
        }
    }

    /**
     * getAndDelete.
     * 
     * Purpose:
     * - Delete player from database (find by id). 
    */
    async getAndDelete() {
        const deletePLayer = await Player.findByIdAndDelete({ _id: this.id })

        return deletePLayer
    }    
}

export default GetPlayer