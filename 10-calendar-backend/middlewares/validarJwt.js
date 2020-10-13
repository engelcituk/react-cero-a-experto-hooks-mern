const { response } = require('express'); //requiero express para no perder el intellisense
const jwt = require('jsonwebtoken');

const validarJwt = ( req, res = response, next ) => {
    
    //x-token headers
    const token = req.header('x-token');
    
    if( !token ){
        return res.status(401).json({
            ok:false,
            msg:'No hay un token en la petición'
        })
    }

     try {

         const {uid, name } = jwt.verify( //desestructuración de payload
            token,
            process.env.SECRET_JWT_SEED,
         );

         req.uid = uid
         req.name = name

         
     } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'Token no válido'
        })
     }
    next();
}

module.exports = {
    validarJwt
}