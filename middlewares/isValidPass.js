import { hashSync } from 'bcrypt'

export default (req,res,next)=> {
    try {
        let hashPassword = hashSync(req.body.password,10)
        req.body.password = hashPassword
        next()
    } catch (error) {
        next(error)
    }
}