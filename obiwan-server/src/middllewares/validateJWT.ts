import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

/** 
 * Validate token .
 * 
 * Purpose:
 * - Validate Json web token.
 * 
 * References:
 * - https://stackoverflow.com/questions/13133071/express-next-function-what-is-it-really-for
 * - https://www.npmjs.com/package//jsonwebtoken
*/
export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken: any = req.header('authorization') || req.query.accessToken
        
        if (!accessToken) {
            res.status(400).json({
                msg: "Access denied, you need a token to access to this route"
            })

        jwt.verify(accessToken, config.jwtSecret as string)
        }
    } catch (error) {
        res.status(400).json({
            msg: "Access denied - token expire or incorrect"
        })
    }

    next()
}