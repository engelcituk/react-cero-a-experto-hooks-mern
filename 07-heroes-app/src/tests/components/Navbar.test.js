import React  from 'react';
import {mount}  from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { Navbar } from '../../components/ui/Navbar';
import { types } from '../../types/types';
import '@testing-library/jest-dom';


describe('Pruebas en Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location : {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged:true,
            name: 'Erick'
        }
    }
   
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue  }>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>        
        </AuthContext.Provider>
    );

    afterEach( ()=> {
        jest.clearAllMocks();
    });

    test('Debe de mostrase correctamente ', () => {
        expect(wrapper).toMatchSnapshot();        
        expect(wrapper.find('.text-info').text().trim()).toBe('Erick');        
    });

    test('Debe de llamar el logout y usar el history', () => {
        
        wrapper.find('button').prop('onClick')();       
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });        
        
        expect(historyMock.replace).toHaveBeenCalledWith('/login');        

    })
    
     
});
