import React, {useState} from 'react';
import PropTypes from 'prop-types'

//Funcional components
const CounterApp = ({value=12}) => {

    const [counter, setCounter] = useState(0); //retorna un arreglo []

    //handleAdd
    const handleAdd = (e) => {
       setCounter( counter + 1);
        // setCounter( (c) => c + 1)
    }

    //handleReset
    const handleReset = (e) => {
        setCounter( value);
     }

     //handleSubtract
    const handleSubtract = (e) => {
        setCounter( counter - 1);
     }

    return (
        <> 
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* <button onClick={ (e) => {handleAdd(e)} } >+1</button> */}
         <button onClick={ handleAdd } >+1</button> {/*simplificado */}
         <button onClick={ handleReset } >reset</button> 
         <button onClick={ handleSubtract } >-1</button> 


        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number
}

export default CounterApp;