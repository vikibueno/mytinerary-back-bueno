import Itinerary from '../../models/Itinerary.js'

export default async (req,res,next)=> {
    try {
        let queries = {}
        if (req.query.city_id) {   //si exite esta consulta      
           //llename el objeto para hacer el filtro
            queries.city_id = req.query.city_id
            //al objeto de filtro le agrego la propiedad de busqueda y leasigno el valor
            //que me envia el cliente en la query
        }
        let allItineraries = await Itinerary
            .find(queries, '-__v -createdAt -updatedAt')
            //.populate('city_id', 'city photo ') //para popular algo que esta populado tengo que usar la sintaxis de objeto
            .populate({
                path:"city_id",
                select: "city photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name photo"
                }
            })
            return res.status(200).json({
            success: true,
                message: 'itineraries found',
                response: allItineraries
        })
        
    } catch (error) {
        next(error)
    }
}