import React  from 'react';
import {mount}  from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';



describe('Pruebas en DashboardRoutes', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged:true,
            name:'Lois'
        }
    };

    test('Debe de mostrase correctamente ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue  }>
                <MemoryRouter>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Lois');

    })
     
});
