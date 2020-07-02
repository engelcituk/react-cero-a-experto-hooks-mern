const apiKey = '12QuvbhiUpddRoLzMr16EG5qcDYUi3XU';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( respuesta => respuesta.json())
    .then( ({data}) => { //desestructuración
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch( console.warn )