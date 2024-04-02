import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                
            </Routes>
        </div>
    )
}

export default AppRoutes