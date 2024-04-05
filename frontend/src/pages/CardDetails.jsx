import React from 'react';
import { useParams } from 'react-router-dom';
import '../Css/CardDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import details from './Events.json';

function CardDetails() {
  const { eventnum } = useParams();
  const eventDetails = details[eventnum];
  console.log(eventDetails.poster)
  // Define buttons based on the id property of eventDetails
  let buttons;
  if (eventDetails.id === 1 || eventDetails.id === 2) {
    buttons = (
      <>
        <button>Button 1</button>
        <button>Button 2</button>
      </>
    );
  } else {
    buttons = (
      <>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </>
    );
  }

  return (
    <div className='cd-main-div'>
      <Header />
      <div className='poster-details'>
        <div className='poster-div'>
          <img src={"/Eventposter/" + eventDetails.poster} alt='Event Poster' />
        </div>
        <div className='details-div'>
          <h2>{eventDetails.name}</h2>
          <p><strong>Description:</strong> {eventDetails.description}</p>
          <p><strong>Team Size:</strong> {eventDetails.teamsize}</p>
          <p><strong>Eligibility:</strong> {eventDetails.Eligibility}</p>
          <p><strong>Location:</strong> {eventDetails.location}</p>
          <p><strong>Entry Fee:</strong> {eventDetails.entryfee}</p>
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
