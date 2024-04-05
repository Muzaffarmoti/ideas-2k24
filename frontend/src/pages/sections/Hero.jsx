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
                        <span className="final-word glow">D</span>
                        <span>EEE</span>
                        <span className="final-word glow">AS  2K24</span>
                    </h1>
                </div>
                <div className='hero-bottom-text'>
                    <div className="hero-national">
                        <h2 className='glow hero-national-mian'>National Level <span className='ieeecolor'>Technical Symposium</span></h2>
                    </div>
                    <div className='hero-text-org'>
                            <h3>Organised by <span className='ieeecolor'>IEEE</span> SIT SB</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
