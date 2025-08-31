const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "mySuperSecret";

exports.generateToken = (payload, expiresIn = "7d") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
