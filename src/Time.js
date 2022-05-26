import React, { useState } from 'react'

export default function Time() {

    let date = new Date().toLocaleTimeString();
    const [time, setTime] = useState(date);
    function NewTime() {
        let newtime = new Date().toLocaleTimeString();
        setTime(newtime);
    }
    return (
        <>
            <p>{time}</p>
            <button onClick={NewTime}>Click me</button>
        </>
    )
}
