
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

export { fetchSinToken }