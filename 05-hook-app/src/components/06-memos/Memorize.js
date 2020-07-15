import React, { useState } from 'react';
import { Small } from './Small';
import { useCounter } from '../../hooks/useCounter';

import './estilos.css'
export default function Memorize() {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <button
                className="btn btn-primary mt-3 mr-3"
                onClick={increment}
            > +1 </button>

            <button
                className="btn btn-primary mt-3"
                onClick={ () => {
                    setShow(!show)
                }}
            > show/hide {JSON.stringify(show)} 
            </button>
        </div>
    )
}
