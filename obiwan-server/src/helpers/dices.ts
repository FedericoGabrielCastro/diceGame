/**
 * Roll Dice
 * 
 * Purpose:
 * - Generate two dice with 6 face from number 1 to 6.
 * - Generate a string "win" or "lose" when the sum of the dices is equal to 7.
 * - Provider the sum of dices. 
 * 
 * References: 
 * - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 * 
 * @returns diceOne, diceTwo, rollScore(diceOne + diceTwo), veredict
 */
export const rollDices = () => {
    // genera la 6 caras del dado sin que sean decimales
    const dice1 = Math.floor(6 * Math.random()) + 1 // returns numbers from 1 to 6.
    const dice2 = Math.floor(6 * Math.random()) + 1 // returns numbers from 1 to 6.
    const veredict = dice1 + dice2 === 7 ? "win" : "lose"

    return {
        dice1,
        dice2,
        rollScore: dice1 + dice2,
        veredict
    }
}