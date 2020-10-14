
const { response } = require('express'); //requiero express para no perder el intellisense


const getEventos =  (req, res = response ) => {

        res.status(200).json({
            ok: true,
            msg: 'getEventos'
        });
}

const crearEvento =  (req, res = response ) => {
    
    res.status(200).json({
        ok: true,
        msg: 'crear evento'
    });

}

const actualizarEvento =  (req, res = response ) => {
    
    res.status(200).json({
        ok: true,
        msg: 'actualizar evento'
    });

}

const eliminarEvento =  (req, res = response ) => {
    
    res.status(200).json({
        ok: true,
        msg: 'eliminar eventos'
    });

}




module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}