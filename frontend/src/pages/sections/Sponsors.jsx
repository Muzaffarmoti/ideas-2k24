import React from 'react';
import './Sponsors.css';
import sponsor1 from '../../assets/images/sponsors/ComputerSociety.png';
import sponsor2 from '../../assets/images/sponsors/Kwikpic.jpg';
import sponsor3 from '../../assets/images/sponsors/SpaaX.png';

function Sponsors() {
    return (
        <div>
            <section id="sponsors" className="sponsors-section">
                <div className="row section-header has-bottom-sep">
                    <div className="col-full">
                        <h1 className="display-1 display-1--light sponsors-heading">Sponsors</h1>
                    </div>
                </div>
                <div className="row sponsor-list">
                    <div className="col-block sponsor-item">
                        <div className="sponsor-card">
                            <div className="sponsor-image">
                                <img alt="" src={sponsor1} />
                            </div>
                            <div className="sponsor-details" style={{ backgroundColor: 'rgb(83, 178, 255)' }}>
                                <h3 className="sponsor-name">Computer Society of India</h3>
                                <p className="sponsor-type">Ticketing Partner</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-block sponsor-item">
                        <div className="sponsor-card">
                            <div className="sponsor-image">
                                <img alt="" src={sponsor2} />
                            </div>
                            <div className="sponsor-details" style={{ backgroundColor: 'rgb(83, 178, 255)' }}>
                                <h3 className="sponsor-name">Kwikpic</h3>
                                <p className="sponsor-type">General Sponsor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-block sponsor-item">
                        <div className="sponsor-card">
                            <div className="sponsor-image">
                                <img alt="" src={sponsor3} />
                            </div>
                            <div className="sponsor-details" style={{ backgroundColor: 'rgb(83, 178, 255)' }}>
                                <h3 className="sponsor-name">SpaaX</h3>
                                <p className="sponsor-type">General Sponsor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sponsors;
