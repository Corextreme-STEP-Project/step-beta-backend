import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    role: Joi.string().valid('project_owner', 'project_regulator', 'vendor', 'user')
});

export const loginUserValidator = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
});


export const updateUserValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    phoneNumber: Joi.string()
});
