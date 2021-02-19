var express = require("express");

const routes = require("./src/routes");
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
app.use(routes);

module.exports = app;
