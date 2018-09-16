var express =  require("express");
var bodyParser = require("body-parser");
var path = require("path");


var http = require("http");

var PORT = 3306;

var server = http.createServer(function(req, res) {
    res.end("Welcome to my server" + req.url);
});


server.use(bodyParser.json());


server.use(server.static(__dirname + '/app/public'));


var htmlRoutes = require('./app/routing/htmlRoutes')(app, path);
var apiRoutes = require('./app/routing/apiRoutes')(app, path);


//start listening
server.listen(PORT, function() {
    console.log("Server listening on PORT " + PORT);
});