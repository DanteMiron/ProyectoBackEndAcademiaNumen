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
                const item = await new RiverPlate(req.body);
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

    },

    eliminarJugador: async (req,res) =>{
        const item = await RiverPlate.findByIdAndDelete(req.params.id);
        res.status(204).json({msg: 'el siguiente item fue eliminado', item})
    },

    crearSession: (req, res) => {
        let persona = {
            nombre:"Dante",
            id: "123456",
            idioma:"español"
        }

        req.session.usuario = persona;
        res.status(200).json(req.session.usuario);
    },

    verSession: (req,res) =>{
        res.status(200).json(req.session)
    }
}


module.exports = index