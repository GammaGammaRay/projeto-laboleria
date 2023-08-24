import Joi from "joi";

export const clientSchema = Joi.object({
  name: Joi.string().max(255).required(),
  address: Joi.string().max(255).required(),
  phone: Joi.string()
    .custom((value, helpers) => {
      if (value.length !== 10 && value.length !== 11) {
        return helpers.message("Phone must have 10 or 11 digits");
      }
      return value;
    })
    .required(),
});
