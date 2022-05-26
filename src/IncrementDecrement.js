import React, { useState } from 'react'

export default function IncrementDecrement() {
    let [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        if (number === 0) {
            alert("Reached at 0.")
        } else {
            setNumber(number - 1);
        }
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
