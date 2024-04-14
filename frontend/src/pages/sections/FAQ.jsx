import React, { useState } from 'react';
import './FAQ.css';
import upArrow from '../../assets/images/FAQicon/up-arrow-white.png';
import downArrow from '../../assets/images/FAQicon/arrow-down-white.png';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: 'What is IdEEEas?',
            answer:
                'IdEEEas is a National level technical symposium organised by IEEE SIT-SB.',
            isOpen: false,
        },
        {
            id: 2,
            question: 'How many members can participate in a team?',
            answer:
                "The team size depends on the type of event.Do click on the event cards for more details.",
            isOpen: false,
        },
        {
            id: 3,
            question: 'How many sub-events are there in idEEEas?',
            answer:
                'There are 12 sub-events in IdEEEAs.',
            isOpen: false,
        },
        {
            id: 4,
            question: 'If my abstract gets selected for two events Aavishkar and Technocon, can our team participate in both?',
            answer:
                'YES.',
            isOpen: false,
        },
        {
            id: 5,
            question: 'If I am shortlisted for two rounds on the same day, will it be permissible to attend both?',
            answer:
                'YES',
            isOpen: false,
        },
        {
            id: 6,
            question: 'Where will I find the rules and regulations for the events?',
            answer:
                'Click on the event cards, download the brochure to know the rules and regulations.',
            isOpen: false,
        },
        {
            id: 7,
            question: 'For which events the on-spot registrations will be available?',
            answer:
                'Blitz, Cnario, IdEEEas idol, Photographia, Rectifier, Robotics, trIEEEvia and  Webify are the events in which on-spot regestrations are available.',
            isOpen: false,
        },
        {
            id: 8,
            question: 'If I have any doubts , whom should I contact with?',
            answer:
                'Do refer the contact page',
            isOpen: false,
        },
    ]);

    const toggleAnswer = (id) => {
        setFaqs(
            faqs.map((faq) =>
                faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    return (
        <div className="faq-container">
            <div className='faq-heading-container'>
            <h2 className='faq-heading'>FAQ</h2>
            </div>
            <div className='faq-mini-container'>
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`faq-item ${faq.isOpen ? 'open' : ''}`}
                        onClick={() => toggleAnswer(faq.id)}
                    >
                        <img
                            className="arrow-icon"
                            src={faq.isOpen ? upArrow : downArrow}
                            alt={faq.isOpen ? 'Up Arrow' : 'Down Arrow'}
                        />
                        <h3 className="question">{faq.question}</h3>
                        {faq.isOpen && (
                            <p className="answer">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
