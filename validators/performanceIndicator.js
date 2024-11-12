import Joi from 'joi';

const performanceIndicatorSchema = Joi.object({
  description: Joi.string().required(),
  targetValue: Joi.number().required(),
  actualValue: Joi.number().required(),
});

export default performanceIndicatorSchema;
