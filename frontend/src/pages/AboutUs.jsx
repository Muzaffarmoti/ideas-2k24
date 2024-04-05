import React from 'react';
import './AboutUs.css'

function AboutUsComponent() {
    const spacing = 0.1;
    return (
        <div className='main-container'>
            <div className='sit-details'>
                <section id="SIT" class="s-sit">
                    <div class="row section-header has-bottom-sep aos-init">
                        <div class="col-full">
                            <h3 class="subhead"></h3>
                            <h1 class="display-2" style={{ margineRight: spacing + 'em' }}>About S.I.T</h1>
                        </div>
                        <div class="row about-desc aos-init aos-animate">
                            <div class="col-full" style={{ color: 'white' }}>
                                <div className='sit-2'>
                                    <p>Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds.Its motto 'work is worship' is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement.The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className=' ieee-details'>
                <section id="about" class="s-about">
                    <div className="row section-header has-bottom-sep aos-init aos-animate">
                        <div className="col-full">
                            <h3 className="subhead subhead--dark"></h3>
                            <h1 className="display-1" style={{ textTransform: 'uppercase' }}>About IEEE SIT SB</h1>
                        </div>
                    </div>
                    <div class="row about-desc aos-init aos-animate">
                        <div className="col-full">
                            <p>
                                IEEE SIT SB was established in the year 2002 under the inspiring leadership of Professor Basavarajaiah.The legacy was followed by the vision and direction of our mentors Dr. K V Suresh, Professor, Department of ECE and Dr. N R Sunitha, Professor, Department of CSE. Our current branch counsellors Dr. K V Vishwanath, Professor, Department of ETE and Dr. Veena Karjagi, Associate Professor, Department of ECE IEEE SIT SB have won a lot of laurels.This is the only student branch from Bangalore Section to have been published in IEEE India Council Newsletter, 2019. IEEE SIT SB team is a force of diverse skills and expertise.The synergy of the team brings out the opportunity for every individual to explore, enhance and thereby strengthening the team.Providing insights and opportunities of IEEE, we fervently organize various events, technical colloquiums and contests.The WIE IEEE SIT SB, a wing under IEEE SIT SB supports all the innovation and technology of, for and by women through organizing various events.
                            </p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default AboutUsComponent;
