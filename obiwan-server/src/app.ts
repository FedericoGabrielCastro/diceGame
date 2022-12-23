import {port, app} from "./models/Server";

/** 
 * Server.
 * 
 * Purpose:
 * - Initialize server.
 * 
 * References:
 * - https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
 */
app.listen(port, () => {
    console.log(`Listenner on port: ${port}`)
})

