var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.get("/name", function (req, res) {
    res.send("Hello world name");
});
app.get("/post/:number", function (req, res) {
    var n = req.params.number;
    res.send("<h1>the number is " + n + "</h1>");
});
app.get("/google/:search", function (req, res) {
    var search = req.params.search;
    res.redirect('http://google.com/search?q='+ search );
});

app.get("/google", function (req, res) {
    res.redirect('http://google.com');
});
app.get("/*", function (req, res) {
    res.send("<h1>404 error</h1>");
});


app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

