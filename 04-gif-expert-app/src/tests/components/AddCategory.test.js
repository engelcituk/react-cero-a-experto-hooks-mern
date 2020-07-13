
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en AddCategory', ()=> {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });

    test('debe de mostrarse correctamente <AddCategory/>', async () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola mundo';

        input.simulate('change',{target : {value}});

        //const inputAfter = wrapper.find("input"); // en lugar de agregar el parrafo en el componente
        //expect(inputAfter.prop("value")).toBe(value); //obtenemos el nuevo valor del input

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de postear la informacion obsubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1. simular el inputChange
        const value = 'Hola mundo';
        const input = wrapper.find('input');
        input.simulate('change',{target : {value}});
        //2.simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //llamado una sola vez
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function)); //se espera que se llame cualquier funcion

        //4. el valor del input debe ser ''
        expect(input.prop('value')).toBe('');

    })
    
    
    
})