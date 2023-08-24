import Joi from "joi";

export const clientSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().max(255).required(),
    address: Joi.string().max(255).required(),
    phone: Joi.string().length(11).required()
  });