const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController')
const {validarId} = require('../middlewares/validarId')
const {check} = require('express-validator')


router.get('/', index.index)
router.post('/crear',
[
    check('jugador').not().isEmpty().withMessage('El campo jugador es requerido'),
    check('edad').not().isEmpty().withMessage('El campo edad es requerido'),
    check('altura').not().isEmpty().withMessage('El campo altura es requerido'),
    check('nacionalidad').not().isEmpty().withMessage('El nacionalidad jugador es requerido'),
    check('goles').not().isEmpty().withMessage('El campo goles es requerido'),
    check('disponible').not().isEmpty().withMessage('El campo disponible es requerido')
], index.crearJugador)
router.get('/ver', index.verJugadores)
router.get('/ver/:id', validarId, index.verJugador)

module.exports = router;

