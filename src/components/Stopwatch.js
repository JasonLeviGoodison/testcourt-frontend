import { Prompt } from 'react-router';
import { useState, useEffect } from 'react';

function Stopwatch(props) {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    setSeconds(seconds + 1);
  }

  useEffect(() => {
    let timer = setInterval(tick, 1000);
    setTimer(timer);
    return function cleanup() {
      clearInterval(timer);
    }
  }, [seconds]);

  const formatter = (sec) => {
    return `${Math.floor(sec / 60)} minutes ${sec % 60} seconds`
  }

  return (
    <>
      <Prompt
        when={true}
        message={"\n\nNot done yet!\n" +
          `You need to Dock-it this time:\n\n${formatter(seconds)}.\n\n` +
          "Do it now so you don't forget."}
      />
      <div style={{ textAlign: 'center' }}>{formatter(seconds)}</div>
    </>
  );
}

export default Stopwatch;
