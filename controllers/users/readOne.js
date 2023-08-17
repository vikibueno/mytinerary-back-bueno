import User from "../../models/User.js";

export default async (req,res) => {
    try {
        //let oneUser = new User.findOne({_id:req.params.id})
        let oneUserId = await User.findById(req.params.id).select('mail photo _id')
        return res.status(200).json({
            success: true,
            message: 'user found',
            response: oneUserId

        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })       
    }
}