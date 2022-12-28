import { Player } from "../models/Player";
import { IPlayer } from "../interfaces/IPlayer";

/**
 * UpdatePlayerName.
 * 
 * Purpose:
 * - Update player fisrstName|lastName from database.
 */
class UpdatePlayerName {
    
    /**
     * Private.
     * 
     * Purpose:
     * - Set private var.
     */
    private id: string
    private firstName: string | undefined
    private lastName: string | undefined

    /**
     * Constructor.
     * 
     * Purpose:
     * - Defined props.
     */
    constructor(id: string, firstName: string, lastName: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }

    /**
     * UpdateName.
     * 
     * Purpose:
     * - Update name player into database. 
     */
    async updateName() {
        const update = {
            fistName: this.firstName,
            lastName: this.lastName
        }

        const player: IPlayer = await Player.findOneAndUpdate({_id: this.id}, update) as IPlayer

        return player 
    }
}

export default UpdatePlayerName