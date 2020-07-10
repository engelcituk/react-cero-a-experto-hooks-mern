import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', ()=> {
    
     test('debe de mostrar  <CounterApp/> correctamente ', () => {

        const wrapper = shallow( <CounterApp/>);

        expect(wrapper).toMatchSnapshot();
     });

     test('debe de mostrar el valor por defecto 100  ', () => {
       
        const wrapper = shallow( <CounterApp value={100}/> );
        const counter = wrapper.find('h2').text().trim();
        expect(counter).toBe('100');
    }) 
     
     
})