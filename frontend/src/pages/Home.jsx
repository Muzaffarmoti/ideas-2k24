import React, { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import Header from '../components/Header'
import Sponsors from './sections/Sponsors'
import Cards from './sections/Cards'
import Footer from '../components/Footer'
import '../Css/Home.css'
import FAQ from './sections/FAQ'
import '../Css/ContactUs.css'
import anagha from '../assets/images/web_team/anagha.jpg'
import deeksha from '../assets/images/web_team/deeksha.jpg'
import ananya from '../assets/images/web_team/ananya.jpg'
import likith from '../assets/images/web_team/likith.jpg'
import muzaffar from '../assets/images/web_team/muzaffar.jpeg'
import nayana from '../assets/images/web_team/nayana2.jpeg'
import rishith from '../assets/images/web_team/rishith.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TimeLine from './sections/TimeLine'
import Count from './sections/Count'
function Home() {
    const memberDetailsArray = [
        {
            name: 'Anagha N',
            position: 'Web Team Lead, IEEE SIT SB',
            image: anagha
        },
        {
            name: 'Ananya BR',
            position: 'Member, IEEE SIT SB',
            image: ananya
        },
        {
            name: 'Deeksha S',
            position: 'Member, IEEE SIT SB',
            image: deeksha
        },
        {
            name: 'Likith S H',
            position: 'Member, IEEE SIT SB',
            image: likith
        },
        {
            name: 'Muzaffar M Motiwale',
            position: 'Joint Treasurer, IEEE SIT SB',
            image: muzaffar
        },
        {
            name: 'Nayana M',
            position: 'Member, IEEE SIT SB',
            image: nayana
        },
        {
            name: 'Rishith  P',
            position: 'Design Team Lead,IEEE SIT SB',
            image: rishith
        },
    ];

    const [hoveredImageDetails, setHoveredImageDetails] = useState(null);

    const handleMouseEnter = (details) => {
        setHoveredImageDetails(details);
    };

    const handleMouseLeave = () => {
        setHoveredImageDetails(null);
    };
    useEffect(() => {
        const images = document.querySelectorAll('.pic_sub2_img');

        const handleMouseEnter = (event) => {
            const image = event.target;
            image.classList.add('paused'); // Add the paused class on hover
            const parent = image.closest('.pic_sub2');
            if (parent) {
                parent.style.animationPlayState = 'paused'; // Pause the animation
                parent.scrollBy({
                    top: 100, // Adjust the scroll amount as needed
                    behavior: 'smooth' // Add smooth scrolling behavior
                });
            }
            const otherScrollers = document.querySelectorAll('.pic_sub1 .pic_sub2');
            otherScrollers.forEach(scroller => {
                if (scroller !== parent) {
                    scroller.style.animationPlayState = 'paused';
                }
            });
        };
        const handleMouseLeave = (event) => {
            const image = event.target;
            image.classList.remove('paused'); // Remove the paused class on mouse leave
            const parent = image.closest('.pic_sub2');
            if (parent) {
                parent.style.animationPlayState = 'running'; // Resume the animation
            }
            const otherScroller = document.querySelector('.pic_sub1 .pic_sub2');
            if (otherScroller && otherScroller !== parent) {
                otherScroller.style.animationPlayState = 'running';
            }
            const otherScrollers = document.querySelectorAll('.pic_sub1 .pic_sub2');
            otherScrollers.forEach(scroller => {
                if (scroller !== parent) {
                    scroller.style.animationPlayState = 'running';
                }
            });
        };
        images.forEach(image => {
            // Add event listener for mouse enter
            image.addEventListener('mouseenter', handleMouseEnter);

            // Add event listener for mouse leave
            image.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup function to remove event listeners
        return () => {
            images.forEach(image => {
                image.removeEventListener('mouseenter', handleMouseEnter);
                image.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='home-main'>
            <Header />
            <Hero />
            <div className='events-section' data-aos="fade-up"
                data-aos-duration="3000">
                <div className="events-heading-wrapper">
                    <h2 className='events-heading'>OUR EVENTS</h2>
                </div>
                <Cards />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
                <Sponsors />
            </div>
            <Count />
            <div className="timeline-section" data-aos="fade-up" data-aos-duration="3000">
                <div className="events-heading-wrapper">
                        <h2 className='events-heading'>TIMELINE</h2>
                </div>
                <TimeLine/>
            </div>
            <div className="faq-sec" data-aos="fade-up" data-aos-duration="3000">
                <FAQ />
            </div>
            <div className='pic'>
                <h4 className='contact_header'>THE WEB TEAM</h4>
                <div className='image-details'>
                    {hoveredImageDetails ? (
                        <p>{hoveredImageDetails}</p>
                    ) : (
                        // <p>Hover over an image to see details</p>
                        <p>Glimpse Beyond the Surface: Hover for Insights!</p>
                    )}
                </div>
                <div className='pic_sub1'>
                    <div className='pic_sub2'>
                        {memberDetailsArray.map((item, index) => (
                            <div
                                className='pic_sub2_img'
                                key={index}
                                onMouseEnter={() => handleMouseEnter(`${item.name}, ${item.position}`)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img className='img' src={item.image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    {/* Add more scrollers similarly */}
                    <div className='pic_sub2'>
                        {memberDetailsArray.map((item, index) => (
                            <div
                                className='pic_sub2_img'
                                key={index}
                                onMouseEnter={() => handleMouseEnter(`${item.name}, ${item.position}`)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img className='img' src={item.image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home