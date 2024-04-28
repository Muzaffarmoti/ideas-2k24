import React , {useEffect} from 'react'
import $ from 'jquery';
import './jquery.timelinr-0.9.7'
import './TimeLine.css'
// import curtain from '../../assets/images/icons/curtain2.jpg'
import curtain from '../../assets/images/icons/curtainNew.png'
import comingsoon from '../../assets/images/icons/comingSoon.webp'
import ideas from '../../assets/images/icons/2.png'
import calendar from '../../assets/images/icons/calendar.png'
import april23 from '../../assets/images/icons/april23.png'
function TimeLine() {
    useEffect(() => {
        $().timelinr({
            orientation: 'vertical',
            issuesSpeed: 300,
            datesSpeed: 100,
            arrowKeys: true,
            startAt: 3
        });
    }, []);
    return (
        <div id="timeline" className='timeline'>
            
            <ul id="dates">
                <li><a href="#1900" class="selected">Apr 15th</a></li>
                <li><a href="#1930">Apr 23rd</a></li>
                <li><a href="#1930">Apr 23rd</a></li>
                <li><a href="#1930">Apr 25th</a></li>
                {/* <li><a href="#1944">1944</a></li>
                <li><a href="#1950">1950</a></li>
                <li><a href="#1971">1971</a></li>
                <li><a href="#1977">1977</a></li>
                <li><a href="#1989">1989</a></li>
                <li><a href="#1999">1999</a></li>
                <li><a href="#2001">2001</a></li>
                <li><a href="#2011">2011</a></li> */}
            </ul>
            <ul id="issues">
                <li id="1900" class="selected">
                    <img src={curtain} />
                    <h1>April 15th</h1>
                    <p>IdEEEas 2k24 Curtain Raiser</p>
                </li>
                <li id="1930">
                    <img src={calendar} />
                    <h1>April 23rd</h1>
                    <p>Last Date of Poster Submission for Technocon </p>
                </li>  
                <li id="1930">
                    <img src={april23} />
                    <h1>April 23rd</h1>
                    <p>Last Date of Abstract Submission for Pitch-o-thon</p>
                </li>               
                <li id="1930">
                    <img src={ideas} />
                    <h1>April 25th</h1>
                    <p>The most awaited event, <span style={{color:"#f84611"}}>IdEEEas 2k24</span> is here!!!!</p>
                </li>
                
            </ul>
            <div id="grad_top"></div>
            <div id="grad_bottom"></div>
            <a href="#" id="next">+</a>
            <a href="#" id="prev">-</a>
        </div>
    )
}

export default TimeLine