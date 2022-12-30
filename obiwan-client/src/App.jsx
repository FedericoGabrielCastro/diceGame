import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ProviderRoutes from './routes/ProviderRoutes'

/** 
 * App.
 * 
 * Purpose:
 * - Render the app with Providers.
 * - React-router-dom Provider.
 * - Framer-motion Provider
 * 
 * References: 
 * - https://www.framer.com/docs/animate-presence/
 * 
 * @returns app rendering with providers.
*/
const App = () => {
    return (
        <AnimatePresence>
            <ProviderRoutes />
        </AnimatePresence>
    )
}

export default App
