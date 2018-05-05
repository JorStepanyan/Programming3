var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var LivingCreature = require("./class(LivingCreature).js");
var Xot = require("./class (xot).js");
var bujich = require("./class(bujich).js");
var hivandutyun = require("./class(hivandutyun).js");
var xotaker = require("./class(xotaker).js");
var gishatich = require("./class(gishatich).js");

setInterval(function(){

for (var i in global.garssArr) {
        global.garssArr[i].bazmanal();
    }
    for (var i in global.xotakerArr) {
        global.xotakerArr[i].utel();
        global.xotakerArr[i].bazmanal();
        global.xotakerArr[i].mahanal();
    }

    for (var i in global.gishatichArr) {
        global.gishatichArr[i].utel();
        global.gishatichArr[i].bazmanal();
        global.gishatichArr[i].mahanal();
    }
    for (var i in global.hivandutyunArr) {
        global.hivandutyunArr[i].utel();
        global.hivandutyunArr[i].bazmanal();
        global.hivandutyunArr[i].mahanal();
    }
    for (var i in global. bujichArr) {
       global.bujichArr[i].utel();
       global.bujichArr[i].bazmanal();
       global.bujichArr[i].mahanal();
    }


},1000)