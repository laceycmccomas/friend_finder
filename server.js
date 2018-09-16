var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/app/public'));



var htmlRoutes = require('./app/routes/htmlRoutes')(app, path);
var apiRoutes = require('./app/routes/apiRoutes')(app, path);


//start our server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

