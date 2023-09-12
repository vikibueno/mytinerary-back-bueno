import { compareSync } from "bcrypt";
import User from '../models/User.js'

export default async (req,res,next)=> {
    try {
        let formPass = req.body.password
        let user = await User.findOne({ mail:req.body.mail })
        let mongoPass = user.password
        let verifed = compareSync(formPass,mongoPass) //devuelve booleano
        if (verifed) {
            return next()
        }else{
            return res.status(401).json({
                succes: false,
                message: 'Invalid credentias!',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}