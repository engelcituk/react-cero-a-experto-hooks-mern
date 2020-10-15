
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

const actualizarEvento =  async ( req, res = response ) => {
    
    const idEvento = req.params.id;
    const uid = req.uid;


    try {

        const evento = await Evento.findById(idEvento);

        //si evento no existe
        if( !evento ){

            res.status(404).json({
                ok: false,
                msg: 'El evento no existe en la base de datos'
            });
        } 
        //verifico si la persona que quiere actualizar el evento sea el mismo que lo creó
        if( evento.user.toString() !== uid){ //en user solo se tiene el id del usuario

            res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio para editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body, //desestruturo todo lo que viene en el body y le agrego el uid para el user
            user: uid
        }

        //{new: true} es para indicar que se regrese el evento ya actualizado y no el viejo
        const eventoActualizado = await Evento.findByIdAndUpdate( idEvento, nuevoEvento,{ new : true } );

        res.status(200).json({
            ok: true,
            evento: eventoActualizado
        });
        
    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

    

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