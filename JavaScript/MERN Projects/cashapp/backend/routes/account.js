const express = require("express");
const accountRouter = express.Router();
const authMiddleware = require("../authMiddleware.js");
const { Account } = require("../db.js");
const { User } = require("../db.js");
const { mongoose } = require("mongoose");
const { transferSchema } = require("../zod.js");

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    _id: req.user_id,
  });
  const user = await User.findOne({
    _id: req.user_id,
  });
  return res.json({
    balance: account.balance,
    name: user.firstname,
  });
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  
  const result = transferSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: result.error.errors,
      message: "Invalid inputs",
    });
  }




  const session = await mongoose.startSession();

  session.startTransaction();
  const { to, amount } = req.body;

  const fromAccount = await Account.findOne({
    _id: req.user_id,
  }).session(session);
  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    session.endSession();
    return res.status(404).json({
      message: "insufficient balance",
    });
  }

  const toAccount = await Account.findOne({
    _id: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    session.endSession();
    return res.status(404).json({
      message: "Account not found",
    });
  }

  await Account.updateOne(
    {
      _id: req.user_id,
    },
    {
      $inc: { balance: -amount },
    }
  ).session(session);

  await Account.updateOne(
    {
      _id: to,
    },
    {
      $inc: { balance: amount },
    }
  ).session(session);

  await session.commitTransaction();
  //If all operations succeed, this commits the transaction, making all changes permanent in the database.
  res.json({
    message: "Transaction successful",
  });
});

module.exports = accountRouter;
