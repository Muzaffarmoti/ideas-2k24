import React from 'react'
import Hero from './sections/Hero'
import Header from '../components/Header'
import Sponsors from './sections/Sponsors'
import Cards from './sections/Cards'
import Footer from '../components/Footer'
import '../Css/Home.css'
function Home() {
    return (
        <div className='home-main'>
            <Header />
            <Hero />
            <Sponsors />
            <div className='events-section'>
                <div className="events-heading-wrapper">
                    <h2 className='events-heading'>OUR EVENTS</h2>
                </div>                
                <Cards />
            </div>
            <Footer />
        </div>
    )
}

export default Home