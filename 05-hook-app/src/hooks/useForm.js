import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState); //values es el valor actual, setStave cuando se vaya a cambiar

    const handleInputChange = ({target}) => {
        
        setValues({
            ...values,
            [target.name]:target.value
        });
        
    }
 
    return [values, handleInputChange]; // retorno un arreglo
    
}
