import ReactStopwatch from 'react-stopwatch';
import { Prompt } from 'react-router';
import { useState } from 'react';

function Stopwatch(props) {
    const [time, setTime] = useState(null);

    return (
        <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            render={({ formatted, hours, minutes, seconds }) => {
                return (
                    <>
                        <Prompt
                            when={true}
                            message={"Not done yet!\n"+
                                     `You need to Dock-it this time ${formatted}.`}
                        />
                        <div>Reviewing for { formatted }</div>
                    </>
                );
            }}
        />);
}

export default Stopwatch;