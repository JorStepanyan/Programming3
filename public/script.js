var socket = io();
var side = 20;
var matrix = [[]];
function setup() {
    frameRate(10);
    createCanvas(1005, 1005);
    background('#acacac');
}

socket.on('send matrix', function(matrix) {
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) { //grassColorInSpring
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) { //background
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {  //igakan
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.5) { //arakan
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
                fill("#5b62c6");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5.5) { //arakan
                fill("#434996");
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
            else if (matrix[y][x] == 8) { //grassColorInSummer
                fill("#57ce14");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) { //grassColorInAutumn
                fill("#868D2D");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10) { //grassColorInWinter
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }
})



