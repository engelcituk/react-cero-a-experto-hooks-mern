import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', ()=> {
    /* test('deben de moestrar el mensaje "hola soy..."', () => {
         const saludo = 'hola soy...';
     
         const { getByText } = render( <PrimeraApp saludo={saludo} /> )
         
         expect( getByText(saludo)).toBeInTheDocument();
     }) */
     test('debe de mostrar  <PrimeraApp/> correctamente ', () => {
        const saludo = 'hola soy...';

        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();

     })
     
})