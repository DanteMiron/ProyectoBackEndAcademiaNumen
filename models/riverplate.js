const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const riverPlateSchema = new Schema({
    jugador: {
        type: String,
        required: true
    },
    
})