module.exports = function(app, path){

    app.get("/", function(req, res) {
        console.log("HOME PAGE");
        res.sendFile(path.join(__dirname, "/public/home.html"));

    });

    app.get("/survey",function(req, res) {
        console.log("SURVEY PAGE");
        res.sendFile(path.join(__dirname, "/public/survey.html"));
    });
};
  
