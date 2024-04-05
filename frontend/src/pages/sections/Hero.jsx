import React from 'react';
import hero_video from '../../assets/videos/heroVideo'; 
import '../../Css/Hero.css';

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
                        <span className="move-left" style={{ marginRight: '-70px' }}>I</span>
                        <span className="inserted-letter">D</span>
                        <span className='glow'>EEE</span>
                        <span className="final-word">AS  2K24</span>
                    </h1>
                </div>
                <div className='hero-text-org'>
                    <p>ORGANIZED BY    IEEE SIT SB</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
