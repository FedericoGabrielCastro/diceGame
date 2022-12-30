import dices from "../../assets/dices.jpg"
import { motion } from "framer-motion"
import { Link, Outlet, useLocation } from "react-router-dom"

/** 
 * AuthPage.
 * 
 * Purpose:
 * - Provider a page to manage the user login and register view.
 * 
 * References:
 * - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/}
 * - https://codesandbox.io/s/framer-motion-animatepresence-wait-mode-t0mnhu?from-embed
 * - https://www.freecodecamp.org/espanol/news/la-hoja-de-trucos-de-react-router-todo-lo-que-necesitas-saber/
 * - https://www.solucionex.com/blog/utilizar-lazy-loading-de-manera-estandar
 * 
 * @returns Authentication page with login and register view in output.
*/
const AuthPage = () => {

    const location = useLocation()

    const checkUrl = location.pathname === "/auth/register" 


    return (
        <section className="items-center justify-center flex bg-neutral-800 w-screen h-screen">
            <div className={`flex ${checkUrl ? "flex-row-reverse" : null} bg-neutral-900 border-4 border-double h-3/4 w-3/4 rounded-xl`}>
                <motion.div layout transition={{ layout: { duration: 1 }}} className="w-2/3 text-white flex flex-col items-center justify-center">               
                    <Outlet />
                </motion.div>
                <motion.div layout transition={{ layout: { duration: 1 }}} className="w-1/3 relative flex justify-center">
                    <div className="absolute z-10">
                        <Link to={`${checkUrl ? "login" : "register"}`}> asdadsadasdsd </Link>
                    </div>
                    <img loading="lazy" src={dices} alt="img" className={`${checkUrl ? "rounded-l-xl" : "rounded-r-xl"} h-full object-cover`}/>
                </motion.div>
            </div>
        </section>
    )
}


export default AuthPage
