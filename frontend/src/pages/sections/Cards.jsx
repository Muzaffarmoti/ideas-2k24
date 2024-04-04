import React from 'react'
import cardDetails from './CardDetails'
import './Cards.css'
function Cards() {
    return (
        <ul className="honeycomb">
            {cardDetails.map((card, index) => (
                <li className="honeycomb-cell" key={index}>
                    <img className="honeycomb-cell_img" src={card.image} alt={card.desc} />
                    <div className="honeycomb-cell_title">{card.desc}</div>
                </li>
            ))}
        </ul>
    );
}

export default Cards