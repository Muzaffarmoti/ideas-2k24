import React, { useState, useEffect, useRef } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const targetCount = 2006;
    let currentCount = 0;

    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += Math.ceil((targetCount - currentCount) / 10);
        setCount(currentCount);
      } else {
        clearInterval(interval);
        setCount(targetCount);
      }
    }, 60);

    return () => clearInterval(interval);
  };

  return (
    <div ref={countRef} className='count-maincontainer'>
      <div className='count-heading'>
        <h2 className='count-heading'>IdEEEas 2k23 Registration Count</h2>
      </div>
      <div className='count-data'>
        <h1 className='count-no'>{count}</h1>
      </div>
    </div>
  );
};

export default Count;
