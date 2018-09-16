var express =  require("express");
var bodyParser = require("body-parser");
var path = require("path");


var server = express();

var PORT = process.env.PORT || 8081;



server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());


server.use(express.static(__dirname + '/app/public'));


var htmlRoutes = require('./app/routing/htmlRoutes')(app, path);
var apiRoutes = require('./app/routing/apiRoutes')(app, path);


//start listening
server.listen(PORT, function() {
    console.log("Server listening on PORT " + PORT);
});