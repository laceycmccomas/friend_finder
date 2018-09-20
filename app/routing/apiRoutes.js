var friendsArray = require("../data/friends");

var needsAFriend;

module.exports = function(app) {

    app.get("../api/friends", function(req, res) {
        console.log("possible friends");
        res.json(friendsArray);
    });


    app.post("../api/friends", function(req, res) {

        console.log("friend info");
        needsAFriend = req.body;
        friendsArray.push(needsAFriend);
        res.json(friendsArray);

        besties(needsAFriend);
    });
};
