var friendsArray = require("../data/friends.js");


console.log("are you connected?");
module.exports = function(app) {

    app.get("../api/data/friends.js", function(req, res) {
        console.log("friendsArray");
        res.json(friendsArray);
    });

console.log("hellooo?");

    app.post("../app/data/friend.js", function(req, res) {
        if (friendsArray.length < 10) {
            friendsArray.push(req.body);
            res.json(true);
        }
    });

};
