import React from 'react';
import { useNavigate } from 'react-router-dom';
import cardDetails from './CardDetails';
import './Cards.css';
import rocket from '../../assets/images/icons/rocket.png';

function Cards() {
    // Slice the cardDetails array into three separate arrays
    const firstRow = cardDetails.slice(0, 5);
    const secondRow = cardDetails.slice(5, 9);
    const thirdRow = cardDetails.slice(9);

    const navigate = useNavigate()
    const handleClickEvent = (e) => {
        navigate(`/${e}`)
    }
    return (
        <div className="cards-container">
            <ul className="cards-row">
                {firstRow.map((card, index) => (
                    <li className="cards-main" key={index}>
                        <img className="card-image" src={card.image} alt={card.title} />
                        <div className="card-title">{card.title}</div>
                        <div className='card-after-contents'>
                            <div className='card-desc'>{card.desc}</div>
                            <button className='card-btn' onClick={() => handleClickEvent(card.name)}><img src={rocket} alt="rocket" />EXPLORE</button>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="cards-row">
                {secondRow.map((card, index) => (
                    <li className="cards-main" key={index}>
                        <img className="card-image" src={card.image} alt={card.title} />
                        <div className="card-title">{card.title}</div>
                        <div className='card-after-contents'>
                            <div className='card-desc'>{card.desc}</div>
                            <button className='card-btn' onClick={() => handleClickEvent(card.name)}><img src={rocket} alt="rocket" />EXPLORE</button>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="cards-row">
                {thirdRow.map((card, index) => (
                    <li className="cards-main" key={index}>
                        <img className="card-image" src={card.image} alt={card.title} />
                        <div className="card-title">{card.title}</div>
                        <div className='card-after-contents'>
                            <div className='card-desc'>{card.desc}</div>
                            <button className='card-btn' onClick={() => handleClickEvent(card.name)}><img src={rocket} alt="rocket" />EXPLORE</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cards;
