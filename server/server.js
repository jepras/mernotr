var express = require("express");
var router = require("./routes/routes.js");
var path = require("path");
var bodyParser = require("body-parser");

// For auth
const keys = require('../config/keys');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('../config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport')

var app = express();
var mongoose = require("mongoose");

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// initialize express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

// set up routes
app.use('/auth', authRoutes);

mongoose.connect(
  keys.mongodb.dbURI,
  { useNewUrlParser: true }
);
mongoose.connection.on("connected", function() {
  console.log("DB connected!");
});
mongoose.connection.on("error", function() {
  console.log("DB fucked!");
});

// Cooookies
app.use(cookieSession ({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

app.use("/", router);

module.exports = app;
