module.exports = (req,res,next) => {
    if (!req.session.usuario) {
        res.status(200).json({msg: 'no iniciaste sesion'})
    } else {
        next()
    }
}