import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0}); //estado del componente // coordenadas , valor inicial un objeto en ceros
    const {x,y}= coords;

    useEffect(() => {
        //lo que sucede cuando se monta el componente
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords)
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            //se desmonta el componente
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Mensaje</h3>
            <p>
                cooordenadas:
                x:{x} y:{y}
            </p>
        </div>
    )
}
