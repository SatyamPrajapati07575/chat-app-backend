const userService = require("./user.service");

exports.registerUser = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        res.success("User registered", user, 201);
    } catch (err) {
        next(err);
    }
};
