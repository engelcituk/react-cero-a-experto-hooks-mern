import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState); //values es el valor actual, setStave cuando se vaya a cambiar

    const reset = () => { 
        setValues(initialState);
    };
    
    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]:target.value
        });
        
    }
    return [values, handleInputChange, reset]; // retorno un arreglo
    
}