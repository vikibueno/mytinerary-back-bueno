import { Router } from "express";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import signinToken from "../controllers/auth/signinToken.js";
import signout from "../controllers/auth/signout.js";

import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";


let authRouter = Router()

//register requiere de middlewares para VALIDAR/VERIFICAR/AUTENTICAR/AUTORIZAR 
    //validar datos con joi
    //validar que la cuanta no existe para que no haya RE-REGISTRO
    //hashear la contraseña(proteger)
authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register)
authRouter.post('/signin',validator(signinSchema),notExistsUser,isPassOk,isValidToken,signin)

//middleware para destokenizar el token( debe recibir un token y convertirlo en los datos del usuario)
//middleware para generar un nuevo token (isValidToken)
authRouter.post('/signinToken',passport.authenticate('jwt',{session:false}),isValidToken,signinToken)
authRouter.post('/signout',passport.authenticate('jwt',{session:false}),signout)

export default authRouter