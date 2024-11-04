import Joi from "joi";

export const createProjectValidator = Joi.object({
  projectTitle:Joi.string().required(),
  description:Joi.string().required(),
  scope: Joi.string().required(),
  budget: Joi.number().required(),
  keyRequirements: Joi.array().items(Joi.string()).required(),
});

export const projectStatusUpdate = Joi.object({
  projectStatus: Joi.string().required(),
  statusDescription: Joi.string().required()
});