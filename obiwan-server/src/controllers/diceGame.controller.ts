import { Request, Response } from "express"

/** 
 * DiceGame Controller.
 * 
 * Purpose:
 * - Send a messange to web.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const test = (req: Request, res: Response) => {
    res.status(200).json({
        msg: "esto funciona"
    })
}