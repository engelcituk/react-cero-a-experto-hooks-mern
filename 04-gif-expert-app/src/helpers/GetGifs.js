//hago la peticion asincrona
export const getGifs = async(category)=> {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=12QuvbhiUpddRoLzMr16EG5qcDYUi3XU`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json(); // data es json que se desestructura
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
