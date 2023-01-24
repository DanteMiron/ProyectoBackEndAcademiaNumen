const mongoose = require('mongoose');
require('dotenv').config()

const connect = async () =>{
    try {
        await mongoose.connect(process.env.CONNECTMONGO)
        console.log('base de datos conectada')
    } catch {
        console.log('no se pudo conectar a la base de datos')
    }
}

module.exports = {connect}