import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', ()=> {
    test('deben de moestrar el mensaje "hola soy..."', () => {
         const saludo = 'hola soy...';
     
         const { getByText } = render( <PrimeraApp saludo={saludo} /> )
         
         expect( getByText(saludo)).toBeInTheDocument();
     })
})