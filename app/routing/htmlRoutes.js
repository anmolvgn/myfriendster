import { Router } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express";
var express = require("express");
var Router = express.Router();

Router.get("/", function(req, res) {
    res.sendFile(path.json(__dirname, "../public/survey.html"));
});

Router.get("/", function (req, res) {
    res.sendFile(path.json(__dirname, "../public/home.html"));
});
