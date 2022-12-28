import express, { Application } from "express";
import config  from "../config";
import cors from "cors"

import { connectDB } from "../db/config";

import routerGames from "../routes/diceGame.routes";
import routerError404 from "../routes/error404.routes"

/**
 * Server.
 * 
 * Purpose:
 * - Create server and set settings.
 * 
 * References:
 * - https://expressjs.com/es/guide/using-middleware.html
 * - https://expressjs.com/en/starter/hello-world.html
 * - https://www.geeksforgeeks.org/express-js-express-router-function/
 */
class Server {

    /**
     * Private.
     * 
     * Purpose:
     * - Set private var.
     */
    private app: Application
    private port: string
    private path = {
        error404: "*",
        games: '/games'
    }

    /**
     * Constructor.
     * 
     * Purpose:
     * - Import express.
     * - Set port url.
     * - Enabled routes.
     * - Connect with mongodb
     */
    constructor() {
        this.app = express()
        this.port = config.port as string
        this.dbConnect()
        this.routes()
        this.middlewares()
    }

    /**
     * dbConnect.
     * 
     * Purpose:
     * - Connect mongodb. 
     */
    async dbConnect() {
        await connectDB()
    }

    /**
     * Middlewares.
     * 
     * Purpose:
     * - Use middlwares in node.
     * - Express.json => returns a json in web view.
     * - cors => Allow permission
     * 
     * References:
     * - https://www.geeksforgeeks.org/express-js-express-json-function/
     * - https://expressjs.com/en/resources/middleware/cors.html
     */
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    /**
     * Routes.
     * 
     * Purpose:
     * - Enamble app to use the routes declarates.
     */
    routes() {
        this.app.use(this.path.games, routerGames),
        this.app.use(this.path.error404, routerError404)
    }
    
    /**
     * Listen.
     * 
     * Purpose:
     * - Initialize server.
     */
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listenner on port: ${this.port}`)
        })
    }
}

export default Server