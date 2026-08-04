const Joi = require("joi");

const orderSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().integer().min(1).required(),
  price: Joi.number().min(1).required(),
  mode: Joi.string().valid("BUY", "SELL").required(),
});

module.exports = {
  orderSchema,
};
