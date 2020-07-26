import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';
import { TodoList } from './TodoList';


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
    
    const [{description}, handleInputChange, reset] = useForm({ //custom hook para manipular campos de formulario
        description:''
    });
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
    const hanleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){ //si el campo descripcion es menor o igual a 1, se limpia espacios con trim
            return;
        }
        const newTodo = {
            id : new Date().getTime(),
            description,
            done: false
        }

        const action = {
            type: 'add',
            payload : newTodo
        }
        dispatch(action);
        reset();//reseteo los campos del formulario

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
                    <h4>Agregar tarea</h4>
                    <hr/>
                    <form
                        onSubmit={hanleSubmit}
                        >
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Indique la tarea a realizar"
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mt-1 btn-block"
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
