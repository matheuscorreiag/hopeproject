const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../modules/mailer");
const bcrypt = require("bcrypt");
const Users = require("../models/users");

module.exports = {
  async authenticate(req, res, next) {
    try {
      const user = await Users.findOne({
        email: req.body.email,
      });

      if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(400).json({ msg: "Missing params" });
      }
      const token = jwt.sign(
        {
          email: user.email,
        },
        "HOPEPROJECT",
        {
          expiresIn: 86400,
        }
      );

      return res.status(200).json({
        msg: "User authenticated",
        token,
        email: user.email,
      });
    } catch (err) {
      return res.status(500).json({
        msg: "Error authenticating a user",
        err,
      });
    }
  },
  async signUp(req, res, next) {
    try {
      const newUser = new Users({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      await newUser.save();

      return res.status(201).json("New user register");
    } catch (err) {
      return res.status(500).json({
        msg: "Error creating a new user",
        err,
      });
    }
  },
  async forgot(req, res, next) {
    try {
      const user = await Users.findOne({
        email: req.body.email,
      });

      if (!user) {
        return res.send(700).json({ error: "User not found" });
      }

      const token = crypto.randomBytes(5).toString("hex");
      const now = new Date();
      now.setHours(now.getHours() + 1);

      await Users.findByIdAndUpdate(
        user.id,
        {
          $set: {
            passwordResetToken: token,
            passwordResetExpires: now,
          },
        },
        { new: true, useFindAndModify: false }
      );

      mailer.sendMail(
        {
          to: req.body.email,
          from: "admin@hotmail.com",
          template: "./forgot",
          context: { token },
        },
        (err) => {
          if (err) {
            return res
              .status(400)
              .json({ error: "Error tryping to send the reset token" });
          }

          return res.send();
        }
      );
    } catch (err) {
      res.status(800).json({ msg: "Error trying to reset password", err });
    }
  },
  async reset(req, res, next) {
    const { email, token, password } = req.body;

    try {
      const user = await Users.findOne({
        email,
      });

      if (!user) {
        return res.status(400).send({ error: "User not found" });
      }

      if (token !== user.passwordResetToken) {
        return res.status(400).send({ error: "Invalid token" });
      }
      const now = new Date();
      if (now > user.passwordResetExpires) {
        return res.status(400).send({ error: "Token expired" });
      }

      user.password = bcrypt.hashSync(password, 10);
      user.passwordResetExpires = undefined;
      user.passwordResetToken = undefined;

      await user.save();

      res.send();
    } catch (err) {
      res.status(400).send({ error: "cannot reset password" });
    }
  },
};
