var express = require("express");
var router= express.Router();
var body_parser = require('body-parser');
var path = require('path');
var app = express();
var port = 3000;

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json()); 

//routes

router.get("/", function (req, res) {
    res.sendFile(path.json(__dirname, "./public/survey.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.json(__dirname, "./public/home.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.json(__dirname, "./public/results.html"));
});


app.listen(port, function() {
    console.log(`Listening on PORT ${port}.`);    
});

