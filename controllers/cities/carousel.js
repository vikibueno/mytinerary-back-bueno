import City from "../../models/City.js";

export default async (req,res,next) => {
    try {
        let all = await City.find({},'city photo').sort({ fundation: 'desc' }).limit(12)
        let count = await City.countDocuments()
        return res.status(200).json({
            success:true,
            message: 'cities to show in carousel',
            data_carousel: all,
            count
        })
    } catch (error) {
        next(error)
    }
}