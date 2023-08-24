import Joi from "joi";

export const orderSchema = Joi.object({
    clientId: Joi.number().integer().required(),
    cakeId: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).required(),
    totalPrice: Joi.number().precision(2).greater(0).required()
  });