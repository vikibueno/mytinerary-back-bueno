import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min' : "name must have a least 3 characters please!",
        'string.max': "name must be less than 21 characters please!",
        "any.required" : "name is required", //para cuando NO se envia el dato
        "string.empty" : "name is required"  //para cuand se envia VACIO
    }),
    mail: joi.string().required().email(),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).messages({
        'string.min' : "name must have a least 3 characters please!",
        'string.max': "name must be less than 21 characters please!",
    })
})

export default registerSchema