import React  from 'react';
import {mount}  from 'enzyme';
import { MemoryRouter , Route} from 'react-router-dom';
import { types } from '../../../types/types';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en <SearchScreen/>', () => {

    
    test('Debe de mostrarse correctamente con valores por defecto', () => {
       
        const wrapper = mount(
           <MemoryRouter initialEntries={['/search']}>
               <Route path="/search" component= {SearchScreen}/>
           </MemoryRouter>
       )       

       expect(wrapper).toMatchSnapshot();        
       expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');        


    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component= {SearchScreen}/>
            </MemoryRouter>
        )
        
       expect(wrapper.find('input').prop('value')).toBe('batman');        
       expect(wrapper).toMatchSnapshot();        
        
    })
    
});