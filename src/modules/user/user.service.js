const User = require("./user.model");
const { hashPassword } = require("../../utils/auth");
const { generateToken } = require("../../utils/jwt");

exports.register = async (data) => {
    const { name, email, phone, password, otp } = data;

    const existingUser = await User.findOne({
        $or: [{ email }, { phone }]
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashed = password ? await hashPassword(password) : "NA";

    const user = await User.create({
        name,
        email,
        phone,
        password: hashed,
        emailVerified: !!(email && otp),
        phoneVerified: !!(phone && otp)
    });

    // Generate JWT
    const tokenPayload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
    };

    const token = generateToken(tokenPayload);

    return {
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profilePic: user.profilePic
        },
        token
    };
};
