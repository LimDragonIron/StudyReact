import {useState} from 'react';
import React from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);

    const increase = () =>{
      setNumber(number + 1 );
    };
  
    const increaseAsync = () =>{
        setTimeout(()=>{
            setNumber(number + 1);
        },2000);
    };
  
    return (
        <>
            <button onClick={increase}>increase</button>
            <button onClick={increaseAsync}>increaseAsync</button>
            <h1>{number}</h1>
        </>
    )
}
