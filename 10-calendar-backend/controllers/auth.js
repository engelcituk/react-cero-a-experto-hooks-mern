
const {response} = require('express'); //requiero express para no perder el intellisense


const loginUsuario = (req, res = response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email, password 
    });
}


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    if( name.length < 5){
        return res.status( 400 ).json({
            ok: false,
            msg: 'El nombre deber ser igual o mayor a 5 caracteres'
        });
    }
    res.json({
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