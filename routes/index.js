const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController')
const {validarId} = require('../middlewares/validarId')
const {check} = require('express-validator')


router.get('/', index.index)
router.post('/crear', index.crearJugador)
router.get('/ver', index.verJugadores)
router.get('/ver/:id', validarId, index.verJugador)

module.exports = router;

