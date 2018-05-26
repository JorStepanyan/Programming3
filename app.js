var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coordinates = [];
global.matrix = [];
var n = 50;
var m = 50;
for (var i = 0; i < n; i++) {
    matrix[i] = [];

    for (var j = 0; j < m; j++) {

        matrix[i][j] = 1;

        if (j % 3 == 0) matrix[i][j] = Math.round(Math.random()*6);
    }
}
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
    io.sockets.emit('send matrix', matrix);
});


global.LivingCreature = require("./public/class(LivingCreature).js");
global.Grass = require("./public/class (xot).js");
global.bujich = require("./public/class(bujich).js");
global.hivandutyun = require("./public/class(hivandutyun).js");
global.Xotaker = require("./public/class(xotaker).js");
global.Gishatich = require("./public/class(gishatich).js");


global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.hivandutyunArr = [];
global.monsterArr = [];
global.weather = "Summer";


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix.length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y));
        }
        else if (matrix[y][x] == 2) {
            var xotaker1 = new Xotaker(x, y, hivandutyun);
            global.xotakerArr.push(xotaker1);
            xotaker1.ser = 1;
        }
        else if (matrix[y][x] == 2.5) {
            var xotaker1 = new Xotaker(x, y, hivandutyun);
            xotakerArr.push(xotaker1);
            xotaker1.ser = 2;
        }
        else if (matrix[y][x] == 3) {
            var gishatich1 = new Gishatich(x, y, hivandutyun);
            gishatichArr.push(gishatich1);
            gishatich1.ser = 1;
        }
        else if (matrix[y][x] = 3.5) {
            var gishatich1 = new Gishatich(x, y, hivandutyun);
            gishatichArr.push(gishatich1);
            gishatich1.ser = 2;
        }
        else if (matrix[y][x] == 4) {
            var hivandXot = new hivandutyun(x, y);
            hivandutyunArr.push(hivandXot);
            hivandXot.ser = 1;
        }
        else if (matrix[y][x] == 4.5) {
            var hivandXot = new hivandutyun(x, y);
            hivandutyunArr.push(hivandXot);
            hivandXot.ser = 2;
        }
        else if (matrix[y][x] == 5) {
            var bujich1 = new bujich(x, y);
            bujichArr.push(bujich1);
            busjich1.ser = 1;
        }
        else if (matrix[y][x] == 5.5) {
            var bujich1 = new bujich(x, y);
            bujichArr.push(bujich1);
            busjich1.ser = 2;
        }
        else if (matrix[y][x] == 6) {
            var monster1 = new Monster(x, y, hivandutyun);
            monsterArr.push(monster1);
            monster1.ser = 1;
        }
        else if (matrix[y][x] == 6.5) {
            var monster1 = new Monster(x, y, hivandutyun);
            monsterArr.push(monster1);
            monster1.ser = 2;
        }
    }
}


function debugMatrix() {
    var count = 0;
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 4 || matrix[y][x] == 4.5) {
                count++;
            }


        }
    }
    return count;
}

function deleteHivandutyun() {
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 4 || matrix[y][x] == 4.5) {
                matrix[y][x] = 0;
            }
        }
    }
}


setInterval(function () {
    if (weather == "Summer") {
        weather = "Autumn";
    }
    else if (weather == "Autumn") {
        weather = "Winter";
    }
    else if (weather == "Winter") {
        weather = "Spring";
    }
    else if (weather == "Spring") {
        weather = "Summer";
    }
}, 3000);

setInterval(function () {
    for (var i in global.grassArr) {
        global.grassArr[i].bazmanal();
        global.grassArr[i].guyn();
    }
    for (var i in global.xotakerArr) {
        global.xotakerArr[i].bazmanal();
        global.xotakerArr[i].utel();
    }

    for (var i in global.global.gishatichArr) {
        global.gishatichArr[i].bazmanal();
        global.gishatichArr[i].utel();
    }
    for (var i in global.hivandutyunArr) {
        global.hivandutyunArr[i].utel();
        global.hivandutyunArr[i].bazmanal();
        global.hivandutyunArr[i].mahanal();
    }
    for (var i in global.bujichArr) {
        global.bujichArr[i].utel();
        global.bujichArr[i].bazmanal();
        global.bujichArr[i].mahanal();
    }
    for (var i in global.monsterArr) {
        global.monsterArr[i].bazmanal();
        global.monsterArr[i].utel();
    }

    if (debugMatrix() && global.hivandutyunArr.length == 0) {
        deleteHivandutyun();
    }

    io.sockets.emit('send matrix', matrix);
}, 1000)


