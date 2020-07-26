import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo,indice) => (
                    <TodoListItem
                        key = {todo.id }
                        todo={todo}
                        indice = {indice}
                        handleToggle = {handleToggle}
                        handleDelete = {handleDelete}
                    />
                ))
            }
        </ul>
    )
}
