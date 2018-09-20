var path = require("path")
module.exports = function(app) {
    console.log('html routes')
    app.get("/", function(req, res) {
        console.log("HOME PAGE");
        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

    app.get("/survey", function(req, res) {
        console.log("SURVEY PAGE");
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};