import React  from 'react';
import {mount}  from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('Pruebas en HeroeScreen', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={historyMock}/>        
        </MemoryRouter> 
    );

    test('Debe de mostrase el componente Redirect sino hay argumentos en la URL ', () => {
        //expect(wrapper).toMatchSnapshot();        
        expect(wrapper.find('Redirect').exists()).toBe(true);        
    });

    
    
     
});



