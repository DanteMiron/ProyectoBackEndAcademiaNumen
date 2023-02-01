const {RiverPlate} = require('../models/riverplate');

const validarId = async (req,res,next) =>{
    const item = await RiverPlate.findById(req.params.id);
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: 'el id es invalido'})
    }

};

module.exports = {validarId};