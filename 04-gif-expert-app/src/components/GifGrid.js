import React from 'react'
//import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({category}) => {
    //const [images, setImages] = useState([]); //images el arreglo, setImages la funcion que lo llena
    const { loading } = useFetchGifs();
    
   /*  useEffect( () => { 
        //se ejecuta una sola vez
        getGifs(category).then(setImages);
    },[category]);
 */
    
    return (
        <>
        <h3>{category}</h3>
        {loading ? 'Cargando...': 'fin de carga'}
            {/* <div className="card-grid">
                
                {
                    images.map( img => ( 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
