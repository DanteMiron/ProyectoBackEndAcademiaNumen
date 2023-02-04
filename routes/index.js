const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController')
const {validarId} = require('../middlewares/validarId')
const {validacionCrearJugador} = require('../middlewares/validacionCrearJugador');


router.get('/', index.index)
router.get('/ver', index.verJugadores)
router.get('/ver/:id', validarId, index.verJugador)


router.post('/crear',validacionCrearJugador , index.crearJugador)

router.put('/editar/:id', index.editarJugador)


module.exports = router;