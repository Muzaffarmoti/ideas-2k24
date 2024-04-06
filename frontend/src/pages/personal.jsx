import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import '../Css/CardDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import details from './Events.json';

function CardDetails() {
  const { eventnum } = useParams();
  // Get the event name from router parameter
  // Adddddddddddddddddddddd eventnum as details.eventnum while dynamically rendering 
  // Fetch event details based on the event name
  const eventDetails = details[eventnum];

  return (
    <div className='cd-main-div'>
      <Header />
      <div className='poster-details'>
        <div className='details-div'>
          <h2>{eventDetails.name}</h2>
          <p><strong>Description:</strong> {eventDetails.description}</p>
          <p><strong>Team Size:</strong> {eventDetails.teamsize}</p>
          <p><strong>Eligibility:</strong> {eventDetails.Eligibility}</p>
          <p><strong>Location:</strong> {eventDetails.location}</p>
          <p><strong>Entry Fee:</strong> {eventDetails.entryfee}</p>
        </div>
        <div className='poster-div'>
          <img src={eventDetails.poster} alt='Event Poster' />
        </div>
      </div>
      <div className='button-div'>

      </div>
      <Footer />
    </div>
  );
}

export default CardDetails;
