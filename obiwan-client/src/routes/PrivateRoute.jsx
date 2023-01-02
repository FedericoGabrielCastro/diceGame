import { useState } from "react"
import { Navigate } from "react-router-dom"

/** 
 * PrivateRoute.
 * 
 * Purpose:
 * - Chek if the user is login or not and redirect.
 * 
 * References:
 * - https://jasonwatmore.com/post/2022/06/24/react-router-6-private-route-component-to-restrict-access-to-protected-pages
 * 
 * @param children Render page. 
 * @returns if the user is login returns a "children prop" else redirect to "/login" route.
*/
const PrivateRoute = ({children}) => {

    // TODO: Implent jwt here.
    const [auth, setAuth] = useState(true)

    if(!auth) return <Navigate to="/auth" replace />

    return <> {children} </>
}

export default PrivateRoute