import User from "../../models/User.js";

export default async (req,res) => {
    try {
        let updateUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }  //por defecto en false  y devuelve el ojeto ANTES de la modificacion 
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificacion 
            ).select('name photo mail')
        return res.status(200).json({
            success: true,
            message: 'user updated',
            response: updateUser

        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })    
        
    }
}