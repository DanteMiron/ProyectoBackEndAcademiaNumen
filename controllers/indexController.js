const {RiverPlate} = require('../models/riverplate')

const index = {
    index: (req,res) => {
        res.send('Dante Pablo Miron')
    },
    
    crearJugador: async (req,res) => {
        try {
            const item = new RiverPlate(req.body);
            await item.save();
            res.status(201).json({item})
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
    }
}


module.exports = index