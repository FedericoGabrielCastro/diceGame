import { Request, Response } from "express"
import Auth from "../helpers/auth"

/** 
 * Register.
 * 
 * Purpose:
 * - Register an user.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const register = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password} = req.body
        const date = new Date
        const player = new Auth(email, password, firstName, lastName, date)
        const register = await player.register()

        res.status(201).json({
            firstName,
            lastName,
            email,
            date,
            jwt: register
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}

/** 
 * Login.
 * 
 * Purpose:
 * - Login an user.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 */
export const login = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}