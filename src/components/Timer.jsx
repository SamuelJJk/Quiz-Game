import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className='timer'>
      {seconds}
    </div>
  );
}

export default Timer;
