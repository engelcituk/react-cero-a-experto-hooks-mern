import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

//Funcional components
const PrimeraApp = ({saludar}) => {
    const saludo =  'Hola mundo desde una constante';
    const objeto = {
        nombre: 'Juan',
        edad: 28
    }
    
    return (
        <> {/* los fragment se pueden poner omitiendo el texto Fragment*/}
            <h1>{saludo}</h1>
            <pre>objeto {JSON.stringify(objeto, null, 3)}</pre>
            <p>Mi primera aplicación</p>
            <p>props {saludar}</p>
        </>
    );
}

PrimeraApp.propType = {
    saludar: PropTypes.string.isRequired
}
export default PrimeraApp;