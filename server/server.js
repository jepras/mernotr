var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

mongoose.connect(
  "mongodb://test:Test123@ds052978.mlab.com:52978/expenses",
  { useNewUrlParser: true }
);
mongoose.connection.on("connected", function() {
  console.log("DB connected!");
});
mongoose.connection.on("error", function() {
  console.log("DB fucked!");
});

app.use("/", router);

module.exports = app;
