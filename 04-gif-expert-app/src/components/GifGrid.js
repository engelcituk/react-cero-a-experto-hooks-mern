import React, { useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]); //images el arreglo, setImages la funcion que lo llena
    
    useEffect( () => { 
        //se ejecuta una sola vez
        getGifs(category).then(setImages);
    },[category]);

    
    return (
        <>
        <h3>{category}</h3>
            <div className="card-grid">
                
                {
                    images.map( img => ( 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
