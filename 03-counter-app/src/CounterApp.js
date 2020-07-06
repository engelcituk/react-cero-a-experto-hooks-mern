import React from 'react';
import PropTypes from 'prop-types'

//Funcional components
const CounterApp = ({value}) => {

    //handleAdd
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <> 
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        {/* <button onClick={ (e) => {handleAdd(e)} } >+1</button> */}
         <button onClick={ (e) => {handleAdd(e)} } >+1</button> {/*simplificado */}

        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number
}


export default CounterApp;