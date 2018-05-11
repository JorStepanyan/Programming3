var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coordinates = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
    for(var i in coordinates) {
      io.sockets.emit("recieved coordinates", matrix[i]);
    }
    socket.on("new coordinates", function (data) {
        coordinates.push(data);
        io.sockets.emit("recieved coordinates", data);
    })
 });

global.LivingCreature = require("./class(LivingCreature).js");
global.Grass= require("./class (xot).js");
global.bujich = require("./class(bujich).js");
global.hivandutyun = require("./class(hivandutyun).js");
global.Xotaker = require("./class(xotaker).js");
global.Gishatich = require("./class(gishatich).js");

setInterval(function(){

for (var i in global.grassArr) {
        global.grassArr[i].bazmanal();
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