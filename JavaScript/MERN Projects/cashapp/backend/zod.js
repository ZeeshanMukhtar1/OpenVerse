const zod = require("zod");

const userSchema = zod.object({
 
  password: zod.string().trim().min(8),
  email: zod.string().email(),
  firstname: zod.string().trim().min(3).max(20),
  lastname: zod.string().trim().min(3).max(20),
});

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().trim().min(8),
});

const updateSchema = zod.object({
  firstname: zod.string().trim().min(3).max(20).optional(),
  lastname: zod.string().trim().min(3).max(20).optional(),
  email: zod.string().email().optional(),
});

const transferSchema = zod.object({
  to: zod.string(),
  amount: zod.number().positive(),
});


module.exports = {
  userSchema,
  loginSchema,
  updateSchema,
  transferSchema
};
