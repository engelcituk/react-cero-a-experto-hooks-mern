/** 
 Rutas de usuarios o Auth 
 host + /api/auth
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
const { check } = require('express-validator'); //middleware para validar campos
const { validarCampos } = require('../middlewares/validarCampos') //middleware para verificar sino hay errores en los campos
//const router = express.Router; 
const router = Router();
const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new',
    [// middlewares de validacion
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos

    ],
    crearUsuario
);

router.post(
    '/', 
    [// middlewares de validacion
        check('email','El email es obligatorio').isEmail(),
        check('password','El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    loginUsuario
);
router.get('/renew', revalidarToken );


module.exports = router; //exporto, algo diferente a Ecma