import React from 'react'
import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs';
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactUs" element={<ContactUs/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes