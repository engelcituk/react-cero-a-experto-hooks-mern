import React, { useState }  from 'react';
import './counter.css'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
    });

    const {counter1, counter2} = state;
    return (
        <>
            <h1>Counter {counter1} </h1>
            <h2>Counter {counter2} </h2>

            <hr/>

            <button
                className="btn btn-primary"
                onClick={ () => { setState( {...state, counter1: counter1 +1} )}} //spread operator para obtener todo el state y modificar el necesario
            >+1</button>
        </>
    )
}
