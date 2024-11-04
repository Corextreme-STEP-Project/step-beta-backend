import Joi, { number } from "joi";

export const addAwardValidate = Joi.object({
    award_amount: Joi().required().number()
})
export const updateAwardValidate = Joi.object({
    award_amount: Joi().number()
})