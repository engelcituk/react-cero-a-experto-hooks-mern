const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        //en process.env.DB_CNN en el archivo env está la cadena de conexion, mongoose.connect es una promesa
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online')
    
    } catch (error) {
        console.log(error)
        throw new Error('Error la hora de inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}