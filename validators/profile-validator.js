// B5 and B6
import Joi from "joi";

export const registerUserValidate =Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(8).required(),
    phoneNumber: Joi.string().pattern(/^[0-9]+$/).required(),
    role: Joi.string().valid('Project Owner', 'Project Regulator'),
    governmentId: Joi.string()

})

export const loginUserValidate = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})
export const updateUserValidate = Joi.object({
    name: Joi.string().required()
})

