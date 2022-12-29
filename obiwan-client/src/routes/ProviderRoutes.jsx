import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"
import GamePage from "../pages/gamePage/GamePage"
import AuthPage from "../pages/authPage/AuthPage"

/** 
 * ProviderRoutes.
 * 
 * Purpose:
 * - Provider all routes.
 * 
 * References:
 * - https://jasonwatmore.com/post/2022/06/24/react-router-6-private-route-component-to-restrict-access-to-protected-pages
 * - https://www.escuelafrontend.com/react-router-6
 * 
 * @returns browserRouter with all pages.
*/
const ProviderRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <GamePage />
                    </PrivateRoute>
                } />
                <Route path="/login" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ProviderRoutes
