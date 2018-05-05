var n = 38;
var m = 38;
var side = 20;

var socket = io();
global.matrix = [];
global.garssArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.hivandutyunArr = [];
global.bujichArr = [];

function setup() {
    frameRate(10);
    createCanvas(800, 800);
    background('#acacac');

    for (var i = 0; i < n; i++) {
        global.matrix[i] = [];

        for (var j = 0; j < m; j++) {

            global.matrix[i][j] = 1;

            if (j % 3 == 0) global.matrix[i][j] = Math.round(random(0, 5));
        }
    }

    for (var y = 0; y < global.matrix.length; y++) {
        for (var x = 0; x < global.matrix.length; x++) {
            if (global.matrix[y][x] == 1) {
                global.garssArr.push(new Grass(x, y));
            }
            else if (global.matrix[y][x] == 2) {
                global.xotakerArr.push(new Xotaker(x, y));
            }
            else if (global.matrix[y][x] == 3) {
                global.gishatichArr.push(new Gishatich(x, y));
            }
            else if (global.matrix[y][x] == 4) {
                global.hivandutyunArr.push(new hivandutyun(x, y));
            }
            else if (global.matrix[y][x] == 5) {
                global.bujichArr.push(new bujich(x, y));
            }
        }
    }
}






function draw() {

    for (var y = 0; y < global.matrix.length; y++) {
        for (var x = 0; x < global.matrix[y].length; x++) {

            if (global.matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (global.matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (global.matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (global.matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (global.matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (global.matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

function main() {
    var socket = io.connect('http://localhost:3000');
    //
    //
    //
    //  
    //
}
