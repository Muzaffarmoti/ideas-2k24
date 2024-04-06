import React, { useState } from 'react';
import './FAQ.css';
import upArrow from '../../assets/images/FAQicon/up-arrow-white.png';
import downArrow from '../../assets/images/FAQicon/arrow-down-white.png';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: 'What is Lorem Ipsum?',
            answer:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            isOpen: false,
        },
        {
            id: 2,
            question: 'Why do we use it?',
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            isOpen: false,
        },
        {
            id: 3,
            question: 'Where does it come from?',
            answer:
                'Contrary to popular belief, Lorem Ipsum is not simply random text.',
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
            <h3>FAQ</h3>
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
