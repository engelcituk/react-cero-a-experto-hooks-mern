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
     });

     test('debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = 'hola soy...';
        const subtitulo = 'soy el subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo = {subtitulo}
            />
        );
        const textoH3 = wrapper.find('h3').text();
        expect(textoH3).toBe(subtitulo);
    })
     
     
})