import User from "../models/User.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

export default passport.use(    //le obligo al pasaporte a usar una estrategia de extracción del token"
'jwt', 
new Strategy(                  
    //depende de objeto de configuracion de la estrategia
    {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
    }, 
 
    //callaback que depende de el resultado de la extraccion
    async (jwt_payload, done) => {
    try { 
        let user = await User.findOne({mail:jwt_payload.mail}, '-_id -__v -password')
        if (user) {
            return done(null, user)  //si existe user INYECTA AL OBJETO DE REQUERIMIENTOS EL USUARIO con la propiedad user
        } else {
            return done(null)
        }
    } catch (error) {
        return done(error)
    }
    }
 )
)