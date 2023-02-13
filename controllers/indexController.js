const {RiverPlate} = require('../models/riverplate');
const {validationResult} = require('express-validator');
const {User} =require('../models/user');
const bcrypt = require('bcryptjs');

let salt = bcrypt.genSaltSync(10);

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
        res.cookie('personaEnSession', persona.id, {maxAge: 60000*60*24*130})
        req.session.usuario = persona;
        res.status(200).json(req.session.usuario);
    },

    verCookie : (req,res) =>{
        res.json(req.cookies.personaEnSession)
    },
    
    eliminarCookie : (req, res) =>{
        res.clearCookie('personaEnSession');
        res.json({msg: 'cookie eliminada'})
    }
    ,

    verSession: (req,res) =>{
        res.status(200).json(req.session);
    },

    cerrarSession: (req,res) => {
        req.session.destroy();
        res.json({msg: 'sesion cerrada'})
    },

    register : async(req, res)=>{
        try {
            let hash = bcrypt.hashSync(req.body.password, salt);
            const err= validationResult(req);
            if(err.isEmpty()){
                const user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }
                const item= new User(user);
                await item.save();
                res.status(201).json({item});
            } else {
                res.status(501).json({err});
            }
        } catch (error) {
            res.status(501).json({error});
        }
    },

    login: async(req,res)=>{
        try {
            const err = validationResult(req);
            if(error.isEmpty()){
                const usuario = await User.findOne({email: req.body.email});
                if (usuario == null) {
                    res.status(505).json({msg: 'El usuario o la contraseña es incorrecto'})
                }
                if (!bcrypt.compareSync(req.body.password, usuario.password)) {
                    res.status(505).json({msg: 'El usuario o la contraseña es incorrecto'})
                }
                const user = {
                    _id: usuario._id,
                    name: usuario.name,
                }
                
                req.session.usuario = user;
                if(req.body.remember){
                    res.cookie('personaEnSession', req.session.usuario, {maxAge: 60000*60*24*120})
                }
                res.json({msg: 'usuairo logeado'})
            }
        } catch (error) {
            res.json(error)
        }
    },

    logout: (req, res) => {
        res.clearCookie('personaEnSession');
        req.session.destroy();
        res.json({msg: 'se cerro la session'});
    }
}


module.exports = index