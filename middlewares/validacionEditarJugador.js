const {check} = require('express-validator')

const validacionEditarJugador = [
    check('jugador').not().isEmpty().withMessage('El campo jugador es requerido'),
    check('edad').not().isEmpty().withMessage('El campo edad es requerido').isInt().withMessage('Debe ingresar un numero'),
    check('altura').not().isEmpty().withMessage('El campo altura es requerido').isInt().withMessage('Debe ingresar un numero'),
    check('nacionalidad').not().isEmpty().withMessage('El nacionalidad jugador es requerido'),
    check('goles').not().isEmpty().withMessage('El campo goles es requerido').isInt().withMessage('Debe ingresar un numero'),
    check('disponible').not().isEmpty().withMessage('El campo disponible es requerido').isBoolean()
];

module.exports = {validacionEditarJugador};