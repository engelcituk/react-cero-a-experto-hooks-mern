
const { response } = require('express'); //requiero express para no perder el intellisense
const Usuario = require('../models/Usuario'); //requiero al esquema del modelo Usuario

const loginUsuario = (req, res = response ) => {

    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email, password 
    });
}


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;

    
    try {
        const usuario = new Usuario( req.body ); //se le pasa todo lo que se obtiene desde el body del request

        await usuario.save(); //guardo en la DB

        res.status(201).json({
            ok: true,
            msg: 'Registro exitoso'
        });
                
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin',
        });
        
    } 


    
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}