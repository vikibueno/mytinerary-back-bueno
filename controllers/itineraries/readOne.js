import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next)=> {
    try {
        let { id } = req.params
        let oneItineraryId = await Itinerary.findById(id)
        if (oneItineraryId) {
            return res.status(200).json({
                success: true,
                message: 'itinerary found',
                response: oneItineraryId
            })
        } else {
             return res.status(404).json({
                success: false,
                message: 'itinerary not found',
                response: null
            })
        }

    } catch (error) {
        next(next)
    }
}