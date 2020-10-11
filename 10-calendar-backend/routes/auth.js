/** 
 Rutas de usuarios o Auth 
 host + /api/auth
*/
const { Router} = require('express'); //desestructuro de express y obtengo a Router
//const router = express.Router; 
const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
    });
});

module.exports = router; //exporto, algo diferente a Ecma