import Joi from "joi";

export const cakeSchema = Joi.object({
  name: Joi.string().max(255).required(),
  price: Joi.number().precision(2).greater(0).required(),
  image: Joi.string().max(255),
  description: Joi.string(),
  flavour: Joi.number().required()
});
