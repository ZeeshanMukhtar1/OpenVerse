const express = require("express");
const router = express.Router();
const authMiddleware = require("../authMiddleware.js");
const { updateSchema } = require("../zod.js");
const { userSchema, loginSchema } = require("../zod.js");
const { User, Account } = require("../db.js");

const jwt = require("jsonwebtoken");
const { secretKey } = require("../config.js");

router.get("/allusers", async (req, res) => {
  const user = await User.find({});
  return res.send(JSON.stringify(user));
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const result = userSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({
      error: result.error.errors,
      message: "Invalid input",
    });
  }

  const check = await User.find({
      email: body.email 
  });

  if (check.length > 0) {
    return res.status(400).json({
      message: "username or email alrady exists",
    });
  }
  const user = new User({

    password: body.password,
    email: body.email,
    firstname: body.firstname,
    lastname: body.lastname
    
  });

  await User.create(user);
  const user_id = user._id;
  await Account.create({
    _id: user_id,
    balance: Math.floor(Math.random() * 10000),
  });
  const token = jwt.sign({ user_id }, secretKey);

  return res.status(200).json({
    message: "User created successfully",
    token: token,
    id: user_id,
  });
});

router.post("/signin", async (req, res) => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: result.error.errors,
      message: "Invalid inputs",
    });
  }
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.status(400).json({
      message: "wrong email or password",
    });
  }
  const user_id = user._id;
  const token = jwt.sign({ user_id }, secretKey);

  return res.status(200).json({
    message: "login successful",
    token: token,
    id: user_id,
  });
});

router.put("/update", authMiddleware, async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }

  await User.updateOne(
    {
      _id: req.user_id,
    },
    {
      ...req.body
    }
  );

  return res.status(200).json({
    message: "updated successfully",
  });
});

router.get("/information", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
          $options: "i", // case-insensitive
        },
      },
      {
        lastname: {
          $regex: filter,
          $options: "i", // case-insensitive
        },
      },
    ],
  });

  return res.json({
    users: users.map((user) => {
      return {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
      };
    
    })
    
  });
});

module.exports = router;
