const express = require("express");
const router = express.Router();

const UserController = require("./controllers/users");

router.post("/signUp", UserController.signUp);

router.post("/forgot", UserController.forgot);

router.post("/reset", UserController.reset);

router.post("/authenticate", UserController.authenticate);

module.exports = router;
