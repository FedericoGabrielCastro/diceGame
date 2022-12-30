import { motion } from "framer-motion"

/** 
 * RegisterView.
 * 
 * Purpose:
 * - Form to register an user.
 * 
 * References:
 * - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/}
 * - https://codesandbox.io/s/framer-motion-animatepresence-wait-mode-t0mnhu?from-embed
 * 
 * @returns Register view.
*/
const RegisterView = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 1}}>
            Register
        </motion.div>
    )
}

export default RegisterView
