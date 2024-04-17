import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Css/CardDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import details from './Events.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rocket from '../assets/images/icons/rocket.png'

function CardDetails() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 10,
      throttleDelay: 19,
      offset: 120,
      delay: 0,
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const { eventnum } = useParams();
  const eventDetails = details[eventnum];

  const handleRegister = async (ydlink) => {
    window.open(ydlink, "_blank");
  };

  const handleDownloadBrochure = async (link) => {
    window.open(link, "_blank");
  };

  const handleUploadFile = async (link) => {
    window.open(link, "_blank");
  };

  let buttons;
  if (eventDetails.id === 9) {
    buttons = (
      <>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink1)}><img src={rocket} alt="rocket" />Register for Robo Soccer</button>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink2)}><img src={rocket} alt="rocket" />Register for Fast n Furious</button>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink3)}><img src={rocket} alt="rocket" />Register for Roborace</button>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink4)}><img src={rocket} alt="rocket" />Register for LFR</button>
        <button className='card-btnn' onClick={() => handleDownloadBrochure(eventDetails.brochure)}><img src={rocket} alt="rocket" />Download Brochure</button>
      </>
    );
  }
  else if (eventDetails.id === 1 || eventDetails.id === 6 || eventDetails.id === 10) {
    buttons = (
      <>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink)}><img src={rocket} alt="rocket" />Register</button>
        <button className='card-btnn' onClick={() => handleDownloadBrochure(eventDetails.brochure)}><img src={rocket} alt="rocket" />Download Brochure</button>
        <button className='card-btnn' onClick={() => handleUploadFile(eventDetails.link)}><img src={rocket} alt="rocket" />Upload File</button>
      </>
    );
  }
  else {
    buttons = (
      <>
        <button className='card-btnn' onClick={() => handleRegister(eventDetails.ydlink)}><img src={rocket} alt="rocket" />Register</button>
        <button className='card-btnn' onClick={() => handleDownloadBrochure(eventDetails.brochure)}><img src={rocket} alt="rocket" />Download Brochure</button>
      </>
    );

  }

  return (
    <div className='cd-main-div'>
      <Header />
      <h2 className="centered">{eventDetails.name}</h2>
      <div className='poster-details'>
        <div className='poster-div'>
          {/* <img src={"/Eventposter/" + eventDetails.poster} alt='Event Poster' /> */}
        </div>
        <div className='details-div' data-aos="fade-up">
          <div className='desc' data-aos="fade-up">
            <span className='descriptionn' style={{ color: 'white' }}>{eventDetails.description}</span>
          </div>
          <div className="details-grid">
            <div className='row-one'>
              <div className='details' data-aos="fade-right"><span className='span-taggg'><strong style={{ color: '#F84611' }}>Team Size:</strong> </span> <span className='span-taggs'>{eventDetails.teamsize}</span></div>
              <div className='details' data-aos="fade-left">
                <span className='span-taggg'><strong style={{ color: '#F84611' }}>Eligibility:</strong> </span>
                <span className='span-taggs'>{eventDetails.Eligibility}</span>
              </div>
            </div>
            <div className='row-two'>
              <div className='details' data-aos="fade-right"> <span className='span-tag'><strong style={{ color: '#F84611' }}> Location:</strong> </span><span className='span-tagg'>{eventDetails.location}</span></div>
              <div className='details' data-aos="fade-left"><span className='span-tag'><strong style={{ color: '#F84611' }}>Entry Fee:</strong></span><span className='span-tagg'>{eventDetails.entryfee}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className='button-div' data-aos="zoom-in">
        {buttons}
      </div>
      {eventDetails.template &&
        <div className='template-link'> 
        <pre>Click </pre>
          <a href={eventDetails.template} target={"_blank"}> HERE</a>
          <pre> to view the synopsis template</pre>
        </div>}
      <Footer />
    </div>
  );
}

export default CardDetails;
