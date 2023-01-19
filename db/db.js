const mongoose = require('mongoose');

const connect = async () =>{
    try {
        await mongoose.connect('mongodb+srv://Dante:Riverplate95.@clusterkb.wgs6l2x.mongodb.net/test')
        console.log('base de datos conectada')
    } catch {
        console.log('no se pudo conectar a la base de datos')
    }
}

module.exports = {connect}