import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next)=> {
    try {
        let { id } = req.params
        let one = await Itinerary.findByIdAndDelete(id)
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'itinerary deleted',
                response: one._id
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'itinerary not found',
                response: null
            })
        }
       
    } catch (error) {
        next(error)
    }
}