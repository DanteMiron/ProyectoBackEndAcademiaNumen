const express = require('express');
const router = express.Router();
const index= require('../controllers/indexController')


router.get('/', index.index)
router.post('/crear', index.crearJugador)
router.get('/ver', index.verJugador)

module.exports = router;
