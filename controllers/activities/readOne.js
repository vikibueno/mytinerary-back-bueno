import Activity from "../../models/Activity.js";

export default async (req,res,next)=> {
    try {
        let { id } = req.params
        let oneActivityId = await Activity.findById(id)
        if (oneActivityId) {
            return res.status(200).json({
                success: true,
                message: 'activity found',
                response: oneActivityId
            })
        } else {
             return res.status(404).json({
                success: false,
                message: 'activity not found',
                response: null
            })
        }

    } catch (error) {
        next(next)
    }
}