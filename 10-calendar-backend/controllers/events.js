
const { response } = require('express'); //requiero express para no perder el intellisense
const Evento = require('../models/Evento'); //requiero al esquema del modelo Evento


const getEventos =  async (req, res = response ) => {

    //populate para traer los datos del usuario que creó el evento
    const eventos = await Evento.find().populate('user','name'); //user es la referencia de relacion, name el campo que quiero de user

        res.status(200).json({
            ok: true,
            eventos
        });
}

//el guardado del evento es una tarea asyncrona, por lo qie es necesario el async
const crearEvento = async (req, res = response ) => {

    const evento = new Evento( req.body );

    try {

        evento.user = req.uid; //el uid es el id del usuario que hace la peticion, se obtiene del token

        const eventoGuardado = await evento.save(); // guardo

        res.status(200).json({
            ok: true,
            msg: 'Evento guardado',
            evento: eventoGuardado
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    
    

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