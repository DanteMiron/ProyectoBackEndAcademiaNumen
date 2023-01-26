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
    
    verJugador: async (req, res) =>{
        const items = await RiverPlate.find();
        res.status(200).json({items})
    }
}


module.exports = index