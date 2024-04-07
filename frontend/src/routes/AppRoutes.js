import React from 'react'
import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs';
import { Route, Routes } from "react-router-dom";
import CardDetails from '../pages/CardDetails';
import AboutUsComponent from '../pages/AboutUs';

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:eventnum" element={<CardDetails />} />
                <Route path="/contactUs" element={<ContactUs/>}/>
                <Route path="/aboutUs" element={<AboutUsComponent/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes