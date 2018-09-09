var express =  require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

var PORT = process.env.PORT || 8081;



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static(__dirname + '/app/public'));


var htmlRoutes = require('./app/routes/htmlRoutes')(app, path);
var apiRoutes = require('./app/routes/apiRoutes')(app, path);


//start listening
app.listen(PORT, function() {
    console.log("Application listening on PORT " + PORT);
});