import Joi from "joi";
import { isValidObjectId } from "mongoose";

export const postComplianceValidator = Joi.object({
    project: Joi.string().custom(isValidObjectId).required(),
    complianceStatus: Joi.string().valid("compliant", "non-compliant", "pending").default("pending"),
    notes: Joi.string(),
    checkedBy: Joi.string().custom(isValidObjectId)
  });
 
