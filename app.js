var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// include the packages, and configure the bodyParser to accept JSON and
// url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// all api endpoints will appear in this file...
var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
  console.log("Listen on port %s...", server.address().port);
});
