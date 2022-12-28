/** 
 * IPlayer
 * 
 * Purpose:
 * - Player schema/model interface.
 * 
 * References:
 * - https://www.typescriptlang.org/docs/handbook/interfaces.html
 */
export interface IPlayer {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    date: string,
    totalGames: number,
    gamesWon: number,
    wonRate: number,
    playHistory: object[]
}