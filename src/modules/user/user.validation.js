const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  password: z.string().min(6)
}).refine(data => data.email || data.phone, {
  message: "Either email or phone is required"
});

module.exports = { registerSchema };
