import React, { useState, useEffect} from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);
    useEffect( () => {
        getGifs();

    },[])
    const getGifs = async()=> {
        const url = `https://api.giphy.com/v1/gifs/search?q=one piece&limit=10&api_key=12QuvbhiUpddRoLzMr16EG5qcDYUi3XU`;

        const respuesta = await fetch(url);
        const {data} = await respuesta.json(); // data se desestructura
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
    }

    return (
        <div>
            <h3>{category}</h3>
            <p>{count}</p>
            <button onClick={ ()=>setCount( count +1 )}>+</button>
        </div>
    )
}
