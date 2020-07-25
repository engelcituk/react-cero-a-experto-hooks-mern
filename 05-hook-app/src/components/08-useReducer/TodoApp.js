import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id : new Date().getTime(),
    description:'Aprender React',
    done: false
}];
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    console.log(todos);

    const hanleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id : new Date().getTime(),
            description:'Nueva tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload : newTodo
        }
        dispatch(action);

        console.log('nueva tarea');
    }
    return (
        <div>
            <h1>todoApp {todos.length}</h1>
            <hr/>
            <div className="row">
                <div className="col-md-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo,indice) => (
                                <li
                                    key={todo.id}
                                    className='list-group-item'
                                >
                                <p className="text-center ">{indice +1} {todo.description}</p>
                                <button
                                    className="btn btn-danger"
                                >Borrar</button>
                                </li>
                            ))
                        }

                    </ul>
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
