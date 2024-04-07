import React, { useEffect, useState } from 'react'
import '../Css/ContactUs.css'
import art_video from '../assets/videos/Art_at_contact.mp4'
import anagha from '../assets/images/web_team/anagha.jpg'
import deeksha from '../assets/images/web_team/deeksha.jpg'
import ananya from '../assets/images/web_team/ananya.jpg'
import likith from '../assets/images/web_team/likith.jpg'
import muzaffar from '../assets/images/web_team/muzaffar.jpeg'
import nayana from '../assets/images/web_team/nayana.jpg'
import rishith from '../assets/images/web_team/rishith.jpg'
import ContactDetails from './ContactDetails'
import Header from '../components/Header'


function ContactUs() {
       const memberDetailsArray = [
        {
            name: 'Anagha N',
            position: 'Lead, Web Master IEEE SIT SB',
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
            name: 'Muzaffar M M',
            position: 'Joint Treasure, IEEE SIT SB',
            image: muzaffar
        },
        {
            name: 'Nayana M',
            position: 'Member, IEEE SIT SB',
            image: nayana
        },
        {
            name: 'Rishith  P',
            position: 'Lead, Design Master IEEE SIT SB',
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

    return (
        <div className='contact_main_container'>
            <Header />
            <div className='background-image'></div>
            <h3 className='contact_header'>CONTACT US </h3>
            <div className='contact_container1' >
                <div className="container_map" ><iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Siddaganga%20Institute%20Of%20Technology%20Bangalore%20-%20Honnavar%20Hwy,%20Chandana%20Complex,%20Tumakuru,%20Karnataka%20572103+(SIT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
                </div>
                <div className='cont'>
                    {/* <div className='back'>
                        <video autoPlay loop muted>
                            <source src={space} type='video/gif' />
                        </video>
                    </div> */}
                    {/* <div className='content'>
                        <div className='container_text1'>
                            <div className='text1'>
                                <h6 >Kona Chandra Kiran</h6>
                                Chair,IEEE SIT SB<br />
                                📞+91 99897 94662<br />
                                ✉️ konachandrakiran555@gmail.com
                            </div>
                            <div className='text1'>
                                <h6 >Adarsh Reddy P</h6>
                                Vicechair,IEEE SIT SB<br />
                                📞+91 95914 88158<br />
                                ✉️ adarshpreddy@ieee.org
                            </div>
                        </div>
                        <div className='container_text1'>
                            <div className='text1'>
                                <h6 >Chandana R</h6>
                                Chair,WIE IEEE SIT SB<br />
                                📞+91 79757 20929<br />
                                ✉️ rchandana1711@gmail.com
                            </div>
                            <div className='text1'>
                                <h6 >Nanditha B U</h6>
                                Vicechair,WIE IEEE SIT SB<br />
                                📞+91 95916 19331<br />
                                ✉️ nandithabu53@gmail.com
                            </div>
                        </div>
                    </div> */}
                    <div className='map_test'>
                        <h5 className='contact_header clr' >DIRECTION</h5>
                       <ul> 
                        <li className='map_text_test'>siddaganga Institute of Technology is one of the well-known institutes which was established in the
                         year 1963 and is located in Tumkur, Karnataka. The institute offers various Degree courses 
                         including UG and PG programs. Programs are offered in Full-Time mode, and are delivered by </li>
                        <li className='map_text_test'>highly experienced faculty. Students can pursue education in multiple courses like 
                         MBA/PGDM, MCA, B.Arch, B.E. / B.Tech, M.E./M.Tech in the stream of Business & Management Studies, </li> 
                         <li className='map_text_test'>IT & Software, Architecture & Planning, Engineering. It provides students with the opportunity to 
                         learn from skilled and experienced faculty members who specialize in the fields of Telecommunication</li></ul>
                        
                       
                    </div>
           </div>
            </div>
            <div className='container_text1_test'>
                            <div className='text1'>
                                <h6 >Kona Chandra Kiran</h6>
                                Chair,IEEE SIT SB<br />
                                📞+91 99897 94662<br />
                                ✉️ konachandrakiran555@gmail.com
                            </div>
                            <div className='text1'>
                                <h6 >Adarsh Reddy P</h6>
                                Vicechair,IEEE SIT SB<br />
                                📞+91 95914 88158<br />
                                ✉️ adarshpreddy@ieee.org
                            </div>
                            <div className='text1'>
                                <h6 >Chandana R</h6>
                                Chair,WIE IEEE SIT SB<br />
                                📞+91 79757 20929<br />
                                ✉️ rchandana1711@gmail.com
                            </div>
                            <div className='text1'>
                                <h6 >Nanditha B U</h6>
                                Vicechair,WIE IEEE SIT SB<br />
                                📞+91 95916 19331<br />
                                ✉️ nandithabu53@gmail.com
                            </div>
                        </div>
            <h4 className='contact_header'>THE WEB TEAM</h4>
         
            <div className='pic'>
                {hoveredImageDetails && (
                    <div className='image-details'>
                        <p>{hoveredImageDetails}</p>
                    </div>
                )}
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
                {/* </div> */}

                {/* Render image details */}
                
            </div>

        </div>
    )
}

export default ContactUs
