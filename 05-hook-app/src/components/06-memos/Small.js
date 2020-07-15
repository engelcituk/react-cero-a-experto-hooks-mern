import React from 'react'

// se usa memo, para memorizar algo, Small se llama solo si sus props cambian, sino se llama la version memorizada del componente
export const Small = React.memo(({value}) => {
    console.log('me volví a llamar :( ')
    return (
        <div>
            <small>{value}</small>
        </div>
    )
});