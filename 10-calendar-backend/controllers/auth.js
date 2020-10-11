
const {response} = require('express'); //requiero express para no perder el intellisense


const loginUsuario = (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'login'
    });
}


const crearUsuario = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Register'
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