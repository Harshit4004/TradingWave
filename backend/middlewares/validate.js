const validate = (schema) => {
  return (req, res, next) => {

    if (!schema) {
      return next();
    }

    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details.map((err) => err.message),
      });
    }

    next();
  };
};

module.exports = validate;