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
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
    
        console.log(newFriend);
    
        friendsData.push(newFriend);
    
        res.json(newFriend);
    });
}