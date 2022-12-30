import { motion } from "framer-motion"

/** 
 * LoginView.
 * 
 * Purpose:
 * - Form to login an user.
 * 
 * References:
 * - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/}
 * - https://codesandbox.io/s/framer-motion-animatepresence-wait-mode-t0mnhu?from-embed
 * 
 * @returns Login view.
*/
const LoginView = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 1}}>
            login 
        </motion.div>
    )
}

export default LoginView
