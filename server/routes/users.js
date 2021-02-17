const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const Users = require("../src/models/users");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../src/modules/mailer");

router.post("/signUp", async function (req, res, next) {
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
});

router.post("/forgot", async function (req, res, next) {
  try {
    const user = await Users.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.sendStatus(600).json({ error: "User not found" });
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

    console.log(req.body.email);
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
            .json({ error: "Error trying to send the reset token" });
        }

        return res.sendStatus();
      }
    );
  } catch (err) {
    res.status(800).json({ msg: "Error trying to reset password", err });
  }
});

router.post("/reset", async function (req, res, next) {
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

    res.sendStatus();
  } catch (err) {
    res.status(400).send({ error: "cannot reset password" });
  }
});

router.post("/authenticate", async function (req, res, next) {
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
});

module.exports = router;
