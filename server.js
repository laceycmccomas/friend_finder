var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/app/public'));


// var apiRoutes = require("./app/routing/apiRoutes")(app)(path);
// var htmlRoutes = require("./app/routing/htmlRoutes")(app)(path);

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start our server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });