import Joi from "joi";

export const registerUserValidator = Joi.object({
    // name: Joi.string().required().min(3).max(30),
    firstName: Joi.string().required().min(3).max(30),
    middleName: Joi.string().min(3).max(30),
    lastName: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    role: Joi.string().valid('Project Owner', 'Project Regulator').required(),
});

export const loginUserValidator = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    role: Joi.string().required()
});


export const updateUserValidator = Joi.object({
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    phoneNumber: Joi.string()
});
