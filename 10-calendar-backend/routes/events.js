/** 
 Rutas de crud de eventos
 host + /api/eventos
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
const { check } = require('express-validator'); //middleware para validar campos

const { validarCampos } = require('../middlewares/validarCampos') //middleware para verificar sino hay errores en los campos
const { validarJwt } =require('../middlewares/validarJwt')
const { isDate } =require('../helpers/isDate')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');


const router = Router();

//como todas las peticiones a esta ruta, podemos resumir la aplicación del midleware de la sig manera:
router.use(validarJwt);

router.get('/',  getEventos ); 

router.post(
    '/',
    [
        check('title','El título es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate ),
        validarCampos
    ],
    crearEvento
); 

router.put('/:id',  actualizarEvento ); 

router.delete('/:id',eliminarEvento ); 


module.exports = router; //exporto, algo diferente a Ecma