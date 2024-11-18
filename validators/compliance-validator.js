import Joi from "joi";

export const postComplianceValidator = Joi.object({
    complianceStatus: Joi.string().valid("compliant", "non-compliant", "pending").default("pending").required(),
    notes: Joi.string(),
  });
 
  export const updateComplianceValidator = Joi.object({
    complianceStatus: Joi.string().valid("compliant", "non-compliant", "pending").default("pending"),
    notes: Joi.string(),
  });
 
