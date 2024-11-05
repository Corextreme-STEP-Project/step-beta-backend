import Joi from "joi"

export const addAwardValidate = Joi.object({
    award_amount: Joi.number().required()
})
export const updateAwardValidate = Joi.object({
    award_amount: Joi.number()
})