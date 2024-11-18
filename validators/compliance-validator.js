import Joi from "joi";
import mongoose from "mongoose";

const objectIdValidator = (value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.error("any.invalid");
    }
    return value;
  };

export const postComplianceValidator = Joi.object({
    // project: Joi.string().custom(objectIdValidator, "ObjectId Validation").required(),
    
    complianceStatus: Joi.string().valid("compliant", "non-compliant", "pending").default("pending").required(),
  
    notes: Joi.string()
  
    // checkedBy: Joi.string().custom(objectIdValidator, "ObjectId Validation").required()   
  });