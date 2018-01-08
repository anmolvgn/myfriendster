
var express = require("express");
var Router = express.Router();

Router.get("/", function(req,res){
    res.sendFile(path.json(__dirname, "../public/survey.html"));
});

app.post("/", function (req, res) {
    res.sendFile(path.json(__dirname, "../public/results.html"));
});

module.exports = api_Routes