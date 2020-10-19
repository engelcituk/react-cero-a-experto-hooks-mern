
const baseUrl = process.env.REACT_APP_API_URL; // //http://localhost:4000/api

const fetchSinToken = ( endpoint, data, method = 'GET') => {
   const url = `${ baseUrl }/${ endpoint }`; //endpoint auth

   if( method === 'GET' ){
       return fetch( url );
   } else {
       return fetch(url, {
           method,
           headers:{
            'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       })
   }
}

const fetchConToken = ( endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`; //endpoint auth
    const token = localStorage.getItem('token') || ''; // con or nos aseguramos de no enviar un null

    if( method === 'GET' ){
        return fetch( url, {
            method,
            headers:{
                'x-token': token, //leido desde el localstorage
            },
        });
    } else {
        return fetch(url, {
            method,
            headers:{
             'Content-Type': 'application/json',
             'x-token': token, //leido desde el localstorage
            },
            body: JSON.stringify(data)
        })
    }
 }

export { fetchSinToken, fetchConToken }