import Joi from "joi";

export const createTenderValidator = Joi.object({
    title: Joi.string().required(),
    tenderType: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().required(),
    department: Joi.string().required(),
    status: Joi.string(),
    createdBy: Joi.string().required(),
    attachments: Joi.array().items(
        Joi.object({
          name: Joi.string().required(),
          url: Joi.string().required(),
          mimeType: Joi.string().required().valid(
            'application/pdf',
            'application/msword',
            'image/jpeg',
            'image/png'
          ),
        })
      ),
    });

export const updateTenderValidator = Joi.object({
    title: Joi.string(),
    tenderType: Joi.string(),
    description: Joi.string(),
    deadline: Joi.date(),
    department: Joi.string(),
    status: Joi.string(),
    updatedBy: Joi.string(),
    attachments: Joi.array().items(
        Joi.object({
          name: Joi.string(),
          url: Joi.string(),
          mimeType: Joi.string().valid(
            'application/pdf',
            'application/msword',
            'image/jpeg',
            'image/png'
        ),
    })
  ),
});
