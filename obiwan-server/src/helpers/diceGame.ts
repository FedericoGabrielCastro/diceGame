import { rollDices } from "./dices";
import { Player } from "../models/Player";
import { IPlayer } from "../interfaces/IPlayer";

/**
 * Server.
 * 
 * Purpose:
 * - Create server and set settings.
 */ 
class RollGame {

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
     * PlayerRollDIce.
     * 
     * Purpose:
     * - Method player roll dice.
     */
    async playerRollDice() {
        const game = rollDices()

        const player = await Player.findById({_id: this.id}) as IPlayer
        player.totalGames++ // Increment total games 

        if (game.veredict === "win") {
            player.gamesWon++ // Increment players total wins
        }

        player.playHistory.push(game) // Add game into playHistory player model.

        player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2)) // set rate win player.

        await player.save()
    }
}

export default RollGame