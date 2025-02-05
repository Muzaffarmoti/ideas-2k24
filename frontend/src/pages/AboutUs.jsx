import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import image1 from '../assets/images/gallery/gal1.jpg';
import image2 from '../assets/images/gallery/gal2.jpg';
import image3 from '../assets/images/gallery/gal3.jpg';
import image4 from '../assets/images/gallery/gal4.jpg';
import image5 from '../assets/images/gallery/gal5.JPG';
import image6 from '../assets/images/gallery/gal6.jpg';
import image7 from '../assets/images/gallery/gal7.png';
import image8 from '../assets/images/gallery/gal8.jpg';
import image9 from '../assets/images/gallery/gal9.JPG';
import image10 from '../assets/images/gallery/gal10.JPG';
import image11 from '../assets/images/gallery/gal11.JPG';
import image12 from '../assets/images/gallery/gal12.JPG';
import image13 from '../assets/images/gallery/gal13.JPG';
import image14 from '../assets/images/gallery/gal14.png';
import image15 from '../assets/images/gallery/gal15.JPG';
import image16 from '../assets/images/gallery/gal16.png';
import image17 from '../assets/images/gallery/gal17.JPG';
import image18 from '../assets/images/gallery/gal18.png';
import image19 from '../assets/images/gallery/gal19.JPG';
import image20 from '../assets/images/gallery/gal20.JPG';
import image21 from '../assets/images/gallery/gal21.JPG';
import image22 from '../assets/images/gallery/gal22.JPG';
import image23 from '../assets/images/gallery/gal23.JPG';
import image24 from '../assets/images/gallery/gal24.JPG';
import image25 from '../assets/images/gallery/gal25.JPG';
import image26 from '../assets/images/gallery/gal26.JPG';
import './AboutUs.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUsComponents() {
  const spacing = 0.1;
  const styles = {
    image: {
      width: '300px',
      height: '300px',
    }
  };
// Media queries for different screen sizes
if (window.matchMedia("(max-width: 600px)").matches) {
  styles.image = {
    width: '200px',
    height: '200px',
  };
} else if (window.matchMedia("(max-width: 900px)").matches) {
  styles.image = {
    width: '250px',
    height: '250px',
  };
}
  const Scroller = ({ direction = 'left', speed = 'fast', children }) => {
    useEffect(() => {
      const scrollers = document.querySelectorAll('.scroller');
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        scrollers.forEach((scroller) => {
          scroller.setAttribute('data-animated', true);
          const scrollerInner = scroller.querySelector('.scroller__inner');
          const scrollerContent = Array.from(scrollerInner.children);
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }, []);

    return (
      <div className='main-container'>
        <Header />
        <div className='sub-container'>
          <div className='sit-details'>
            <section id="services" className="s-services">
              <div className="row section-header has-bottom-sep aos-init">
                <div className="col-full">
                  <h3 className="subhead"></h3>
                  <h1 className="display-2 display-2--light aos-init aos-animate" style={{ marginRight: spacing + 'em' }}>About  SIT</h1>
                </div>
              </div>
              <div className="row about-desc aos-init aos-animate">
                <div className="col-full" style={{ color: '#f6f6f6' }}>
                  <p className="aos-init aos-animate">Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement. The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.</p>
                </div>
              </div>
            </section>
          </div>
          <div className='ieee-details'>
            <section id="about" className="s-about">
              <div className="row section-header has-bottom-sep aos-init aos-animate">
                <div className="col-full">
                  <h3 className="subhead subhead--dark"></h3>
                  <h1 className="display-1 display-1--light aos-init aos-animate" style={{ textTransform: 'uppercase' }}>About IEEE SIT SB</h1>
                </div>
              </div>
              <div className="row about-desc aos-init aos-animate">
                <div className="col-full">
                  <p className="aos-init aos-animate">IEEE SIT SB was established in the year 2002 under the inspiring leadership of Professor Basavarajaiah. The legacy was followed by the vision and direction of our mentors Dr. K V Suresh, Professor, Department of ECE and Dr. N R Sunitha, Professor, Department of CSE. Our current branch counsellors Dr. K V Vishwanath, Professor, Department of ETE and Dr. Veena Karjagi, Associate Professor, Department of ECE IEEE SIT SB have won a lot of laurels. This is the only student branch from Bangalore Section to have been published in IEEE India Council Newsletter, 2019. IEEE SIT SB team is a force of diverse skills and expertise. The synergy of the team brings out the opportunity for every individual to explore, enhance and thereby strengthening the team. Providing insights and opportunities of IEEE, we fervently organize various events, technical colloquiums and contests. The WIE IEEE SIT SB, a wing under IEEE SIT SB supports all the innovation and technology of, for and by women through organizing various events.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const AvatarScroller = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    return (
      <div>
        <section id="gall" className="s-gall">
          <div className="scroller" data-direction="right" data-speed="slow">
            <div className="scroller__inner">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.image} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };


  const LeftScroller = () => {
    const images = [image10, image11, image12, image13, image14, image15, image16, image17, image18];
    return (
      <div>
        <section id="gall1" className="s-gall1">
          <div className="scroller" data-direction="left" data-speed="slow">
            <div className="scroller__inner">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.image} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const AvatarScroller2 = () => {
    const images = [image19, image20, image21, image22, image23, image24, image25, image26];
    return (
      <div>
        <section id="gall2" className="s-gall2">
          <div className="scroller" data-direction="right" data-speed="slow">
            <div className="scroller__inner">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.image} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };



  return (
    <div className='about-us-main'>
      <h1 style={{ textAlign: 'center' }}></h1>
      <Scroller speed="fast" />
      <AvatarScroller />
      <LeftScroller />
      <AvatarScroller2 />
      < Footer />
    </div>
  );
}

export default AboutUsComponents;
