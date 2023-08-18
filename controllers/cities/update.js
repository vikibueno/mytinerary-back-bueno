import City from '../../models/City.js'

export default async (req,res) => {
    try {
        let updateCity = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }
            ).select('city _id')
        return res.status(200).json({
            success: true,
            message: 'city updated',
            response: updateCity
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        }) 
    }
}