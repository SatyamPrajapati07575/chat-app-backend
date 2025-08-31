const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    return res.fail(err.errors?.[0]?.message || "Invalid input", 400);
  }
};

module.exports = validate;
