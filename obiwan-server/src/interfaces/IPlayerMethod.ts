import { Model } from "mongoose";
import { IPlayer } from "./IPlayer";

/** 
 * IPlayerModel
 * 
 * Purpose:
 * - Player password encrypted interface.
 * 
 * References:
 * - https://stackoverflow.com/questions/67111617/typescript-how-to-extends-model-with-typescript-interface
 */
export interface IPlayerModel extends Model<IPlayer> {
    encryptPassword(password: string): string
    comparePassword(password: string, receivedPassword: string): string
}