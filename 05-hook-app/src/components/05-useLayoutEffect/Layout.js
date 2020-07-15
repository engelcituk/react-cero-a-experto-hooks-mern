import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './estilos.css';
export const Layout = () => {
    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // si lo primero es true, se ejecuta lo siguiente !!data && data[0]; !! doble negacion transforma el null en un false
    const {quote} = !!data && data[0]; //si tenemos data, entonces extrae la data (autor y frase) en la posicion 0
    const pTag = useRef();
    const [boxsize, setBoxsize] = useState({})

    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect());
    }, [quote])
    return (
        <div>
            <h1> useLayoutEffect Breaking bad quotes</h1>
            <hr/>
            
                <blockquote className="blockquote text-right">
                    <p
                        className="mb-0"
                        ref={pTag}
                    >{quote}</p>
                </blockquote>
                <pre>
                    {JSON.stringify(boxsize,null, 3)}
                </pre>
                     
            <button
                className="btn btn-primary"
                onClick={increment}
            >siguiente frase</button>            
        </div>
    )
}
