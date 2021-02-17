var express = require("express");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dev:mcorreias@development.g4xcy.mongodb.net/hope?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
