export default (req,res,next)=> {
    try {
        return res.status(200).json({
            success:true,
            message: 'user loged in with token',
            response: {            
                token: req.token,   //NUEVO TOKEN
                user: req.user      //LOS DATOS DEL USUARIO QUE NO VIENEN POR FORMULARIO Y NECESITO UNA ESTRATEGIA PARA OBTENER SUS DATOS
            }
        })
        
    } catch (error) {
        next(error)
    }
}