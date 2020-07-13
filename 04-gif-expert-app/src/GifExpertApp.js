import React, { useState } from 'react';
import  {AddCategory}  from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Funcional components
const GifExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState(defaultCategories);

 
   /* const handleAdd = (e) => {
        //spread operador, se obtiene todas las categories y luego se añade el otro elemento al estado (arreglo)
        setCategories( [...categories, 'Shingeky']);
        setCategories( cats => [...cats, 'Shingeky']); // toma el estado original, lo cambie y regresa el nuevo estado
    }*/
    return (
        <> 
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category => ( //return entre parentesis
                        <GifGrid
                            key={category}
                            category= { category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp; 