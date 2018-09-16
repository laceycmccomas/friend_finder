var friendsArray = require("../data/friends.js");

var needsAFriend;

module.exports = function(app, path) {

    app.get("/api/friends", function(req, res) {
        res.send(friendsArray);
        res.json(friendsArray);
    });


    app.post("/api/friends", function(req, res) {
        console.log("let's be friends");

        needsAFriend = req.body;

        friendsArray.push(needsAFriend);
        res.json(friendsArray);

        besties(needsAFriend);
    });
};

var totalDifference = [];
    function besties(needsAFriend) {
        console.log("trying to choose a bestie");
    for (var i = 0; i < friendsArray.length -1; i++) {
        var count = 0;
        var sum = 0;
    for (var p = 0; p < 10; p++) {
        var friendsNum = parseInt(friendsArray[i].scores[p]);
        var needsAFriendNum = parseInt(needsAFriend.scores[p]);

        sum = sum + Math.abs(friendsNum - needsAFriendNum);
            count ++;
            if (count == 10) {

                totals.push(sum);
                console.log(sum + "that's all");
                console.log(totalDifference + "totalDifferenceArray");
            }
        }
    }
        findYourFriend();
}


 var yourFriendName;
 
 var yourFriendPic;
 
    function findYourFriend() {
        console.log(Math.min(totalDifference) + "min");

        var potentialMin = Math.min(totalDifference);
        for (var y = 0; y < totalDifference.length; y++) {
            if (potentialMin === totalDifference[y]) {
                console.log(friendsArray);

            yourFriendname = friendsArray[y].name;
            yourFriendPic = friendsArray[y].pic;
            return yourNewFriend();
            }
        }
    }

    function yourNewFriend() {
        console.log(yourFriendName + yourFriendPic);
    }
