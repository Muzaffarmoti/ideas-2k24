import React , {useEffect} from 'react'
import $ from 'jquery';
import './jquery.timelinr-0.9.7'
import './TimeLine.css'
import curtain from '../../assets/images/icons/curtain2.jpg'
import comingsoon from '../../assets/images/icons/comingSoon.webp'
import ideas from '../../assets/images/icons/2.png'
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
                    <img src={ideas} />
                    <h1>April 25th</h1>
                    <p>The most awaited event, <span style={{color:"#f84611"}}>IdEEEas 2k24</span> is here!!!!</p>
                </li>
                {/* <li id="1944">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png" />
                    <h1>1944</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1950">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/4.png" />
                    <h1>1950</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1971">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/5.png" />
                    <h1>1971</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1977">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/6.png" />
                    <h1>1977</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1989">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/7.png" />
                    <h1>1989</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="1999">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/8.png" />
                    <h1>1999</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="2001">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/9.png" />
                    <h1>2001</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li>
                <li id="2011">
                    <img src="http://www.csslab.cl/ejemplos/timelinr/latest/images/10.png" />
                    <h1>2011</h1>
                    <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </li> */}
            </ul>
            <div id="grad_top"></div>
            <div id="grad_bottom"></div>
            <a href="#" id="next">+</a>
            <a href="#" id="prev">-</a>
        </div>
    )
}

export default TimeLine