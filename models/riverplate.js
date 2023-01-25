const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const riverPlateSchema = new Schema({
    jugador: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    goles: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true
    }
})

const RiverPlate = mongoose.model('RiverPlate',riverPlateSchema)
module.exports = {RiverPlate}