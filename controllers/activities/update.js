import Activity from "../../models/Activity.js";

export default async (req,res,next)=> {
    try {
        let { id } = req.params 
        let data = req.body
        //let one = await Activity.findByIdAndUpdate(id,data, { new:true })
        let one = await Activity.findByIdAndUpdate(
            id ,
            data,
            { new:true } //devuelve la actividad luego de la modificacion
        )
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'activity updated',
                response: one._id
            })
            
        }else{
            return res.status(404).json({
                succes: false,
                message: 'activity not found',
                response: null
            })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}