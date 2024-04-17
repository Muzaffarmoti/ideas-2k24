import React from 'react';
import './Sponsors.css';
// import sponsor1 from '../../assets/images/sponsors/ComputerSociety.png';
// import sponsor2 from '../../assets/images/sponsors/Kwikpic.jpg';
// import sponsor3 from '../../assets/images/sponsors/SpaaX.png';

import sponsor1 from '../../assets/images/sponsors/ComputerSociety.png';
import sponsor2 from '../../assets/images/sponsors/Kwikpic.jpg';
import sponsor3 from '../../assets/images/sponsors/SpaaX.png';
import sponsor4 from '../../assets/images/sponsors/SpaaX.png';

function Sponsors() {
    const sponsorsList = [
        {
            title:"Computer Society of India",
            image:sponsor1
        },
        {
            title:"Kwikpic",
            image:sponsor2
        },{
            title:"SpaaX",
            image:sponsor3
        },{
            title:"hello",
            image:sponsor4
        }
    ]
    return (
        <section id="sponsors" className="sponsors-section">
            <div className="col-full">
                <h2 className="sponsors-heading">SPONSORED BY</h2>
            </div>

            <div className="sponsor-list">
                {sponsorsList.map((sponsor,index) => {
                    {console.log(sponsor.title)}
                    {console.log(sponsor.image)}
                    <div className="sponsor-item" key={index}>
                        <div className="sponsor-card">
                            <div className='slide slide1'>
                                <div className='sponsor_sub'>
                                    <div className='icon'>
                                        <img alt='' src={sponsor.image} />
                                        {/* <h1>{sponsor.title}</h1> */}
                                    </div>
                                </div>
                            </div>
                            <div className='slide slide2' style={{ backgroundColor: '#333' }}>
                                <div className='content'>
                                    <h3>{sponsor.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                {/* <div className="sponsor-item">
                    <div className="sponsor-card">
                        <div className='slide slide1'>
                            <div className='sponsor_sub'>
                                <div className='icon'>
                                    <img alt='' src={sponsor2} />
                                </div>
                            </div>
                        </div>
                        <div className='slide slide2' style={{ backgroundColor: '#333' }}>
                            <div className='content'>
                                <h3>Kwikpic</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sponsor-item">
                    <div className="sponsor-card">
                        <div className='slide slide1'>
                            <div className='sponsor_sub'>
                                <div className='icon'>
                                    <img alt='' src={sponsor3} />
                                </div>
                            </div>
                        </div>
                        <div className='slide slide2' style={{ backgroundColor: '#333' }}>
                            <div className='content'>
                                <h3>SpaaX</h3>
                            </div>
                        </div>

                    </div>
                </div> */}

                
            </div>
        </section>
    );
}

export default Sponsors;
