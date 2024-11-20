import Joi from "joi";

export const addticketvalidator =Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    status: Joi.string().valid('open','in progress','resolved').default('open'),
    prioruty:Joi.string().valid('low','medium','high').default('low'),
})

