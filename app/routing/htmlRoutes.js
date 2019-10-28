// ===============================================================================
// LOAD DATA
// Link routes to a series of "data" sources.
// This data source holds array of friends.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// Routes
// ===============================================================================

module.exports = function(app, path) {

    // API GET Requests
    
    // Survey Page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}