import React from 'react'
import cardDetails from './CardDetails'
import './Cards.css'
import rocket from '../../assets/images/icons/rocket.png'
function Cards() {
    return (
        <ul className="honeycomb">
            {cardDetails.map((card, index) => (
                <li className="honeycomb-cell" key={index}>
                    <img className="honeycomb-cell_img" src={card.image} alt={card.title} />
                    <div className="honeycomb-cell_title">{card.title}</div>
                    <div className='honeycomb-after-contents'>
                        <div className='honeycomb-cell_desc'>{card.desc}</div>
                        <button className='explore-button-cards'><img src={rocket}></img>EXPLORE</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Cards