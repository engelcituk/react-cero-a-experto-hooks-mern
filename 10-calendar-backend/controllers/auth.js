
const { response } = require('express'); //requiero express para no perder el intellisense
const Usuario = require('../models/Usuario'); //requiero al esquema del modelo Usuario
const bcrytp = require('bcryptjs'); //para la encriptacion de contraseñas
const { generarJWT } = require('../helpers/jwt') 

const loginUsuario = async (req, res = response ) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({email}); //le objeto se podria igial dejarlo así {email: email}

        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con ese correo no existe'
            });
        } 

        //confirmar los passwords, compara el password que se recibe en la peticion con el password en la DB
        const validPassword = bcrytp.compareSync(password, usuario.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //Genera nuestro JWT
        const token = await generarJWT( usuario.id, usuario.name );

        res.status(200).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin',
        });
        
    }
}


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;
    
    try {
        //findOne es una promesa, retorna un objeto que cumpla esa condicion, sino regresar un null
        let usuario = await Usuario.findOne({email}); //le objeto se podria igial dejarlo así {email: email}

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            });
        } 

        usuario = new Usuario( req.body ); //se le pasa todo lo que se obtiene desde el body del request (name, email, password)
        
        //Encriptar contraseña
        const salt = bcrytp.genSaltSync(); //genero la sal
        usuario.password = bcrytp.hashSync( password, salt); //encripto la contraseña usando la sal

        await usuario.save(); //guardo en la DB
        //Genera el JWT 
        const token = await generarJWT( usuario.id, usuario.name );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
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