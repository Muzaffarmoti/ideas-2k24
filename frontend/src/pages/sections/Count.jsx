import React, { useState, useEffect } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <div className='count-maincontainer'>
      <div className='count-heading'>
        <h2 className='count-heading'>2023 Registration Count</h2>
      </div>
      <div className='count-data'>
        <h1 className='count-no'>{count}</h1>
      </div>
    </div>
  );
};

export default Count;
