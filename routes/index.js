const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController');
const {validarId} = require('../middlewares/validarId');
const {validacionCrearJugador} = require('../middlewares/validacionCrearJugador');
const {validacionEditarJugador} = require('../middlewares/validacionEditarJugador');
const auth = require('../middlewares/auth');




router.get('/', index.index);
router.get('/ver', index.verJugadores);
router.get('/ver/:id', validarId, index.verJugador);
router.get('/crearsession', index.crearSession);
router.get('/verSession', auth, index.verSession );

router.post('/crear',validacionCrearJugador , index.crearJugador);

router.put('/editar/:id', validacionEditarJugador,index.editarJugador);

router.delete('/eliminar/:id', index.eliminarJugador);


module.exports = router;