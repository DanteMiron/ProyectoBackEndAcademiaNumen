const {check} = require('express-validator')

const validacionLogin = [
    check('name').not().isEmpty().withMessage('El campo jugador es requerido'),
    check('email').not().isEmpty().withMessage('El campo edad es requerido').isEmail().withMessage('coloque un email válido'),
    check('password').not().isEmpty().withMessage('El campo altura es requerido')
    
];

module.exports = {validacionLogin};