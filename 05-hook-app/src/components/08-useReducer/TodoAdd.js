import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{description}, handleInputChange, reset] = useForm({ //custom hook para manipular campos de formulario
        description:''
    });

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

        handleAddTodo(newTodo); //llama al dispatch
        reset();//reseteo los campos del formulario
    }
    
    return (
        <>
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
        </>
    )
}
