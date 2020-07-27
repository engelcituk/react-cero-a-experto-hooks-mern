import React from 'react';
import {shallow, mount} from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from 'react-dom/test-utils';


describe('Pruebas en <TodoApp/>', () => {

    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn( ()=> {})

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();                
    });

    test('Debe de agregar un TODO', () => {
        const wrapper =  mount(<TodoApp/>);
        act(()=> {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('todoApp 2')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        //expect(localStorage.setItem).toHaveBeenCalledWith({});
    });
    
    test('Debe de eliminar un TODO', () => {
       wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); 
       wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id); 

       expect(wrapper.find('h1').text().trim()).toBe('todoApp 0')

    });
    
    
})
