import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState); //state es el valor actual, setStave cuando se vaya a cambiar

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
    
}
