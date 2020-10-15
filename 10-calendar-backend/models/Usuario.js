const { Schema, model } = require('mongoose'); //de mongoose requiero solo Schema y model, por lo que se obtiene con la desestructuracion 

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model('Usuario', UsuarioSchema);

