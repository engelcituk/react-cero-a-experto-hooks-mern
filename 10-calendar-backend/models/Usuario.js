const { Schema, model } = require('mongoose'); //de mongoose requiero solo Schema y model, por lo que se obtiene con la desestructuracion 

const UsuarioSchema = Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = model('Usuario', UsuarioSchema);

