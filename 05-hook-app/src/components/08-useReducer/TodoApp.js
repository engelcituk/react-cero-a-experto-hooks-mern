import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = ( ) => {
    return JSON.parse(localStorage.getItem('todos')) || []; // regreso la lista parseada desde localstorage o un arreglo vacío
   
   /* return [{
        id : new Date().getTime(),
        description:'Aprender React',
        done: false
    }];*/
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);//ejecuto la accion
        //reset();//reseteo los campos del formulario

    }
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload : newTodo
        });
    }

    return (
        <div>
            <h1>todoApp {todos.length}</h1>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                    <TodoList
                        todos = {todos}
                        handleToggle = {handleToggle}
                        handleDelete ={handleDelete}
                    />
                </div>
                <div className="col-md-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
