import Joi from "joi";

export const addReviewValidate = Joi.object({
    score: Joi.number().required(),
    comment: Joi.string(),
    status: Joi.string()
})


export const updateReviewValidate = Joi.object({
    score: Joi.number(),
    comment: Joi.string(),
    status: Joi.string()
})