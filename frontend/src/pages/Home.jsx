import React from 'react'
import Hero from './sections/Hero'
import Header from '../components/Header'
import Sponsors from './sections/Sponsors'
import Cards from './sections/Cards'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Sponsors/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home