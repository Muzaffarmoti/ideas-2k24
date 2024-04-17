import React from 'react';
import "../Css/Footer.css"; 
import instagram from '../assets/images/icons/instagram.webp'
import youtube from '../assets/images/icons/youtube.webp'
import email from '../assets/images/icons/email.webp'
import blog from '../assets/images/icons/blog.webp'
import telegram from '../assets/images/icons/telegram4.png'

export default function Footer() {
    const redirectToLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className='footer-main-container'>
            <center className='heading-primary--sub-skyblue' id="contact"><span className="follow-us-text">FOLLOW US ON</span></center>
            <div className="contact-icons">
                <div className="icon-wrapper" onClick={() => redirectToLink("https://www.instagram.com/ieeesitsb/")}>
                    <div className="icon-circle"></div>
                    <a rel="noreferrer" href="https://www.instagram.com/ieeesitsb/" target="_blank">
                        <img alt="insta" src={instagram} className="con-icons"></img>
                    </a>
                </div>
                <div className="icon-wrapper youtube-icon" onClick={() => redirectToLink("https://www.youtube.com/channel/UCPatXnxDMcEDlFEQKX3q3rg")}>
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCPatXnxDMcEDlFEQKX3q3rg" target="_blank">
                        <img alt="youtube" src={youtube} className="con-icons"></img>
                    </a>
                </div>
                <div className="icon-wrapper" onClick={() => redirectToLink("mailto:ieee@sit.ac.in")}>
                    <div className="icon-circle"></div>
                    <img alt="email" src={email} className="con-icons" data-tip="ieee@sit.ac.in"></img>
                </div>
                <div className="icon-wrapper" onClick={() => redirectToLink("https://ieeesit.blogspot.com/?m=1")}>
                    <div className="icon-circle"></div>
                    <a rel="noreferrer" href="https://ieeesit.blogspot.com/?m=1" target="_blank">
                        <img alt="blog" src={blog} className="con-icons"></img>
                    </a>
                </div>
                <div className="icon-wrapper" onClick={() => redirectToLink("https://t.me/ieeesitsb")}>
                    <div className="icon-circle"></div>
                    <a rel="noreferrer" href="https://t.me/ieeesitsb" target="_blank">
                        <img alt="telegram" src={telegram} className="con-icons"></img>
                    </a>
                </div>
            </div>
            <center className='footer-p' style={{"color":"#b7b4b4","marginTop":"2vh"}}>All rights reserved &#169; IdEEEas, IEEE SIT SB</center>
        </div>
    );
}
