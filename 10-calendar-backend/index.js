const express = require('express');
require('dotenv').config();


//crear el servidor de express 
const app = express();

//directorio público

app.use( express.static('public') )

//rutas
app.get('/', (req, res) => {

    console.log('peticion desde / ')
    res.json({
        ok: true,
    });
});

//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo el puerto ${process.env.PORT}`)
});

