import Joi from "joi";

export const flavourSchema = Joi.object({
  name: Joi.string().min(2).required()
});
