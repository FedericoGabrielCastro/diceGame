import { Request, Response } from "express"

/** 
 * Error 404.
 * 
 * Purpose:
 * - Provider an status 404 when the page not found or 500 when the server is not working.
 * 
 * References:
 * - https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3
 * - https://developer.mozilla.org/es/docs/Web/HTTP/Status/404
 * - https://developer.mozilla.org/es/docs/Web/HTTP/Status/500
 */
export const error404 = (req: Request, res: Response) => {
    try {
        res.status(404).json({
            msg: "Error 404 - Page not found"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        })
    }
}