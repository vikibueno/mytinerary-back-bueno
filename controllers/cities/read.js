import City from '../../models/City.js'

export default async (req,res) => {
    try {
        //let allCities = await City.find().populate('admin_id','photo name mail -_id')
        //let allCities = await City.find({},'country  city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')

        let allCities = await City.find().select('country  city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')

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