import City from '../../models/City.js'

export default async (req,res) => {
    try {
        console.log(req.query);   // QUERY ES UN OBJETO  CON TODAS LAS CONSULTAS/IGUALDADES A BUSCAR EN LA BASE DE DATOS 
        //let objetoDeBusqueda = {admin_id:'64dba035dd5e7cf46a232173' }
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objetoDeBusqueda.city = new RegExp(req.query.city,'i')
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
        return res.status(200).json({
            success: true,
            message: 'cities found',
            response: allCities
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}