import React from 'react'

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 59 && mins === 59 && secs === 59) 
            reset()
        else if (mins === 59 && secs === 59) {
            setTime([hrs + 1, 0, 0]);
        } else if (secs === 59) {
            setTime([hrs, mins + 1, 0]);
        } else {
            setTime([hrs, mins, secs + 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;