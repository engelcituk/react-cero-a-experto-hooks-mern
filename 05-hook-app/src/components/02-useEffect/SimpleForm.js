import React, { useEffect, useState } from 'react';

import './useEffects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    // se ejecuta solo una vez cuando el componente es cargado
    useEffect( () => {
        console.log('hey');
    },[]);

    //si queremos que se ejecute cada vez que el formulario cambie hacemos uso de otro useEffect
    useEffect( () => {
        console.log('formState cambió');
    },[formState]);

     //si queremos que se ejecute cada vez que una parte del formulario cambie (EMAIL) hacemos uso de otro useEffect
     useEffect( () => {
        console.log('email cambió');
    },[email]);

    const handleInputChange = ({target}) => { //target es e desestructurado (e)
        setFormState({...formState, [target.name]:target.value});
        //setFormState({...formState, name:target.value}) //otra forma

    }
    return (
        <>
           <h1>useEffect</h1> 
           <hr/>
           <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tú nombre"
                    autoComplete="off"
                    value={name}
                    onChange= {handleInputChange}
                />
           </div>
           <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange= {handleInputChange}
                />
           </div>
        </>
    )
}
