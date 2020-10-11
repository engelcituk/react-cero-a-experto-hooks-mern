/** 
 Rutas de usuarios o Auth 
 host + /api/auth
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
//const router = express.Router; 
const router = Router();
const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', crearUsuario);
router.post('/', loginUsuario );
router.get('/renew', revalidarToken );


module.exports = router; //exporto, algo diferente a Ecma