import React, { useRef } from 'react';

import './estilo.css';
export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e) => {
        inputRef.current.select();
    }

    console.log(inputRef);
    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"                
            />

            <button
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >Focus</button>
        </div>
    )
}
