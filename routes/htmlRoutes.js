var path = require ("path");

module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page

    app.get("/", function(req, res) {
        // res.send("Proof of concept of storing data");
        // path.join path to the index.html
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("*", function(req, res) { 
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};