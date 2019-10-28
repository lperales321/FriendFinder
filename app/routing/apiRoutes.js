// ===============================================================================
// LOAD DATA
// Link routes to a series of "data" sources.
// This data source holds array of friends.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// Routes
// ===============================================================================

module.exports = function(app) {
    
    // API GET Requests
    // Displays all friends
    app.get("/api/friends", function(req, res) {

        for(const friend of friendsData) {
            console.log(friend.name);
            console.log(friend.photo);
            console.log(friend.scores);
        }

        return res.json(friendsData);
    });

    // API POST Requests
    // Create New Friend - takes in JSON input
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        let lowestTotal = 0;
        let match = undefined;
        for(const friend of friendsData)
        {
            let total = 0;

            //Compare each user's score to other users' scores
            for (let i = 0; i < friend.scores.length; i++) {
                total += Math.abs(Number.parseInt(req.body.scores[i]) - Number.parseInt(friend.scores[i]));
            }

            //The first time, get the the first user
            if (match === undefined) {
                match = friend;
                lowestTotal = total;
            }
            //check if user is lower than the previous user
            else if (total < lowestTotal) {
                match = friend;
                lowestTotal = total;
            }
        }
    
        friendsData.push(newFriend);

        res.json(match);
    });
};