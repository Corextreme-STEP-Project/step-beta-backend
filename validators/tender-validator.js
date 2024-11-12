import Joi from "joi";
import { ObjectId } from "mongodb";

// Custom validation function for ObjectId
const isValidObjectId = (value, helpers) => {
  if (!ObjectId.isValid(value)) {
    return helpers.error("any.invalid", { message: `Invalid ObjectId: ${value}` });
  }
  return value;
};

export const createTenderValidator = Joi.object({
    title: Joi.string().required(),
    tenderType: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().required(),
    department: Joi.string().required(),
    status: Joi.string(),
    createdBy: Joi.custom(isValidObjectId).required(), 
    // attachments: Joi.string(),
    // attachments: Joi.array().items(
    //     Joi.object({
    //       name: Joi.string().required(),
    //       url: Joi.string().uri().required(), 
    //       mimeType: Joi.string().required().valid(
    //         'application/pdf',
    //         'application/msword',
    //         'image/jpeg',
    //         'image/png'
    //       ),
    //     })
    //   ),
    });

export const updateTenderValidator = Joi.object({
    title: Joi.string(),
    tenderType: Joi.string(),
    description: Joi.string(),
    deadline: Joi.date(),
    department: Joi.string(),
    status: Joi.string(),
    updatedBy: Joi.custom(isValidObjectId), 
    // attachments: Joi.array().items(
    //     Joi.object({
    //       name: Joi.string(),
    //       url: Joi.string().uri(), 
    //       mimeType: Joi.string().valid(
    //         'application/pdf',
    //         'application/msword',
    //         'image/jpeg',
    //         'image/png'
    //       ),
    //     })
    //   ),
});
