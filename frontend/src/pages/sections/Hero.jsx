import React from 'react';
import hero_video from '../../assets/videos/heroVideo'; 
import '../../Css/Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='background-video'>
                <video autoPlay loop muted>
                    <source src={hero_video} type='video/mp4'/>
                </video>
            </div>
            <div className='hero-text'>
            <div className='hero-text-ideeeas'>
                <h1>
                    <span className="initial-letter">I</span>
                    <span className="remaining-letter">D</span>
                    <span className="initial-letter">E</span>
                    <span className="initial-letter">E</span>
                    <span className="initial-letter">E</span>
                    <span className="remaining-letter">A</span>
                    <span className="remaining-letter">S</span>
                    <span className='remaining-letter'> 2k24</span>
                </h1>
            </div>
        <div>

                <div className='hero-text-org'>
                    <p>Organised by IEEE SIT SB</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;
