var socket = io();
var side = 20;
var matrix = [];
var weather = "garun";
var e = document.getElementById('exanak');



function setup() {
    frameRate(100);
    createCanvas(1005, 1005);
    background('#acacac');
}

socket.on('send matrix', function (matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) { //grassColorInSpring
                fill("#00890A");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) { //background
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {  //igakan
                fill("#FFF700");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.5) { //arakan
                fill("#CDC82C");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) { //igakan
                fill("#FF0000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.5) { //arakan
                fill("#A32323");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) { //igakan
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) { //igakan
                fill("#404544");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) { //igakan
                fill("#3B3938");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6.5) { //arakan
                fill("#77B0A4");
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
                fill("#15E700");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10) { //grassColorInWinter
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }
});


socket.on("game_over", function () {
    document.body.innerHTML = '';
    var image = document.createElement("img");
    image.setAttribute("src", "https://static1.squarespace.com/static/55f74b8ee4b0e9573270c957/t/56162262e4b0e40a96902cc4/1444291173565/logobg_center.png?format=1500w");
    document.body.appendChild(image);
});

socket.on("a", function (data) {
    matrix = data[0];
    exanak = data[1];
    if (document.getElementById('exanak')) {
        document.getElementById('exanak').innerText = exanak;
    }
});


