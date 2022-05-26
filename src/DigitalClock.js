import React, { useState } from 'react'

export default function DigitalClock() {
    let liveTime = new Date().toLocaleTimeString();
    let [time , Ltime] = useState(liveTime)

    setInterval(() => {
        liveTime = new Date().toLocaleTimeString();
        Ltime(liveTime);
    }, 1000);
    return (
        <>
            <h1>{time}</h1>

        </>
    )
}
