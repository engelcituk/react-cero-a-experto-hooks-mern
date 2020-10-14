/** 
 Rutas de crud de eventos
 host + /api/eventos
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
const router = Router();
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

router.get('/', getEventos ); 

router.post('/', crearEvento ); 

router.put('/:id', actualizarEvento ); 

router.delete('/:id', eliminarEvento ); 



module.exports = router; //exporto, algo diferente a Ecma