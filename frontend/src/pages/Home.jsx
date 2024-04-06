import React from 'react'
import Hero from './sections/Hero'
import Header from '../components/Header'
import Sponsors from './sections/Sponsors'
import Cards from './sections/Cards'
import Footer from '../components/Footer'
import '../Css/Home.css'
import FAQ from './sections/FAQ'
function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Sponsors/>
            <div className='events-section'>
                <h2>OUR EVENTS</h2> 
                <Cards/>
            </div>
            <FAQ />
            <Footer/>
        </div>
    )
}

export default Home