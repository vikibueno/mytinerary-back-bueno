import joi from "joi";

let signinSchema = joi.object({

    mail: joi.string().required().min(8).max(20).messages({
        'string.min' : "mail must have a least 3 characters please!",
        'string.max': "mail must be less than 21 characters please!",
        "any.required" : "mail is required", //para cuando NO se envia el dato
        "string.empty" : "mail is required"  //para cuand se envia VACIO
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min' : "password must have a least 3 characters please!",
        'string.max': "password must be less than 21 characters please!",
        "any.required" : "password is required", //para cuando NO se envia el dato
        "string.empty" : "password is required"  //para cuand se envia VACIO
    }),

 
})

export default signinSchema