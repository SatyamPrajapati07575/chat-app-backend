module.exports = (req, res, next) => {
  res.success = (message, data = null, statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
      statusCode
    });
  };

  res.fail = (message = "Something went wrong", statusCode = 400, error = null) => {
    res.status(statusCode).json({
      success: false,
      message,
      statusCode,
      error: process.env.NODE_ENV === "development" ? error : undefined
    });
  };

  next();
};
