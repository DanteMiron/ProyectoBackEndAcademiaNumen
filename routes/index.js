const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController');
const {validarId} = require('../middlewares/validarId');
const {validacionCrearJugador} = require('../middlewares/validacionCrearJugador');
const {validacionEditarJugador} = require('../middlewares/validacionEditarJugador');
const auth = require('../middlewares/auth');
const { validacionRegister } = require('../middlewares/validacionRegister');
const { validacionLogin } = require('../middlewares/validacionLogin');




router.get('/', index.index);
router.get('/ver', index.verJugadores);
router.get('/ver/:id', validarId, index.verJugador);
router.get('/crearsession', index.crearSession);
router.get('/verSession', auth, index.verSession );
router.get('/cerrarSession', index.cerrarSession);
router.get('/verCookie', index.verCookie);
router.get('/eliminarCookie', index.eliminarCookie);
router.get('/api', index.api)

router.post('/crear',validacionCrearJugador , index.crearJugador);
router.post('/register', validacionRegister,index.register);
router.post('/login', validacionLogin, index.login)

router.put('/editar/:id', validacionEditarJugador,index.editarJugador);

router.delete('/eliminar/:id', index.eliminarJugador);
router.delete('/logout', index.logout)


module.exports = router;