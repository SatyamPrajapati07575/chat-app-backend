const router = require("express").Router();
const controller = require("./user.controller");
const validate = require("../../middlewares/validateRequest");
const { registerSchema } = require("./user.validation");

router.post("/register", validate(registerSchema), controller.registerUser);

module.exports = router;
