import City from '../../models/City.js'

export default async (req,res,next) => {
    try {
        console.log(req.query);   // QUERY ES UN OBJETO  CON TODAS LAS CONSULTAS/IGUALDADES A BUSCAR EN LA BASE DE DATOS 
        //let objetoDeBusqueda = {admin_id:'64dba035dd5e7cf46a232173' }
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objetoDeBusqueda.city = new RegExp('^'+req.query.city,'i')
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) {
            //agrego la propiedad por la cual quiero ordenar
            //si es 1 ordena ascendentemente
            //si es -1 ordene descendentemente
            objetoDeOrdenamiento.city = req.query.sort
        }

        //let allCities = await City.find().populate('admin_id','photo name mail -_id')
        let allCities = await City
            .find(objetoDeBusqueda,'country  city photo smalldescription admin_id')
            .populate('admin_id','photo name mail')
            .sort(objetoDeOrdenamiento)
        //let allCities = await City.find().select('country  city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
       //try maneja los errores del lado del cliente o el exito
        if (allCities.length>0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities
            })
       } else {
        return res.status(404).json({
            success: false,
            message: 'not found',
            response: null
        })
       }
    //maneja los errores del lado del servidor(nuestros)
    } catch (error) {
        //no deja pasar hacia el controllador y activa la funcion error handler(de la api)
        next(error)
    }
}