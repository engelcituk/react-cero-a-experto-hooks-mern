const express = require('express');
require('dotenv').config();


//crear el servidor de express 
const app = express();

//directorio público

app.use( express.static('public') )

//rutas
    //auth
app.use('/api/auth', require('./routes/auth') );
    //Crud eventos


//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo el puerto ${process.env.PORT}`)
});

