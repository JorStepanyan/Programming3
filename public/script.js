var n = 38;
var m = 38;
var side = 20;

var socket = io();
var matrix = [];
var grassArr = []; 
var xotakerArr = [];
var gishatichArr = [];
var hivandutyunArr = [];
var bujichArr = [];

function setup() {
    frameRate(10);
    createCanvas(800, 800);
    background('#acacac');

    for (var i = 0; i < n; i++) {
        matrix[i] = [];

        for (var j = 0; j < m; j++) {

            matrix[i][j] = 1;

            if (j % 3 == 0) matrix[i][j] = Math.round(random(0, 5));
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
            else if ( matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

function main() {
    var socket = io.connect('http://localhost:3000');
}
function handleSumbmit(evt){
    socket.emit("new coordinates", val);
}

socket.on('recieved coordinates', draw);
