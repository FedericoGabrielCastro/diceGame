import { Player } from "../models/Player"
import { sign } from "jsonwebtoken"
import config from "../config"

/**
 * Auth.
 * 
 * Purpose:
 * - Create player settings.
 */
class Auth {

    /**
     * Private.
     * 
     * Purpose:
     * - Set private var.
     */
    private firstName: string | undefined
    private lastName: string | undefined
    private email: string
    private date: Date | undefined
    private password: string 

    /**
     * Constructor.
     * 
     * Purpose:
     * - Defined props.
     */
    constructor(email:string, password: string, firstName?: string, lastName?: string, date?: Date) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.date = date
    }

    /**
     * Register.
     * 
     * Purpose:
     * - Register user and save it into database. 
     */
    async register() {
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: this.date,
            password: await Player.encryptPassword(this.password), 
        })
 
        /** 
         * Save player.
         * 
         * Purpose:
         * - Save new player into database.
        */
        const savePlayer = await player.save()
        
        /** 
         * Json web Token.
         * 
         * Purpose:
         * - Encrypt an id.
         * 
         * References:
         * - https://www.npmjs.com/package/jsonwebtoken
         * - 
        */
        const jwt = sign({id: player.id}, config.jwtSecret as string,{
            expiresIn: "4h"
        })

        return jwt
    }

    /**
     * Login.
     * 
     * Purpose:
     * - Login user. 
     */
    async login() {

        /**
         * PlayerDB.
         * 
         * Purpose:
         * - Check if the email recived exist in database. 
        */
        const playerDB = await Player.findOne({email: this.email})

        if(!playerDB) {
            return "Wrong email!"
        }
        
        /**
         * Validate password.
         * 
         * Purpose:
         * - compare encrypted password with the password provider by the user. 
        */
        const validatePassword = await Player.comparePassword(this.password, playerDB.password)

        if(!validatePassword) {
            return "Wrong password!"
        }

        /** 
         * Json web Token.
         * 
         * Purpose:
         * - If playerDB and validatePassword ir correct, returns a jwt.
         * 
         * References:
         * - https://www.npmjs.com/package/jsonwebtoken
         * - 
        */
        const jwt = sign({id: playerDB.id}, config.jwtSecret as string, {
            expiresIn: "4h"
        })

        return jwt
    }
}

export default Auth