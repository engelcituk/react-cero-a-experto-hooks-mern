/** 
 Rutas de usuarios o Auth 
 host + /api/auth
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
//const router = express.Router; 
const router = Router();
const { loginUsuario, crearUsuario, renewToken } = require('../controllers/auth');

router.post('/', loginUsuario );
router.post('/new', crearUsuario);
router.get('/renew', renewToken );


module.exports = router; //exporto, algo diferente a Ecma