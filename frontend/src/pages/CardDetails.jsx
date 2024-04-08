import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Css/CardDetails.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import details from './Events.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CardDetails() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 10, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 19, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const { eventnum } = useParams();
  const eventDetails = details[eventnum];

  // Define buttons based on the id property of eventDetails
  let buttons;
  if (eventDetails.id === 1 || eventDetails.id === 2) {
    buttons = (
      <>
        <button className='card-btnn'>Register</button>
        <button className='card-btnn'>Download Brochure</button>
      </>
    );
  } else {
    buttons = (
      <>
        <button className='card-btnn'>Register</button>
        <button className='card-btnn'>Download Brochure</button>
        <button className='card-btnn'>Upload File </button>
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
        <div className='details-div' data-aos="fade-up">
          <div className='desc'>
            <p><strong style={{ color: '#F84611' }}>Description:</strong> {eventDetails.description}</p>
          </div>
          <div className="details-grid">
            <div className='row-one'>
              <div className='details' data-aos="fade-right"><span className='span-taggg'><strong style={{ color: '#F84611' }}>Team Size:</strong> </span> <span className='span-taggs'>{eventDetails.teamsize}</span></div>
              <div className='details' data-aos="fade-left"><span className='span-taggg'><strong style={{ color: '#F84611' }}>Eligibility:</strong> </span> <span className='span-taggs'>{eventDetails.Eligibility}</span></div>
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
      <Footer />
    </div>
  );
}

export default CardDetails;
