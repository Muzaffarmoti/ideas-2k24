import React from 'react';
import { useParams } from 'react-router-dom';
import '../Css/CardDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import details from './Events.json';

function CardDetails() {
  const { eventnum } = useParams();
  const eventDetails = details[eventnum];

  // Define buttons based on the id property of eventDetails
  let buttons;
  if (eventDetails.id === 1 || eventDetails.id === 2) {
    buttons = (
      <>
        <button className='card-btnn'>Button 1</button>
        <button className='card-btnn'>Button 2</button>
      </>
    );
  } else {
    buttons = (
      <>
        <button className='card-btnn'>Button 1</button>
        <button className='card-btnn'>Button 2</button>
        <button className='card-btnn'>Button 3</button>
      </>
    );
  }

  return (
    <div className='cd-main-div'>
      <Header />
      <h2 className="centered">{eventDetails.name}</h2>
      <div className='poster-details'>
        <div className='poster-div'>
          <img src={"/Eventposter/" + eventDetails.poster} alt='Event Poster' />
        </div>
        <div className='details-div'>
          <div className='desc'>
            <p><strong style={{ color: '#F84611' }}>Description:</strong> {eventDetails.description}</p>
          </div>
          <div className="details-grid">
            <div className='row-one'>
              <div className='details'><span className='span-taggg'><strong style={{ color: '#F84611' }}>Team Size:</strong> </span> <span className='span-taggs'>{eventDetails.teamsize}</span></div>
              <div className='details'><span className='span-taggg'><strong style={{ color: '#F84611' }}>Eligibility:</strong> </span> <span className='span-taggs'>{eventDetails.Eligibility}</span></div>
            </div>
            <div className='row-two'>
              <div className='details'> <span className='span-tag'><strong style={{ color: '#F84611' }}> Location:</strong> </span><span className='span-tagg'>{eventDetails.location}</span></div>
              <div className='details'><span className='span-tag'><strong style={{ color: '#F84611' }}>Entry Fee:</strong></span><span className='span-tagg'>{eventDetails.entryfee}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className='button-div'>
        {buttons}
      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
