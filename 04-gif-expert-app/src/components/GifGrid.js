import React from 'react'
import  GifGridItem  from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    //const [images, setImages] = useState([]); //images el arreglo, setImages la funcion que lo llena
    const { data:images, loading } = useFetchGifs(category);
    
    return (
        <>
        <h3 className="animate__animated animate__flash">{category}</h3>
        {loading && <p>Cargando</p>}
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
