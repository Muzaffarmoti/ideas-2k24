import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from "react-router-dom";
import CardDetails from '../pages/CardDetails';

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:eventnum" element={<CardDetails />} />
            </Routes>
        </div>
    )
}

export default AppRoutes