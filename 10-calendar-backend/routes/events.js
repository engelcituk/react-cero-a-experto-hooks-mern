/** 
 Rutas de crud de eventos
 host + /api/eventos
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
const router = Router();
const { validarJwt } =require('../middlewares/validarJwt')

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

//como todas las peticiones a esta ruta, podemos resumir la aplicación del midleware de la sig manera:
router.use(validarJwt);

router.get('/',  getEventos ); 

router.post('/',  crearEvento ); 

router.put('/:id',  actualizarEvento ); 

router.delete('/:id',eliminarEvento ); 


module.exports = router; //exporto, algo diferente a Ecma