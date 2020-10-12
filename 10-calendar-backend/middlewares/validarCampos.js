const { response } = require('express'); //requiero express para no perder el intellisense
const { validationResult } = require('express-validator'); //para el resultado de la validacion 

const validarCampos = ( req, res = response, next ) => {
    //manejo de errores
    const errors = validationResult( req );
    
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}