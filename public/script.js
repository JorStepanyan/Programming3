var n = 50;
var m = 50;
var side = 20;

var matrix = [];
var grassArr = []; 
var xotakerArr = [];
var gishatichArr = [];
var hivandutyunArr = [];
var bujichArr = [];
var monsterArr = [];

function setup() {
    frameRate(10);
    createCanvas(1005, 1005);
    background('#acacac');

    for (var i = 0; i < n; i++) {
        matrix[i] = [];

        for (var j = 0; j < m; j++) {

            matrix[i][j] = 1;

            if (j % 3 == 0) matrix[i][j] = Math.round(random(0, 6));
        }
    }

    for (var y = 0; y <  matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if ( matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if ( matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if ( matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if ( matrix[y][x] == 4) {
                hivandutyunArr.push(new hivandutyun(x, y));
            }
            else if ( matrix[y][x] == 5) {
                bujichArr.push(new bujich(x, y));
            }
            else if ( matrix[y][x] == 6) {
                monsterArr.push(new Monster(x, y));
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if ( matrix[y][x] == 2) {  //igakan
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if ( matrix[y][x] == 2.5) { //arakan
                fill("#C2C811");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) { //igakan
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.5) { //arakan
                fill("#AA1C1C");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) { //igakan
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.5) { //arakan
                fill("#081779");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) { //igakan
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5.5) { //arakan
                fill("#D0CFCE");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) { //igakan
                fill("#3B3938");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6.5) { //arakan
                fill("##252525");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 7) { //virus
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in  grassArr) {
         grassArr[i].bazmanal();
    }
    for (var i in  xotakerArr) {
        xotakerArr[i].bazmanal();
         xotakerArr[i].utel();
    }

    for (var i in  gishatichArr) {
         gishatichArr[i].bazmanal();
         gishatichArr[i].utel();
    }
    for (var i in  hivandutyunArr) {
         hivandutyunArr[i].utel();
         hivandutyunArr[i].bazmanal();
         hivandutyunArr[i].mahanal();
    }
    for (var i in   bujichArr) {
        bujichArr[i].utel();
        bujichArr[i].bazmanal();
        bujichArr[i].mahanal();
    }
     for (var i in   monsterArr) {
         monsterArr[i].utel();
         monsterArr[i].bazmanal();
         monsterArr[i].mahanal();
     }

     if(debugMatrix() && hivandutyunArr.length == 0) {
        deleteHivandutyun(); 
     }
}



function debugMatrix() {
    var count = 0;
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 4 || matrix[y][x] == 4.5) {
                count++;            
            }
        }
    }
    return count;
}

function deleteHivandutyun() {
        for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 4 || matrix[y][x] == 4.5) {
                matrix[y][x] = 0;
            }
        }
    }
}