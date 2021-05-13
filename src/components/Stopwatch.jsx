import { Prompt } from 'react-router';
import React, { useState, useEffect } from 'react';

function Stopwatch() {
  // eslint-disable-next-line no-unused-vars
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const newTimer = setInterval(tick, 1000);
    setTimer(newTimer);
    return function cleanup() {
      clearInterval(newTimer);
    };
  }, [seconds]);

  const formatter = (sec) => `${Math.floor(sec / 60)} minutes ${sec % 60} seconds`;

  return (
    <>
      {/* {<Prompt
        when
        message={'\n\nNot done yet!\n'
          + `You need to Dock-it this time:\n\n${formatter(seconds)}.\n\n`
          + "Do it now so you don't forget."}
      />} */}
      <div style={{ textAlign: 'center' }}>{formatter(seconds)}</div>
    </>
  );
}

export default Stopwatch;
