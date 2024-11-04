import Joi from "joi";

export const addReviewValidate = Joi.object({
    score: Joi.number().required(),
    comment: Joi.number(),
    status: Joi.boolean()
})


export const updateReviewValidate = Joi.object({
    score: Joi.number(),
    comment: Joi.number(),
    status: Joi.boolean()
})