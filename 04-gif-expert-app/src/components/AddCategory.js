import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log('handleInputChange trabajando');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( categorias => [inputValue, ...categorias]); 
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
                <input
                type="text"
                value = {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}

