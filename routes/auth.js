import { Router } from "express";
import register from "../controllers/auth/register.js";

import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";

let authRouter = Router()

//register requiere de middlewares para VALIDAR/VERIFICAR/AUTENTICAR/AUTORIZAR 
    //validar datos con joi
    //validar que la cuanta no existe para que no haya RE-REGISTRO
    //hashear la contraseña(proteger)
authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register)

export default authRouter