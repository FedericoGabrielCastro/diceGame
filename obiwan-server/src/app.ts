import Server from "./models/Server"
/** 
 * Server listen.
 * 
 * Purpose:
 * - Initialize server.
 * 
 * References:
 * - https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
 */
const server = new Server()

server.listen()

