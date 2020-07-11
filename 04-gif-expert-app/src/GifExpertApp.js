import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

//Funcional components
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball','Doctor Stone', 'One Piece']);

 
    const handleAdd = (e) => {
        //spread operador, se obtiene todas las categories y luego se añade el otro elemento al estado (arreglo)
        setCategories( [...categories, 'Shingeky']);
        setCategories( cats => [...cats, 'Shingeky']); // toma el estado original, lo cambie y regresa el nuevo estado
     }
    return (
        <> 
            <h1>GifExpertApp</h1>
            <AddCategory/>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> {category}</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp; 