import Activity from "../../models/Activity.js";

export default async (req,res,next)=> {
    try {
        let data = req.body
        let activity = await Activity.create(data)
        return res.status(201).json({
            succes: true,
            message: 'activity created',
            response: activity._id
        })
    } catch (error) {
        next(error) 
    }
}