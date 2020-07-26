import React from 'react'

export const TodoListItem = ({ todo, indice, handleToggle, handleDelete}) => {
    return (
        <li
            className='list-group-item'
        >
            <p
                className={`${todo.done && 'complete'}`} /* si la tarea está hecha aplico la clase css complete, condicion logica and */
                onClick={() => handleToggle(todo.id)} /* para marcar como realizado */
            >
            {indice +1} {todo.description}</p>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)} /* para borrar */
            >Borrar</button>
        </li>
    )
}
