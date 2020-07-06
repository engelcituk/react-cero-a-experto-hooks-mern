import React, {useState} from 'react';
import PropTypes from 'prop-types'

//Funcional components
const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0); //retorna un arreglo []


    //handleAdd
    const handleAdd = (e) => {
       setCounter( counter + 1);
        // setCounter( (c) => c + 1)

    }

    return (
        <> 
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* <button onClick={ (e) => {handleAdd(e)} } >+1</button> */}
         <button onClick={ (e) => {handleAdd(e)} } >+1</button> {/*simplificado */}

        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number
}


export default CounterApp;