const {RiverPlate} = require('../models/riverplate')
const {validationResult} = require('express-validator')

const index = {
    index: (req,res) => {
        res.send('Dante Pablo Miron')
    },
    
    crearJugador: async (req,res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                const item = new RiverPlate(req.body);
                await item.save();
                res.status(201).json({item})
            } else {
                res.status(501).json({err})
            }
            
        } catch (error) {
            res.status(501).json({error})
        }
    },
    
    verJugadores: async (req, res) =>{
        const items = await RiverPlate.find();
        res.status(200).json({items})
    },

    verJugador: async(req, res) =>{
        const item = await RiverPlate.findById(req.params.id);
        res.status(200).json({item})
    },

    editarJugador: async (req,res)=>{
        try {
            await RiverPlate.findByIdAndUpdate(req.params.id,req.body);
            res.status(201).json({msg: 'Modificación concretada'})
        } catch (error) {
            res.status(501).json({error})
        }

    }
}


module.exports = index