import ieeetag1 from '../assets/images/gallery/gal1.jpg';
import ieeetag2 from '../assets/images/gallery/gal2.jpg';
import ieeetag3 from '../assets/images/gallery/gal3.jpg';
import ieeetag4 from '../assets/images/gallery/gal4.jpg';
import ieeetag6 from '../assets/images/gallery/gal6.jpg';
import ieeetag7 from '../assets/images/gallery/gal7.png';
import ieeetag8 from '../assets/images/gallery/gal8.jpg';
import ieeetag9 from '../assets/images/gallery/gal9.JPG';
import Carousel from 'react-multi-carousel';
import React from 'react';
import './AboutUs.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function AboutUsComponent() {
  const spacing = 0.1;
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='sit-details'>  
          <section id="services" className="s-services">
            <div className="row section-header has-bottom-sep aos-init">
              <div className="col-full">
                <h3 className="subhead"></h3>
                <h1 className="display-2" style={{marginRight: spacing + 'em'}}>About S.I.T</h1>
              </div>
            </div>
            <div className="row about-desc aos-init aos-animate">
              <div className="col-full" style={{color: '#f6f6f6'}}>
                <p>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds.Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement.The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
              </div>
            </div>
          </section>
        </div>   
        <div className='ieee-details'>
          <section id="about" className="s-about">
            <div className="row section-header has-bottom-sep aos-init aos-animate">
              <div className="col-full">
                <h3 className="subhead subhead--dark"></h3>
                <h1 className="display-1 display-1--light" style={{textTransform: 'uppercase'}}>About IEEE SIT SB</h1>
              </div>
            </div>
            <div className="row about-desc aos-init aos-animate">
              <div className="col-full">
                <p>IEEE SIT SB was established in the year 2002 under the inspiring leadership of Professor Basavarajaiah. The legacy was followed by the vision and direction of our mentors Dr. K V Suresh, Professor, Department of ECE and Dr. N R Sunitha, Professor, Department of CSE. Our current branch counsellors Dr. K V Vishwanath, Professor, Department of ETE and Dr. Veena Karjagi, Associate Professor, Department of ECE IEEE SIT SB have won a lot of laurels. This is the only student branch from Bangalore Section to have been published in IEEE India Council Newsletter, 2019. IEEE SIT SB team is a force of diverse skills and expertise. The synergy of the team brings out the opportunity for every individual to explore, enhance and thereby strengthening the team. Providing insights and opportunities of IEEE, we fervently organize various events, technical colloquiums and contests. The WIE IEEE SIT SB, a wing under IEEE SIT SB supports all the innovation and technology of, for and by women through organizing various events.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="ieee-galls" className="s-ieee-gals">
        <div className="row section-header aos-init">
          <div className="col-full">
            <h3 className="subhead"></h3>
            <h1 className="display-3">GALLERY</h1>
          </div>
        </div>
        <div className="gall"></div>
        <div className="gal-content">
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="gal-tag">     
              <img src={ieeetag1} alt="img" />
            </div>
            <div className="gal-tag">
              <img src={ieeetag2} alt="img" />
            </div>
            <div className="gall-tag">
              <img src={ieeetag3} alt="img" />
            </div>
            <div className="gal-tag">
              <img src={ieeetag4} alt="img" />
            </div>
            <div className="gal-tag">
              <img src={ieeetag6} alt="img" />
            </div>
            <div className="gal-tag">
              <img src={ieeetag7} alt="img" />
            </div> 
            <div className="gal-tag">
              <img src={ieeetag8} alt="img" />
            </div>
            <div className="gal-tag">
              <img src={ieeetag9} alt="img" />
            </div>
          </Carousel>
        </div> 
      </section>
    </div>
  );
}

export default AboutUsComponent;
