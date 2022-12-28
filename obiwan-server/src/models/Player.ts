import { model, Schema } from "mongoose";
import { IPlayer } from "../interfaces/Iplayer";

/** 
 * Player schema.
 * 
 * Purpose:
 * - Create a player model schema to put in db mongoose.
 * 
 * References:
 * - https://mongoosejs.com/docs/guide.html
 * - https://mongoosejs.com/docs/models.html
 * - https://medium.com/@jgratereaux/validar-correos-electr%C3%B3nicos-con-expresiones-regulares-7914751b6018
 */
const PLayerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "The email already exists"],
        match: [/\S+@\S+\.\S+/, "** Email is invalid **"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
},
    {
        versionKey: false
    }
)

export const Player = model<IPlayer>("Player", PLayerSchema)