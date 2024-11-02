import Joi from "joi";

export const createProjectValidator = Joi.object({
  scope: Joi.string().required(),
  budget: Joi.number().required(),
  keyRequirements: Joi.array().items(Joi.string()).required(),
});