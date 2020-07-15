import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { //memoriza el componente si los argumentos no cambian
    console.log('me volví a generar :(');
    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})