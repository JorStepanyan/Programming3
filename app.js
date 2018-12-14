var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
global.matrix = [];
var n = 50;
var m = 50;
var fs = require('fs');


for (var i = 0; i < n; i++) {
    matrix[i] = [];

    for (var j = 0; j < m; j++) {

        matrix[i][j] = 1;

        if (j % 3 == 0) matrix[i][j] = Math.round(Math.random() * 6);
    }
}


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



global.LivingCreature = require("./public/class(LivingCreature).js");
global.Grass = require("./public/class (xot).js");
global.bujich = require("./public/class(bujich).js");
global.hivandutyun = require("./public/class(hivandutyun).js");
global.Xotaker = require("./public/class(xotaker).js");
global.Gishatich = require("./public/class(gishatich).js");
global.Monster = require("./public/class(monster).js");


global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.hivandutyunArr = [];
global.bujichArr = [];
global.monsterArr = [];
global.cnvacXot = 0;
global.cnvacXotaker = 0;
global.cnvacGishatich = 0;
global.cnvacHivandutyun = 0;
global.cnvacBujich = 0;
global.cnvacMonster = 0;
global.exanak = "garun";
global.exanaknerArr = ["amar", "ashun", "dzmer", "garun"];
global.i = 0;
var arr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix.length; x++) {
        if (matrix[y][x] == 1) {
            var xot = new Grass(x, y);
            grassArr.push(xot);
            cnvacXot++;
        }
        else if (matrix[y][x] == 2) {
            var xotaker1 = new Xotaker(x, y, hivandutyun);
            xotakerArr.push(xotaker1);
            xotaker1.ser = 1;
            cnvacXotaker++;
        }
        else if (matrix[y][x] == 2.5) {
            var xotaker1 = new Xotaker(x, y, hivandutyun);
            xotakerArr.push(xotaker1);
            xotaker1.ser = 2;
            cnvacXotaker++;
        }
        else if (matrix[y][x] == 3) {
            var gishatich1 = new Gishatich(x, y, hivandutyun);
            gishatichArr.push(gishatich1);
            gishatich1.ser = 1;
            cnvacGishatich++;
        }
        else if (matrix[y][x] = 3.5) {
            var gishatich1 = new Gishatich(x, y, hivandutyun);
            gishatichArr.push(gishatich1);
            gishatich1.ser = 2;
            cnvacGishatich++;
        }
        else if (matrix[y][x] == 4) {
            var hivandXot = new hivandutyun(x, y);
            hivandutyunArr.push(hivandXot);
            hivandXot.ser = 1;
            cnvacHivandutyun++;
        }
        else if (matrix[y][x] == 4.5) {
            var hivandXot = new hivandutyun(x, y);
            hivandutyunArr.push(hivandXot);
            hivandXot.ser = 2;
            cnvacHivandutyun++;
        }
        else if (matrix[y][x] == 5) {
            var bujich1 = new bujich(x, y, hivandutyun);
            bujichArr.push(bujich1);
            busjich1.ser = 1;
            cnvacBujich++;
        }
        else if (matrix[y][x] == 5.5) {
            var bujich1 = new bujich(x, y, hivandutyun);
            bujichArr.push(bujich1);
            busjich1.ser = 2;
            cnvacBujich++;
        }
        else if (matrix[y][x] == 6) {
            var monster1 = new Monster(x, y, hivandutyun);
            monsterArr.push(monster1);
            monster1.ser = 1;
            cnvacMonster++;
        }
        else if (matrix[y][x] == 6.5) {
            var monster1 = new Monster(x, y, hivandutyun);
            monsterArr.push(monster1);
            monster1.ser = 2;
            cnvacMonster++;
        }
        for (var i = 0; i < n; i++) {
            matrix[i] = [];
        
            for (var j = 0; j < m; j++) {
        
                matrix[i][j] = 1;
        
                if (j % 3 == 0){
                    matrix[i][j] = Math.round(Math.random() * 6);
                } 
            }
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


function exanakiPopoxutyun() {
    exanak = exanaknerArr[i];
    console.log(exanak);
    i++;

    if (i >= 4) {
        i = 0;
    }
}
setInterval(exanakiPopoxutyun,1000);

setInterval(function () {
    for (var i in grassArr) {
        if(exanak != "dzmer"){
            grassArr[i].bazmanal();
        }
        grassArr[i].guyn();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
    }
    for (var i in hivandutyunArr) {
        hivandutyunArr[i].utel();
        hivandutyunArr[i].bazmanal();
        hivandutyunArr[i].mahanal();
    }
    for (var i in bujichArr) {
        bujichArr[i].bazmanal();
        bujichArr[i].utel();
    }
    for (var i in monsterArr) {
        monsterArr[i].bazmanal();
        monsterArr[i].utel();
    }

    if (debugMatrix() && hivandutyunArr.length == 0) {
        deleteHivandutyun();
    }
    io.sockets.emit('send matrix', matrix);
    /////verjnakan ekran
    var r = xotakerArr.length + gishatichArr.length + hivandutyunArr.length + bujichArr.length + monsterArr.length
    if (r <= 1) {
        io.sockets.emit("game_over");
    }
    //////statistika
    function statistics() {
        global.file = "data.json"
        global.text = "grass count" + grassArr.length + "\ngrassEater count" + xotakerArr.length + "\ngishatich count" + gishatichArr.length + "\nhivandXot count" + hivandutyunArr.length + "\nbujich count" + bujichArr.length + "\nmonster count" + monsterArr.length
            + "\n\ncnvac xot" + cnvacXot + "\ncnvac xotaker" + cnvacXotaker + "\ncnvac gishatich" + cnvacGishatich + "\ncnvac hivandutyun" + cnvacHivandutyun + "\ncnvac bujich" + cnvacBujich + "\ncnvac monster" + cnvacMonster
    }

    statistics();

    fs.writeFileSync(file, text);

    arr[0] = matrix;
    arr[1] = exanak;
    io.sockets.emit("a", arr);

}, 1000)

