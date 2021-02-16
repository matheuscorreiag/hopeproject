const mongoose = require("mongoose");

const Users = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
  })
);
module.exports = Users;
