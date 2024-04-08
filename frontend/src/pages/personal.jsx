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

// "aavishkar": {
//     "id": 1,
//     "name": "Aavishkar",
//     "poster": "Aavishkar.png",
//     "description": "As a part of IdEEEas, tech enthusiasts are given a chance to show off their hard work and dedication. Be it application-oriented projects or just basic projects in either hardware or software, students are encouraged to come up with their ‘invention’ and win the big bucks for the same.",
//     "link": "https://drive.google.com/drive/folders/1Jb9LYxvk7Np0TtMEHztAght_fE3dnbbw?usp=drive_link",
//     "teamsize":" Max.4",
//     "Eligibility" : "Open to all branches of BE and diploma students.",
//     "location":" IEM 101/102",
//     "entryfee":"200",
//     "brochure":"https://drive.google.com/file/d/1Q4VdyxEmQQEX3yYguICYU1TDxU61F3IG/view?usp=share_link",
//     "template":"https://docs.google.com/document/d/1DXbZwKoKe2xZL2fWXizqH-ntP4_GRjlwFr0cGTBDSZs/edit",
//     "ydlink":"https://docs.google.com/forms/d/e/1FAIpQLScGc3Gcj9Cik-0J1NmlkvzUdPGFOWjKADRGuALMTgmvXa7cfg/viewform?usp=sf_link"
