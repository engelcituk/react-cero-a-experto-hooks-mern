import React, { useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]); //images el arreglo, setImages la funcion que lo llena
    
    useEffect( () => { 
        getGifs(); //se ejecuta una sola vez
    },[]);

    //hago la peticion asincrona
    const getGifs = async()=> {
        const url = `https://api.giphy.com/v1/gifs/search?q=one piece&limit=10&api_key=12QuvbhiUpddRoLzMr16EG5qcDYUi3XU`;

        const respuesta = await fetch(url);
        const {data} = await respuesta.json(); // data es json que se desestructura
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs)
    }

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
