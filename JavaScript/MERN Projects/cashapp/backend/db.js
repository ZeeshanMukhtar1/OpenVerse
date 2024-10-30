const mongoose = require("mongoose");
const { connectionString } = require("./config");

mongoose.connect(connectionString);

const userSchema = new mongoose.Schema({
 
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
});

const accountSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);

module.exports = {
  User,
  Account,
};
