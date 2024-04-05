import React from 'react'
import '../Css/ContactUs.css'
import art_video from '../assets/videos/Art_at_contact.mp4'

function ContactUs() {
    return (
        <div className='contact_main_container'>
            <h3 className='contact_header'>Contact us </h3>
            <div className='contact_container1' >
                <div className="container_map" ><iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Siddaganga%20Institute%20Of%20Technology%20Bangalore%20-%20Honnavar%20Hwy,%20Chandana%20Complex,%20Tumakuru,%20Karnataka%20572103+(SIT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
                </div>
                <div className='cont'>
                    <div className='back'>
                        <video autoPlay loop muted>
                            <source src={art_video} type='video/mp4' />
                        </video>
                    </div>
                    <div className='content'>
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
                    </div>
                </div>
            </div>
            <h4 className='contact_header'>Web Team</h4>
            <div className='web_container'>
                <div className='container_text_sub1'>
                    <div className='text1'>
                        <h6 >Anagha N</h6>
                        Lead,Web Master IEEE SIT SB<br />
                        📞+91 78927 36753<br />
                        ✉️ anagha2003.13@gamil.com
                    </div>
                    <div className='text1'>
                        <h6 >Rishith P</h6>
                        Lead,Design Master IEEE SIT SB<br />
                        📞+91 78924 94498<br />
                        ✉️ rishithp2003@gmail.com
                    </div>
                    <div className='text1'>
                        <h6 >Muzaffar M M</h6>
                        Joint Treasure, IEEE SIT SB<br />
                        📞+91 90368 99938<br />
                        ✉️ muzaffarmoti@gamil.com
                    </div>
                </div>
                <div className='container_text_sub1'>
                    <div className='text1'>
                        <h6>Deeksha S</h6>
                        Member, IEEE SIT SB<br />
                        📞+91 63664 81557<br />
                        ✉️ deekshas182003@gmail.com
                    </div>
                    <div className='text1'>
                        <h6 >Ananya BR</h6>
                        Member, IEEE SIT SB<br />
                        📞+91 99110 449927 <br />
                        ✉️ ananyasetty127@gmail.com
                    </div>
                    <div className='text1'>
                        <h6 >Likith S H</h6>
                        Member, IEEE SIT SB<br />
                        📞+91 80731 10841<br />
                        ✉️ likith1238@gmail.com
                    </div>
                    <div className='text1'>
                        <h6 >Nayana M</h6>
                        Member, IEEE SIT SB<br />
                        📞+91 63665 87209<br />
                        ✉️ nayana.273105@gmail.com
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs