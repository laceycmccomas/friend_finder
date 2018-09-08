var express =  require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up port option
var app = express();
var PORT = process.env.PORT || 3008;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/app/public'));


var htmlRoutes = require('./app/routing/htmlRoutes')(app, path);
var apiRoutes = require('./app/routing/apiRoutes')(app, path);


//start server listening
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});