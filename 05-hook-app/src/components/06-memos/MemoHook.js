import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';//helper

import './estilos.css'
export default function MemoHook() {
    const {counter, increment} = useCounter(1500);
    const [show, setShow] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:  <small> {counter} </small> </h3>
            <hr/>
            <p> { memoProcesoPesado } </p>
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
