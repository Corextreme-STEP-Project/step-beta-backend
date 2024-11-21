import Joi from "joi";

export const createFAQValidator = Joi.object({
    category: Joi.string().required(),
    question: Joi.string().required(),
    answer: Joi.string().required()
})

export const updateFAQValidator = Joi.object({
    category: Joi.string(),
    question: Joi.string(),
    answer: Joi.string()
})