import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './estilo.css';
export const MultipleCustomHooks = () => { 
    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // si lo primero es true, se ejecuta lo siguiente !!data && data[0]; !! doble negacion transforma el null en un false
    const {author, quote} = !!data && data[0]; //si tenemos data, entonces extrae la data (autor y frase) en la posicion 0

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                        Cargando...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button
                className="btn btn-primary"
                onClick={increment}
            >siguiente frase</button>            
        </div>
    )
}
