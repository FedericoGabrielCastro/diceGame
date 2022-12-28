import express, { Application } from "express";
import config  from "../config";

import { connectDB } from "../db/config";

import routerGames from "../routes/diceGame.routes";

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
     * Routes.
     * 
     * Purpose:
     * - Enamble app to use the routes declarates.
     */
    routes() {
        this.app.use(this.path.games, routerGames)
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