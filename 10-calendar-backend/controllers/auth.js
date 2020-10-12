
const {response} = require('express'); //requiero express para no perder el intellisense


const loginUsuario = (req, res = response ) => {

    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email, password 
    });
}


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Register',
        name, email, password 
    });
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